import Link from "next/link";
import { FC } from "react";

interface NavProps {
  className?: string;
}

interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/about", name: "About Us" },
  { href: "/contact", name: "Contact Us" },
  { href: "/products", name: "Products" },
];

export const Nav: FC<NavProps> = ({ className }) => {
  return (
    <nav
      className={
        className +
        " w-full h-12 bg-slate-900 flex pl-10 items-center z-50 sticky top-0"
      }
    >
      <Link href="/" passHref>
        <img
          src="/nav-logo.svg"
          alt=""
          className="h-[65%] w-auto cursor-pointer"
        />
      </Link>
      <ul className="w-full max-w-6xl h-full flex justify-around items-center">
        {NAV_LINKS.map(({ href, name }) => (
          <Link key={name} href={href} passHref>
            <li className="cursor-pointer text-neutral-400 transition duration-200 hover:text-slate-50">
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
