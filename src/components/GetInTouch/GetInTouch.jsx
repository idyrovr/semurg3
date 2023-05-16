import { ContactUsButton } from '../ContactButton/ContactUsButton';
import './GetInTouch.scss'
import { Link } from 'react-router-dom';

export const GetInTouch = () => {
  return (
     <section className='getintouch'>
        <div className="container d-flex flex-column justify-center align-center">
            <p className="getintouch__title">Let's Get in Touch!</p>
            <Link className="getintouch__button" to="/contact"><ContactUsButton></ContactUsButton></Link>
        </div>
     </section>
   );
};