'use client';

import { MotionVariantName, motionVariants } from '@/constants/motionVariants';

import { PropsWithChildren, useRef } from 'react';

import { useMotionTextAnimation } from '@/hooks/useMotionTextAnimation';

import { motion, useInView } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';

import Image, { StaticImageData } from 'next/image';

import { Link } from '@/i18n/navigation';

export type MoreType = 'learnMoreInfo' | 'contactUs' | 'learnMore';

export interface HeroCardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  fontColor?: string;

  backgroundImage?: StaticImageData;
  imageClassName?: string;
  mobileBackgroundImage?: StaticImageData;
  mobileImageClassName?: string;
  cardClassName?: string;
  cardContentClassName?: string;

  titleClassName?: string;
  descriptionClassName?: string;
  moreClassName?: string;
  //链接
  more?: string;
  moreType?: MoreType;

  descriptionInnerHtml?: boolean;
  motionVariant?: MotionVariantName | false;
  backgroundAnimationOnce?: boolean;

  textAnimationOnce?: boolean;
  textAnimationType?: MotionVariantName | false;
  noTranslateTitle?: boolean;
  // 是否作为首屏 LCP 优先加载
  isPriority?: boolean;
  // next/image sizes 提示，提升响应式与 LCP 评估
  imageSizes?: string;
  fetchPriority?: 'high' | 'low' | 'auto' | undefined;
}
export const HeroCard = (props: HeroCardProps) => {
  const t = useTranslations();
  const languageCode = useLocale(); // 获取当前语言环境

  // const { locale } = useAtomValue(baseConfigAtom);

  const {
    title,
    description,
    backgroundImage,
    mobileBackgroundImage,
    imageClassName = '',
    mobileImageClassName = '',

    fontColor = '#ffffff',

    cardClassName = '',
    cardContentClassName = '',
    titleClassName = '',
    descriptionClassName = '',
    moreClassName = '',

    moreType = 'learnMoreInfo',
    more,
    children,

    descriptionInnerHtml = false,
    motionVariant = false, // 默认动画
    backgroundAnimationOnce = true,

    textAnimationOnce = true,
    textAnimationType = false,
    noTranslateTitle = false,
    isPriority = false,
    imageSizes = '100vw',
    fetchPriority = undefined,
  } = props;
  const pcBackgroundRef = useRef(null);
  const mobileBackgroundRef = useRef(null);
  const pcBackgroundInView = useInView(pcBackgroundRef, {
    once: backgroundAnimationOnce,
    margin: '0px 0px -10% 0px',
  });
  const mobileBackgroundInView = useInView(mobileBackgroundRef, {
    once: backgroundAnimationOnce,
    margin: '0px 0px -10% 0px',
  });
  const { ref: textRef, motionProps } = useMotionTextAnimation(
    textAnimationType !== false,
    textAnimationOnce,
  );
  const cardClass = `hero-card  relative flex justify-center w-screen h-[1210px] lg:h-[800px]  ${cardClassName}`;
  const cardContentClass = `hero-card-content relative lg:pt-[46px] pt-[40px] flex flex-col items-center  text-center
   
  ${cardContentClassName}`;

  const titleClass = `hero-card-title lg:text-[46px]    font-bold  ${titleClassName}
  ${
    languageCode == 'en'
      ? 'text-[48px] leading-[1.5]'
      : 'text-[58px] leading-[1.5]'
  }
  `;
  const descriptionClass = `hero-card-description lg:text-[24px]  font-normal text-center mt-[10px]  ${
    languageCode == 'en'
      ? 'text-[32px] leading-[1.5]'
      : 'text-[40px] leading-[1.5]'
  } ${descriptionClassName}`;
  const moreClass = `hero-card-more lg:text-[22px] text-[32px] font-normal  text-primary cursor-pointer no-underline mt-[10px] ${moreClassName}`;
  const imageClass = `hero-layout-pc absolute w-full inset-0  ${imageClassName}`;
  const mobileImageClass = ` hero-layout-mobile absolute inset-0 w-full  mx-auto   ${mobileImageClassName}`;

  const finalTitle = title ? (noTranslateTitle ? title : t(title)) : '';
  const altText = finalTitle || 'HeroEE';
  return (
    <section className={cardClass}>
      {motionVariant ? (
        <>
          {backgroundImage && (
            <motion.div
              ref={pcBackgroundRef}
              variants={motionVariants[motionVariant]}
              initial="hidden"
              animate={pcBackgroundInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={imageClass}
            >
              <Image
                src={backgroundImage}
                alt={altText}
                fill={true}
                sizes={imageSizes}
                priority={isPriority}
                placeholder={backgroundImage.blurDataURL ? 'blur' : undefined}
                fetchPriority={fetchPriority}
              />
            </motion.div>
          )}
          {mobileBackgroundImage && (
            <motion.div
              ref={mobileBackgroundRef}
              variants={motionVariants[motionVariant]}
              initial="hidden"
              animate={mobileBackgroundInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={mobileImageClass}
            >
              <Image
                src={mobileBackgroundImage}
                alt={altText}
                fill={true}
                sizes={imageSizes}
                priority={isPriority}
                placeholder={
                  mobileBackgroundImage.blurDataURL ? 'blur' : undefined
                }
                fetchPriority={fetchPriority}
              />
            </motion.div>
          )}
        </>
      ) : (
        <>
          <div className={imageClass}>
            {backgroundImage && (
              <Image
                src={backgroundImage}
                alt={altText}
                fill={true}
                sizes={imageSizes}
                priority={isPriority}
                placeholder={backgroundImage.blurDataURL ? 'blur' : undefined}
                fetchPriority={fetchPriority}
              />
            )}
          </div>
          <div className={mobileImageClass}>
            {mobileBackgroundImage && (
              <Image
                src={mobileBackgroundImage}
                alt={altText}
                fill={true}
                sizes={imageSizes}
                priority={isPriority}
                placeholder={
                  mobileBackgroundImage.blurDataURL ? 'blur' : undefined
                }
                fetchPriority={fetchPriority}
              />
            )}
          </div>
        </>
      )}

      <motion.div
        ref={textRef}
        {...motionProps}
        className={cardContentClass}
        style={{ color: fontColor }}
      >
        <motion.div
          className={titleClass}
          variants={
            textAnimationType !== false
              ? motionVariants[textAnimationType]
              : undefined
          }
        >
          {finalTitle}
        </motion.div>
        {!descriptionInnerHtml
          ? description && (
              <motion.div
                className={descriptionClass}
                variants={
                  textAnimationType !== false
                    ? motionVariants[textAnimationType]
                    : undefined
                }
              >
                {t(description)}
              </motion.div>
            )
          : description && (
              <div
                className={`${descriptionClass} innerHtml`}
                dangerouslySetInnerHTML={{ __html: t(description) }}
              ></div>
            )}
        {moreType === 'learnMoreInfo' && more && (
          <motion.div
            className={moreClass}
            variants={
              textAnimationType !== false
                ? motionVariants[textAnimationType]
                : undefined
            }
          >
            <Link
              href={more}
              className="no-underline cursor-pointer !text-white border  block mt-[36px] px-[110px] py-[18px] lg:px-[90px] lg:py-[12px] border-white rounded-[90px]"
            >
              {t('common.details')}
            </Link>
          </motion.div>
        )}
        {moreType === 'contactUs' && more && (
          <div className={moreClass}>
            <Link
              href={more}
              className="no-underline cursor-pointer !text-white border  block mt-[36px] px-[110px] py-[18px] lg:px-[90px] lg:py-[12px] border-white rounded-[90px]"
            >
              {t('common.contact')}
            </Link>
          </div>
        )}
        {moreType === 'learnMore' && more && (
          <div className={moreClass}>{t('button.learnMore')}&gt;</div>
        )}
      </motion.div>
      {children}
    </section>
  );
};
