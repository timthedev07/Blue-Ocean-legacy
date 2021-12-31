import { motion, useAnimation, AnimationProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, useEffect } from "react";

export const AnimateVisible: FC<AnimationProps> = ({
  children,
  variants,
  transition,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
