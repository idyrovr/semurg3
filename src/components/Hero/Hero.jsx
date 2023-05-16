import GetQuote from '../GetQuoteButton';
import './Hero.scss'
import Eclipse from '../../assets/images/Ellipse.png'

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='container d-flex flex-column'>
                <div className='hero__content d-flex flex-column'>
                    <img className="hero__eclipse" src={Eclipse} alt="eclipse"></img>
                    <p className='hero__desc-sm'>Logistics made easy</p>
                    <p1 className='hero__title'>SEMURG</p1>
                    <p className='hero__desc'>Delivering success, one shipment at a time -
                        with our expert logistics brokerage services.</p>
                        <div className='hero__button'><GetQuote /></div>
                </div>

            </div>

        </section>
    );
};