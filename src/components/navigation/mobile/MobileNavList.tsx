import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { enNav, esNav, zhNav } from "../../../translations/components/Nav";
import { getTranslation } from "../../../utils/getTranslation";
import { NAV_LINKS } from "../Nav";
import { MobileNavElement } from "./MobileNavElement";
import { NavDisclosure } from "./MobileNavTrigger";

interface MobileNavListProps {
  disclosure: NavDisclosure;
  isSmallMobile: boolean;
}

export const MobileNavList: FC<MobileNavListProps> = ({
  disclosure: [open, setOpen],
  isSmallMobile,
}) => {
  const { locale } = useRouter();
  const t = getTranslation(locale, enNav, esNav, zhNav);

  return (
    <>
      <div
        className={`${
          isSmallMobile ? "w-full" : "w-60"
        } pt-20 z-[9998] transition-all duration-500 h-screen absolute top-0 bottom-0 bg-slate-900 filter brightness-[1.2] ${
          isSmallMobile
            ? !open
              ? "-top-[100vh] left-0"
              : "top-0 left-0"
            : !open
            ? "-left-[100%]"
            : "left-0 top-0"
        }`}
      >
        <Link href="/" passHref>
          <img
            src="/nav-logo.svg"
            alt=""
            onClick={() => {
              setOpen(false);
            }}
            className="h-14 mx-4 mb-6 w-auto cursor-pointer select-none"
          />
        </Link>
        {NAV_LINKS.map((each) => (
          <MobileNavElement
            key={each.name}
            name={t[each.name]}
            href={each.href}
            isSmallMobile={isSmallMobile}
            onClick={() => {
              setOpen(false);
            }}
          />
        ))}
      </div>

      {/* overlay */}
      <div
        className={`transition-all duration-500 bg-neutral-800 ${
          open ? "bg-opacity-40" : "bg-opacity-0"
        } blur-sm w-100% h-screen top-0 left-0 bottom-0 right-0 absolute ${
          !open ? "pointer-events-none" : ""
        }`}
        onClick={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
