import Link from "next/link";
import { FC } from "react";

interface SidebarElementProps {
  name: string;
  href: string;
  onClick?: Function;
}

export const MobileNavElement: FC<SidebarElementProps> = ({
  name,
  href,
  onClick,
}) => {
  return (
    <Link href={href} passHref>
      <div
        onClick={() => {
          if (onClick) onClick();
        }}
        className="cursor-pointer w-auto px-4 py-3 capitalize transition-all duration-150 bg-neutral-200 bg-opacity-0 hover:bg-opacity-30"
      >
        {name}
      </div>
    </Link>
  );
};
