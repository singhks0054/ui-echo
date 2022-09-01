import Image from 'next/image';
import React from 'react';
import main from '../public/main.webp';
export default function Hero() {
  return (
    <main className='bg-c1 text-white bg-cover lg:bg-auto bg-hero bg-no-repeat bg-right h-[95vh]'>
      <div className='absolute left-4 lg:left-[12vw] top-[40vh] '>
        <h1 className='text-5xl lg:text-8xl font-f2 font-medium '>
          World Class <br /> Accmodation
        </h1>
        <p className='mt-8 font-f1 text-2xl'>
          Discover a hotel that defines <br /> a new dimension of luxury.{' '}
        </p>
        <button className='btn mt-8 py-4 text-xl px-8'>View More</button>
      </div>
    </main>
  );
}
