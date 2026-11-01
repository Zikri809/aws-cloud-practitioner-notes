type Snapshot = Record<string, unknown>;
type MergeResult = { value: unknown; conflict: boolean };

function same(a: unknown, b: unknown) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function mergeValue(base: unknown, local: unknown, remote: unknown): MergeResult {
  if (same(local, remote)) return { value: local, conflict: false };
  if (same(local, base)) return { value: remote, conflict: false };
  if (same(remote, base)) return { value: local, conflict: false };
  return { value: undefined, conflict: true };
}

function isRecord(value: unknown): value is Snapshot {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function mergeRecords(base: Snapshot, local: Snapshot, remote: Snapshot): MergeResult {
  const merged: Snapshot = Object.create(null);
  for (const key of new Set([...Object.keys(base), ...Object.keys(local), ...Object.keys(remote)])) {
    const result = mergeValue(base[key], local[key], remote[key]);
    if (result.conflict) return result;
    if (result.value !== undefined) merged[key] = result.value;
  }
  return { value: merged, conflict: false };
}

function mergeSet(base: unknown[], local: unknown[], remote: unknown[]): MergeResult {
  if (![...base, ...local, ...remote].every((value) => typeof value === "string")) {
    return { value: undefined, conflict: true };
  }
  const all = new Set([...base, ...remote, ...local]);
  return { value: [...all].filter((item) => {
    const b = base.includes(item), l = local.includes(item), r = remote.includes(item);
    return l === b ? r : l;
  }), conflict: false };
}

function indexHistory(history: unknown): Snapshot | null {
  if (!Array.isArray(history)) return null;
  const result: Snapshot = Object.create(null);
  for (const entry of history) {
    if (!isRecord(entry) || typeof entry.id !== "string" || Object.hasOwn(result, entry.id)) return null;
    result[entry.id] = entry;
  }
  return result;
}

export function mergeStudyProgress(base: unknown, local: unknown, remote: unknown): Snapshot | null {
  if (!isRecord(base) || !isRecord(local) || !isRecord(remote)) return null;
  if (!same(base.quizRevision, local.quizRevision) || !same(base.quizRevision, remote.quizRevision)) return null;
  const merged: Snapshot = Object.create(null);
  const preserved: Snapshot[] = [];
  for (const key of new Set([...Object.keys(base), ...Object.keys(local), ...Object.keys(remote)])) {
    let result: MergeResult;
    if ((key === "completed" || key === "bookmarks") && Array.isArray(base[key]) && Array.isArray(local[key]) && Array.isArray(remote[key])) {
      result = mergeSet(base[key], local[key], remote[key]);
    } else if (key === "quizzes" && isRecord(base[key]) && isRecord(local[key]) && isRecord(remote[key])) {
      const b = base[key], l = local[key], r = remote[key];
      const quizzes: Snapshot = Object.create(null);
      for (const slug of new Set([...Object.keys(b), ...Object.keys(l), ...Object.keys(r)])) {
        const item = mergeValue(b[slug], l[slug], r[slug]);
        if (item.conflict) {
          if (!isRecord(l[slug]) || !isRecord(r[slug])) return null;
          quizzes[slug] = r[slug];
          preserved.push({ id: crypto.randomUUID(), examSlug: slug, revision: local.quizRevision, savedAt: new Date().toISOString(), quiz: l[slug] });
        } else if (item.value !== undefined) quizzes[slug] = item.value;
      }
      result = { value: quizzes, conflict: false };
    } else if (key === "scores" && isRecord(base[key]) && isRecord(local[key]) && isRecord(remote[key])) {
      const b = base[key], l = local[key], r = remote[key];
      const scores: Snapshot = Object.create(null);
      for (const slug of new Set([...Object.keys(b), ...Object.keys(l), ...Object.keys(r)])) {
        const item = mergeValue(b[slug], l[slug], r[slug]);
        if (item.conflict) { if (r[slug] !== undefined) scores[slug] = r[slug]; }
        else if (item.value !== undefined) scores[slug] = item.value;
      }
      result = { value: scores, conflict: false };
    } else if (key === "history") {
      const b = indexHistory(base[key]), l = indexHistory(local[key]), r = indexHistory(remote[key]);
      if (!b || !l || !r) return null;
      const entries: unknown[] = [];
      for (const id of new Set([...Object.keys(b), ...Object.keys(l), ...Object.keys(r)])) {
        const item = mergeValue(b[id], l[id], r[id]);
        if (item.conflict) {
          if (!isRecord(l[id]) || !isRecord(r[id])) return null;
          entries.push(r[id], { ...l[id], id: crypto.randomUUID(), conflictCopy: true });
        } else if (item.value !== undefined) entries.push(item.value);
      }
      result = { value: entries, conflict: false };
    } else if (key === "conflicts") {
      const b = indexHistory(base[key] ?? []), l = indexHistory(local[key] ?? []), r = indexHistory(remote[key] ?? []);
      if (!b || !l || !r) return null;
      result = mergeRecords(b, l, r);
      if (!result.conflict && isRecord(result.value)) result.value = Object.values(result.value);
    } else if (key === "lastRead") {
      result = { value: same(local[key], base[key]) ? remote[key] : local[key], conflict: false };
    } else {
      result = mergeValue(base[key], local[key], remote[key]);
    }
    if (result.conflict) return null;
    if (result.value !== undefined) merged[key] = result.value;
  }
  if (preserved.length) merged.conflicts = [...(Array.isArray(merged.conflicts) ? merged.conflicts : []), ...preserved];
  return merged;
}
