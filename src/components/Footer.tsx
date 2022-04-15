import { FC } from "react";
import { FooterLogo } from "./FooterLogo";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="sticky w-full h-72 bg-slate-900 p-6">
      <FooterLogo className="w-72" />
    </div>
  );
};
