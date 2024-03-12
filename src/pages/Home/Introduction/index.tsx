import * as SC from './styled';
import { motion } from 'framer-motion';
import Logo from '../../../components/Logo';
import RollingText from '../../../components/RollingText';

export default () => {
  // Animation variants
  const logoAnimation = {
    offscreen: { scale: 3.33, translateY: 75 },
    onscreen: { scale: 1, translateY: 0, transition: { duration: 0.3} }
  };

  const whereAnimation = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  const ideasAnimation = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  const meetsAnimation = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 0.3 } }
  };

  const executionAnimation = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <SC.Container
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <div>
        <Logo height="60px" variants={logoAnimation}/>
        <div>
          <motion.div variants={whereAnimation}>where</motion.div>
          &nbsp;
          <motion.div variants={ideasAnimation}>
            <RollingText texts={['IDEAS', '***IDEAS']} />
          </motion.div>
          &nbsp;
          <motion.div variants={meetsAnimation}>meets</motion.div>
          &nbsp;
          <motion.div variants={executionAnimation}>
            <RollingText texts={['EXECUTION', '***EXECUTION']} />
          </motion.div>
        </div>
      </div>
    </SC.Container>
  );
};
