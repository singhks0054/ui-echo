import type { NextPage } from 'next';
import About from '../components/About';
import Booking from '../components/Booking';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Image from 'next/image';
import { blogData } from '../data';
import TextCard from '../components/TextCard';
import Insta from '../components/Insta';
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus, luctus
        ullamcorper mattis, pulvinar dapibus.
      </Heading>
      <About />
      <Heading>Luctus ullamcorper mattis, pulvinar dapibus.</Heading>
      <Slider />
      <div className='flex justify-center items-center h-[80vh] bg-video bg-no-repeat container bg-center my-6 sm:my-16 lg:my-32'>
        <h1 className='text-4xl text-white font-f2 '>Hotel Preview</h1>
      </div>
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
      <div className='bg-contact bg-room bg-about'></div>
    </>
  );
};

export default Home;
