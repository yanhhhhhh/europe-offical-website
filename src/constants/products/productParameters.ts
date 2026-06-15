// 产品参数数据类型定义
export interface ProductParameter {
  model: string; // 型号名称
  image: string; // 产品图片路径
  mobileImage?: string; // 移动端图片路径
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
    image: '/images/products/f8s/hsm-4k8hv-1m.png', // 需要替换为实际图片
    specifications: {
      batteryEnergy: '10416Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '98kg',
      dimensions: 'L597*W263*H677mm',
    },
  },
  {
    model: 'HSM-8K16HV-2M',
    image: '/images/products/f8s/hsm-8k16hv-2m.png',
    specifications: {
      batteryEnergy: '24112.5Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '254kg',
      dimensions: 'L597*W263*H1827mm',
    },
  },
  {
    model: 'HSM-12K24HV-3M',
    image: '/images/products/f8s/hsm-12k24hv-3m.png',
    specifications: {
      batteryEnergy: '32121.6Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '332kg',
      dimensions: 'L597*W263*H2418mm',
    },
  },
  {
    model: 'HSM-16K32HV-4M',
    image: '/images/products/f8s/hsm-16k32hv-4m.png',
    specifications: {
      batteryEnergy: '16076.8Wh',
      ratedVoltage: '576[VDC]',
      voltageRange: '481.6~657.0[VDC]',
      maxCurrent: '12.5A/12.5A',
      netWeight: '176kg',
      dimensions: 'L597*W263*H1124mm',
    },
  },
];
