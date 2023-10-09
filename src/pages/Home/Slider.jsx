import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

export default function Slider() {


  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      
      modules={[Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
      
    >   
      <SwiperSlide><img className='w-full object-cover'  src="https://i.ibb.co/gdLzBmX/Rectangle-11.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/YpQNN1Y/Rectangle-13.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/my0fnnz/Rectangle-14.webp" alt="" /></SwiperSlide>
 

    </Swiper>
  )
}
