import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import {
  enFooter,
  esFooter,
  zhFooter,
} from "../translations/components/footer";
import { getTranslation } from "../utils/getTranslation";
import { FooterLogo } from "./FooterLogo";
import { Fb } from "./icons/social/Fb";
import { Twitter } from "./icons/social/Twitter";

interface FooterLinkProps {
  href: string;
  name: string;
}

const FooterLink: FC<FooterLinkProps> = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <li className="capitalize cursor-pointer transition-all duration-200 hover:text-cyan-300">
        {name}
      </li>
    </Link>
  );
};

export const Footer: FC = ({}) => {
  const { locale } = useRouter();
  const t = getTranslation(locale, enFooter, esFooter, zhFooter);

  return (
    <div className="sticky w-full h-80 bg-slate-900 p-6">
      <div className="flex justify-start gap-16">
        <FooterLogo className="w-72" />
        <article className="flex flex-col">
          <h5 className="uppercase font-bold text-lg">{t.subheading0}</h5>
          <ul className="text-sm">
            <FooterLink href="/" name="Home" />
            <FooterLink href="/about" name="About Us" />
            <FooterLink href="/products" name="Products" />
          </ul>
        </article>
        <article className="flex flex-col">
          <h5 className="uppercase font-bold text-lg">{t.subheading1}</h5>
          <ul className="text-sm">
            <FooterLink href="/contact" name="Contact Us" />
            <FooterLink href="/privacy-policy" name="Privacy Policy" />
            <FooterLink
              href="/terms-and-conditions"
              name="Terms and Conditions"
            />
          </ul>
        </article>
        <article className="flex-1 flex justify-center items-center gap-8">
          <Twitter className="w-10" />
          <Fb className="w-10" />
        </article>
      </div>
      <hr className="w-[90%] m-auto bg-slate-500" />
      <div className="w-[90%] h-8 m-auto">
        <span className="text-xs float-right my-5">
          {new Date(Date.now()).getFullYear()} © Tim &nbsp;&nbsp;&nbsp; All
          Rights Reserved
        </span>
      </div>
    </div>
  );
};
