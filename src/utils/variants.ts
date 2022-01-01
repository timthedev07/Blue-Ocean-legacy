export const listItemVariants = {
  initial: {
    x: "-50vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const getStaggerVariants = (diff: number = 0.15) => {
  return {
    animate: {
      transition: {
        staggerChildren: diff,
      },
    },
  };
};
