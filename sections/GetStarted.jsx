'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
        <img src="/get-started.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
      <motion.div variants={fadeIn('left', 'sptring', 0.5, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| How Metaverses Work" />
        <TitleText title={<>Get Started with just a click</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[28px]">
          {startingFeatures.map((feature, index) => (<StartSteps key={feature} number={index + 1} text={feature} />))}
        </div>
      </motion.div>
    </motion.div>
    Get Started Section
  </section>
);

export default GetStarted;
