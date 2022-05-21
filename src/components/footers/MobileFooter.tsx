import { FC } from "react";
import Link from "next/link";
import { FooterLogo } from "./FooterLogo";

interface MobileFooterLinkProps {
  href: string;
  name: string;
}

const MobileFooterLink: FC<MobileFooterLinkProps> = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <li className="uppercase w-full active:bg-slate-700 text-center py-4 cursor-pointer">
        {name}
      </li>
    </Link>
  );
};

const LINKS: MobileFooterLinkProps[] = [
  {
    href: "/",
    name: "home",
  },
  {
    href: "/products",
    name: "products",
  },
  {
    href: "/privacy-policy",
    name: "privacy policy",
  },
  {
    href: "/terms-and-conditions",
    name: "terms & conditions",
  },
];

export const MobileFooter: FC = ({}) => {
  return (
    <div className="sticky min-w-[300px] w-full h-[550px] bg-slate-900 flex flex-col items-center">
      <FooterLogo className="w-72" />
      <ul className="w-full">
        {LINKS.map((each) => (
          <MobileFooterLink {...each} key={each.name} />
        ))}
      </ul>
      <hr className="w-[90%] mt-7" />
      <div className="w-[90%] h-8 m-auto">
        <span className="text-xs float-right my-5">
          {new Date(Date.now()).getFullYear()} © Tim &nbsp;&nbsp;&nbsp; All
          Rights Reserved
        </span>
      </div>
    </div>
  );
};
