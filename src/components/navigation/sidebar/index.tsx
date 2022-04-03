import { FC } from "react";

interface Sidebar {
  className?: string;
}

export const Sidebar: FC<Sidebar> = ({ className = "" }) => {
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
