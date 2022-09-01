import Booking from '../components/Booking';
import Image from 'next/image';
import { blogData, sliderData } from '../data';
import TextCard from '../components/TextCard';
import Insta from '../components/Insta';
import Header from '../components/Header';

export default function room() {
  return (
    <>
      <Header t1={'Our Rooms'} bg={'room'} />
      <main className='grid  gap-8 sm:grid-cols-2 container my-16'>
        {sliderData.map(({ img, title, desc, price }, index) => (
          <div key={index}>
            <Image src={img} height={450} width={500} alt='slider images' />
            <div className='flex gap-4 my-4'>
              <p className='font-f2 text-lg font-semibold'>{title}</p>
              <p className='text-orange-500'>{price}</p>
            </div>
            <p className='font-thin'>{desc}</p>
          </div>
        ))}
      </main>
      <Booking />
      <div className='my-16 container grid sm:grid-cols-3 gap-4'>
        {blogData.map(({ img, title, desc }, index) => (
          <div key={index}>
            <Image src={img} height={350} width={400} alt='slider images' />

            <p className='font-f2 text-2xl my-2 text-c1 font-semibold'>
              {title}
            </p>

            <p className='font-thin'>{desc}</p>
          </div>
        ))}
      </div>
      <TextCard />
      <Insta />
    </>
  );
}
