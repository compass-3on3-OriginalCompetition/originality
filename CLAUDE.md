# CLAUDE.md

将来公開する Web サイト。Astro（静的サイト生成）+ TypeScript（strictest）。

## コマンド

- `npm run dev` — 開発サーバー（http://localhost:4321）
- `npm run build` — 型チェック + 本番ビルド（`dist/`）
- `npm run verify` — format チェック・lint・型チェック・ユニットテストをまとめて実行。**変更後は必ず実行する**
- `npm run test:e2e` — Playwright の E2E テスト（ビルドしてプレビューサーバーに対して実行）
- `npm run format` / `npm run lint:fix` — 自動修正

## 構成

- `src/pages/` — ファイルベースのルーティング。1ファイル = 1ページ
- `src/layouts/BaseLayout.astro` — 共通の `<head>`（title・description・OGP・canonical）とヘッダー/フッター。新しいページは必ずこれを使う
- `src/components/` — 再利用する UI 部品
- `src/lib/site.ts` — サイト名などの共通設定
- `src/styles/global.css` — CSS 変数（ライト/ダーク両対応）と基本スタイル
- `public/` — そのまま配信される静的ファイル
- `tests/unit/` — Vitest、`tests/e2e/` — Playwright

## 規約

- import は `@/` エイリアス（= `src/`）を使う
- 色は `global.css` の CSS 変数を使い、直書きしない
- 画面は日本語。`lang="ja"`
- スマホ幅（375px）でも崩れないこと
- 公開 URL は環境変数 `SITE_URL`（`astro.config.mjs`）で設定する

## 注意

- Astro 7 の `astro preview` は既存サーバーがあるとロックで起動をスキップする。E2E では `--ignore-lock` を付けている。止めるときは `npx astro preview stop`

## セキュリティ

- 依存関係を追加・更新したら `npm audit` で脆弱性 0 件を確認する（CI でも moderate 以上で失敗する）
- 修正版がない推移的依存は `package.json` の `overrides` で修正版に固定する（現在: `minimatch`）。上流が対応したら外す
- セキュリティヘッダーは `public/_headers`。外部の画像・スクリプト・フォント等を使うときは CSP に許可ドメインを追加する
- 秘密情報は `.env` に置き、コミットしない
