import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as SC from './styled';
import GradientText from '../GradientText';

interface IProps {
  texts: string[];
  block?: boolean;
}

const RollingText = (props: IProps) => {
  const { texts, block = false } = props;
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);
  const [isDelayed, setIsDelayed] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDelayed(false);
    }, 3000); // 2-second delay before starting the animation

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((current) => (current + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    if (containerRef.current) {
      const currentChild = containerRef.current.children[0] as HTMLElement | undefined;
      if (currentChild) {
        setContainerWidth(currentChild.offsetWidth);
      }
    }
  }, [visibleIndex, texts]);

  return (
    <SC.Container ref={containerRef} width={containerWidth} block={block}>
      <AnimatePresence>
        {isDelayed ? (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{ height: '1em' }}
          />
        ) : (
          texts.map((text, index) => {
            const isGradientText = text.includes("***");
            const cleanText = isGradientText ? text.replace(/\*\*\*/g, '') : text; 

            return index === visibleIndex && (
              <motion.p
                key={text}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute' }}
              >
                {isGradientText ? <GradientText>{cleanText}</GradientText> : cleanText}
              </motion.p>
            );
          })
        )}
      </AnimatePresence>
    </SC.Container>
  );
};

export default RollingText;
