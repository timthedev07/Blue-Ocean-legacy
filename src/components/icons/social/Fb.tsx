import { FC, SVGProps } from "react";

export const Fb: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title />
      <path
        d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
        className="fill-cyan-600"
      />
      <path
        d="M630 1000V612.7h130l19.5-150.9H630v-96.4c0-43.7 12.1-73.5 74.8-73.5h79.9V157c-13.8-1.8-61.3-5.9-116.5-5.9-115.2 0-194.1 70.3-194.1 199.5v111.3H343.8v150.9h130.3V1000H630z"
        className="fill-white"
      />
    </svg>
  );
};
