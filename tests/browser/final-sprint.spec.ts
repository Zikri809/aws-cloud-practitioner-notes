import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("sprint navigation, evidence links and keyboard answer reveals work", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Final sprint", exact: true }).click();
  await expect(page).toHaveURL(/\/final-sprint$/);
  await expect(
    page.getByRole("heading", { name: "Your final sprint", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Recall drills", exact: true }).click();
  const answer = page.locator("article details").first();
  await expect(answer).not.toHaveAttribute("open", "");
  await answer.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(answer).toHaveAttribute("open", "");
  await expect(answer).toContainText("customer patches the EC2 guest OS");
  await page.getByRole("link", { name: "Your evidence", exact: true }).click();
  await page.getByRole("link", { name: "Exam Q63", exact: true }).click();
  await expect(page).toHaveURL(/official-practice-exam#question-63$/);
  await expect(page.locator("#question-63")).toBeInViewport();
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
});

test("sprint materials remain accessible and reflow on a phone", async ({
  page,
}) => {
  for (const route of [
    "/final-sprint",
    "/final-sprint/comparisons",
    "/final-sprint/drills",
    "/final-sprint/evidence",
  ]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((item) => ({
        id: item.id,
        nodes: item.nodes.map((node) => node.target),
      })),
      route,
    ).toEqual([]);
    await page.setViewportSize({ width: 375, height: 812 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      ),
      route,
    ).toBe(false);
  }
  await page.goto("/final-sprint");
  await page.locator(".mobile-contents summary").click();
  await page
    .locator(".mobile-contents")
    .getByRole("link", { name: "Your priorities", exact: true })
    .click();
  await expect(page.locator("#your-priorities")).toBeInViewport();
  await page.screenshot({ path: "test-results/final-sprint-mobile.png" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/final-sprint/comparisons");
  await page.screenshot({ path: "test-results/final-sprint-desktop.png" });
});
