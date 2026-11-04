export const SITE = {
  name: 'saishonoyatu',
  description: 'saishonoyatu の公式サイト',
  lang: 'ja',
} as const;

/** ページタイトルを「ページ名 | サイト名」の形式で返す */
export function pageTitle(title?: string): string {
  return title ? `${title} | ${SITE.name}` : SITE.name;
}
