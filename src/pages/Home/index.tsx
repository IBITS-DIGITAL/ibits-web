import MainBanner from './MainBanner';
import Introduction from './Introduction';
import HowDoWeDoThis from './HowDoWeDoThis';
import Slider from './Slider';
import SectionTemplate from '../../components/SectionTemplate';
import { SECTION_DATA, SLIDE_DATA } from './data';

import Title from '../../components/Title';

export default () => {
  return (
    <>
      <MainBanner/>
      <Introduction/>
      <Title title='Empowering Your' subTitle='Online Presence'/>
      <SectionTemplate info={SECTION_DATA}/>
      <HowDoWeDoThis/>
      <Slider slides={SLIDE_DATA}/>
    </>
  );
};
