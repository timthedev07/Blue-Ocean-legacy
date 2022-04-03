import { FC, useState } from "react";
import { MobileNavList } from "./MobileNavList";
import { MobileNavTrigger } from "./MobileNavTrigger";

interface MobileNav {
  className?: string;
  isSmallMobile: boolean;
}

export const MobileNav: FC<MobileNav> = ({ className = "", isSmallMobile }) => {
  const disclosure = useState<boolean>(false);

  return (
    <div
      className={
        className +
        "  w-full h-14 bg-slate-900 flex px-5 items-center justify-start z-50 sticky top-0"
      }
    >
      <MobileNavTrigger disclosure={disclosure} />
      <MobileNavList isSmallMobile={isSmallMobile} disclosure={disclosure} />
    </div>
  );
};
