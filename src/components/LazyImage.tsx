import Image from "next/image";
import {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  useState,
  useRef,
  useEffect,
} from "react";

interface ExtraProps {
  isZoomable?: boolean;
  placeholderHeight?: string;
  containerStyles: string;
  src: string;
}

export const LazyImage: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> &
    ExtraProps
> = ({
  alt,
  src,
  className = "",
  isZoomable = false,
  placeholderHeight = "h-56",
  onClick,
  containerStyles,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [zoomInActive, setZoomInActive] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);

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
    <div ref={root} className={`relative ${containerStyles}`}>
      {isZoomable ? (
        <div
          className={`fixed ${
            zoomInActive ? "z-[99999] opacity-100" : "-z-[1000] opacity-0"
          } bg-black bg-opacity-60 w-full h-screen top-0 bottom-0 left-0 right-0 overflow-y-hidden flex justify-center items-center`}
          onClick={() => {
            setZoomInActive(false);
          }}
        >
          <div
            className={`flex justify-center items-start overflow-y-scroll h-[90vh] w-[90%] md:max-w-[500px] no-scrollbar rounded-xl p-4 scroll-p-4 bg-sky-800 bg-opacity-80 transition-transform duration-300 transform ${
              zoomInActive ? "translate-y-0" : "translate-y-[100%]"
            }`}
          >
            <Image src={src} className="rounded-xl" alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={
          `w-full ${placeholderHeight} ` +
          placeholderHeight +
          `
          bg-zinc-700
          ${isLoading ? "block" : "hidden"}
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
          className={`${className} w-full h-full ${
            isZoomable ? "cursor-pointer" : "cursor-default"
          }`}
          onClick={(e) => {
            if (onClick) onClick(e);
            if (!isZoomable) {
              return;
            }
            setZoomInActive(true);
          }}
          src={src}
          alt={alt}
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
