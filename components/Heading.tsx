import React from 'react';
type Props = {
  children: string;
};
export default function Heading({ children }: Props) {
  return (
    <h1 className='text-4xl lg:w-3/4 text-center container font-f2 font-semibold mx-auto my-16 text-c1 '>
      {children}
    </h1>
  );
}
