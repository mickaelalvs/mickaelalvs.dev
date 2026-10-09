export const riseIn = {
  variants: {
    hidden: {opacity: 0, y: 12},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const},
    },
  },
  initial: 'hidden',
  animate: 'visible',
} as const;
