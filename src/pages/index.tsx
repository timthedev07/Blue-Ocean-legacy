import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { LocaleType } from "../components/LanguageToggle";
import { enIndex, esIndex, zhIndex } from "../translations";
import { getTranslation } from "../utils/getTranslation";
import { AnimateVisible } from "../components/FramerViewportAnimate";
import { useState } from "react";

const start = {
  y: 100,
  opacity: 0,
};
const animate = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 1,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
};
const fadeInHero = {
  initial: start,
  animate,
};
const fadeIn = {
  hidden: start,
  visible: animate,
};
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
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
  const [showCover, setShowCover] = useState<boolean>(false);

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center h-[550px] bg-cyan-600 text-center relative">
        <div
          className={`transition-all duration-700 ${
            showCover ? "left-0" : "-left-[100vw]"
          } w-full h-full bg-neutral-900 bg-opacity-80 absolute z-[11] p-9 flex flex-col items-start`}
          onMouseEnter={() => {
            setShowCover(true);
          }}
          onMouseLeave={() => {
            setShowCover(false);
          }}
        >
          <motion.h3
            variants={{
              initial: {
                x: "-50vw",
                opacity: 0,
              },
              animate: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
          >
            Our vision
          </motion.h3>
          {showCover ? (
            <motion.ul
              className="pl-4 flex flex-col items-start"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {translation.visions.map((each) => (
                <motion.li
                  className="m-3"
                  key={each}
                  variants={{
                    initial: {
                      x: "-50vw",
                      opacity: 0,
                    },
                    animate: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      },
                    },
                  }}
                >
                  {each}
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            ""
          )}
        </div>
        <img
          className="absolute z-0 w-full h-full object-cover object-center brightness-90"
          src="/images/landing-hero.jpeg"
          alt=""
          onMouseEnter={() => {
            setShowCover(true);
          }}
          onMouseLeave={() => {
            setShowCover(false);
          }}
        />
        <motion.div
          className="flex flex-col justify-center items-center gap-3 min-w-[300px] w-[80%] max-w-[1080px] min-h-[230px] z-10 p-14 bg-opacity-70 bg-slate-700 rounded-lg"
          variants={fadeInHero}
        >
          <h1 className="font-semibold z-20 text-5xl md:text-[4rem] ">
            {translation.hero}
          </h1>
          <span>{translation.heroSubheading}</span>
        </motion.div>
      </div>
      <section>
        <AnimateVisible
          variants={stagger}
          className="flex justify-around items-center w-[clamp(300px, 80%, 1200px)] bg-slate-400 bg-opacity-10 border rounded min-h-[400px] m-20 flex-col md:flex-row md:m-6"
        >
          <AnimateVisible variants={fadeIn} className={spotlightItem}>
            <img
              src="/images/landing/product.svg"
              alt=""
              className={spotlightPicSize}
            />
            {translation.spotlight[0]}
          </AnimateVisible>
          <AnimateVisible variants={fadeIn} className={spotlightItem}>
            <img
              src="/images/landing/quality.svg"
              alt=""
              className={spotlightPicSize}
            />
            {translation.spotlight[1]}
          </AnimateVisible>
          <AnimateVisible variants={fadeIn} className={spotlightItem}>
            <img
              src="/images/landing/growth.svg"
              alt=""
              className={spotlightPicSize}
            />
            {translation.spotlight[2]}
          </AnimateVisible>
        </AnimateVisible>
      </section>
    </motion.div>
  );
};

export default Home;
