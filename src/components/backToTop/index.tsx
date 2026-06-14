'use client';
import { useMemo } from 'react';

import Icon from '@/components/icons/icon-svg/back-top.svg?component';
import { useScroll } from 'ahooks';

export const BackToTop = () => {
  const scroll = useScroll(
    typeof document !== 'undefined' ? document.body : null,
  );

  const handleBackToTop = () => {
    if (typeof document !== 'undefined' && document.body) {
      document.body.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  const showBackToTop = useMemo(() => {
    if (scroll) {
      return scroll?.top > 200;
    }
    return false;
  }, [scroll]);
  return (
    <div
      className="back-to-top fixed lg:right-[20px] lg:bottom-[122px] right-[16px] bottom-[2rem] z-[999] "
      onClick={handleBackToTop}
      style={{
        display: showBackToTop ? 'block' : 'none',
      }}
    >
      {/* <ArrowUpOutlined className="back-to-top-icon" /> */}
      <div className="back-to-top-icon-wrap w-[0.64rem] h-[0.64rem] bg-[#fff] rounded-[50%] flex justify-center items-center cursor-pointer box-shadow-[0_0_0.16rem_0_rgba(0,0,0,0.1)]">
        <Icon className="back-to-top-icon font-size-[0.18rem] font-weight-[700] w-[0.25rem] h-[0.32rem]"></Icon>
      </div>
    </div>
  );
};

export default BackToTop;
