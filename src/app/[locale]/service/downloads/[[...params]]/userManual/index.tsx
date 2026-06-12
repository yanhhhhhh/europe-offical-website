'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import UserManualTable from './UserManualTable';
import { decodeURIComponentString } from '@/utils/location';
import { products } from '@/constants/products';
const UserManual = () => {
  const [expandedProduct, setExpandedProduct] = useState<string>('');

  const params = useParams() as {
    params?: string[]; // [productKey]
  };
  console.log('params', params);
  const [productKeyEncoded] = params.params ?? [];
  const productKey = decodeURIComponentString(productKeyEncoded);

  const productRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});

  const toggleProductExpansion = (productKey: string) => {
    setExpandedProduct(expandedProduct === productKey ? '' : productKey);
  };

  useEffect(() => {
    if (productKey && products.length > 0) {
      setExpandedProduct(productKey);
      setTimeout(() => {
        if (productKey) {
          const element = productRefs.current[productKey];
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, 100);
    }
  }, [productKey, products]);

  return (
    <div className="p-[16px] lg:px-[150px] lg:py-[20px] box-border">
      <UserManualTable
        contentList={products}
        expandedProduct={expandedProduct}
        onToggleExpansion={toggleProductExpansion}
        productRefs={productRefs}
      />
    </div>
  );
};

export default UserManual;
