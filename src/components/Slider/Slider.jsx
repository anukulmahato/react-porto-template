// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Slider.css";

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="swiperSingleImage">
               <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-1.jpg" alt="" />
            </div>
            <div className="slide_content">
              <h4>Do You Need a NEW</h4>
              <h2>Web Design?</h2>
              <p>Check out our options and features</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="swiperSingleImage">
               <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-2.jpg" alt="" />
            </div>
            <div className="slide_content">
              <h4>We work hard and porto has</h4>
              <h2>The Best Design</h2>
              <p>Trusted by over 40,000 satisfied users, Porto is a huge success in the one of largest world's MarketPlace</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="swiperSingleImage">
               <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-3.jpg" alt="" />
            </div>
            <div className="slide_content">
              <h4>Do You Need a NEW</h4>
              <h2>Web Design?</h2>
              <p>Check out our options and features</p>
            </div>
          </SwiperSlide>
          
      </Swiper>


    </>
  )
}

export default Slider;