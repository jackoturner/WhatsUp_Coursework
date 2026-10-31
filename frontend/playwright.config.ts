import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.APP_URL ?? 'http://127.0.0.1:3000',
    browserName: 'chromium',
    channel: 'chromium',
  },
});
