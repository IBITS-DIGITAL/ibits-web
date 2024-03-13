import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as SC from './styled';
import GradientText from '../GradientText';

interface IProps {
  texts: string[];
  block?: boolean;
}

export default (props: IProps) => {
  const { texts, block = false } = props;
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((current) => (current + 1) % texts.length);
    }, 2000);

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
        {texts.map((text, index) => {
          const isGradientText = text.includes("***");
          const cleanText = isGradientText ? text.replace(/\*\*\*/g, '') : text; 

          return index === visibleIndex && (
            <motion.p
              key={text}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute' }}
            >
              {isGradientText ? <GradientText>{cleanText}</GradientText> : cleanText}
            </motion.p>
          )
        })}
      </AnimatePresence>
    </SC.Container>
  );
};