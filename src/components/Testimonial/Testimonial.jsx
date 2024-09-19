// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./Testimonial.css";

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="testimonial_item">
                <div className="testimonial_content">
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ut nam amet sit ipsa esse excepturi facere minus. Voluptatem minus neque eveniet recusandae!</p>
                    </blockquote>
                    <div className="testimonial_arrow_down"></div>
                </div>
                <div className="author_info">
                    <div className="author_img">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipOfBgQae8edsAzIwXZXx_4lKqfO1ssj4Clj5zvU=s680-w680-h510" alt="" />
                    </div>
                    <div className="author_content">
                        <h2>Anukul Mahato</h2>
                        <p>CEO & Founder - Okler</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_item">
                <div className="testimonial_content">
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ut nam amet sit ipsa esse excepturi facere minus. Voluptatem minus neque eveniet recusandae!</p>
                    </blockquote>
                    <div className="testimonial_arrow_down"></div>
                </div>
                <div className="author_info">
                    <div className="author_img">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipOfBgQae8edsAzIwXZXx_4lKqfO1ssj4Clj5zvU=s680-w680-h510" alt="" />
                    </div>
                    <div className="author_content">
                        <h2>Anukul Mahato</h2>
                        <p>CEO & Founder - Okler</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_item">
                <div className="testimonial_content">
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ut nam amet sit ipsa esse excepturi facere minus. Voluptatem minus neque eveniet recusandae!</p>
                    </blockquote>
                    <div className="testimonial_arrow_down"></div>
                </div>
                <div className="author_info">
                    <div className="author_img">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipOfBgQae8edsAzIwXZXx_4lKqfO1ssj4Clj5zvU=s680-w680-h510" alt="" />
                    </div>
                    <div className="author_content">
                        <h2>Anukul Mahato</h2>
                        <p>CEO & Founder - Okler</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_item">
                <div className="testimonial_content">
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ut nam amet sit ipsa esse excepturi facere minus. Voluptatem minus neque eveniet recusandae!</p>
                    </blockquote>
                    <div className="testimonial_arrow_down"></div>
                </div>
                <div className="author_info">
                    <div className="author_img">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipOfBgQae8edsAzIwXZXx_4lKqfO1ssj4Clj5zvU=s680-w680-h510" alt="" />
                    </div>
                    <div className="author_content">
                        <h2>Anukul Mahato</h2>
                        <p>CEO & Founder - Okler</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
      </Swiper>


    </>
  )
}

export default Testimonial