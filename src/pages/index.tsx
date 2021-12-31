import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { LocaleType } from "../components/LanguageToggle";
import { enIndex, esIndex, zhIndex } from "../translations";
import { getTranslation } from "../utils/getTranslation";

const fadeIn = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const spotlightPicSize = "w-40 h-40";
const spotlightItem =
  "flex flex-col justify-around items-center text-center p-7 gap-5 grow shrink basis-0";

const Home: NextPage = () => {
  const router = useRouter();
  const locale = router.locale as LocaleType;
  const translation = getTranslation(locale, enIndex, esIndex, zhIndex);

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center h-[550px] bg-cyan-600 text-center relative">
        <img
          className="absolute z-0 w-full h-full object-cover object-center brightness-90"
          src="/images/landing-hero.jpeg"
          alt=""
        />
        <motion.div
          className="flex flex-col justify-center items-center gap-3 min-w-[300px] w-[80%] max-w-[1080px] min-h-[230px] z-10 p-14 bg-opacity-70 bg-slate-700 rounded-lg"
          variants={fadeIn}
        >
          <h1 className="font-semibold z-20 text-5xl md:text-[4rem] ">
            {translation.hero}
          </h1>
          <span>{translation.heroSubheading}</span>
        </motion.div>
      </div>
      <section>
        <div className="flex justify-around items-center w-[clamp(300px, 80%, 1200px)] bg-slate-400 bg-opacity-10 border rounded min-h-[400px] m-20 flex-col md:flex-row md:m-6">
          <motion.div className={spotlightItem}>
            <img
              src="/images/landing/product.svg"
              alt=""
              className={spotlightPicSize}
            />
            {translation.spotlight[0]}
          </motion.div>
          <motion.div className={spotlightItem}>
            <img
              src="/images/landing/quality.svg"
              alt=""
              className={spotlightPicSize}
            />
            {translation.spotlight[1]}
          </motion.div>
          <motion.div className={spotlightItem}>
            <img
              src="/images/landing/growth.svg"
              alt=""
              className={spotlightPicSize}
            />
            {translation.spotlight[2]}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
