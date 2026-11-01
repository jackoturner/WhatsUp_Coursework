import { expect, test } from '@playwright/test';

test('button fetches hello through the API backed by MySQL', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('status')).toBeEmpty();

  const responsePromise = page.waitForResponse('**/api/greetings/hello');
  await page.getByRole('button', { name: 'Fetch hello' }).click();
  const response = await responsePromise;

  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual({ message: 'hello' });
  await expect(page.getByRole('status')).toHaveText('hello');
  await expect(page.getByRole('button', { name: 'Fetch hello' })).toBeEnabled();
});
