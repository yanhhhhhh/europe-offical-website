'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MotionVariantName, motionVariants } from '@/constants/motionVariants';
import Image, { StaticImageData } from 'next/image';

export interface HeroEECommonSectionProps {
  layoutStyle?: React.CSSProperties;
  layoutClassName?: string;
  title: string;
  titleClassName?: string;
  contentClassName?: string;
  titleStyle?: React.CSSProperties;
  description?: string;
  descriptionClassName?: string;
  descriptionStyle?: React.CSSProperties;
  image: StaticImageData;
  mobileImage: StaticImageData;
  imageClassName?: string;
  mobileImageClassName?: string;
  imageStyle?: React.CSSProperties;
  mobileImageStyle?: React.CSSProperties;
  children?: React.ReactNode;
  contentChildren?: React.ReactNode;

  // Animation props
  backgroundAnimation?: MotionVariantName | false;
  backgroundAnimationOnce?: boolean;
  titleAnimation?: MotionVariantName | false;
  titleAnimationOnce?: boolean;
  descriptionAnimation?: MotionVariantName | false;
  descriptionAnimationOnce?: boolean;
  contentChildrenAnimation?: MotionVariantName | false;
  contentChildrenAnimationOnce?: boolean;
}

export default function HeroEECommonSection(props: HeroEECommonSectionProps) {
  const {
    title,
    titleStyle,
    titleClassName = '',
    contentClassName = '',
    contentChildren,
    description,
    descriptionStyle,
    image,
    mobileImage,
    imageStyle,
    mobileImageStyle,
    layoutStyle,
    layoutClassName = '',
    descriptionClassName = '',
    mobileImageClassName = '',
    imageClassName = '',

    // Animation props
    backgroundAnimation = false,
    backgroundAnimationOnce = true,
    titleAnimation = false,
    titleAnimationOnce = true,
    descriptionAnimation = false,
    descriptionAnimationOnce = true,
    contentChildrenAnimation = false,
    contentChildrenAnimationOnce = true,
  } = props;

  // Animation refs
  const pcBackgroundRef = useRef(null);
  const mobileBackgroundRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentChildrenRef = useRef(null);

  // Animation inView states
  const pcBackgroundInView = useInView(pcBackgroundRef, {
    once: backgroundAnimationOnce,
    margin: '0px 0px -40% 0px',
  });
  const mobileBackgroundInView = useInView(mobileBackgroundRef, {
    once: backgroundAnimationOnce,
    margin: '0px 0px -50% 0px',
  });

  const titleInView = useInView(titleRef, {
    once: titleAnimationOnce,
    margin: '0px 0px -10% 0px',
  });

  const descriptionInView = useInView(descriptionRef, {
    once: descriptionAnimationOnce,
    margin: '0px 0px -10% 0px',
  });

  const contentChildrenInView = useInView(contentChildrenRef, {
    once: contentChildrenAnimationOnce,
    margin: '0px 0px -20% 0px',
  });

  const layoutClass = `hero-layout-section bg-dark p-[20px]  text-white h-[1210px] lg:h-[800px] ${layoutClassName}`;
  const titleClass = ` text-[48px] font-bold ${titleClassName}`;
  const descriptionClass = `mt-[20px] text-[30px] mb-[36px] lg:text-[24px] lg:mt-[10px] ${descriptionClassName}`;
  const contentClass = `absolute left-0 top-0 pt-[60px] lg:pt-[100px] w-full  flex flex-col justify-center items-center z-10 ${contentClassName}`;
  const mobileImageClass = `hero-layout-mobile absolute w-full inset-0  ${mobileImageClassName}`;
  const imageClass = `hero-layout-pc absolute inset-0 w-full mx-auto ${imageClassName}`;

  return (
    <section className={layoutClass} style={layoutStyle}>
      {/* Background Images with Animation */}
      {backgroundAnimation ? (
        <motion.div
          ref={pcBackgroundRef}
          variants={motionVariants[backgroundAnimation]}
          initial="hidden"
          animate={pcBackgroundInView ? 'visible' : 'hidden'}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`${imageClass} `}
          style={imageStyle}
        >
          <Image
            src={image}
            alt={title}
            fill={true}

            // className="w-full h-full"
          />
        </motion.div>
      ) : (
        <div className={`${imageClass} no-aniam `} style={imageStyle}>
          <Image src={image} alt={title} fill={true} />
        </div>
      )}

      {backgroundAnimation ? (
        <motion.div
          ref={mobileBackgroundRef}
          variants={motionVariants[backgroundAnimation]}
          initial="hidden"
          animate={mobileBackgroundInView ? 'visible' : 'hidden'}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={mobileImageClass}
          style={mobileImageStyle}
        >
          <Image src={mobileImage} alt={title} fill={true} sizes="100vw" />
        </motion.div>
      ) : (
        <div className={mobileImageClass} style={mobileImageStyle}>
          <Image
            src={mobileImage}
            alt={title}
            fill={true}
            sizes="100vw"
            // className="w-full h-full"
            // className={mobileImageClass}
            // style={mobileImageStyle}
          />
        </div>
      )}

      <div className={contentClass}>
        {/* Title with Animation */}
        {titleAnimation ? (
          <motion.h2
            ref={titleRef}
            className={titleClass}
            style={titleStyle}
            variants={motionVariants[titleAnimation]}
            initial="hidden"
            animate={titleInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {title}
          </motion.h2>
        ) : (
          <h2 className={titleClass} style={titleStyle}>
            {title}
          </h2>
        )}

        {/* Description with Animation */}
        {description &&
          (descriptionAnimation ? (
            <motion.div
              ref={descriptionRef}
              className={descriptionClass}
              style={descriptionStyle}
              variants={motionVariants[descriptionAnimation]}
              initial="hidden"
              animate={descriptionInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {description}
            </motion.div>
          ) : (
            <div className={descriptionClass} style={descriptionStyle}>
              {description}
            </div>
          ))}

        {/* ContentChildren with Animation */}
        {contentChildren &&
          (contentChildrenAnimation ? (
            <motion.div
              ref={contentChildrenRef}
              variants={motionVariants[contentChildrenAnimation]}
              initial="hidden"
              animate={contentChildrenInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {contentChildren}
            </motion.div>
          ) : (
            contentChildren
          ))}
      </div>

      <>{props.children}</>
    </section>
  );
}
