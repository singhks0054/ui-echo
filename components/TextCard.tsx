import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { textData } from '../data';
import { Autoplay } from 'swiper';

export default function TextCard() {
  return (
    <div className='container py-16 mt-16 bg-[rgb(255,247,243)] '>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {textData.map(({ title, desc, author }, index) => (
          <SwiperSlide key={index}>
            <h1 className='text-c2 font-f1 text-3xl font-semibold'>{title}</h1>
            <p className='my-4 font-f1 text-c1'>{desc}</p>
            <p className='font-c2 font-semibold'>- {author}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
