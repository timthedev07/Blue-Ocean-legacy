import Link from "next/link";
import { FC } from "react";

interface SidebarElementProps {
  icon?: any;
  name: string;
  href: string;
}

export const SidebarElement: FC<SidebarElementProps> = ({
  name,
  href,
  icon,
}) => {
  return (
    <Link href={href} passHref>
      <div>{name}</div>
    </Link>
  );
};
