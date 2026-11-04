import { expect, test } from '@playwright/test';

test('トップページが表示される', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/saishonoyatu/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('存在しないページは404を返す', async ({ page }) => {
  const res = await page.goto('/does-not-exist');
  expect(res?.status()).toBe(404);
});
