import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { navLinks } from '../data';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className='flex font-f1 justify-between items-center px-4 sm:px-8 py-4 font-semibold text-white bg-c1'>
        <div className='flex gap-8'>
          <Link href='/'>
            <a className='text-xl'>ECOHO.</a>
          </Link>
          <p className='font-thin hidden sm:block'>P: +10 (75) 657 5378 </p>
          <p className='font-thin hidden sm:block'>L: 66/A, Green Lane, NYC</p>
        </div>

        <div className=' items-center gap-8 font-normal hidden lg:flex'>
          {navLinks.map(({ path, title }, i) => (
            <Link href={path} key={i}>
              <a className=' hover:text-orange-500'>{title}</a>
            </Link>
          ))}
          <button className='btn py-2 px-4 animate-waving-hand'>
            BOOK NOW
          </button>
        </div>
        {showMenu ? (
          <GrClose
            className='text-3xl bg-white rounded '
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            className='lg:hidden text-3xl'
            onClick={() => setShowMenu(true)}
          />
        )}
      </nav>

      {showMenu && (
        <div className='flex w-screen flex-col duration-300  pt-12 p-4 bg-white'>
          {navLinks.map(({ path, title }, i) => (
            <Link href={path} key={i}>
              <a
                className={`mb-2 text-xl font-f1 hover:bg-villa transition-all ${
                  router.asPath === path ? 'bg-villa' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                {title}
              </a>
            </Link>
          ))}
          <button className='btn py-2 px-4'>BOOK NOW</button>
        </div>
      )}
    </>
  );
}
