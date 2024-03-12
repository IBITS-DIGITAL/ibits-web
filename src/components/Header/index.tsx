import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as SC from './styled';
import Button from '../Button';
import Logo from '../Logo';

export default () => {
  // State to hold whether the page has been scrolled past a certain point
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array means this effect runs once on mount and cleanup on unmount

  return (
    <SC.HeaderContainer isScrolled={isScrolled}>
      <SC.HeaderInner>
        <Link to="/"><Logo/></Link>
        <SC.NavContainer>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/works">Works</Link>
        </SC.NavContainer>
        <Button>Contact</Button>
      </SC.HeaderInner>
    </SC.HeaderContainer>
  );
};
