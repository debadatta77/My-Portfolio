import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      <div className="mt-10 mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((group) => (
          <div
            key={group.category}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-tertiary/90 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/50 hover:shadow-[#915EFF]/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#915EFF]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative mb-4 flex items-center justify-between gap-3">
              <h3 className="text-[18px] font-bold tracking-wide text-white">
                {group.category}
              </h3>
              <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00CEA8] shadow-[0_0_12px_rgba(145,94,255,0.55)]" />
            </div>

            <div className="relative flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-secondary transition-colors duration-300 group-hover:border-white/20 group-hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
