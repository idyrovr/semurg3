import { Link } from 'react-router-dom';
import './Footer2.scss'

export const Footer2 = () => {
    return (
        <section className='footer2'>
            <div className="container d-flex flex-column justify-start align-center">
                <p className="footer2__title">Contact</p>
                <Link to="tel:+14702607325" className="footer2__desc">+1 470-260-7325</Link>
                <Link to="mailto:brokerage@semurgtrans.net" className="footer2__desc">
                    brokerage@semurgtrans.net</Link>
                <p className="footer2__desc">1400 Market Pl Blvd 199 Cumming, GA 30041</p>

                <div className="footer2__media d-flex align-center">
                    <i className="footer2__brand fa-brands fa-facebook-f"></i>
                    <i className="footer2__brand fa-brands fa-twitter"></i>
                    <i className="footer2__brand fa-brands fa-linkedin-in"></i>
                    <i className="footer2__brand fa-brands fa-instagram"></i>
                </div>

                <p className="footer2__copyright">© 2023 Semurg Transport Inc</p>
            </div>
        </section>
    );
};