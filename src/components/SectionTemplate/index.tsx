import * as SC from './styled';
import { animations } from './utils';
import { motion } from "framer-motion";
import Button from '../Button';

interface IInfo {
  title: string;
  description: string;
  buttonClick?: () => void;
  buttonText?: string;
  image: string;
  style?: string;
}
interface IProps {
  info: IInfo[];
}
export default (props: IProps) => {
  const { info } = props;

  return (
    <SC.SectionDetailsContainer>
      {info?.map(i => {
        const animationStyle = i?.style || 'style-1';
        return (
          <SC.SectionContainer
            className={animationStyle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className='big-circle' variants={animations?.[animationStyle]?.['big-circle']}/>
            <motion.div className='small-circle' variants={animations?.[animationStyle]?.['small-circle']}/>
            {i?.style === 'style-4' && <motion.div className='xs-circle' variants={animations?.[animationStyle]?.['xs-circle']}/>}
            <div>
              <SC.InfoContainer variants={animations?.[animationStyle]?.['info']}>
                <p>{i.title}</p>
                <div>{i.description}</div>
                {i.buttonText && <Button width='200px' onClick={i.buttonClick}>{i.buttonText}</Button>}
              </SC.InfoContainer>
            </div>
            <div>
              <SC.Image
                className='image'
                image={i.image}
                variants={animations?.[animationStyle]?.['image']}
              />
            </div>
          </SC.SectionContainer>
        )
      })}
    </SC.SectionDetailsContainer>
  );
};
