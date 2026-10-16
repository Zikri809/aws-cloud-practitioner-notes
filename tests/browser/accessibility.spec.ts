import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("main study screens have no serious accessibility violations", async ({
  page,
}) => {
  for (const route of [
    "/",
    "/notes",
    "/notes/iam",
    "/practice",
    "/practice/practice-exam-1",
    "/study-guide",
    "/topic-map",
    "/about",
  ]) {
    await page.goto(route);
    await expect(page.locator("main h1")).toBeVisible();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((violation) => ({
        id: violation.id,
        nodes: violation.nodes.map((node) => node.target),
      })),
      route,
    ).toEqual([]);
  }
});

test("keyboard focus, mobile contents, same-page menu link, and narrow reflow", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page
    .getByRole("dialog", { name: "Navigation menu" })
    .getByRole("link", { name: "Overview", exact: true })
    .click();
  await expect(
    page.getByRole("dialog", { name: "Navigation menu" }),
  ).not.toBeVisible();
  await page.goto("/notes/ec2");
  await page.locator(".mobile-contents summary").click();
  await page
    .locator(".mobile-contents")
    .getByRole("link", { name: "EC2 User Data", exact: true })
    .click();
  await expect(page).toHaveURL(/#ec2-user-data$/);
  await page.setViewportSize({ width: 640, height: 812 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    ),
  ).toBe(false);
  await page.screenshot({ path: "test-results/reader-mobile.png" });
});
