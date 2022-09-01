import Image from 'next/image';
import React from 'react';
import about1 from '../public/xabout1.webp';
export default function About() {
  return (
    <section className='container grid sm:grid-cols-2 lg:grid-cols-3 items-center  justify-items-center gap-16'>
      <div>
        <h1 className='font-f2 font-extrabold text-3xl text-c2'>
          Ullamcorper mattis, pulvinar dapibus.
        </h1>
        <p className='font-f1 text-gray-500 py-8 font-thin  text-lg'>
          Leather detail shoulder contrastic colour contour stunning silhouette
          working peplum. Statement buttons cover-up tweaks patch.
        </p>
        <button className='btn py-2 px-4 '>Learn More</button>
      </div>
      <div className='lg:col-span-2'>
        <Image src={about1} height={550} width={700} alt={'aboout image'} />
      </div>
    </section>
  );
}
