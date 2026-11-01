import { test, expect } from "@playwright/test";

test("a private account syncs reading progress between browser contexts", async ({ browser }) => {
  test.setTimeout(180000);
  const email = process.env.CLOUDNOTES_TEST_EMAIL;
  const password = process.env.CLOUDNOTES_TEST_PASSWORD;
  test.skip(!email || !password, "Requires temporary test credentials for the dedicated study project.");
  const first = await browser.newContext();
  const second = await browser.newContext();
  if (process.env.CLOUDNOTES_BYPASS_COOKIE && process.env.PLAYWRIGHT_BASE_URL) {
    const cookie = { name: "_vercel_jwt", value: process.env.CLOUDNOTES_BYPASS_COOKIE, url: process.env.PLAYWRIGHT_BASE_URL };
    await first.addCookies([cookie]);
    await second.addCookies([cookie]);
  }
  try {
    const a = await first.newPage();
    await a.goto("/account");
    await a.getByLabel("Email").fill(email!);
    await a.getByLabel("Password").fill(password!);
    await a.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(a.getByRole("button", { name: "Sign out" })).toBeVisible({ timeout: 30000 });
    await expect(a.getByText(/New progress will sync|Progress saved to your account/)).toBeVisible();
    await a.goto("/notes/cloud_computing");
    await a.getByRole("button", { name: "Mark complete", exact: true }).first().click();
    await expect(a.getByText("Progress saved to your account.")).toBeVisible();
    await a.goto("/practice/practice-exam-1");
    await a.getByRole("radio").nth(0).check();
    await a.getByRole("button", { name: "Check answer" }).click();
    await a.getByRole("button", { name: "Restart", exact: true }).click();
    await a.getByRole("button", { name: "Restart set" }).click();
    await expect(a.getByText("Progress saved to your account.")).toBeVisible();

    const b = await second.newPage();
    await b.goto("/account");
    await b.getByLabel("Email").fill(email!);
    await b.getByLabel("Password").fill(password!);
    await b.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(b.getByRole("button", { name: "Sign out" })).toBeVisible({ timeout: 30000 });
    await expect(b.getByText("Progress saved to your account.")).toBeVisible();
    await b.goto("/progress");
    await expect(b.getByText(/Restarted after 1 question; 0 correct/)).toBeVisible();
    await b.getByRole("link", { name: "Practice exam 1 · Question 1" }).click();
    await expect(b.getByText("Question 1 of 50")).toBeVisible();
    await a.goto("/practice/practice-exam-1");
    await expect(a.getByText("Progress saved to your account.")).toBeVisible();
    await second.setOffline(true);
    await b.getByRole("radio").nth(0).check();
    await b.getByRole("button", { name: "Check answer" }).click();
    await a.getByRole("radio").nth(3).check();
    await a.getByRole("button", { name: "Check answer" }).click();
    await expect(a.getByText("Progress saved to your account.")).toBeVisible({ timeout: 30000 });
    await second.setOffline(false);
    await expect(b.getByText("Progress saved to your account.")).toBeVisible({ timeout: 30000 });
    await b.goto("/progress");
    await expect(b.getByRole("heading", { name: "Separate attempts from your devices" })).toBeVisible();
    await b.getByRole("button", { name: "Restore attempt" }).click();
    await expect(b.getByText("A concept to revisit.")).toBeVisible();
    await expect(b.getByText("Progress saved to your account.")).toBeVisible({ timeout: 30000 });
    await b.goto("/notes/cloud_computing");
    await expect(b.getByRole("button", { name: "Completed", exact: true })).toBeVisible();
    await expect(b.getByText("Progress saved to your account.")).toBeVisible();
    await second.setOffline(true);
    await b.getByRole("button", { name: "Bookmark", exact: true }).click();
    await expect(b.getByRole("button", { name: "Bookmarked", exact: true })).toBeVisible();
    await a.goto("/notes/iam");
    await a.getByRole("button", { name: "Mark complete", exact: true }).first().click();
    await expect(a.getByText("Progress saved to your account.")).toBeVisible({ timeout: 30000 });
    await second.setOffline(false);
    await expect(b.getByText("Progress saved to your account.")).toBeVisible({ timeout: 30000 });
    await expect(b.getByRole("button", { name: "Bookmarked", exact: true })).toBeVisible();
    await b.goto("/notes/iam");
    await expect(b.getByRole("button", { name: "Completed", exact: true })).toBeVisible();
    const saved = await b.evaluate(() => {
      const key = Object.keys(localStorage).find((item) => item.includes(":account:") && !item.endsWith(":sync"))!;
      return { snapshot: JSON.parse(localStorage.getItem(key)!), version: JSON.parse(localStorage.getItem(`${key}:sync`)!).version, userId: key.split(":account:")[1] };
    });
    saved.snapshot.history[0].correct = 50;
    const origin = new URL(process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000").origin;
    const verified = await b.request.post("/api/study", { headers: { origin, "X-Study-User": saved.userId }, data: saved });
    expect(verified.ok()).toBeTruthy();
    const verifiedData = await verified.json();
    expect(verifiedData.progress.snapshot.history[0].correct).toBe(0);
    saved.snapshot.quizzes["practice-exam-1"].answers["1"] = ["Z"];
    const invalid = await b.request.post("/api/study", { headers: { origin, "X-Study-User": saved.userId }, data: { snapshot: saved.snapshot, version: verifiedData.progress.version } });
    expect(invalid.status()).toBe(400);
    const wrongAccount = await b.request.post("/api/study", { headers: { origin, "X-Study-User": "00000000-0000-4000-8000-000000000000" }, data: { snapshot: saved.snapshot, version: verifiedData.progress.version } });
    expect(wrongAccount.status()).toBe(401);
    await b.goto("/account");
    await b.getByRole("button", { name: "Sign out" }).click();
    await b.goto("/notes/cloud_computing");
    await expect(b.getByRole("button", { name: "Mark complete", exact: true }).first()).toBeVisible();
  } finally {
    await first.close();
    await second.close();
  }
});

test("imports existing guest quiz progress once without removing it", async ({ browser }) => {
  test.setTimeout(120000);
  const email = process.env.CLOUDNOTES_TEST_IMPORT_EMAIL;
  const password = process.env.CLOUDNOTES_TEST_IMPORT_PASSWORD;
  test.skip(!email || !password, "Requires a separate temporary test account.");
  const first = await browser.newContext();
  const second = await browser.newContext();
  if (process.env.CLOUDNOTES_BYPASS_COOKIE && process.env.PLAYWRIGHT_BASE_URL) {
    const cookie = { name: "_vercel_jwt", value: process.env.CLOUDNOTES_BYPASS_COOKIE, url: process.env.PLAYWRIGHT_BASE_URL };
    await first.addCookies([cookie]);
    await second.addCookies([cookie]);
  }
  try {
    const a = await first.newPage();
    await a.goto("/practice/practice-exam-1");
    await a.getByRole("radio").nth(0).check();
    await a.getByRole("button", { name: "Check answer" }).click();
    await a.goto("/account");
    await a.getByLabel("Email").fill(email!);
    await a.getByLabel("Password").fill(password!);
    await a.getByRole("button", { name: "Sign in", exact: true }).click();
    await a.getByRole("button", { name: "Import this browser’s progress" }).click();
    await expect(a.getByText("Progress saved to your account.")).toBeVisible({ timeout: 30000 });
    expect(await a.evaluate(() => JSON.parse(localStorage.getItem("aws-study-desk-v1")!).quizzes["practice-exam-1"].checked)).toEqual(["1"]);
    await a.reload();
    await expect(a.getByRole("button", { name: "Import this browser’s progress" })).toHaveCount(0);
    const b = await second.newPage();
    await b.goto("/account");
    await b.getByLabel("Email").fill(email!);
    await b.getByLabel("Password").fill(password!);
    await b.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(b.getByRole("button", { name: "Sign out" })).toBeVisible({ timeout: 30000 });
    await b.goto("/practice/practice-exam-1");
    await expect(b.getByText("1 of 50 checked")).toBeVisible();
    await expect(b.getByText("A concept to revisit.")).toBeVisible();
  } finally {
    await first.close();
    await second.close();
  }
});
