import { NextPage } from "next";
import { useRouter } from "next/router";
import { enAbout, esAbout, zhAbout } from "../translations/about";
import { getTranslation } from "../utils/getTranslation";

const About: NextPage = () => {
  const { locale } = useRouter();
  const t = getTranslation(locale, enAbout, esAbout, zhAbout);
  return <div className="p-12">{t.info}</div>;
};

export default About;
