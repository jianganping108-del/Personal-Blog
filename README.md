# 蒋安平个人作品集

纯前端 Vue 3 + Vite 作品集，可直接部署到 Vercel。项目不依赖 Java、MySQL 或任何后端 API。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 更新项目内容

项目数据位于 `src/data/projects.js`，每个项目包含以下字段：

- `id`：唯一数字编号
- `slug`：详情页 URL 使用的英文标识
- `name`、`summary`、`description`：项目文案
- `techStack`：技术栈数组
- `cover`：位于 `public/projects` 中的图片路径
- `highlights`：关键工作数组

修改数据或图片后提交到 GitHub，Vercel 会自动重新构建并发布。

## Vercel 部署

1. 在 GitHub 创建仓库并推送本项目。
2. 在 Vercel 选择 **Add New Project**，导入对应仓库。
3. Framework Preset 选择 **Vite**。
4. Build Command 使用 `npm run build`，Output Directory 使用 `dist`。
5. 点击 Deploy。仓库后续每次推送都会触发自动部署。

`vercel.json` 已配置 SPA 回退，直接刷新项目详情页不会出现 404。
