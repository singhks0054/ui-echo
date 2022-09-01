import React from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='container text-c1 font-f1 bg-[rgb(255,247,243)]'>
      <div className='mx-6 py-10 '>
        <div className='grid  sm:grid-cols-3 gap-8 lg:gap-16 justify-start '>
          <div>
            <div className='  font-semibold mb-4 flex  '>
              <h1 className='text-3xl font-f2  mb-4'>ECOHO</h1>
            </div>
            <p className='text-gray-700 '>
              Leather detail shoulder contrastic colour contour stunning
              silhouette working peplum. Statement buttons cover-up tweaks
              patch.
            </p>
          </div>
          <div>
            <h6 className=' font-semibold text-3xl flex font-f2 mb-4'>
              Navigation
            </h6>

            <Link href='/'>
              <a className='text-gray-700 block mb-2'>Home</a>
            </Link>
            <Link href='/hotel'>
              <a className='text-gray-700 block mb-2'>Hotels</a>
            </Link>
            <Link href='/about'>
              <a className='text-gray-700 block mb-2'>About</a>
            </Link>
            <Link href='/blog'>
              <a className='text-gray-700 block mb-2'>Blog</a>
            </Link>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 text-3xl font-f2 flex'>
              Address
            </h6>
            <ul className='text-gray-700 '>
              <li>76/A, Green Lane, Dhanmondi, NYC</li>
              <li>10 (87) 738-3940</li>
              <li>contact@carwash.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
// About
// Our Rooms
// Book A Room
// Blog
// Privacy & Policy
// Contact
