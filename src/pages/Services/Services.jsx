import GetInTouch from '../../components/GetInTouch';
import HeroServices from '../../components/ServicesPageComp/HeroServices';
import ServicesAdvantage from '../../components/ServicesPageComp/ServicesAdvantage';
import ServicesDesc from '../../components/ServicesPageComp/ServicesDesc';
import './Services.scss'
import Footer2 from '../../components/Footer2';
export const Services = () => {
  return (
     <section className='services'>
        <HeroServices />
        <ServicesDesc />
        <ServicesAdvantage />
        <GetInTouch />
        <Footer2 />
     </section>
   );
};