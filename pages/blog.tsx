import React from 'react';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PostCard from '../components/PostCard';

const DATA = [
  '/xsingle_blog_1.webp',
  '/single_blog_2.png',
  '/single_blog_3.png',
  '/single_blog_4.png',
  '/xpost_1.webp',
  '/xpost_2.webp',
  '/xpost_3.webp',
  '/xpost_4.webp',
];

export default function blog({ img }) {
  return (
    <>
      <Header t1={'Our Blog'} bg={'about'} />
      <div className='grid grid-cols-1  lg:grid-cols-3 lg:gap-10 lg:mx-[10vw] mx-4 my-10 '>
        <div className='col-span-2 '>
          <BlogCard
            img={img[0]}
            title='Google inks pact for new 35-storey office'
            description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            data1=' Travel, Lifestyle'
            data2='03 Comments'
          />
          <BlogCard
            img={img[1]}
            title='Google inks pact for new 35-storey office'
            description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            data1=' Travel, Lifestyle'
            data2='03 Comments'
          />
          <BlogCard
            img={img[2]}
            title='Google inks pact for new 35-storey office'
            description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            data1=' Travel, Lifestyle'
            data2='03 Comments'
          />
          <BlogCard
            img={img[3]}
            title='Google inks pact for new 35-storey office'
            description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            data1=' Travel, Lifestyle'
            data2='03 Comments'
          />
        </div>
        <div className='my-10'>
          <div className='bg-[#FBF9FF] my-10 py-5'>
            <form className='flex flex-col'>
              <input
                type='text'
                placeholder='Search Keyword'
                className='p-2 border mx-4 mt-4 '
                name=''
                id=''
              />
              <button className='bg-c2 text-white py-2 mx-4 mt-4 '>
                SEARCH
              </button>
            </form>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5'>
            <h1 className='text-3xl pl-2 font-bold border-b-2 pb-2 mx-4 my-5'>
              Category
            </h1>
            <div className='m-4'>
              <p className='p-1 border-b text-lg hover:text-c2 '>
                {' '}
                Resaurant food(37)
              </p>
              <p className='p-1 border-b text-lg hover:text-c2 '>
                {' '}
                Travel news(10)
              </p>
              <p className='p-1 border-b text-lg hover:text-c2 '>
                {' '}
                Modern technology(03)
              </p>
              <p className='p-1 border-b text-lg hover:text-c2 '>
                {' '}
                Product(11)
              </p>
              <p className='p-1 border-b text-lg hover:text-c2 '>
                {' '}
                Inspiration(21)
              </p>
              <p className='p-1 border-b text-lg hover:text-c2 '>
                {' '}
                Health Care (21)
              </p>
            </div>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5'>
            <h1 className='text-3xl pl-2 font-bold border-b-2 pb-2 mx-4 my-5'>
              Recent Post
            </h1>
            <div className='m-4'>
              <PostCard
                img={img[4]}
                title={'From life was you fish...'}
                description={'January 12, 2019'}
              />
              <PostCard
                img={img[5]}
                title={'The Amazing Hubble'}
                description={'02 Hours ago'}
              />
              <PostCard
                img={img[6]}
                title={'Astronomy Or Astrology'}
                description={'03 Hours ago'}
              />
              <PostCard
                img={img[7]}
                title={'Asteroids telescope'}
                description={'01 Hours ago'}
              />
            </div>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5'>
            <h1 className='text-3xl pl-2 font-bold border-b-2 pb-2 mx-4 my-5'>
              Tag Cloud
            </h1>
            <div className='m-4 flex flex-wrap gap-2'>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                project
              </button>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                love
              </button>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                technology
              </button>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                restaurant
              </button>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                life
              </button>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                style
              </button>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                design
              </button>
              <button className='py-1 px-4 hover:bg-c2 hover:text-black bg-white text-black '>
                illustration
              </button>
            </div>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5'>
            <form className='flex flex-col'>
              <input
                type='text'
                placeholder='Enter Email'
                className='p-2 border mx-4 mt-4 '
                name=''
                id=''
              />
              <button className='bg-c2 text-white py-2 mx-4 mt-4 '>
                SUBSCRIBE FOR NEWSLETTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      img: DATA,
    },
  };
}
