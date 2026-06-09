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
- **Babel React Compiler** 1.0.0 - React编译器优化性能

## 项目结构

```
src/
├── app/                      # Next.js应用目录
│   ├── layout.tsx           # 根布局（全局元数据、HTML结构）
│   ├── page.tsx             # 根页面（重定向到默认语言）
│   ├── globals.css          # 全局样式
│   └── [locale]/            # 动态路由：语言参数
│       ├── layout.tsx       # 语言级别布局（Header、Footer、国际化包装）
│       ├── page.tsx         # 首页
│       └── product/         # 产品详情页面
│           └── [slug]/
│               └── page.tsx # 产品页面
├── components/              # 可复用React组件
│   ├── layout/             # 布局组件
│   │   ├── Header.tsx      # 导航栏
│   │   └── Footer.tsx      # 页脚
│   ├── i18n/               # 国际化相关组件
│   │   ├── LanguageSwitcher.tsx  # 语言切换器
│   │   └── LocalizedText.tsx     # 本地化文本组件
│   └── ...其他可复用组件
├── constants/              # 常量和配置
│   ├── navigation.ts       # 导航结构、路由配置
│   ├── products.ts         # 产品数据、资源（图片等）
│   └── product/            # 按页面划分的常量
│       └── [page-name].ts  # 特定页面常量
├── i18n/                   # 国际化配置
│   ├── routing.ts          # next-intl路由配置
│   ├── request.ts          # 国际化请求处理
│   └── navigation.ts       # 导航翻译键管理
├── lib/                    # 工具函数和通用库
│   └── ...工具函数
├── proxy.ts                # API代理配置
└── assets/                 # 静态资源
    └── images/            # 按页面编号组织的图片
        ├── 01-首页面/
        ├── 02-8度堆叠/
        ├── 03-16度堆叠/
        ├── 04-16一体机/
        ├── 05-R30/
        ├── 06-联系我们/
        ├── 07-资源中心/
        └── 08-产品导航/

messages/                  # 国际化翻译文件
├── en.json               # 英文翻译（按页面分层）
├── de.json               # 德文翻译
├── nl.json               # 荷兰文翻译
├── sv.json               # 瑞典文翻译
├── pl.json               # 波兰文翻译
├── es.json               # 西班牙文翻译
├── fr.json               # 法文翻译
├── hu.json               # 匈牙利文翻译
└── it.json               # 意大利文翻译
```

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

### 国际化组件（i18n）

- **LanguageSwitcher** - 语言切换下拉菜单/按钮
- **LocalizedLink** - 带语言前缀的链接组件

### 页面特定组件

- **HeroSection** - 首页英雄区域
- **ProductCard** - 产品卡片（列表项）
- **ProductDetails** - 产品详情页面内容
- **SolutionsSection** - 解决方案章节
- **AdvantagesSection** - 产品优势章节

### 可复用组件库

- **Button** - 通用按钮
- **Card** - 卡片容器
- **Section** - 页面章节容器
- **Grid** - 栅格布局

## 常量和配置

### navigation.ts

```typescript
export const locales = [...];           // 支持的语言列表
export const headerNavigation = [...];  // 导航菜单配置
export const sectionRoutes = {...};     // 页面锚点路由
```

### products.ts

```typescript
export const products: Product[] = [...];  // 产品列表及图片资源
export const homeAssets = {...};           // 首页图片资源
export const advantageKeys = [...];        // 产品优势键列表
export const downloads = [...];            // 下载文件列表
```

### product/\*.ts（按页面划分的常量）

- `product/home.ts` - 首页常量
- `product/products.ts` - 产品列表页常量
- `product/contact.ts` - 联系页常量
- `product/service.ts` - 服务页常量

## 路由配置

### Next.js 动态路由

```
/                           → 重定向到 /en
/[locale]                   → 首页
/[locale]/product/[slug]    → 产品详情页
/[locale]/about             → 关于我们页
/[locale]/service           → 服务页
/[locale]/contact           → 联系我们页
```

### 国际化路由

使用 `next-intl` 库管理：

- 默认语言不需要前缀（`localePrefix: 'as-needed'`）
- 其他语言显示前缀：`/de`, `/fr`, `/nl` 等

## 开发工作流

### 添加新页面

1. 在 `src/app/[locale]/` 下创建页面目录和 `page.tsx`
2. 在 `messages/*.json` 中添加对应的翻译键（遵循两层级结构）
3. 在 `src/constants/navigation.ts` 中添加导航配置
4. 如需常量，在 `src/constants/product/` 中创建对应文件
5. 创建所需的组件在 `src/components/`

### 添加新产品

1. 在 `src/constants/products.ts` 中添加产品数据
2. 在 `messages/*.json` 的 `product` 部分添加翻译
3. 创建 `src/app/[locale]/product/[新产品slug]/page.tsx` 页面
4. 添加相关的产品图片资源

### 支持新语言

1. 在 `src/constants/navigation.ts` 的 `locales` 数组中添加新语言
2. 创建对应的 `messages/[新语言代码].json` 文件
3. 复制英文翻译并翻译所有内容

## 样式和主题

### Tailwind CSS

- 使用 Tailwind CSS 4.0 + PostCSS 插件
- 通过 `globals.css` 定义全局样式和主题变量
- 支持响应式设计：`sm:`, `md:`, `lg:`, `xl:`, `2xl:`

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

## 常见问题

### Q: 如何在组件中使用翻译？

A: 使用 `useTranslations()` Hook 从 `next-intl`：

```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('home.hero');
  return <h1>{t('title')}</h1>;
}
```

### Q: 如何链接到其他语言的页面？

A: 使用 `useRouter()` 和 `usePathname()` 结合 locale 参数：

```typescript
const router = useRouter();
router.push(`/${locale}/page`);
```

### Q: 如何在静态页面中使用国际化？

A: 在服务端组件中使用 `getTranslations()`：

```typescript
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('home');
  return <h1>{t('title')}</h1>;
}
```

## 部署

### Vercel（推荐）

- 自动检测 Next.js 项目
- 自动 git 集成
- 环境变量管理
- 预览部署

### Docker

- 多阶段构建优化镜像大小
- `next start` 用于生产运行

## 相关文档和资源

- [Next.js 文档](https://nextjs.org/docs)
- [next-intl 文档](https://next-intl-docs.vercel.app/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [React 19 更新](https://react.dev/blog/2024/12/19/react-19)
