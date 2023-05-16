import { Link } from 'react-router-dom';
import './AboutHome.scss'

export const AboutHome = () => {
    return (
        <section className='abouthome'>
            <div className="container grid grid__col-6 justify-between align-center">
                <h2 className='abouthome__title'>About Our Company</h2>
                <div className='abouthome__right d-flex flex-column align-center'>
                    <p className='abouthome__desc'>Welcome to Semurg Transportation!
                        We are a highly experienced transportation company
                        that has recently expanded our services to include brokerage.
                        With our vast knowledge and expertise as a carrier,
                        we are well-positioned to provide top-notch brokerage services to our customers.</p>
                    <Link to="/about"><button className='abouthome__more'>Read more</button></Link>
                </div>

            </div>
        </section>
    );
};