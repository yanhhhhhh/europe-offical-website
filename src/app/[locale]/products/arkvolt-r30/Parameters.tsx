import ProductParameters from '@/components/ProductParameters';
import { r30Parameters } from '@/constants/products/productParameters';

export default function Parameters() {
  return (
    <ProductParameters
      parameters={r30Parameters}
      className="py-[120px] lg:py-[160px]"
    />
  );
}
