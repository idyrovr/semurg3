import './HeroContact.scss'
import { Link } from 'react-router-dom';
export const HeroContact = () => {
    return (
        <section className='herocontact'>
            <div className="container d-flex flex-column justify-center align-center">
                <h2 className="herocontact__title">Tell us what you're looking for</h2>
                <p className="herocontact__desc">Send us a message</p>
                <form action="" className="herocontact__form">
                    <div className="herocontact__main grid grid__col-6">
                        <div className='herocontact__div'>
                            <label className="herocontact__label" for='firstnameid'>First Name</label>
                            <input className='herocontact__firstname herocontact__input' type="text" placeholder='' id='firstnameid'></input>
                        </div>

                        <div className='herocontact__div'>
                            <label className="herocontact__label" for='lastnameid'>Last Name</label>
                            <input className='herocontact__lastname herocontact__input' type="text" placeholder='' id='lastnameid'></input>

                        </div>

                        <div className='herocontact__div'>
                            <label className="herocontact__label" for='contactemailid'>Email address</label>
                            <input className='herocontact__email herocontact__input' type="email" placeholder='example@domain.com' id='contactemailid'></input>
                        </div>


                        <div className='herocontact__div'>
                            <label className="herocontact__label" for='contactphoneid'>Phone number</label>
                            <input className='herocontact__phone herocontact__input' type="tel" placeholder='' id='contactphoneid'></input>
                        </div>


                    </div>
                    <div className='herocontact__div'>
                        <label className="herocontact__label" for='messageid'>Message</label>
                        <input className='herocontact__message' id='messageid'></input>
                    </div>

                    <div className='herocontact__agree d-flex align-center'>
                        <input type='checkbox' className='herocontact__check'></input>
                        <p className="herocontact__agree-desc">I agree to Semurg's 
                        <Link className="herocontact__agree-yellow"> Terms of Use </Link>
                        and 
                        <Link className="herocontact__agree-yellow"> Privacy and Cookies Policy </Link></p>
                    </div>
                    <button className='herocontact__submit'>Submit</button>
                </form>
            </div>
        </section>
    );
};