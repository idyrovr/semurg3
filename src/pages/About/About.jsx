import HeroAbout from '../../components/AboutPageComp/HeroAbout';
import Mission from '../../components/AboutPageComp/Mission';
import WhoWeAre from '../../components/AboutPageComp/WhoWeAre';
import Footer2 from '../../components/Footer2';
import GetInTouch from '../../components/GetInTouch';
import './About.scss'

const About = () => {
  return (
     <div className='about'>
         <HeroAbout />
         <WhoWeAre />
         <Mission />
         <GetInTouch />
         <Footer2 />
     </div>
   );
};
export default About