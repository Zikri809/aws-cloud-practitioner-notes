import { test, expect } from "@playwright/test";
import fs from "node:fs/promises";

test("detailed lessons, reference notes, exam-task path, and new search content are accessible", async ({
  page,
}) => {
  await page.goto("/notes/cloud_computing");
  await expect(page.locator("#exam-task-11-cloud-benefits")).toBeVisible();
  await expect(
    page.getByText("The course uses a coffee shop:", { exact: false }),
  ).toBeVisible();
  await page
    .locator("article")
    .getByRole("link", { name: "reference notes", exact: true })
    .click();
  await expect(page).toHaveURL(/#reference-notes$/);
  await expect(page.locator("#reference-notes")).toBeInViewport();
  await page.goto("/study-guide#detailed-reading-by-exam-task");
  const links = page.locator('article a[href*="#exam-task-"]');
  expect(await links.count()).toBe(19);
  await page
    .getByRole("link", { name: "3.7 AI, ML, and analytics", exact: true })
    .click();
  await expect(
    page.locator("#exam-task-37-ai-ml-and-analytics"),
  ).toBeInViewport();
  await page.getByRole("button", { name: /Search the notes/ }).click();
  await page
    .getByRole("textbox", { name: "Search all study notes" })
    .fill("client-server model");
  await page.locator('.search-result[href="/notes/cloud_computing"]').click();
  await expect(page).toHaveURL(/\/notes\/cloud_computing$/);
  await expect(page.locator("#exam-task-11-cloud-benefits")).toBeVisible();
});

test("overview, reading, bookmarks, and progress persist after reload", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Build your AWS foundations." }),
  ).toBeVisible();
  await expect(page.getByText("1,142")).toBeVisible();
  await page.getByRole("link", { name: "Start reading", exact: true }).click();
  await expect(page).toHaveURL(/\/notes\/cloud_computing/);
  await page.getByRole("button", { name: "Bookmark", exact: true }).click();
  await page
    .getByRole("button", { name: "Mark complete", exact: true })
    .first()
    .click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Bookmarked", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Completed", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Bookmarks", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: /^Cloud computing/ }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Overview", exact: true }).click();
  await expect(page.getByText("1 of 19", { exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});

test("search keyboard shortcut, matching, empty state, and escape", async ({
  page,
}) => {
  await page.goto("/");
  const input = page.getByRole("textbox", { name: "Search all study notes" });
  await page.getByRole("button", { name: /Search the notes/ }).click();
  await expect(input).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.keyboard.press("Control+k");
  await expect(input).toBeFocused();
  await input.fill("CloudTrail");
  await expect(page.locator(".search-result").first()).toBeVisible();
  await input.fill("no-result-xyzq123");
  await expect(
    page.getByText("No notes match", { exact: false }),
  ).toBeVisible();
  await input.fill("EC2 user data");
  await page.locator('.search-result[href="/notes/ec2"]').click();
  await expect(page).toHaveURL(/\/notes\/ec2/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.getByRole("button", { name: /Search the notes/ }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("note filters and bookmark empty state", async ({ page }) => {
  await page.goto("/bookmarks");
  await expect(
    page.getByRole("heading", { name: "A place for your saved chapters." }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Browse study notes" }).click();
  await page
    .getByRole("button", { name: "Security & costs", exact: true })
    .click();
  await expect(page.getByText("4 chapters", { exact: true })).toBeVisible();
  await page
    .getByRole("textbox", { name: "Filter chapter titles" })
    .fill("no-matches");
  await expect(
    page.getByRole("heading", { name: "No chapters match this filter." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.getByText("19 chapters", { exact: true })).toBeVisible();
});

test("single and multiple answers, navigation, persistence and restart", async ({
  page,
}) => {
  await page.goto("/practice/practice-exam-1");
  await expect(
    page.getByRole("button", { name: "Check answer" }),
  ).toBeDisabled();
  await page.getByRole("radio").nth(3).check();
  await page.getByRole("button", { name: "Check answer" }).click();
  await expect(page.getByText("That’s correct.")).toBeVisible();
  await expect(page.getByRole("radio").first()).toBeDisabled();
  await page.getByRole("button", { name: "Question 4", exact: true }).click();
  await page.getByRole("checkbox").nth(1).check();
  await expect(
    page.getByRole("button", { name: "Check answer" }),
  ).toBeDisabled();
  await page.getByRole("checkbox").nth(4).check();
  await page.getByRole("button", { name: "Check answer" }).click();
  await expect(page.getByText("That’s correct.")).toBeVisible();
  await page.reload();
  await expect(page.getByText("2 of 50 checked")).toBeVisible();
  await expect(page.getByRole("checkbox").nth(1)).toBeChecked();
  await page.getByRole("button", { name: "Next question" }).click();
  await expect(page.getByText("Question 5 of 50")).toBeVisible();
  await page.getByRole("button", { name: "Previous", exact: true }).click();
  await expect(page.getByText("Question 4 of 50")).toBeVisible();
  await page.getByRole("button", { name: "Restart", exact: true }).click();
  await page.getByRole("button", { name: "Keep studying" }).click();
  await expect(page.getByText("2 of 50 checked")).toBeVisible();
  await page.getByRole("button", { name: "Restart", exact: true }).click();
  await page.getByRole("button", { name: "Restart set" }).click();
  await expect(page.getByText("0 of 50 checked")).toBeVisible();
  await expect(page.getByText("Question 1 of 50")).toBeVisible();
});

test("finishing a set stores the score, review works, and completed filter shows it", async ({
  page,
}) => {
  const source = await fs.readFile("practice-exam/practice-exam-12.md", "utf8");
  const blocks = source
    .split(/(?=^\d+\.\s)/m)
    .filter((block) => /^\d+\.\s/.test(block));
  const answers = Object.fromEntries(
    blocks.map((block) => [
      block.match(/^(\d+)\./)![1],
      block
        .match(/Correct[ \t]+answer[ \t]*:[ \t]*([^\r\n]*)/i)![1]
        .match(/[A-F]/g),
    ]),
  );
  await page.goto("/");
  await page.evaluate(
    (answers) =>
      localStorage.setItem(
        "aws-study-desk-v1",
        JSON.stringify({
          quizRevision: "2026-10-16-review-1",
          quizzes: {
            "practice-exam-12": {
              answers,
              checked: Object.keys(answers),
              index: 41,
              finished: false,
            },
          },
        }),
      ),
    answers,
  );
  await page.goto("/practice/practice-exam-12");
  await page.getByRole("button", { name: "See results", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Practice set complete." }),
  ).toBeVisible();
  await expect(page.getByText("42 of 42", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Review answers" }).click();
  await expect(page.getByText("Question 1 of 42")).toBeVisible();
  await page.getByRole("link", { name: "All practice exams" }).click();
  await page.getByRole("button", { name: "Completed", exact: true }).click();
  await expect(page.locator(".exam-card")).toHaveCount(1);
  await expect(page.getByText("Last result: 42/42")).toBeVisible();
});

test("content revision resets old quiz attempts and keeps reading progress", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() =>
    localStorage.setItem(
      "aws-study-desk-v1",
      JSON.stringify({
        completed: ["iam"],
        bookmarks: ["iam"],
        lastRead: "iam",
        quizzes: {
          "practice-exam-1": {
            answers: { "1": ["D"] },
            checked: ["1"],
            index: 4,
            finished: false,
          },
        },
        scores: { "practice-exam-1": { correct: 1, total: 50 } },
      }),
    ),
  );
  await page.goto("/notes/iam");
  await expect(
    page.getByRole("button", { name: "Bookmarked", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Completed", exact: true }),
  ).toBeVisible();
  await page.goto("/practice/practice-exam-1");
  await expect(page.getByText("Question 1 of 50")).toBeVisible();
  await expect(page.getByText("0 of 50 checked")).toBeVisible();
  await page.goto("/practice");
  await page.getByRole("button", { name: "Completed", exact: true }).click();
  await expect(page.locator(".exam-card")).toHaveCount(0);
});

test("topic deep links, diagrams, study guide and legacy redirects", async ({
  page,
}) => {
  await page.goto("/topic-map");
  await page
    .locator("summary")
    .filter({ hasText: "Identity & access management" })
    .click();
  await page.getByRole("link", { name: "What Is IAM?", exact: true }).click();
  await expect(page).toHaveURL(/\/notes\/iam#what-is-iam/);
  await page.goto("/notes/ec2_storage");
  await expect(page.locator(".prose img").first()).toBeVisible();
  await page.locator(".prose img").first().scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      page
        .locator(".prose img")
        .first()
        .evaluate((image) => (image as HTMLImageElement).naturalWidth),
    )
    .toBeGreaterThan(0);
  await page.goto("/study-guide");
  await expect(
    page.getByText("Reviewed against the CLF-C02 guide", { exact: false }),
  ).toBeVisible();
  await page.goto("/sections/ec2.html");
  await expect(page).toHaveURL(/\/notes\/ec2/);
  await page.goto("/missing-page");
  await expect(
    page.getByRole("heading", { name: "Let’s get back to your notes." }),
  ).toBeVisible();
});

test("desktop and mobile layouts fit the viewport, mobile menu works", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1050 });
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Build your AWS foundations." }),
  ).toBeVisible();
  await page.screenshot({
    path: "test-results/overview-desktop.png",
    fullPage: true,
  });
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/notes",
      "/notes/ec2",
      "/practice",
      "/practice/practice-exam-1",
      "/topic-map",
    ]) {
      await page.goto(route);
      await expect(page.locator("main h1")).toBeVisible();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow, `${route} at ${width}px`).toBe(false);
    }
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Build your AWS foundations." }),
  ).toBeVisible();
  await page.screenshot({
    path: "test-results/overview-mobile.png",
    fullPage: true,
  });
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  const menu = page.getByRole("dialog", { name: "Navigation menu" });
  await expect(menu).toBeVisible();
  await menu.getByRole("link", { name: "Practice exams 23" }).click();
  await expect(page).toHaveURL(/\/practice$/);
  await expect(menu).not.toBeVisible();
});

test("search failure offers retry and broken browser data does not crash", async ({
  page,
}) => {
  await page.route("**/search-index.json", (route) => route.abort());
  await page.goto("/");
  await page.getByRole("button", { name: /Search the notes/ }).click();
  await expect(
    page.getByText("Search could not load.", { exact: false }),
  ).toBeVisible();
  await page.unroute("**/search-index.json");
  await page.getByRole("button", { name: "Retry search" }).click();
  await expect(page.locator(".search-result").first()).toBeVisible();
  await page.keyboard.press("Escape");
  await page.evaluate(() =>
    localStorage.setItem("aws-study-desk-v1", "bad-json"),
  );
  await page.reload();
  await expect(
    page.getByText("Browser storage is unavailable", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Build your AWS foundations." }),
  ).toBeVisible();
});
