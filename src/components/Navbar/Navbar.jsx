import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import ContactUsButton from '../ContactButton';
import { useState } from 'react';



export const Navbar = () => {
   const [active, setActive ] = useState(false)
   return (
      <header className="header" id="header">

         <div className="container h-100 d-flex align-center justify-between">
            <Link to="/" className="header__logo">
               <img src={Logo} alt="logo" />
            </Link>


            <nav className="header__nav">
               <NavLink to="/" className="header__link canHover">Home</NavLink>
               <NavLink to="/about" className="header__link canHover">About</NavLink>
               <NavLink to="/services" className="header__link canHover">Services</NavLink>
               <NavLink to="/quote" className="header__link canHover">Get a quote</NavLink>
               <NavLink to="tel:+14702607325" className="header__link"><button className="header__button">+1 470-260-7325</button></NavLink>
               <NavLink to="/contact" className="header__link"><ContactUsButton></ContactUsButton></NavLink>
            </nav>
            
            
            <div onClick={() => {setActive(prev => !prev)}} className={'header__burger burger ' + (active ? "active" : "")}>
            </div>



         </div>
         {active && 
         
         <div className='burger__menu'>
            <nav className="burger__nav d-flex flex-column align-center justify-center">
               <NavLink to="/" className="burger__link canHover">Home</NavLink>
               <NavLink to="/about" className="burger__link canHover">About</NavLink>
               <NavLink to="/services" className="burger__link canHover">Services</NavLink>
               <NavLink to="/quote" className="burger__link canHover">Get a quote</NavLink>
               <NavLink to="/contact" className="burger__link canHover">Contact Us</NavLink>
            </nav>
            </div>}
      </header>
   );
};