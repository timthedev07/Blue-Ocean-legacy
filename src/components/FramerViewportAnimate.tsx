import {
  motion,
  useAnimation,
  AnimationProps,
  ForwardRefComponent,
  HTMLMotionProps,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, useEffect } from "react";

export const AnimateVisible: FC<
  AnimationProps & {
    className: string;
    Wrapper?: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<any>>;
  }
> = ({ children, variants, transition, className, Wrapper = motion.div }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Wrapper
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition || { duration: 0.3 }}
      variants={variants}
      className={className}
    >
      {children}
    </Wrapper>
  );
};
