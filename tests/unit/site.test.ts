import { describe, expect, it } from 'vitest';
import { SITE, pageTitle } from '@/lib/site';

describe('pageTitle', () => {
  it('タイトル未指定ならサイト名を返す', () => {
    expect(pageTitle()).toBe(SITE.name);
  });

  it('タイトル指定時は「ページ名 | サイト名」を返す', () => {
    expect(pageTitle('お知らせ')).toBe(`お知らせ | ${SITE.name}`);
  });
});
