import ProductParameters from '@/components/ProductParameters';
import { l16Parameters } from '@/constants/products/productParameters';

export default function Parameters() {
  return (
    <ProductParameters
      parameters={l16Parameters}
      className="py-[120px] lg:py-[160px]"
    />
  );
}
