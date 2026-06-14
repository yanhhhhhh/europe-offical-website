import type { Variants } from 'motion/react';
export const defaultHeroEECommonSectionAnimation = {
  backgroundAnimation: 'blurIn',
  backgroundAnimationOnce: true,
  titleAnimation: 'fadeUp',
  titleAnimationOnce: false,
  descriptionAnimation: 'fadeUp',
  descriptionAnimationOnce: false,
} as const;
/**
 * 所有入场动画配置，支持基础/文本/3D/卡片等场景。
 * 使用方式：<motion.div variants={motionVariants.fadeUp} initial="hidden" animate="visible" />
 */
export const motionVariants = {
  /** A. 淡入上移：适用于内容块逐步展现（如 Section、卡片） */
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier(0.25, 0.46, 0.45, 0.94)
      },
    },
  },

  /** B. 淡入：适合渐变加载，如 icon、按钮、数字 */
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },

  /** C. 左滑入场：用于侧边滑入内容（如侧边栏、列表） */
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },

  /** D. 缩放入场：适合 icon、按钮、标题吸引注意 */
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },

  /** E. 弹跳上移：适合视觉吸引型卡片、CTA 按钮 */
  bounceUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: [0, 1, 1, 1],
      y: [60, -8, 0, -2, 0],
      transition: {
        duration: 0.9,
        times: [0, 0.5, 0.7, 0.85, 1],
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },

  /** F. 3D 扭曲揭示：适合科技感页面、品牌展示标题 */
  skewReveal: {
    hidden: {
      opacity: 0,
      skewY: 10,
      rotateX: 15,
      transformPerspective: 1000,
      transformOrigin: 'center center',
    },
    visible: {
      opacity: 1,
      skewY: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  /** G. Y 轴翻转入场：适用于卡片翻面、信息切换 */
  flipIn: {
    hidden: {
      opacity: 0,
      rotateY: -90,
      transformPerspective: 1000,
      transformOrigin: 'center center',
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      // transition: {
      //   duration: 4,
      //   ease: 'easeOut',
      // },
    },
  },

  /** H. 上升旋转微缩入场：用于焦点内容卡片或数字组件 */
  tiltRise: {
    hidden: {
      opacity: 0,
      y: 60,
      rotate: -5,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },

  /** I. 子元素逐个淡入：适合列表、步骤条的 stagger 动画 */
  trailFadeIn: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },

  /** J. 文本淡入上移：常用于段落文本、slogan 展现 */
  textFadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: [0, 0.5, 1],
      y: [30, 10, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.5, 1],
        ease: 'easeOut',
      },
    },
  },

  /** K. 文本缩放入场：适合大号标题文字、Logo 展现 */
  textZoomIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: [0, 1],
      scale: [0.85, 1],
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  /** L. 文本弹跳：增强节奏感，如数字、关键词段落 */
  textBounceIn: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: [0, 1, 1, 1],
      y: [60, -10, 0, -1.5, 0],
      transition: {
        duration: 0.9,
        times: [0, 0.6, 0.8, 0.92, 1],
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  /** M. 文本滑入 + skew：用于科技/动态文字 */
  textSlideInLeft: {
    hidden: { opacity: 0, x: -50, skewX: 5 },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  },

  /** N. 文本 3D Skew Reveal：适合品牌口号、Hero 标题 */
  textSkewReveal: {
    hidden: {
      opacity: 0,
      rotateX: 15,
      skewY: 10,
      transformPerspective: 1000,
      transformOrigin: 'center center',
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      skewY: 0,
      transformOrigin: 'center center',
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  /** O. 淡入右移：适用于标签、按钮、徽章类 */
  fadeRight: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  /** P. 模糊放大：适合渐显图片、背景图 */
  blurIn: {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  },

  /** Q. 从底部滑出：适合 footer、CTA、弹窗入场 */
  riseUp: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  },

  /** R. 遮罩滑出 Reveal：适合 Hero 区块、图片遮盖揭示 */
  maskReveal: {
    hidden: {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  },

  /** S. 延迟文本入场：用于逐句加载、重点展示的文本段 */
  delayedText: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },

  /** T. 卡片翻转：用于卡片背面信息、hover 展示 */
  cardFlipIn: {
    hidden: {
      rotateY: -180,
      opacity: 0,
      transformPerspective: 800,
      transformOrigin: 'center',
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  },

  /** U. Pop 放大震动：用于视觉吸引点、首次加载按钮等 */
  popShakeIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: [0.8, 1.05, 0.98, 1],
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  },
} as const satisfies Record<string, Variants>;

// 自动推导出所有动画 key 类型（用于组件调用、下拉选择等）
export type MotionVariantName = keyof typeof motionVariants;

/** 子元素统一 stagger 控制容器 */
export const textContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
