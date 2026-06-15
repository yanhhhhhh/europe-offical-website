'use client';

import { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(1); // 默认激活第二个 tab（HSM-8K16HV-2M）

  const activeProduct = parameters[activeIndex];

  return (
    <section className={`w-screen bg-[#0a0f1e] text-white ${className}`}>
      <div className="hero-layout-section">
        {/* 标题 */}
        <h2 className="text-[56px] lg:text-[64px] font-bold text-center mb-[60px] lg:mb-[80px]">
          Product Parameters
        </h2>

        {/* Tab 切换按钮容器 */}
        <div className="flex justify-center mb-[80px] lg:mb-[100px] px-[32px] lg:px-0">
          <div className="inline-flex items-center gap-[16px] lg:gap-[20px] bg-[#1a1f2e]/80 border border-gray-700/50 rounded-full px-[8px] py-[8px] lg:px-[12px] lg:py-[12px] overflow-x-auto max-w-full">
            {parameters.map((param, index) => (
              <button
                key={param.model}
                onClick={() => setActiveIndex(index)}
                className={`
                  px-[32px] lg:px-[40px] py-[16px] lg:py-[18px] 
                  text-[24px] lg:text-[20px] font-medium whitespace-nowrap
                  rounded-full transition-all duration-300
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

        {/* 产品展示区域 - PC 左右布局，移动端上下布局 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[60px] lg:gap-[120px] px-[32px] lg:px-0">
          {/* 左侧：产品图片 */}
          <div className="flex flex-col items-center">
            <div className="relative w-[340px] h-[500px] lg:w-[280px] lg:h-[420px] border-2 border-dashed border-gray-500 rounded-[8px] flex items-center justify-center bg-white/5">
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

          {/* 右侧：产品参数表 */}
          <div className="w-full lg:w-[600px]">
            <h3 className="text-[32px] lg:text-[28px] font-semibold mb-[32px] lg:mb-[24px]">
              Product Overview
            </h3>
            <div className="bg-[#131a2e] rounded-[12px] overflow-hidden">
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
