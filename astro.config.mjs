// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 公開時に実際のドメインへ変更してください（sitemap・canonical URL に使用）
const SITE_URL = process.env.SITE_URL ?? 'https://example.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
