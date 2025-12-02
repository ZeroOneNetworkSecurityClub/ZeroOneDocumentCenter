# 零壹文档中心

一个基于 VitePress 构建的现代化静态 Markdown 文档网站，具有精美的主题、强大的搜索功能和无缝的部署流程。

## 功能特性

### 📚 文档功能
- **现代化静态网站**: 从 Markdown 生成的快速、SEO 友好的静态网站
- **Markdown 增强**: 扩展的 Markdown 语法，包含增强功能
- **代码块**: 支持多种语言的语法高亮
- **响应式设计**: 在所有设备上提供最佳的浏览体验
- **精美的 UI**: 简洁、现代的界面，支持自定义主题

### 🔍 搜索与导航
- **全文搜索**: 跨所有文档页面的即时搜索
- **侧边栏导航**: 分层侧边栏，方便导航
- **目录**: 自动为每个页面生成目录
- **面包屑导航**: 轻松在嵌套页面之间导航

### 🎨 自定义
- **主题定制**: 可自定义颜色、字体和布局
- **组件系统**: 可复用的 Vue 组件
- **Markdown 扩展**: 自定义 Markdown 插件和语法

### 🚀 部署与 CI/CD
- **GitHub Actions 集成**: 推送时自动部署
- **快速构建**: 使用 Vite 优化的构建过程
- **轻松预览**: 用于开发的本地预览服务器

### 💡 开发者体验
- **热重载**: 开发过程中即时更新
- **TypeScript 支持**: 类型安全的配置和主题开发
- **可扩展架构**: 易于通过插件扩展
- **完善的文档**: 全面的 API 文档

### 📱 可访问性
- **WCAG 合规**: 为所有用户设计的可访问性
- **键盘导航**: 完整的键盘支持
- **屏幕阅读器友好**: 优化的屏幕阅读器体验

## 安装与使用

### 1. 前置要求
- Node.js 16+ 和 npm

### 2. 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/ZeroOneDocumentCenter.git
cd ZeroOneDocumentCenter

# 安装依赖
npm install
```

### 3. 开发

```bash
# 启动开发服务器
npm run docs:dev
```

这将启动带有热重载的本地开发服务器，地址为 `http://localhost:5173`。

### 4. 构建

```bash
# 构建静态网站
npm run docs:build
```

构建后的文件将位于 `docs/.vitepress/dist` 目录中。

### 5. 预览

```bash
# 预览构建后的网站
npm run docs:preview
```

这将启动一个本地服务器，用于预览构建后的网站，地址为 `http://localhost:4173`。

## 项目结构

```
├── .github/
│   └── workflow/
│       └── deploy.yml        # GitHub Actions 部署工作流
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts        # VitePress 配置
│   │   └── theme/            # 自定义主题
│   │       ├── index.ts      # 主题入口
│   │       └── style.css     # 主题样式
│   ├── index.md              # 首页
│   ├── api-examples.md       # API 示例页面
│   └── markdown-examples.md  # Markdown 示例页面
├── package.json              # 依赖和脚本
└── README.md                 # 本文档
```

## 配置

### VitePress 配置

主要配置位于 `docs/.vitepress/config.mts`。关键配置包括：

- 网站标题和描述
- 主题配置
- 导航菜单设置
- 搜索配置
- Markdown 扩展

### 主题定制

自定义主题文件位于 `docs/.vitepress/theme/`：

- **index.ts**: 主题入口点，扩展 VitePress 默认主题
- **style.css**: 自定义 CSS 样式

## 编写文档

### 基本 Markdown 语法

使用标准 Markdown 语法编写文档。VitePress 提供了额外的增强功能，例如：

```markdown
# 一级标题

## 二级标题

### 三级标题

包含 **粗体** 和 *斜体* 文本的段落。

```javascript
// 带有语法高亮的代码块
console.log('Hello, VitePress!');
```

### 前置元数据

每个页面可以包含用于元数据的 YAML 前置元数据：

```yaml
---
title: "页面标题"
description: "页面描述"
---
```

### 组件

VitePress 支持在 Markdown 文件中使用 Vue 组件：

```markdown
<CustomComponent prop="value" />
```

### 导航

导航在 `config.mts` 中配置：

- **侧边栏**: 每个部分的分层导航
- **顶部栏**: 全局导航链接
- **面包屑**: 自动生成的面包屑导航

## 部署

### GitHub Actions

项目使用 GitHub Actions 进行自动部署。工作流定义在 `.github/workflow/deploy.yml` 中：

1. **触发条件**: 推送到 main 分支时运行
2. **步骤**:
   - 检出代码
   - 设置 Node.js
   - 安装依赖
   - 构建网站
   - 部署到 GitHub Pages

### 手动部署

```bash
# 构建网站
npm run docs:build

