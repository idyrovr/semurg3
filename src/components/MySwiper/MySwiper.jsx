import './MySwiper.scss'
// import volvo from '../../assets/images/Volvo.jpg'
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import './MySwiper.scss';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'





import slide_image_1 from '../../assets/images/ServicesPage/truck.jpg';
import slide_image_2 from '../../assets/images/Volvo.jpg';
import slide_image_3 from '../../assets/images/AboutPage/truckimage.jpg';
import { useRef, useState } from 'react';


SwiperCore.use([Autoplay, Virtual, Navigation, Pagination]);

export const MySwiper = () => {

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);

  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <section className='myswiper'>
      <div className="container">

        {/* <Swiper
          effect={'coverflow'}
          grabCursor={true}

          loop={true}
          slidesPerView={'1'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>



          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper> */}
       
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          onSwiper={setSwiperRef}
          slidesPerView={1.7}
          centeredSlides={true}
          spaceBetween={45}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          virtual
        >
          <SwiperSlide virtualIndex={0}>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide virtualIndex={1}>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide virtualIndex={2}>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide virtualIndex={3}>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
 
          <div className="slider-controler">

            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        <p className="append-buttons">
          <button onClick={() => prepend()} className="prepend-2-slides">
     
          </button>
          <button onClick={() => slideTo(1)} className="prepend-slide">
    
          </button>
          <button onClick={() => slideTo(250)} className="slide-250">
    
          </button>
          <button onClick={() => slideTo(500)} className="slide-500">
        
          </button>
          <button onClick={() => append()} className="append-slides">
       
          </button>
        </p>
      </div>
    </section>

  );



};