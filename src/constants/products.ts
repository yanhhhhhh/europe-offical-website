// 重新导出产品相关常量（为了向后兼容性）
export { products, type Product } from './product/products';
export { homeAssets, advantageKeys } from './home';
export { downloads } from './service';

export const offices = [
  [
    'UK & Ireland',
    '28 Maplewood Road, Croydon, London, CR0 2LX',
    '+44 7911 886622',
    'sales@uk-arkvolt-energy.co.uk',
  ],
  [
    'Germany',
    'Hauptstrasse 42, 40213 Düsseldorf, Deutschland',
    '+49 211 5589762',
    'info@de-arkvolt-energy.de',
  ],
  [
    'France',
    '18 Rue du Commerce, 75015 Paris, France',
    '+33 1 56 78 9210',
    'contact@fr-arkvolt-energy.fr',
  ],
] as const;
