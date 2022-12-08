
import { motion } from 'framer-motion'
import styles from "../styles"
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components'
import { exploreWorlds } from '../constants'
import { startingFeatures } from '../constants';

const StartSteps = ({ text, number }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className='font-bold text-[24px] text-white'>0{number}</p>
    </div>
    <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]'>{text}</p>
  </div>
);

export default StartSteps;
