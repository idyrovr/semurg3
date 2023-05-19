import AboutHome from '../../components/AboutHome';
import Advantage from '../../components/Advantage';
import ContactHome from '../../components/ContactHome';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import MySwiper from '../../components/MySwiper';
import Footer2 from '../../components/Footer2'
import GetInTouch from '../../components/GetInTouch'

import { useState, useEffect } from 'react';


import './Home.scss'

const Home = () => {
   const [width, setWidth] = useState(window.innerWidth)
   useEffect(() => {
      const handleResize = (event) => {
         setWidth(event.target.innerWidth);

      };
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);

      };

   }, []);

   return (
      <div className='home'>
         <Hero />
         <AboutHome />
         <Advantage />
         <MySwiper />
         <ContactHome />
         {width > 950 ? null : (<GetInTouch />)}
         {width > 950 ? (<Footer />) : (<Footer2 />)}

      </div>
   );
};
export default Home