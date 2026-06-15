import ProductParameters from '@/components/ProductParameters';
import { f8sParameters } from '@/constants/products/productParameters';

export default function ProductFeatures() {
  return (
    <ProductParameters
      parameters={f8sParameters}
      className="py-[120px] lg:py-[160px]"
    />
  );
}
