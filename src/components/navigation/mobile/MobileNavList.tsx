import { FC } from "react";
import { NavDisclosure } from "./MobileNavTrigger";

interface MobileNavListProps {
  disclosure: NavDisclosure;
}

export const MobileNavList: FC<MobileNavListProps> = ({
  disclosure: [open, setOpen],
}) => {
  open;
  return (
    <>
      <div
        className={`z-[9998] transition-all duration-500 h-screen absolute top-0 bottom-0 w-60 bg-slate-900 filter brightness-[1.2] ${
          !open ? "-left-[100%]" : "left-0"
        }`}
      ></div>

      {/* overlay */}
      <div
        className={`transition-all duration-500 absolute bg-neutral-800 ${
          open ? "bg-opacity-40" : "bg-opacity-0"
        } blur-sm w-100% h-screen top-0 left-0 bottom-0 right-0`}
        onClick={() => {
          setOpen(false);
        }}
      ></div>
    </>
  );
};
