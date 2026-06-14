'use client';

import { motion, useInView } from 'motion/react';
import { motionVariants } from '@/constants/motionVariants';
import { useRef } from 'react';

import { useParams } from 'next/navigation';
import { getFullPath } from '@/utils/location';
export interface HeroEECommonRelatedProducts {
  modalName: string;
  image: string;
  specs: string;
  link: string;
}
export interface HeroEECommonRelatedProductsProps {
  title: string;
  products: HeroEECommonRelatedProducts[];
}
export default function HeroEECommonRelatedProducts(
  props: HeroEECommonRelatedProductsProps,
) {
  const { locale } = useParams<{ locale: string }>();
  const { products, title } = props;

  const productsRef = useRef(null);
  const productsInView = useInView(productsRef, {
    once: false,
    margin: '0px 0px -10% 0px',
  });
  return (
    <motion.div
      className="w-full  relative lg:h-[800px] bg-[#11151F] px-[25px] py-[25px] text-white lg:py-[80px]"
      ref={productsRef}
    >
      <motion.h2
        className="text-[48px] font-bold mb-[54px] text-center lg:mb-[48px]"
        variants={motionVariants.textFadeUp}
        initial="hidden"
        animate={productsInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>
      {/* Content for related products goes here */}
      <motion.div
        className="flex flex-wrap gap-[18px] lg:gap-[90px] lg:justify-center"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.4,
            },
          },
        }}
        initial="hidden"
        animate={productsInView ? 'visible' : 'hidden'}
      >
        {products.map((product, index) => (
          <motion.a
            variants={motionVariants.fadeUp}
            key={index}
            className="no-underline text-white  relative  bg-dark w-[340px] h-[480px] text-center cursor-pointer flex flex-col justify-start overflow-hidden"
            href={getFullPath(locale, product.link)}
          >
            <motion.img
              src={product.image}
              alt={product.modalName}
              className=" w-[340px] h-[480px] absolute object-cover"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            />
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 text-white z-10 whitespace-nowrap">
              <motion.h3
                className="lg:!text-[24px] mb-[8px] text-[30px] font-bold"
                variants={motionVariants.fadeUp}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              >
                {product.modalName}
              </motion.h3>
              <motion.p
                className="lg:text-[16px] text-[24px]"
                variants={motionVariants.fadeUp}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
              >
                {product.specs}
              </motion.p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
export { HeroEECommonRelatedProducts };
