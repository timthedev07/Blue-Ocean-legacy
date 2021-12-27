import type { NextPage } from "next";
import { motion } from "framer-motion";
import { LanguageToggle } from "../components/LanguageToggle";

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

const Home: NextPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      {/* Hero */}
      <div className="w-full flex flex-col items-center justify-center h-[550px] bg-cyan-600 text-center relative">
        <img
          className="absolute z-0 w-full h-full object-cover object-center brightness-90"
          src="/images/landing-hero.jpeg"
          alt=""
        />
        <motion.div
          className="z-10 p-14 bg-opacity-70 bg-slate-700 rounded-lg"
          variants={fadeIn}
        >
          <h1 className="font-semibold z-20">Blue Ocean International Trade</h1>
          <span>An International Trading Business</span>
        </motion.div>
      </div>
      <section>
        <LanguageToggle />
      </section>
    </motion.div>
  );
};

export default Home;
