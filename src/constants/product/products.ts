// 产品列表常量
import type { StaticImageData } from 'next/image';

import f8sProductImage from '@/assets/images/01-首页面/PC/01-03-products-f8s.webp';
import l16ProductImage from '@/assets/images/01-首页面/PC/01-03-products-l16.webp';
import l16sProductImage from '@/assets/images/01-首页面/PC/01-03-products-l16s.webp';
import r30ProductImage from '@/assets/images/01-首页面/PC/01-03-products-r30.webp';
import f8sDetailImage from '@/assets/images/02-8度堆叠/pc/02-01.webp';
import l16sDetailImage from '@/assets/images/03-16度堆叠/pc/03-01.webp';
import l16DetailImage from '@/assets/images/04-16一体机/pc/04-01.webp';
import r30DetailImage from '@/assets/images/05-R30/pc/05-01.webp';

export type Product = {
  slug: string;
  name: string;
  model: string;
  capacity: string;
  voltage: string;
  current: string;
  weight: string;
  image: StaticImageData;
  detailImage: StaticImageData;
  summaryKey: string;
};

export const products: Product[] = [
  {
    slug: 'arkvolt-f8s',
    name: 'ARKVOLT F8S',
    model: 'HSM-8K16HV-2M',
    capacity: '16kWh / 482~657V',
    voltage: '481.6~657.0V',
    current: '12.5A / 12.5A',
    weight: '176kg',
    image: f8sProductImage,
    detailImage: f8sDetailImage,
    summaryKey: 'f8s',
  },
  {
    slug: 'arkvolt-l16s',
    name: 'ARKVOLT L16S',
    model: 'HPB-16LV-S',
    capacity: '16kWh / 51.2V',
    voltage: '44.8~57.6V',
    current: '157A / 157A',
    weight: '137.5kg',
    image: l16sProductImage,
    detailImage: l16sDetailImage,
    summaryKey: 'l16s',
  },
  {
    slug: 'arkvolt-l16',
    name: 'ARKVOLT L16',
    model: 'HPB-16LV',
    capacity: '16kWh / 51.2V',
    voltage: '44.8~57.6V',
    current: '157A / 157A',
    weight: '123kg',
    image: l16ProductImage,
    detailImage: l16DetailImage,
    summaryKey: 'l16',
  },
  {
    slug: 'arkvolt-r30',
    name: 'ARKVOLT R30/AIO30',
    model: 'HPC-30LV-22U',
    capacity: '30kWh / 51.2V',
    voltage: '44.8~58.4V',
    current: '300A max',
    weight: '350kg',
    image: r30ProductImage,
    detailImage: r30DetailImage,
    summaryKey: 'r30',
  },
];
