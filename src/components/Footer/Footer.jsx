import './Footer.scss'
import logo from '../../assets/images/logo.png'
import GetQuote from '../GetQuoteButton';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <section className='footer'>
            <div className="container grid">
                <div className="footer__one one d-flex flex-column justify-center align-center">
                    <div className="one__logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <p className="one__desc">400 Market Pl Blvd 199 Cumming, GA 30041</p>
                    <GetQuote />

                </div>
                <div className="footer__pages pages d-flex flex-column justify-start">
                    <p className="footer__title pages__pages">Pages</p>
                    <Link to="/" className="pages__home pages__link">Home</Link>
                    <Link to="/about" className="pages__about pages__link">About Us</Link>
                    <Link to="/services" className="pages__services pages__link">Services</Link>
                    <Link to="/quote" className="pages__quote pages__link">Get a Quote</Link>
                </div>
                <div className="footer__hours hours d-flex flex-column justify-start">
                    <p className="footer__title">Busines hours</p>
                    <div className="hours__div d-flex align-center">
                        <svg className="hours__dot" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#FFF"></circle>
                        </svg>
                        <p className="hours__desc pages__link">Monday - Friday</p>
                    </div>
                    <div className="hours__div d-flex align-center">
                        <svg className="hours__dot" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#FFF"></circle>
                        </svg>
                        <p className="hours__desc pages__link">8 AM - 6 PM</p>
                    </div>
                    <div className="hours__div d-flex align-center">
                        <svg className="hours__dot" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#FFF"></circle>
                        </svg>
                        <p className="hours__desc pages__link">Saturday: 8 AM - 2 AM</p>
                    </div>
                    <div className="hours__div d-flex align-center">
                        <svg className="hours__dot" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#FFF"></circle>
                        </svg>
                        <p className="hours__desc pages__link">Sunday: Dayoff</p>
                    </div>

                </div>
                <div className="footer__contact contact d-flex flex-column justifystartr">
                    <p className="footer__title">Contact</p>
                    <div className='contact__div d-flex align-center'>
                        <svg className="contact__svg" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1858 11.7978H22.1858C22.1858 6.66783 18.3128 2.79883 13.1758 2.79883V4.79883C17.2378 4.79883 20.1858 7.74183 20.1858 11.7978Z" fill="white" />
                            <path d="M13.1858 8.79907C15.2888 8.79907 16.1858 9.69607 16.1858 11.7991H18.1858C18.1858 8.57407 16.4108 6.79907 13.1858 6.79907V8.79907ZM16.6078 14.2421C16.4157 14.0674 16.1632 13.9743 15.9036 13.9823C15.6441 13.9903 15.3978 14.0989 15.2168 14.2851L12.8238 16.7461C12.2478 16.6361 11.0898 16.2751 9.89783 15.0861C8.70583 13.8931 8.34483 12.7321 8.23783 12.1601L10.6968 9.76607C10.8832 9.5852 10.992 9.33889 11 9.07927C11.008 8.81966 10.9147 8.56711 10.7398 8.37507L7.04483 4.31207C6.86987 4.11942 6.62671 4.00257 6.36698 3.98633C6.10726 3.97008 5.85143 4.05573 5.65383 4.22507L3.48383 6.08607C3.31094 6.25958 3.20775 6.49052 3.19383 6.73507C3.17883 6.98507 2.89283 12.9071 7.48483 17.5011C11.4908 21.5061 16.5088 21.7991 17.8908 21.7991C18.0928 21.7991 18.2168 21.7931 18.2498 21.7911C18.4943 21.7774 18.7252 21.6737 18.8978 21.5001L20.7578 19.3291C20.9273 19.1316 21.0131 18.8758 20.9971 18.6161C20.981 18.3564 20.8643 18.1132 20.6718 17.9381L16.6078 14.2421Z" fill="white" />
                        </svg>

                        <Link className="contact__phone pages__link" to="tel:+14702607325">+1 470-260-7325</Link>
                    </div>
                    <div className='contact__div d-flex align-center'>
                        <svg className="contact__svg" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1858 4.79883H2.18579V20.7988H22.1858V4.79883ZM20.1858 8.79883L12.1858 13.7988L4.18579 8.79883V6.79883L12.1858 11.7988L20.1858 6.79883V8.79883Z" fill="white" />
                        </svg>

                        <Link className="contact__email pages__link" to="mailto:brokerage@semurgtrans.net">brokerage@semurgtrans.net</Link>
                    </div>

                    <div className='contact__div d-flex align-center'>
                        <svg className="contact__svg" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1858 2.29883C9.99856 2.30141 7.90163 3.17143 6.35502 4.71805C4.8084 6.26466 3.93838 8.36158 3.9358 10.5488C3.93318 12.3362 4.51704 14.0752 5.5978 15.4988C5.5978 15.4988 5.8228 15.7951 5.85955 15.8378L12.1858 23.2988L18.515 15.8341C18.548 15.7943 18.7738 15.4988 18.7738 15.4988L18.7745 15.4966C19.8548 14.0735 20.4384 12.3354 20.4358 10.5488C20.4332 8.36158 19.5632 6.26466 18.0166 4.71805C16.47 3.17143 14.373 2.30141 12.1858 2.29883V2.29883ZM12.1858 13.5488C11.5925 13.5488 11.0124 13.3729 10.5191 13.0432C10.0257 12.7136 9.64122 12.2451 9.41416 11.6969C9.1871 11.1487 9.12769 10.5455 9.24344 9.96356C9.3592 9.38161 9.64492 8.84707 10.0645 8.42751C10.484 8.00795 11.0186 7.72223 11.6005 7.60647C12.1825 7.49072 12.7857 7.55013 13.3338 7.77719C13.882 8.00425 14.3506 8.38877 14.6802 8.88212C15.0099 9.37547 15.1858 9.95548 15.1858 10.5488C15.1848 11.3442 14.8684 12.1067 14.306 12.6691C13.7436 13.2314 12.9811 13.5478 12.1858 13.5488V13.5488Z" fill="white" />
                        </svg>

                        <p className="contact__address pages__link">1400 Market Pl Blvd 199
                            Cumming, GA 30041</p>
                    </div>
                </div>
                <div className="footer__media media d-flex flex-column justify-start align-end">
                    <p className="footer__title">Social Media</p>
                    <div className="media__media d-flex align-center">
                            <i className="media__brand fa-brands fa-facebook-f"></i>
                            <i className="media__brand fa-brands fa-twitter"></i>
                            <i className="media__brand fa-brands fa-linkedin-in"></i>
                            <i className="media__brand fa-brands fa-instagram"></i>
                        </div>
                </div>
            </div>
        </section >
    );
};