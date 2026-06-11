// hooks/useMotionTextAnimation.ts
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { textContainerVariant } from '@/constants/motionVariants';

export function useMotionTextAnimation(
  isEnabled: boolean = false,
  once: boolean = true
) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -20% 0px',
  });

  return {
    ref,
    motionProps: isEnabled
      ? {
          initial: 'hidden',
          animate: isInView ? 'visible' : 'hidden',
          variants: textContainerVariant,
        }
      : {
          initial: undefined,
          animate: undefined,
          variants: undefined,
        },
  };
}
