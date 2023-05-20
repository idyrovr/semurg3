import HeroContact from '../../components/ContactPageComp/HeroContact';
import { MapContact } from '../../components/ContactPageComp/MapContact/MapContact';

import QuoteContact from '../../components/ContactPageComp/QuoteContact';
import Footer2 from '../../components/Footer2';
import './Contact.scss'

export const Contact = () => {
  return (
    <div className='contacts'>
      <HeroContact />
      <MapContact />
      <QuoteContact />
      <Footer2 />
    </div>
  );
};