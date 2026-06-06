import { test, expect } from "playwright/test";

test("DragAndDrop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#draggable").dragTo(page.locator("#droppable"));

  await page.waitForTimeout(5000);
});