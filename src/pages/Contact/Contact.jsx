import HeroContact from '../../components/ContactPageComp/HeroContact';

import QuoteContact from '../../components/ContactPageComp/QuoteContact';
import Footer2 from '../../components/Footer2';
import './Contact.scss'

export const Contact = () => {
  return (
    <div className='contacts'>
      <HeroContact />
  
      <QuoteContact />
      <Footer2 />
    </div>
  );
};