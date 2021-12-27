import type { NextPage } from "next";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Hero */}
      <div className="w-full flex flex-col items-center justify-center h-[450px] bg-cyan-600 text-center relative">
        <img
          className="absolute z-0 w-full h-[90vh] object-cover object-center"
          src="/images/landing-hero.jpeg"
          alt=""
        />
        <motion.div
          className="z-10 p-14 bg-opacity-70 bg-slate-800"
          animate={{}}
        >
          <h1 className="font-semibold z-20">Blue Ocean International Trade</h1>
          <span>An International Trading Business</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