# 将 dist 目录部署到您的托管服务
# GitHub Pages 示例
npx gh-pages -d docs/.vitepress/dist
```

## 开发指南

### 添加新页面

1. 在 `docs/` 目录中 **创建新的 Markdown 文件**
2. 添加带有标题和描述的 **前置元数据**
3. 根据需要在 `config.mts` 中 **更新导航**
4. 使用 `npm run docs:dev` **本地测试**
5. **提交并推送** 以触发部署

### 自定义组件

1. 在 `docs/.vitepress/theme/components/` 中创建 Vue 组件
2. 在 `index.ts` 中注册组件
3. 在 Markdown 文件中使用该组件

### 样式定制

1. 向 `docs/.vitepress/theme/style.css` 添加自定义样式
2. 使用 CSS 变量实现一致的主题
3. 本地测试更改

### 性能优化

- 优化网络图像
- 对大图像使用懒加载
- 保持页面内容聚焦
- 对组件使用代码分割

## 贡献指南

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/your-feature`)
3. 进行更改
4. 本地测试 (`npm run docs:dev`)
5. 提交更改 (`git commit -am 'Add some feature'`)
6. 推送到分支 (`git push origin feature/your-feature`)
7. 创建新的 Pull Request

### 代码风格

- 遵循 VitePress 和 Vue 最佳实践
- 配置文件使用 TypeScript
- 保持 Markdown 文件整洁且结构良好
- 为所有页面添加适当的前置元数据

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动浏览器 (iOS Safari, Chrome for Android)

## 技术架构

### 技术栈概览

| 组件 | 技术 | 用途 |
|------|------|------|
| 框架 | VitePress 2.0 | Markdown 文档的静态网站生成器 |
| 语言 | TypeScript | 配置和主题开发 |
| 构建工具 | Vite | 快速构建和开发服务器 |
| 样式 | CSS/SCSS | 主题定制 |
| 部署 | GitHub Actions | 自动部署到 GitHub Pages |
| 搜索 | VitePress 内置 | 全文搜索功能 |

### 核心特性

#### VitePress 核心特性
- **Markdown 增强**: 支持 Vue 组件的扩展 Markdown 语法
- **自动生成侧边栏**: 可配置的侧边栏导航
- **内置搜索**: 跨所有页面的全文搜索
- **响应式设计**: 移动友好的布局
- **深色模式**: 可切换浅色和深色主题
- **代码高亮**: 支持 100+ 种语言的语法高亮
- **数学支持**: 内置数学公式支持
- **图表支持**: Mermaid 图表和其他图表格式

#### 自定义增强
- **自定义主题**: 扩展 VitePress 默认主题，添加自定义样式
- **GitHub Actions 集成**: 自动部署工作流
- **TypeScript 配置**: 类型安全的配置文件

## 浏览器支持

VitePress 2.0 支持所有现代浏览器：

| 浏览器 | 版本 |
|--------|------|
| Chrome | 最新版 |
| Firefox | 最新版 |
| Safari | 最新版 |
| Edge | 最新版 |

## 性能特性

- **静态网站生成**: 预渲染的 HTML，加载速度快
- **优化的资源**: 压缩和优化的 CSS/JS
- **懒加载**: 按需加载图像和组件
- **代码分割**: 将 JavaScript 拆分为更小的块
- **CDN 优化**: 从优化的 CDN 提供资源
- **缓存友好**: 为静态资源设置适当的缓存头

## 安全特性

- **XSS 防护**: HTML 内容自动转义
- **内容安全策略 (CSP)**: 可配置的 CSP 头
- **HTTPS 支持**: 部署时自动 HTTPS 重定向
- **依赖管理**: 通过 GitHub Actions 定期更新依赖
- **安全头**: 部署配置中的适当安全头

## 迁移指南

### 从旧版本迁移

该项目已从基于 PHP 的文档管理系统迁移到 VitePress 静态网站。主要变化：

1. **技术栈**: PHP → VitePress + TypeScript
2. **部署**: 手动 → GitHub Actions
3. **内容存储**: LocalStorage → 静态 Markdown 文件
4. **编辑**: Web 编辑器 → 本地 Markdown 文件
5. **功能**: 移除动态功能，添加静态网站优化

## 贡献

欢迎贡献！请遵循以下指南：

### 问题

- 使用 GitHub Issues 报告 bug 或提出功能建议
- 为 bug 提供清晰的复现步骤
- 适当时包含截图

### Pull Requests

1. Fork 仓库
2. 创建功能分支
3. 进行更改
4. 使用 `npm run docs:dev` 本地测试
5. 提交 pull request

### 代码规范

- 遵循 VitePress 和 Vue 最佳实践
- 配置和主题代码使用 TypeScript
- 保持 Markdown 文件整洁且结构良好
- 使用一致的代码风格
- 添加适当的注释

## 许可证

MIT 许可证 - 详见 LICENSE 文件

## 变更日志

### 版本 2.0.0 (主要更新)
- ✅ 迁移到 VitePress 2.0
- ✅ 添加 GitHub Actions 部署
- ✅ 实现自定义主题
- ✅ 添加 TypeScript 支持
- ✅ 增强 Markdown 功能
- ✅ 改进性能和 SEO
- ✅ 添加全面的文档

## 支持

有关问题和疑问：

1. 首先查看文档
2. 搜索现有的 GitHub Issues
3. 如有需要，创建新的 Issue

---

**Build with ❤️ by ZeroOne Team**