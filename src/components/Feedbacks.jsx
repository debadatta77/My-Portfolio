import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 sm:p-10 rounded-3xl w-full max-w-[320px] lg:w-[320px] shadow-lg"
  >
    <div className="mt-1">
      <p className="text-white font-bold text-[22px] tracking-wider">{name}</p>

      <div className="mt-5 flex flex-col gap-4">
        <p className="text-white tracking-wider text-[16px] leading-[28px] whitespace-pre-line">
          {testimonial}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[180px] md:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My learning path</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>

      <div
        className={`relative z-20 -mt-12 md:-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 gap-8 place-items-center lg:flex lg:flex-wrap lg:gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="w-full lg:w-auto lg:flex-none flex justify-center"
          >
            <FeedbackCard index={index} {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
