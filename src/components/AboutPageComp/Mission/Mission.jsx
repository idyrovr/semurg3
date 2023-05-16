import './Mission.scss'
import gif1 from '../../../assets/images/AboutPage/gif1.gif'
import gif2 from '../../../assets/images/AboutPage/gif2.gif'

export const Mission = () => {
    return (
        <section className='mission'>
            <div className="mission__ellipse">
                <div className="container">
                    <div className='mission__content'>
                        <div className="mission__gif1">
                            <img src={gif1} alt="" />
                        </div>
                        <p className="mission__desc">
                            <span className="mission__span"> Our mission </span>
                            is to provide efficient and reliable transportation solutions to meet
                            the unique needs of each of our clients. We understand the
                            challenges that come with logistics and strive to make the
                            shipping process as seamless as possible for our customers. <br></br><br></br>

                            As a brokerage company, we leverage our extensive network of carriers to find the
                            best solutions for our customers' transportation needs. Our team of experienced brokers
                            is dedicated to finding cost-effective and timely solutions to help our clients succeed.
                            <br></br><br></br>
                            At Semurg Transportation, we are committed to providing excellent customer service and
                            building long-term relationships with our clients. We take pride in our attention to
                            detail, reliability, and commitment to meeting our customers' needs.
                            <br></br><br></br>
                            Whether you need help with transportation for your business or personal needs, we are
                            here to help. Our team is available to answer any questions you may have and provide
                            you with the best solutions to meet your transportation needs.
                            <br></br><br></br>
                            Thank you for considering Semurg Transportation as your brokerag
                            e partner. We look forward to serving you!
                        </p>


                        <div className="mission__gif2">
                            <img src={gif2} alt="" />
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};