import * as SC from './styled';
import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  onClick?: (e: any) => void;
  width?: string;
  lightTheme?: boolean;
}
export default (props: IProps) => {
  const { children, onClick, width, lightTheme } = props;
  return (
    <SC.Button
      onClick={onClick}
      width={width}
      lightTheme={lightTheme}
    >
      {children}
    </SC.Button>
  )
};
