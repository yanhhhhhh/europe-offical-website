import f8sParameter01Image from '@/assets/images/products/f8s/02-04-1堆.webp';
import f8sParameter02Image from '@/assets/images/products/f8s/02-04-2堆.webp';
import f8sParameter03Image from '@/assets/images/products/f8s/02-04-3堆.webp';
import f8sParameter04Image from '@/assets/images/products/f8s/02-04-4堆.webp';

import { StaticImageData } from 'next/image';

// 产品参数数据类型定义
export interface ProductParameter {
  model: string; // 型号名称
  image: StaticImageData; // 产品图片路径
  mobileImage?: StaticImageData; // 移动端图片路径
  specifications: {
    batteryEnergy: string;
    ratedVoltage: string;
    voltageRange: string;
    maxCurrent: string;
    netWeight: string;
    dimensions: string;
  };
}

// F8S 系列产品参数数据
export const f8sParameters: ProductParameter[] = [
  {
    model: 'HSM-4K8HV-1M',
    image: f8sParameter01Image, // 需要替换为实际图片
    specifications: {
      batteryEnergy: '8038.4Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '98kg',
      dimensions: 'L597*W263*H677mm',
    },
  },
  {
    model: 'HSM-8K16HV-2M',
    image: f8sParameter02Image, // 需要替换为实际图片
    specifications: {
      batteryEnergy: '16076.8Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '176kg',
      dimensions: 'L597*W263*H1124mm',
    },
  },
  {
    model: 'HSM-12K24HV-3M',
    image: f8sParameter03Image, // 需要替换为实际图片
    specifications: {
      batteryEnergy: '24112.5Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '254kg',
      dimensions: 'L597*W263*H1571mm',
    },
  },
  {
    model: 'HSM-16K32HV-4M',
    image: f8sParameter04Image,
    specifications: {
      batteryEnergy: '32153.6Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '332kg',
      dimensions: 'L597*W263*H2018mm',
    },
  },
];
