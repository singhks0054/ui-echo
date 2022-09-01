import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { sliderData } from '../data';
import { Autoplay, FreeMode } from 'swiper';
import Image from 'next/image';
export default function Slider() {
  return (
    <div className='m-4'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, FreeMode]}
        className='mySwiper'
      >
        {sliderData.map(({ img, title, desc, price }, index) => (
          <SwiperSlide key={index}>
            <Image src={img} height={350} width={400} alt='slider images' />
            <div className='flex gap-4 my-4'>
              <p className='font-f2 text-lg font-semibold'>{title}</p>
              <p className='text-orange-500'>{price}</p>
            </div>
            <p className='font-thin'>{desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
