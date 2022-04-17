import { FC, SVGProps } from "react";

type StarsProps = SVGProps<SVGSVGElement>;

const STAR_COLOR = "fill-amber-400";

export const HalfStar: FC<StarsProps> = (props) => {
  return (
    <svg viewBox="0 0 536 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
        className={STAR_COLOR}
      />
    </svg>
  );
};

export const Star: FC<StarsProps> = (props) => {
  return (
    <svg viewBox="0 0 536 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M 508.55 171.51 L 362.18 150.2 L 296.77 17.81 C 290.89 5.98 279.42 0 267.95 0 c -11.4 0 -22.79 5.9 -28.69 17.81 l -65.43 132.38 l -146.38 21.29 c -26.25 3.8 -36.77 36.09 -17.74 54.59 l 105.89 103 l -25.06 145.48 C 86.98 495.33 103.57 512 122.15 512 c 4.93 0 10 -1.17 14.87 -3.75 l 130.95 -68.68 l 130.94 68.7 c 4.86 2.55 9.92 3.71 14.83 3.71 c 18.6 0 35.22 -16.61 31.66 -37.4 l -25.03 -145.49 l 105.91 -102.98 c 19.04 -18.5 8.52 -50.8 -17.73 -54.6 z z"
        className={STAR_COLOR}
      />
    </svg>
  );
};
