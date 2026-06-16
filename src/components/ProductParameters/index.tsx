'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ProductParameter } from '@/constants/products/productParameters';

interface ProductParametersProps {
  parameters: ProductParameter[];
  className?: string;
}

export default function ProductParameters({
  parameters,
  className = '',
}: ProductParametersProps) {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabScrollRef = useRef<HTMLDivElement | null>(null);

  const activeProduct = parameters[activeIndex];

  useEffect(() => {
    const scrollContainer = tabScrollRef.current;
    const activeTab = tabRefs.current[activeIndex];

    if (!scrollContainer || !activeTab) {
      return;
    }

    const targetScrollLeft =
      activeTab.offsetLeft -
      (scrollContainer.clientWidth - activeTab.offsetWidth) / 2;

    const maxScrollLeft =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;

    scrollContainer.scrollTo({
      left: Math.max(0, Math.min(targetScrollLeft, maxScrollLeft)),
      behavior: 'smooth',
    });
  }, [activeIndex]);

  return (
    <section className={`w-screen bg-[#0a0f1e] text-white ${className}`}>
      <div>
        {/* 标题 */}
        <h2 className="text-[56px] lg:text-[64px] font-bold text-center mb-[60px] lg:mb-[80px]">
          {t('products.productParameters')}
        </h2>

        {/* Tab 切换按钮容器 - 仅移动端显示 */}
        <div className="mb-[80px] lg:hidden">
          <div className="relative">
            <div
              ref={tabScrollRef}
              className={`overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${parameters.length === 1 ? 'flex justify-center px-[32px]' : ''}`}
            >
              <div
                className={`inline-flex min-w-max items-center gap-[12px] rounded-full border border-gray-700/50 bg-[#1a1f2e]/80 px-[8px] py-[8px] ${parameters.length === 1 ? '' : 'm-[32px]'}`}
              >
                {parameters.map((param, index) => (
                  <button
                    key={param.model}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      shrink-0 cursor-pointer rounded-full px-[20px] py-[12px] text-[18px] font-medium whitespace-nowrap transition-all duration-300
                      ${
                        activeIndex === index
                          ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-500/30'
                          : 'bg-transparent text-gray-400 hover:text-gray-200'
                      }
                    `}
                  >
                    {param.model}
                  </button>
                ))}
              </div>
            </div>
            {parameters.length > 1 && (
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[72px] bg-gradient-to-l from-[#0a0f1e] via-[#0a0f1e]/90 to-transparent" />
            )}
          </div>
        </div>

        {/* 产品展示区域 - PC 左右布局，移动端上下布局 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[60px] lg:gap-[120px] px-[32px] lg:px-0">
          {/* 左侧：产品图片 */}
          <div className="flex flex-col items-center lg:self-end">
            <div className="relative w-[340px] h-[500px] lg:w-[280px] lg:h-[420px]  border-gray-500 rounded-[8px] flex items-center justify-center ">
              <Image
                src={activeProduct.image}
                alt={activeProduct.model}
                fill
                className="object-contain p-[40px]"
              />
            </div>
            <p className="text-[28px] lg:text-[24px] font-medium mt-[32px] lg:mt-[24px]">
              {activeProduct.model}
            </p>
          </div>

          {/* 右侧：Tab + 产品参数表 */}
          <div className="w-full lg:w-[796px] lg:self-start">
            {/* Tab 切换按钮容器 - 仅 PC 端显示 */}
            <div
              className={`hidden lg:block mb-[100px] ${parameters.length === 1 ? 'lg:flex lg:justify-center' : ''}`}
            >
              <div className="inline-flex min-w-max items-center gap-[10px] rounded-full border border-gray-700/50 bg-[#1a1f2e]/80 px-[12px] py-[12px]">
                {parameters.map((param, index) => (
                  <button
                    key={param.model}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      shrink-0 cursor-pointer rounded-full px-[40px] py-[18px] text-[20px] font-medium whitespace-nowrap transition-all duration-300
                      ${
                        activeIndex === index
                          ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-500/30'
                          : 'bg-transparent text-gray-400 hover:text-gray-200'
                      }
                    `}
                  >
                    {param.model}
                  </button>
                ))}
              </div>
            </div>

            {/* 产品参数表 */}
            <div className="bg-[#131a2e] rounded-[12px] overflow-hidden">
              <div className="border-b border-gray-700 px-[32px] lg:px-[40px] pt-[28px] lg:pt-[24px] pb-[20px] lg:pb-[16px]">
                <h3 className="text-[32px] lg:text-[28px] font-semibold">
                  {t('products.productOverview')}
                </h3>
              </div>
              <ParameterRow
                label="Battery Energy"
                value={activeProduct.specifications.batteryEnergy}
              />
              <ParameterRow
                label="Rated Voltage"
                value={activeProduct.specifications.ratedVoltage}
              />
              <ParameterRow
                label="Charge/Discharge Voltage Range"
                value={activeProduct.specifications.voltageRange}
              />
              <ParameterRow
                label="Maximum Charge/Discharge Current"
                value={activeProduct.specifications.maxCurrent}
              />
              <ParameterRow
                label="Net Weight"
                value={activeProduct.specifications.netWeight}
              />
              <ParameterRow
                label="Dimensions"
                value={activeProduct.specifications.dimensions}
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 参数行组件
function ParameterRow({
  label,
  value,
  isLast = false,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center px-[32px] lg:px-[40px] py-[24px] lg:py-[20px] ${
        !isLast ? 'border-b border-gray-700' : ''
      }`}
    >
      <span className="text-[24px] lg:text-[18px] text-gray-300">{label}</span>
      <span className="text-[24px] lg:text-[18px] font-medium">{value}</span>
    </div>
  );
}
