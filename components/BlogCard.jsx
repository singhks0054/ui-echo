import React from 'react'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { TiMessages } from 'react-icons/ti'
export default function BlogCard({ img, title, description, data1, data2 }) {
  return (
    <div className='my-10 bg-white hover:shadow-xl rounded gap-10 ' >
      <Image src={img} height={450} width={750} alt="blog Image" />
      <p className="bg-c2 text-white relative max-w-fit px-6 py-4 ml-10 rounded -mt-20  ">
        <span className='text-4xl' >15</span> <br />
        <span className='text-2xl' >Jan</span>
      </p>
      <h1 className='text-xl text-c2 font-bold mb-2  p-4 ' >{title} </h1>
      <p className='p-4' >{description}</p>
      <p className='my-2 p-4'><AiOutlineUser className='inline ' /> {data1} <span className="mx-3">|</span><TiMessages className='inline' /> {data2} </p>
    </div>
  )
}
