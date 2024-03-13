import * as SC from './styled';
import { motion, Variants } from "framer-motion";

// Pre-set Animation
const animation: Variants = {
  offscreen: {
    opacity: 0, y: -150
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1
    }
  }
};

interface IProps {
  title: string;
  subTitle: string;
  variants?: any
}
export default (props: IProps) => {
  const { title, subTitle, variants = animation } = props;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <SC.Title
        variants={variants}
      >
        {title}
        <span>{subTitle}</span>
      </SC.Title>
    </motion.div>
  );
};

