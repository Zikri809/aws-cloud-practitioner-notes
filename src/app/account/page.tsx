"use client";

import { useEffect, useState, useSyncExternalStore, type FormEvent } from "react";
import { browserSupabase } from "@/lib/supabase-browser";

const subscribeHydration = () => () => {};

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [recovery, setRecovery] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const hydrated = useSyncExternalStore(subscribeHydration, () => true, () => false);
  const client = browserSupabase();

  useEffect(() => {
    if (!client) return;
    let active = true;
    void client.auth.getUser().then(({ data }) => {
      if (active) setSignedIn(Boolean(data.user));
    });
    const { data } = client.auth.onAuthStateChange((event, session) => {
      setSignedIn(Boolean(session));
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
    });
    return () => { active = false; data.subscription.unsubscribe(); };
  }, [client]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!client) return;
    setBusy(true); setMessage("");
    const { error } = await client.auth.signInWithPassword({ email, password });
    setPassword("");
    setMessage(error ? "Unable to sign in. Check your email and password." : "Signed in.");
    setBusy(false);
  }

  async function resetPassword() {
    if (!client || !email) { setMessage("Enter your account email first."); return; }
    setBusy(true);
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/account` });
    setMessage(error ? "Could not send the reset link. Please try again." : "If this is the account email, check your inbox for a reset link.");
    setBusy(false);
  }

  async function updatePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!client) return;
    setBusy(true);
    const { error } = await client.auth.updateUser({ password });
    setPassword("");
    if (!error) setRecovery(false);
    setMessage(error ? "Could not update your password. Please request a new link." : "Your password has been updated.");
    setBusy(false);
  }

  return <div className="page account-page">
    <div className="page-heading"><div><div className="page-kicker"><span className="orange-line" />Personal account</div><h1>Your study account</h1><p>Sign in to your private study account.</p></div></div>
    {!client ? <p>Account access has not been configured for this deployment.</p> : recovery ?
      <form className="account-form" onSubmit={updatePassword}>
        <label htmlFor="new-password">New password</label><input id="new-password" type="password" value={password} minLength={8} required autoComplete="new-password" disabled={!hydrated || busy} onChange={(event) => setPassword(event.target.value)} />
        <button className="button primary" disabled={!hydrated || busy}>Update password</button>
      </form> : signedIn ? <div className="account-form"><p>You are signed in.</p><button className="button secondary" disabled={busy} onClick={async () => { setBusy(true); const { error } = await client.auth.signOut(); setMessage(error ? "Could not sign out. Please try again." : "Signed out."); setBusy(false); }}>Sign out</button></div> :
      <form className="account-form" onSubmit={signIn}>
        <label htmlFor="account-email">Email</label><input id="account-email" type="email" value={email} required autoComplete="email" disabled={!hydrated || busy} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="account-password">Password</label><input id="account-password" type="password" value={password} required autoComplete="current-password" disabled={!hydrated || busy} onChange={(event) => setPassword(event.target.value)} />
        <button className="button primary" disabled={!hydrated || busy}>Sign in</button>
        <button type="button" className="quiet-link" disabled={!hydrated || busy} onClick={resetPassword}>Set or reset password</button>
      </form>}
    {message && <p role="status">{message}</p>}
  </div>;
}
