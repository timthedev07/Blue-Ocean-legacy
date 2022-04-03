import Link from "next/link";
import { FC } from "react";

interface SidebarElementProps {
  name: string;
  href: string;
  onClick?: Function;
  isSmallMobile: boolean;
}

export const MobileNavElement: FC<SidebarElementProps> = ({
  name,
  href,
  onClick,
  isSmallMobile,
}) => {
  return (
    <Link href={href} passHref>
      <div
        onClick={() => {
          if (onClick) onClick();
        }}
        className={`${
          isSmallMobile
            ? "flex justify-center items-center mx-2 my-5 rounded-md"
            : "w-auto px-3 pl-6"
        } cursor-pointer py-2 capitalize transition-all duration-150 bg-neutral-200 bg-opacity-0 hover:bg-opacity-20 select-none`}
      >
        {name}
      </div>
    </Link>
  );
};
