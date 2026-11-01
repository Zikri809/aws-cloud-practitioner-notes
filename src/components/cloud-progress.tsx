"use client";

import { useEffect, useRef, useState } from "react";
import { browserSupabase } from "@/lib/supabase-browser";
import { mergeStudyProgress } from "@/lib/merge-study-progress";
import { getProgressStorageKey, quizRevision, reloadProgress, selectProgressAccount } from "./progress";

type SyncMeta = { dirty: boolean; version: number | null; generation: number; base: unknown };
const initialMeta: SyncMeta = { dirty: false, version: null, generation: 0, base: null };
const emptyBase = { completed: [], bookmarks: [], lastRead: null, quizzes: {}, scores: {}, history: [], conflicts: [], storageAvailable: true, quizRevision };

export function CloudProgress({ onReady }: { onReady: (ready: boolean) => void }) {
  const client = browserSupabase();
  const [userId, setUserId] = useState<string | null | undefined>(undefined);
  const [status, setStatus] = useState("");
  const [canImport, setCanImport] = useState(false);
  const [separateNotice, setSeparateNotice] = useState(false);
  const currentUser = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    if (!client) { onReady(true); return; }
    let active = true;
    let eventReceived = false;
    const { data } = client.auth.onAuthStateChange((_event, session) => {
      eventReceived = true;
      const nextUser = session?.user.id ?? null;
      if (active && currentUser.current !== nextUser) {
        currentUser.current = nextUser;
        onReady(false);
        setUserId(nextUser);
      }
    });
    void client.auth.getUser().then(({ data }) => {
      if (active && !eventReceived) {
        currentUser.current = data.user?.id ?? null;
        setUserId(currentUser.current);
      }
    });
    return () => { active = false; data.subscription.unsubscribe(); };
  }, [client, onReady]);

  useEffect(() => {
    if (!client || userId === undefined) return;
    selectProgressAccount(userId);
    if (!userId) { onReady(true); return; }
    onReady(false);
    const storageKey = getProgressStorageKey();
    const metaKey = `${storageKey}:sync`;
    let active = true;
    let initialized = false;
    let syncing = false;
    let conflict = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    function readMeta(): SyncMeta {
      try { return { ...initialMeta, ...JSON.parse(localStorage.getItem(metaKey) ?? "{}") }; }
      catch { return { ...initialMeta, dirty: true }; }
    }
    function writeMeta(meta: SyncMeta) { localStorage.setItem(metaKey, JSON.stringify(meta)); }
    function fail() {
      if (!active) return;
      setStatus(navigator.onLine ? "Cloud save failed. Progress stays on this device; it will retry." : "Offline. Progress stays on this device and will sync when connected.");
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => { if (active && navigator.onLine) retry(); }, 10000);
    }
    function schedule() {
      if (!active || !initialized || syncing || conflict) return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => void sync(), 500);
    }
    async function sync() {
      if (!active || !initialized || syncing || conflict) return;
      let meta: SyncMeta;
      let snapshot: unknown;
      try {
        meta = readMeta();
        if (!meta.dirty) { setStatus("Progress saved to your account."); return; }
        snapshot = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
      } catch { fail(); return; }
      syncing = true;
      setStatus("Saving progress to your account…");
      let result: Response;
      try { result = await fetch("/api/study", { method: "POST", headers: { "Content-Type": "application/json", "X-Study-User": userId! }, body: JSON.stringify({ snapshot, version: meta.version }) }); }
      catch { syncing = false; fail(); return; }
      if (!active) return;
      syncing = false;
      if (!result.ok) {
        if (result.status === 409) {
          syncing = true;
          let remoteResponse: Response;
          try { remoteResponse = await fetch("/api/study", { cache: "no-store", headers: { "X-Study-User": userId! } }); }
          catch { syncing = false; fail(); return; }
          if (!active) return;
          syncing = false;
          if (!remoteResponse.ok) { fail(); return; }
          const { progress: remote } = await remoteResponse.json();
          if (!remote) { fail(); return; }
          try {
            const latest = readMeta();
            const local = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
            const merged = mergeStudyProgress(latest.base, local, remote.snapshot);
            if (merged) {
              if (Array.isArray(merged.conflicts) && merged.conflicts.length > (Array.isArray(local.conflicts) ? local.conflicts.length : 0)) setSeparateNotice(true);
              localStorage.setItem(storageKey, JSON.stringify(merged));
              writeMeta({ ...latest, base: remote.snapshot, version: Number(remote.version), dirty: true });
              reloadProgress();
              setStatus("Changes from your devices were combined. Saving progress…");
              schedule();
              return;
            }
          } catch { fail(); return; }
          conflict = true;
          setStatus("Progress changed on another device. Your local progress is preserved; cloud sync is paused.");
        } else if (result.status === 400 || result.status === 413) {
          conflict = true;
          setStatus("Progress could not be validated. Your device copy is preserved; cloud sync is paused.");
        } else if (result.status === 401) {
          conflict = true;
          setStatus("Your session has expired. Sign in again to sync the progress saved on this device.");
        } else fail();
        return;
      }
      try {
        const { progress: data } = await result.json();
        if (!data) throw new Error("Missing saved progress");
        const latest = readMeta();
        const dirty = latest.generation !== meta.generation;
        if (!dirty) { localStorage.setItem(storageKey, JSON.stringify(data.snapshot)); reloadProgress(); }
        writeMeta({ ...latest, base: data.snapshot, version: Number(data.version), dirty });
      } catch { fail(); return; }
      schedule();
    }
    function changed() {
      try {
        const meta = readMeta();
        writeMeta({ ...meta, dirty: true, generation: meta.generation + 1 });
        setStatus("Saving progress to your account…");
        schedule();
      } catch { fail(); }
    }
    async function initialize() {
      setStatus("Loading account progress…");
      const before = readMeta();
      let result: Response;
      try { result = await fetch("/api/study", { cache: "no-store", headers: { "X-Study-User": userId! } }); }
      catch { fail(); onReady(true); return; }
      if (!active) return;
      if (!result.ok) { fail(); onReady(true); return; }
      try {
        const { progress: data } = await result.json();
        const meta = readMeta();
        if (meta.generation !== before.generation || syncing) {
          initialized = true;
          onReady(true);
          schedule();
          return;
        }
        if (data && meta.version !== null && Number(data.version) < meta.version) {
          initialized = true;
          onReady(true);
          schedule();
          return;
        }
        if (data && !meta.dirty) {
          localStorage.setItem(storageKey, JSON.stringify(data.snapshot));
          writeMeta({ ...meta, base: data.snapshot, version: Number(data.version) });
          reloadProgress();
        } else if (!meta.dirty) {
          writeMeta({ ...meta, base: emptyBase, version: null });
        }
        initialized = true;
        onReady(true);
        setCanImport(!data && !meta.dirty && !localStorage.getItem(storageKey) && Boolean(localStorage.getItem("aws-study-desk-v1")));
        if (meta.dirty) schedule();
        else setStatus(data ? "Progress saved to your account." : "Signed in. New progress will sync to your account.");
      } catch { fail(); onReady(true); }
    }
    function retry() { if (!initialized) void initialize(); else schedule(); }
    function visible() { if (document.visibilityState === "visible") { if (initialized && !readMeta().dirty && !syncing) void initialize(); else retry(); } }
    window.addEventListener("study-progress-changed", changed);
    window.addEventListener("online", retry);
    document.addEventListener("visibilitychange", visible);
    void initialize();
    return () => {
      active = false;
      if (timer) clearTimeout(timer);
      window.removeEventListener("study-progress-changed", changed);
      window.removeEventListener("online", retry);
      document.removeEventListener("visibilitychange", visible);
      setStatus("");
      setCanImport(false);
      setSeparateNotice(false);
    };
  }, [client, userId, onReady]);

  function importGuest() {
    try {
      const guest = JSON.parse(localStorage.getItem("aws-study-desk-v1") ?? "{}");
      if (Array.isArray(guest.history)) guest.history = guest.history.map((item: object) => ({ ...item, imported: true }));
      localStorage.setItem(getProgressStorageKey(), JSON.stringify(guest));
      reloadProgress();
      window.dispatchEvent(new Event("study-progress-changed"));
      setCanImport(false);
    } catch { setStatus("Could not import browser progress. Your existing browser data has not been changed."); }
  }
  return userId && status ? <div className="storage-notice"><span role="status">{status}</span>{canImport && <> {" "}<button type="button" className="quiet-link" onClick={importGuest}>Import this browser’s progress</button></>}{separateNotice && <> {" "}A separate attempt was saved. <a href="/progress">Review your attempts</a>.</>}</div> : null;
}
