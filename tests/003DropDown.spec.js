import { test, expect } from "playwright/test";

test("DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#country").selectOption("India");

  await expect(page.locator("#country")).toHaveValue("india");

  await page.waitForTimeout(5000);
});