import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,

  output: 'standalone',

  webpack(config) {
    // SVG处理
    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          resourceQuery: /component/, // ?component → React 组件
          use: ['@svgr/webpack'],
        },
        {
          type: 'asset/resource', // 默认返回 URL，能配合 next/image 使用
        },
      ],
    });

    return config;
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default withNextIntl(nextConfig);
