import logo from '../../assets/ibits-logo.svg';
import * as SC from './styled';

const bounceInVariants = {
  hidden: { y: -200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 1,
      duration: 1,
      delay: 1
    }
  }
};

interface IProps {
  colored?: boolean;
  onClick?: (e: any) => void;
  hasOnClick?: boolean; 
  height?: string;
  variants?: any;
}

const Logo = (props: IProps) => {
  const { colored = true, onClick, height = '43px', variants = bounceInVariants } = props;
  return (
    <SC.Logo
      colored={colored}
      src={logo}
      alt="IBITS"
      onClick={onClick}
      height={height}
      hasOnClick={!!onClick}
      initial="hidden"
      animate="visible"
      variants={variants}
    />
  );
};

export default Logo;
