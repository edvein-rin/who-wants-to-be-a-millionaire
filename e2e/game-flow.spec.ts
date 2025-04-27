import { expect, test } from "@playwright/test";

test("no questions guessed case", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Start" }).click();

  await page.getByText("Green").click();

  await expect(page.getByText("0 earned")).toBeVisible({ timeout: 1000 });
});

test("some questions guessed case", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Start" }).click();

  await page.getByText("Blue").click();
  await page.getByText("Cat").click();

  await expect(page.getByText("500 earned")).toBeVisible({ timeout: 1000 });
});

test("all questions guessed case", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Start" }).click();

  await page.getByText("Blue").click();
  await page.getByText("Dog").click();
  await page.getByRole("paragraph").filter({ hasText: "7" }).click();
  await page.getByText("Mars").click();
  await page.getByText("Portuguese").click();
  await page.getByText("Water").click();
  await page.getByText("Leonardo da Vinci").click();
  await page.getByRole("paragraph").filter({ hasText: "12" }).click();
  await page.getByText("Iron").click();
  await page.getByRole("paragraph").filter({ hasText: "1945" }).click();
  await page.getByText("Albert Einstein").click();
  await page.getByRole("paragraph").filter({ hasText: "101" }).click();

  await expect(page.getByText("1,000,000 earned")).toBeVisible({
    timeout: 1000,
  });
});

test("game restart", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Start" }).click();

  await page.getByText("Green").click();
  await expect(page.getByText("0 earned")).toBeVisible({ timeout: 1000 });

  await page.getByRole("button", { name: "Try again" }).click();
  await expect(page.getByText("Green")).toBeVisible({ timeout: 1000 });
});
