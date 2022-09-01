import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { instaData } from '../data';
import { Autoplay, FreeMode } from 'swiper';
import { BsInstagram } from 'react-icons/bs';
import Image from 'next/image';
export default function Insta() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay, FreeMode]}
        className='mySwiper'
      >
        {instaData.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='group transition duration-500 hover:bg-red-200 flex justify-center items-center'>
              <Image
                src={img}
                height={350}
                width={400}
                alt='slider images'
                className='hover:filter(28) '
              />
              <p className='absolute'>
                <BsInstagram className='hidden text-4xl hover:cursor-pointer hover:text-red-300 text-white group-hover:block' />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
