import * as SC from './styled';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

export default () => {
  return (
    <SC.FooterContainer>
      <div>
        <SC.SectionInner>
          <SC.Section className='logo-container'>
            <Link to='/'><Logo height='123px'/></Link>
          </SC.Section>
          <SC.Section>
            <SC.Heading>Company</SC.Heading>
            <SC.List>
              <SC.ListItem><Link to='#'>About Us</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>News & Media</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>Partners</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>Careers</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>Contact Us</Link></SC.ListItem>
            </SC.List>
          </SC.Section>
          <SC.Section>
            <SC.Heading>Services</SC.Heading>
            <SC.List>
              <SC.ListItem><Link to='#'>Web Development</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>Web Design</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>UI/UX Design</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>Mobile App Development</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>B2B</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>B2C</Link></SC.ListItem>
              <SC.ListItem><Link to='#'>B2B2C</Link></SC.ListItem>
            </SC.List>
          </SC.Section>
          <SC.Section>
            <SC.Heading>Contact Us</SC.Heading>
            <SC.List>
              <SC.ListItem><Link to='#'>Web Development</Link></SC.ListItem>
            </SC.List>
            {/* <EmailLink href="mailto:info@ibitsdigital.com">info@ibitsdigital.com</EmailLink> */}
            <SC.Heading>Follow Us</SC.Heading>
            {/* Add social media links here */}
          </SC.Section>
        </SC.SectionInner>
        <SC.BottomText>© 2024 iBits Digital. All Rights Reserved</SC.BottomText>
      </div>
    </SC.FooterContainer>
  );
};
