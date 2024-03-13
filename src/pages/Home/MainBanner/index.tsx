import * as SC from './styled';
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import RollingText from '../../../components/RollingText';

export default () => {
  return (
    <SC.Container>
      <div>
        <Logo height="200px" colored={false}/>
        <p>Your Premier Partner</p>
        <b><RollingText block texts={['B2B', 'B2C', 'B2B2C', 'Business IT Solutions']} /></b>
        <Button width='200px' lightTheme>Get in touch</Button>
      </div>
    </SC.Container>
  );
};

