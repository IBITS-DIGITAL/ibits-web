import logo from '../../assets/ibits-logo.svg';
import * as SC from './styled';

interface IProps {
  colored?: boolean;
  onClick?: (e: any) => void;
  height?: string;
  variants?: any;
}
export default (props: IProps) => {
  const { colored = true, onClick, height = '43px', variants } = props;
  return (
    <SC.Logo
      colored={colored}
      src={logo}
      alt="IBITS"
      onClick={onClick}
      height={height}
      hasOnClick={!!onClick}
      variants={variants}
    />
  )
};
