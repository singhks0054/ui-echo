import React from 'react'
import Image from 'next/image'
export default function PostCard({ img, title, description }) {
  return (
    <div className='my-10 rounded gap-4 flex items-center ' >
      <Image src={img} height={80} width={80} alt="blog Image" />
      <div>
        <h1 className='text-xl hover:text-mypink font-bold ' >{title} </h1>
        <p className="  ">{description}</p>
      </div>
    </div>
  )
}
