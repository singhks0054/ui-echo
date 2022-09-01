import React from 'react';

export default function Booking() {
  return (
    <main className='container grid sm:grid-cols-2 gap-x-16 justify-between items-center my-16'>
      <div className='sm:w-3/4'>
        <h1 className='font-f2 font-extrabold text-3xl text-c2'>
          Ullamcorper mattis, pulvinar dapibus.
        </h1>
        <p className='font-f1 text-gray-500 py-8 font-thin  text-lg'>
          Leather detail shoulder contrastic colour contour stunning silhouette
          working peplum. Statement buttons cover-up tweaks patch.
        </p>
      </div>
      <div>
        <h1 className='font-f2 font-extrabold text-3xl text-c2'>Book A Room</h1>
        <form className='flex flex-col w-full'>
          <input
            type='date'
            className='p-2  w-full border-c2 border outline-none my-2'
            placeholder='Check In'
          />
          <input
            type='date'
            className='p-2 w-full border-c2 border outline-none my-2'
            placeholder='Check Out'
          />
          <input
            type='text'
            className='p-2 border-c2 border outline-none my-2'
            placeholder='Number of Persons'
          />
          <button className='btn py-2 px-4 '>Check Availability</button>
        </form>
      </div>
    </main>
  );
}
