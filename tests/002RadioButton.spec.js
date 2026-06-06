import { test, expect } from "playwright/test";

test("RadioButton", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#male").check();

  await expect(page.locator("#male")).toBeChecked();

  await page.waitForTimeout(5000);
});