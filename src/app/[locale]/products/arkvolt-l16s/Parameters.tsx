import ProductParameters from '@/components/ProductParameters';
import { l16sParameters } from '@/constants/products/productParameters';

export default function Parameters() {
  return (
    <ProductParameters
      parameters={l16sParameters}
      className="py-[120px] lg:py-[160px]"
    />
  );
}
