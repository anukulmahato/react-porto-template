// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./Blogs.css";

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const Blogs = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="post_item">
                <div className="post_date">
                    <span className='day'>13</span>
                    <span className="month">Jun</span>
                </div>
                <div className="post_content">
                    <a href="#"><h2>This is a standard embedded video post</h2></a>
                    <p>Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim.... </p>
                    <a href="#">Read More {">"}</a>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="post_item">
                <div className="post_date">
                    <span className='day'>13</span>
                    <span className="month">Jun</span>
                </div>
                <div className="post_content">
                    <a href="#"><h2>This is a standard embedded video post</h2></a>
                    <p>Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim.... </p>
                    <a href="#">Read More {">"}</a>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="post_item">
                <div className="post_date">
                    <span className='day'>13</span>
                    <span className="month">Jun</span>
                </div>
                <div className="post_content">
                    <a href="#"><h2>This is a standard embedded video post</h2></a>
                    <p>Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim.... </p>
                    <a href="#">Read More {">"}</a>
                </div>
            </div>
          </SwiperSlide>
          
          
          
          
      </Swiper>


    </>
  )
}

export default Blogs