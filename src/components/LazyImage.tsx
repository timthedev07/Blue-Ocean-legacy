import {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  useState,
  useRef,
  useEffect,
} from "react";

interface WhileLoading {
  containerDimensions?: string;
  containerStyles?: string;
  placeholderStyles?: string;
  placeholderColor?: string;
}

interface ExtraProps {
  whileLoading?: WhileLoading;
}

export const LazyImage: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> &
    ExtraProps
> = ({ alt, src, className, whileLoading, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);
  const {
    containerDimensions = "w-full h-60",
    containerStyles,
    placeholderStyles,
    placeholderColor = "bg-zinc-600",
  } = whileLoading || {};

  useEffect(() => {
    if (!root.current) return;

    const onIntersection: IntersectionObserverCallback = (entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        observer.disconnect();
      }

      setIsInView(isIntersecting);
    };

    const observer = new IntersectionObserver(onIntersection, { threshold: 0 });
    observer.observe(root.current);
  }, []);

  return (
    <div
      ref={root}
      className={
        isLoading ? containerDimensions + " " + containerStyles : className
      }
    >
      <div
        className={
          "w-full h-full " +
          placeholderStyles +
          " " +
          placeholderColor +
          `
          overflow-hidden
          relative
          after:animate-[shine_1000ms_ease_infinite]
          after:absolute
          after:left-[-210%]
          after:w-[200%]
          after:h-[200%]
          after:opacity-0
          after:bg-neutral-200/[0.05]
          after:transform
          after:lazy-image-helper
          `
        }
      />
      {isInView ? (
        <img
          {...props}
          className={className}
          src={src}
          alt={alt}
          onLoad={() => {
            setIsLoading((prev) => !prev);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
