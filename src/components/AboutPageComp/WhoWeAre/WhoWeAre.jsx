import './WhoWeAre.scss'
import truckimage2 from '../../../assets/images/AboutPage/truckimage2.png'

export const WhoWeAre = () => {
    return (
        <section className='whoweare'>
            <div className="container">
                <div className="whoweare__content content d-flex flex-column justify-center">
                    <p className="content__title">Welcome to Semurg Transportation! </p>
                    <p className="content__desc">We are a highly experienced transportation
                        company that has recently expanded our services to include brokerage.
                        With our vast knowledge and expertise as a carrier, we are 
                        well-positioned
                        to provide top-notch brokerage services to our customers.
                    </p>
                    <img src={truckimage2} alt="truckimage2" />
                </div>
            </div>
        </section>
    );
};