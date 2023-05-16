import AboutHome from '../../components/AboutHome';
import Advantage from '../../components/Advantage';
import ContactHome from '../../components/ContactHome';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import MySwiper from '../../components/MySwiper';


import './Home.scss'

const Home = () => {
   return (
      <div className='home'>
         <Hero />
         <AboutHome />
         <Advantage />
         <MySwiper />
         <ContactHome />
         <Footer />
      </div>
   );
};
export default Home