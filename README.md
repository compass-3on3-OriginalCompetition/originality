# saishonoyatu

[Astro](https://astro.build/) で作る Web サイトです。

## 必要なもの

- Node.js 22.23.4 以上（`.nvmrc` 参照）

## セットアップ

```sh
npm install
cp .env.example .env   # 必要に応じて SITE_URL を設定
npm run dev            # http://localhost:4321
```

## 主なコマンド

| コマンド           | 内容                                           |
| ------------------ | ---------------------------------------------- |
| `npm run dev`      | 開発サーバーを起動                             |
| `npm run build`    | 型チェックして `dist/` に本番ビルド            |
| `npm run preview`  | ビルド結果をローカルで確認                     |
| `npm run verify`   | フォーマット・lint・型チェック・ユニットテスト |
| `npm run test:e2e` | ブラウザでの E2E テスト（Playwright）          |
| `npm run format`   | Prettier で整形                                |
| `npm run lint:fix` | ESLint の自動修正                              |

初回の E2E テスト前に `npx playwright install chromium` でブラウザを入れてください。

## 公開に向けて

1. `astro.config.mjs` の `SITE_URL`（または環境変数）を実際のドメインに変更
2. `src/lib/site.ts` のサイト名・説明文を更新
3. ホスティング先（Cloudflare Pages / Netlify / Vercel / GitHub Pages など）でビルドコマンド `npm run build`、公開ディレクトリ `dist` を設定

## CI

GitHub Actions（`.github/workflows/ci.yml`）で、プッシュ・プルリクエストごとに検証・ビルド・E2E テストを実行します。依存関係の更新は Dependabot が提案します。
