import { test, expect } from "playwright/test";

test("NewTab", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    page.getByText("New Tab").click(),
  ]);

  await newPage.waitForLoadState();

  console.log(await newPage.title());

  await expect(newPage).toHaveURL("https://www.pavantestingtools.com/");

  

  await page.waitForTimeout(5000);
});
