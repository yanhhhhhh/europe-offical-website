'use client';

import { HTMLAttributes } from 'react';

import IconArrowLeft from '@/components/icons/icon-svg/arrow-left.svg?component';

interface AntdArrowProps {
  currentSlide?: number;
  slideCount?: number;
}

interface ArrowProps {
  direction: 'prev' | 'next';
  className?: string;
  iconStyle?: HTMLAttributes<SVGElement>;
  onClick?: () => void;
}
export const CarouselArrow = ({
  currentSlide,
  className,
  direction,
  slideCount,
  iconStyle,
  onClick,
  ...carouselProps
}: ArrowProps & AntdArrowProps) => {
  const baseStyle = {
    width: '0.46rem',
    height: '0.46rem',
    ...iconStyle,
  };

  // 根据方向确定 transform 值
  const getTransform = () => {
    const baseTransform = '';
    return direction === 'next'
      ? `${baseTransform} rotate(180deg)`
      : baseTransform;
  };

  return (
    <div onClick={onClick} className={className}>
      <IconArrowLeft
        name="arrow-left"
        {...carouselProps}
        style={{
          ...baseStyle,
          transform: getTransform(),
        }}
      />
    </div>
  );
};
