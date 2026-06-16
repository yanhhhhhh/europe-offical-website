import f8sParameter01Image from '@/assets/images/products/f8s/02-04-1堆.webp';
import f8sParameter02Image from '@/assets/images/products/f8s/02-04-2堆.webp';
import f8sParameter03Image from '@/assets/images/products/f8s/02-04-3堆.webp';
import f8sParameter04Image from '@/assets/images/products/f8s/02-04-4堆.webp';

import f16sParameterImage from '@/assets/images/products/l16s/pc/03-03.webp';

import f16ParameterImage from '@/assets/images/products/l16/pc/03-03.webp';

import r30Parameter01 from '@/assets/images/products/r30/pc/05-02-22U.webp';
import r30Parameter02 from '@/assets/images/products/r30/pc/05-02-44U.webp';
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

export const l16sParameters: ProductParameter[] = [
  {
    model: 'HPB-16LV-S',
    image: f16sParameterImage, // 需要替换为实际图片
    specifications: {
      batteryEnergy: '16076.8Wh',
      ratedVoltage: '51.2[VDC]',
      voltageRange: '44.8~57.6[VDC]',
      maxCurrent: '157A/157A',
      netWeight: '137.5kg',
      dimensions: 'L481.2*W261*H1025mm',
    },
  },
];
export const l16Parameters: ProductParameter[] = [
  {
    model: 'HPB-16LV',
    image: f16ParameterImage, // 需要替换为实际图片
    specifications: {
      batteryEnergy: '16076.8Wh',
      ratedVoltage: '51.2[VDC]',
      voltageRange: '44.8~57.6[VDC]',
      maxCurrent: '157A/157A',
      netWeight: '123kg',
      dimensions: 'L468.2*W265*H900mm',
    },
  },
];
export const r30Parameters: ProductParameter[] = [
  {
    model: 'HPC-30LV-22U',
    image: r30Parameter01, // 需要替换为实际图片
    specifications: {
      batteryEnergy: '30054.4Wh',
      ratedVoltage: '51.2[VDC]',
      voltageRange: '44.8~58.4[VDC]',
      maxCurrent: '300A/300A',
      netWeight: '350kg',
      dimensions: 'L600*W630*H1000mm',
    },
  },
  {
    model: 'HPC-30LV-44U',
    image: r30Parameter02, // 需要替换为实际图片
    specifications: {
      batteryEnergy: '30054.4Wh',
      ratedVoltage: '51.2[VDC]',
      voltageRange: '44.8~58.4[VDC]',
      maxCurrent: '300A/300A',
      netWeight: '600kg',
      dimensions: 'L600*W630*H1900mm',
    },
  },
];
