'use client';
import { IProductInfo, getManualList, getProductType } from '@/api/download';
import { templateIdAtom } from '@/stores/template';
import { Spin } from 'antd';
import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import UserManualTable from './UserManualTable';
import { decodeURIComponentString } from '@/utils/location';


const UserManual = () => {
  const [contentList, setContentList] = useState<IProductInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState<string>('');
  const templateIdValue = useAtomValue(templateIdAtom);
  const params = useParams() as {
    params?: string[]; // [productKey]
  };
  const [productKeyEncoded] = params.params ?? [];
  const productKey = decodeURIComponentString(productKeyEncoded);

  const productRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});

  const toggleProductExpansion = (productKey: string) => {
    setExpandedProduct(expandedProduct === productKey ? '' : productKey);
  };

  async function fetchManualList() {
    getManualList({
      pageNum: 1,
      pageSize: 10000,
      productKey: '', // 获取所有产品类型的手册
      isPublish: 'Y',
      templateGroupIds: [templateIdValue].join(','),
    }).then(async (res) => {
      const { code, data } = res.data;
      if (code === 200) {
        setContentList(data.list ?? []);
      }
    });
  }

  async function fetchManualType() {
    const res = await getProductType();
    if (res.data.code === 200) {
      const productTypes = res.data.data ?? [];

      // 设置默认选中的标签页
      if (productTypes.length > 0) {
        const defaultKey = productKey || productTypes[0].productKey;
        setExpandedProduct(defaultKey || '');
      }
    }
  }

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchManualType(), fetchManualList()]).finally(() => {
      setLoading(false);
    });
  }, [templateIdValue]);

  useEffect(() => {
    if (productKey && contentList.length > 0) {
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
  }, [productKey, contentList]);

  return (
    <div className="p-[16px] lg:px-[250px] lg:py-[20px] box-border">
      <Spin spinning={loading}>
        <UserManualTable
          contentList={contentList}
          expandedProduct={expandedProduct}
          onToggleExpansion={toggleProductExpansion}
          productRefs={productRefs}
        />
      </Spin>
    </div>
  );
};

export default UserManual;
