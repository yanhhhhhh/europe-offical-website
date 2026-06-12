'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import UserManualTable from './UserManualTable';
import { decodeURIComponentString } from '@/utils/location';
import { products } from '@/constants/products';

type ManualExpansionState = {
  routeKey: string;
  value: string;
};

const UserManual = () => {
  const [manualExpansion, setManualExpansion] =
    useState<ManualExpansionState | null>(null);

  const params = useParams() as {
    params?: string[]; // [productKey]
  };
  const [productKeyEncoded] = params.params ?? [];
  const productKey = decodeURIComponentString(productKeyEncoded) ?? '';
  const routeExpandedProduct = products.some(
    (product) => product.productKey === productKey,
  )
    ? productKey
    : '';
  const expandedProduct =
    manualExpansion && manualExpansion.routeKey === routeExpandedProduct
      ? manualExpansion.value
      : routeExpandedProduct;

  const productRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});

  const toggleProductExpansion = (nextProductKey: string) => {
    setManualExpansion((currentState) => {
      const currentExpanded =
        currentState && currentState.routeKey === routeExpandedProduct
          ? currentState.value
          : routeExpandedProduct;

      return {
        routeKey: routeExpandedProduct,
        value: currentExpanded === nextProductKey ? '' : nextProductKey,
      };
    });
  };

  useEffect(() => {
    if (!routeExpandedProduct) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const element = productRefs.current[routeExpandedProduct];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [routeExpandedProduct]);

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
