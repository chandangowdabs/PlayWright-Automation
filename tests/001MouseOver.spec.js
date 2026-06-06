import { test, expect } from "playwright/test";

test("MouseOver", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.getByText("Point Me").hover();

  // await expect(page.getByText("Mobiles")).toBeVisible();

  // await expect(page.getByText("Laptops")).toBeVisible();

  await page.waitForTimeout(5000);
});