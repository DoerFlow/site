# DoerFlow Official Website

DoerFlow 品牌官网，部署域名 **[doerflow.dev](https://doerflow.dev)**。

## 技术栈

- **Next.js 16**（`output: "export"` 静态导出，SSG）
- React 19 + Tailwind CSS 4
- 9 语言静态页面（`/` 英文，`/zh-CN/` 等）

## 本地开发

```bash
pnpm install
pnpm dev    # http://localhost:13010
pnpm build  # 输出到 out/
```

## 仓库关系

| 仓库 | 域名 | 职责 |
|------|------|------|
| **site**（本仓） | doerflow.dev | 品牌官网、产品介绍 |
| docs | docs.doerflow.dev | 技术文档（Rspress · GitHub Pages） |
| admin | admin.doerflow.dev | 运营管理后台（私有） |
| web | app.doerflow.dev | Creator DApp（私有） |

## 部署（Cloudflare Pages）

`main` 分支 push 后由 `.github/workflows/deploy.yml` 自动构建并发布。

### 一次性配置

1. 在 [Cloudflare Pages](https://dash.cloudflare.com/) 创建项目 `doerflow-site`（或通过首次 `wrangler pages deploy` 自动创建）
2. 在 GitHub 仓库 `doerflow/site` → Settings → Secrets 添加：
   - `CLOUDFLARE_API_TOKEN` — Pages Edit 权限
   - `CLOUDFLARE_ACCOUNT_ID` — Cloudflare 账户 ID
3. 在 Cloudflare DNS 将 `doerflow.dev` 绑定到 Pages 项目（Custom domains）
4. 构建产物目录：`out`（Next.js 静态导出）

### SEO

- 各语言独立 URL + `generateMetadata` + `hreflang`
- `app/sitemap.ts`、`app/robots.ts` 随构建生成
