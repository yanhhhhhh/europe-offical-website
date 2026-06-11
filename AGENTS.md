# ARKVOLT Europe 官网 - 项目架构文档

## 项目概述

ARKVOLT Europe 官网是一个展示海辰储能产品（ARKVOLT 系列）的多语言企业网站，支持英文、德文、荷兰文、瑞典文、波兰文、西班牙文、法文、匈牙利文和意大利文等多种语言。

## 技术栈

### 核心框架

- **Next.js** 16.2.7 - React框架，提供服务端渲染、静态生成、API路由等功能
- **React** 19.2.4 - UI库，使用最新的React 19特性
- **TypeScript** 5+ - 类型安全的JavaScript超集
- **Tailwind CSS** 4 + PostCSS 插件 - Utility-first CSS框架

### 国际化

- **next-intl** 4.13.0 - Next.js国际化解决方案，支持路由级别的语言切换

### 开发工具

- **ESLint** 9 + next/eslint-config - 代码质量检查

## 项目结构

src/
├── app/ # Next.js应用目录
│ ├── layout.tsx # 根布局（全局元数据、HTML结构）
│ ├── page.tsx # 根页面（重定向到默认语言）
│ ├── globals.css # 全局样式
│ └── [locale]/ # 动态路由：语言参数
│ ├── layout.tsx # 语言级别布局（Header、Footer、国际化包装）
│ ├── page.tsx # 首页
│ └── product/ # 产品详情页面
│ └── [slug]/
│ └── page.tsx # 产品页面
├── components/ # 可复用React组件
│ ├── layout/ # 布局组件
│ │ ├── Header.tsx # 导航栏
│ │ └── Footer.tsx # 页脚
│ ├── i18n/ # 国际化相关组件
│ │ ├── LanguageSwitcher.tsx # 语言切换器
│ │ └── LocalizedText.tsx # 本地化文本组件
│ └── ...其他可复用组件
├── constants/ # 常量和配置
│ ├── navigation.ts # 导航结构、路由配置
│ ├── products.ts # 产品数据、资源（图片等）
│ └── product/ # 按页面划分的常量
│ └── [page-name].ts # 特定页面常量
├── i18n/ # 国际化配置
│ ├── routing.ts # next-intl路由配置
│ ├── request.ts # 国际化请求处理
│ └── navigation.ts # 导航翻译键管理
├── lib/ # 工具函数和通用库
│ └── ...工具函数
├── proxy.ts # API代理配置
└── assets/ # 静态资源
└── images/ # 按页面编号组织的图片

messages/ # 国际化翻译文件
├── en.json # 英文翻译（按页面分层）
├── de.json # 德文翻译
├── nl.json # 荷兰文翻译
├── sv.json # 瑞典文翻译
├── pl.json # 波兰文翻译
├── es.json # 西班牙文翻译
├── fr.json # 法文翻译
├── hu.json # 匈牙利文翻译
└── it.json # 意大利文翻译

## 页面导航结构

### 导航菜单

```
首页 (Home)
├── 产品 (Products)
│   ├── 八度堆叠 (ARKVOLT F8S)
│   ├── 16度堆叠 (ARKVOLT L16S)
│   ├── 16度电一体 (ARKVOLT L16)
│   └── AC30 (ARKVOLT R30/AIO30)
├── 关于我们 (About)
│   └── 联系我们 (Contact)
│   └── 公司介绍
└── 服务 (Service)
    └── 手册下载 (Downloads)
```

## 国际化策略

### 消息文件结构（messages/\*.json）

采用**两层级最多**的结构，按页面分类：

```json
{
  "common": {
    "language": "Language",
    "home": "Home",
    ...
  },
  "navigation": {
    "home": "Home",
    "products": "Products",
    "about": "About Us",
    "service": "Service"
  },
  "home": {
    "hero": {
      "title": "...",
      "subtitle": "..."
    },
    "solutions": {
      "title": "...",
      "items": [...]
    },
    "products": {
      "title": "...",
      "summary": {...}
    }
  },
  "product": {
    "l16s": {
      "title": "...",
      "specs": {...}
    },
    "f8s": {...},
    "l16": {...},
    "r30": {...}
  },
  "about": {
    "title": "...",
    "content": "..."
  },
  "service": {
    "title": "...",
    "downloads": {...}
  },
  "contact": {
    "title": "...",
    "form": {...}
  }
}
```

## 组件架构

### 布局组件（Layout）

- **Header** - 响应式导航栏，包含Logo、导航菜单、语言切换器
- **Footer** - 页脚，包含公司信息、快速链接、联系方式

### 国际化路由

使用 `next-intl` 库管理：

- 默认语言不需要前缀（`localePrefix: 'as-needed'`）
- 其他语言显示前缀：`/de`, `/fr`, `/nl` 等

## 样式和主题

### Tailwind CSS

- 使用 Tailwind CSS 4.0 + PostCSS 插件
- 通过 `globals.css` 定义全局样式和主题变量
- 支持响应式设计：默认移动端优先，PC端用lg（1024作为断点) `:`
- 移动端750的设计稿，对应的大小需要除以2

### CSS 变量（推荐）

在 `globals.css` 中定义品牌色、间距、字体等：

```css
@theme {
  --color-brand-primary: #...; /* 品牌主色 */
  --color-brand-secondary: #...; /* 品牌副色 */
  --spacing-unit: 0.25rem;
}
```

## 性能优化

### 图片优化

- 使用 Next.js `Image` 组件自动优化
- WebP 格式支持
- 响应式图片：`sizes` 属性适配不同屏幕

### 代码分割

- 使用 `dynamic()` 动态导入重型组件
- 服务端组件减少 JavaScript 包体积

### 缓存策略

- 静态生成（SSG）用于不经常变化的内容
- ISR（增量静态再生成）用于需要定期更新的内容

## 环境配置

### 必要文件

- `.env.local` - 本地环境变量（未提交到Git）
- `next.config.ts` - Next.js 配置
- `tailwind.config.ts` - Tailwind 配置
- `tsconfig.json` - TypeScript 配置
- `eslint.config.mjs` - ESLint 配置

## 团队协作指南

### 代码规范

- 使用 ESLint 进行代码检查
- TypeScript 强类型要求
- Tailwind CSS utility classes 命名规范
- React 最佳实践：函数式组件、Hooks、避免 prop drilling

### 提交规范

- Feature 分支命名：`feature/页面名-功能名`
- Bug 修复分支：`fix/问题描述`
- 提交信息：简洁清晰，英文或中文均可

### 审查清单

- [ ] 代码通过 ESLint 检查
- [ ] TypeScript 类型检查通过
- [ ] 响应式设计测试（多屏幕尺寸）
- [ ] 国际化文本测试（多语言）
- [ ] 性能检查（LCP、CLS、FID）
- [ ] 可访问性检查（a11y）
