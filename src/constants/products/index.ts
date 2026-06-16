// 产品列表常量
import type { StaticImageData } from 'next/image';

import f8sProductImage from '@/assets/images/products/f8s.webp';
import l16ProductImage from '@/assets/images/products/l16.webp';
import l16sProductImage from '@/assets/images/products/l16s.webp';
import r30ProductImage from '@/assets/images/products/r30.webp';
import aio30ProductImage from '@/assets/images/products/aio30.webp';

export type IProduct = {
  productKey: string;
  name: string;
  batteryCapacity: string;
  cellCapacity: string;
  ratedVoltage: string;
  netWeight: string;
  model: string;
  capacity: string;
  voltage: string;
  current: string;

  image: StaticImageData;

  summaryKey: string;
  albumUrl: string;
  manualUrl: string;
  href: string;
  productFeatures?: {
    key: string;
    value: string;
  }[];
};
export const ArkvoltF8s = {
  productKey: 'arkvolt-f8s',
  name: 'ARKVOLT F8S',
  // diagram:'f8s-diagram.webp',
  batteryCapacity: '16076.8Wh',
  cellCapacity: '314Ah',
  ratedVoltage: '576[VDC]',
  netWeight: '176kg',
  model: 'HSM-8K16HV-2M',
  capacity: '16kWh / 482~657V', //导航等卡片使用
  voltage: '481.6~657.0V',
  current: '12.5A / 12.5A',

  image: f8sProductImage,

  summaryKey: 'f8s',
  albumUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',
  manualUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',

  href: `/products/arkvolt-f8s`,
  productFeatures: [
    {
      key: 'operationVoltageRange',
      value: '481.6~657.0[VDC]',
    },
    {
      key: 'maximumChargeDischargeCurrent',
      value: '12.5A/12.5A',
    },
    {
      key: 'cycleLife',
      value: '≥8000 cycles, @25°C, @0.5C, @90%DOD, @70%EOL',
    },
    {
      key: 'rating',
      value: 'IP65',
    },

    {
      key: 'certifications',
      value: 'CE, IEC62619, IEC62040, UN38.3, MSDS, ROHS, REACH',
    },
    {
      key: 'dimensions',
      value: 'L597*W263*H1124mm',
    },
  ],
};
export const ArkvoltL16 = {
  productKey: 'arkvolt-l16',
  name: 'ARKVOLT L16',
  batteryCapacity: '16076.8Wh',
  cellCapacity: '314Ah',
  ratedVoltage: '51.2[VDC]',
  netWeight: '123kg',
  model: 'HPB-16LV',
  capacity: '16kWh / 44.8~57.6V',
  voltage: '44.8~57.6V',
  current: '157A / 157A',

  image: l16ProductImage,
  albumUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',
  manualUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',

  summaryKey: 'l16',
  href: `/products/arkvolt-l16`,
  productFeatures: [
    {
      key: 'operationVoltageRange',
      value: '44.8~57.6[VDC]',
    },
    {
      key: 'maximumChargeDischargeCurrent',
      value: '157A / 157A',
    },
    {
      key: 'cycleLife',
      value: '≥8000 cycles, @25°C, @0.5C, @90%DOD, @70%EOL',
    },
    {
      key: 'rating',
      value: 'IP65',
    },

    {
      key: 'certifications',
      value: 'CE, IEC62619, IEC62040, UN38.3, MSDS, RoHS, REACH',
    },
    {
      key: 'dimensions',
      value: 'L468.2*W265*H900mm',
    },
  ],
};
export const ArkvoltL16s = {
  productKey: 'arkvolt-l16s',
  name: 'ARKVOLT L16S',
  batteryCapacity: '16076.8Wh',
  cellCapacity: '314Ah',
  ratedVoltage: '51.2[VDC]',
  netWeight: '137.5kg',
  model: 'HPB-16LV-S',
  capacity: '16kWh / 44.8~57.6V',
  voltage: '44.8~57.6V',
  current: '157A / 157A',

  image: l16sProductImage,
  albumUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',
  manualUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',

  summaryKey: 'l16s',
  href: `/products/arkvolt-l16s`,
  productFeatures: [
    {
      key: 'operationVoltageRange',
      value: '44.8~57.6[VDC]',
    },
    {
      key: 'maximumChargeDischargeCurrent',
      value: '157A / 157A',
    },
    {
      key: 'cycleLife',
      value: '≥8000 cycles, @25°C, @0.5C, @90%DOD, @70%EOL',
    },
    {
      key: 'rating',
      value: 'IP65',
    },

    {
      key: 'certifications',
      value: 'CE, IEC62619, IEC62040, UN38.3, MSDS, ROHS, REACH',
    },
    {
      key: 'dimensions',
      value: 'L481.2*W261*H1025mm',
    },
  ],
};
export const ArkvoltR30 = {
  productKey: 'arkvolt-r30',
  name: 'ARKVOLT R30',
  model: 'HPC-30LV-22U',
  capacity: '30kWh / 43.2~58.4V',
  batteryCapacity: '30054.4Wh',
  cellCapacity: '587Ah',
  ratedVoltage: '51.2[VDC]',
  netWeight: '350kg',
  voltage: '44.8~58.4V',
  current: '300A / 300A',

  image: r30ProductImage,
  albumUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',
  manualUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',

  summaryKey: 'r30',
  href: `/products/arkvolt-r30`,
  productFeatures: [
    {
      key: 'operationVoltageRange',
      value: '44.8~58.4[VDC]',
    },
    {
      key: 'maximumChargeDischargeCurrent',
      value: '300A / 300A',
    },
    {
      key: 'cycleLife',
      value: '≥8000 cycles, @25°C, @0.5C, @90%DOD, @70%EOL',
    },
    {
      key: 'rating',
      value: 'IP20',
    },

    {
      key: 'certifications',
      value: 'CE, IEC62619, IEC62040, UN38.3, MSDS, ROHS, REACH',
    },
    {
      key: 'dimensions',
      value: 'L600*W630*H1000mm',
    },
  ],
};
export const ArkvoltAio30 = {
  productKey: 'arkvolt-aio30',
  name: 'ARKVOLT AIO30',
  model: 'HPC-30LV-44U',
  capacity: '30kWh / 43.2~58.4V',
  voltage: '44.8~58.4V',
  current: '300A max',
  batteryCapacity: '30054.4Wh',
  cellCapacity: '587Ah',
  ratedVoltage: '51.2[VDC]',
  netWeight: '600kg',
  image: aio30ProductImage,

  summaryKey: 'aio30',
  albumUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',
  manualUrl:
    'https://www.hero-ee.com/sales-package/zh_CN/pdfPreview?pdfUrl=https%3A%2F%2Fwww.hero-ee.com%2Foss%2Fhero-iot-oss-prod%2FsalePackage%2Fpdfs%2FHeroEE+1_%E5%8D%95%E9%A1%B5_V1.0.0_%E8%8B%B1%E6%96%87_0805-lii48s62x2.pdf',

  href: `/products/arkvolt-r30`, // 目前没有单独的详情页，先跳转到 R30 的详情页
  productFeatures: [
    {
      key: 'operationVoltageRange',
      value: '44.8~58.4[VDC]',
    },
    {
      key: 'maximumChargeDischargeCurrent',
      value: '300A / 300A',
    },
    {
      key: 'cycleLife',
      value: '≥8000 cycles, @25°C, @0.5C, @90%DOD, @70%EOL',
    },
    {
      key: 'rating',
      value: 'IP20',
    },

    {
      key: 'certifications',
      value: 'CE, IEC62619, IEC62040, UN38.3, MSDS, ROHS, REACH',
    },
    {
      key: 'dimensions',
      value: 'L600*W630*H1900mm',
    },
  ],
};
export const products: IProduct[] = [
  ArkvoltF8s,
  ArkvoltL16,
  ArkvoltL16s,
  ArkvoltR30,
  ArkvoltAio30,
];

// 产品参数数据
export * from './productParameters';
