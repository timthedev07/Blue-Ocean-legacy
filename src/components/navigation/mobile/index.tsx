import { FC } from "react";

interface MobileNav {
  className?: string;
}

export const MobileNav: FC<MobileNav> = ({ className = "" }) => {
  return (
    <div
      className={
        className +
        "  w-full h-14 bg-slate-900 flex pl-10 items-center justify-center z-50 sticky top-0 px-4"
      }
    >
      {/*  */}
      {/*  */}
    </div>
  );
};
