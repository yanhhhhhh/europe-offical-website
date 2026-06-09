// 首页常量和页面配置
import heroImage from '@/assets/images/01-首页面/PC/01-首页面-01.webp';
import homeSolutionImage from '@/assets/images/01-首页面/PC/01-021.png';
import commercialSolutionImage from '@/assets/images/01-首页面/PC/01-022.png';
import advantageCellImage from '@/assets/images/01-首页面/PC/01-04.webp';
import aboutImage from '@/assets/images/01-首页面/PC/01-05-.webp';
import cooperationImage from '@/assets/images/01-首页面/PC/01-07.webp';

export const homeAssets = {
  hero: heroImage,
  homeSolution: homeSolutionImage,
  commercialSolution: commercialSolutionImage,
  advantageCell: advantageCellImage,
  about: aboutImage,
  cooperation: cooperationImage,
} as const;

export const advantageKeys = [
  'highConsistency',
  'maximumSafety',
  'maximumLifetime',
  'costEffective',
] as const;
