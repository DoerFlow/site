# DoerFlow Official Website

DoerFlow 品牌官网，部署域名 **[doerflow.dev](https://doerflow.dev)**。

## 技术栈

- **Next.js 16** + React 19
- Tailwind CSS 4
- 由 [v0.app](https://v0.app) 设计稿迁移

## 本地开发

```bash
pnpm install
pnpm dev    # http://localhost:13010
```

## 仓库关系

| 仓库 | 域名 | 职责 |
|------|------|------|
| **site**（本仓） | doerflow.dev | 品牌官网、产品介绍 |
| docs | doerflow.dev/docs | 技术文档（Rspress） |
| admin | admin.doerflow.dev | 运营管理后台（私有） |
| web | app.doerflow.dev | Creator DApp（私有） |

## 部署

推荐 Vercel 连接 `doerflow/site` 仓库，`main` 分支自动部署至 doerflow.dev。
