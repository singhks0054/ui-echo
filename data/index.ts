import { StaticImageData } from 'next/image';
import xitems1 from '../public/xitems1.webp';
import xitems2 from '../public/xitems2.webp';
import xitems3 from '../public/xitems3.webp';
import xitems4 from '../public/xitems4.webp';
import xblogs1 from '../public/xblogs1.webp';
import xblogs2 from '../public/xblogs2.webp';
import xblogs3 from '../public/xitems3.webp';
import xinstra1 from '../public/xinstra1.webp';
import xinstra2 from '../public/xinstra2.webp';
import xinstra3 from '../public/xinstra3.webp';
import xinstra4 from '../public/xinstra4.webp';

export const navLinks: {
  path: string;
  title: string;
}[] = [
  { path: '/', title: 'Home' },
  { path: '/room', title: 'Room' },
  { path: '/about', title: 'About' },
  { path: '/blog', title: 'Blog' },
  { path: '/contact', title: 'Contact' },
];

export const instaData = [xinstra1, xinstra2, xinstra3, xinstra4];

export const sliderData: {
  img: StaticImageData;
  title: string;
  desc: string;
  price: String;
}[] = [
  {
    img: xitems1,
    title: 'Ullamcorper mattis, pulvinar dapibus.',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
    price: '$450/Night',
  },
  {
    img: xitems2,
    title: 'Ullamcorper mattis, pulvinar dapibus.',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
    price: '$450/Night',
  },
  {
    img: xitems3,
    title: 'Ullamcorper mattis, pulvinar dapibus.',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
    price: '$450/Night',
  },
  {
    img: xitems4,
    title: 'Ullamcorper mattis, pulvinar dapibus.',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
    price: '$450/Night',
  },
];

export const blogData: {
  img: StaticImageData;
  title: string;
  desc: string;
}[] = [
  {
    img: xblogs1,
    title: 'Beautiful Accomodation',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
  },
  {
    img: xblogs2,
    title: 'Beautiful Accomodation',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
  },
  {
    img: xblogs3,
    title: 'Beautiful Accomodation',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
  },
];

export const textData: {
  title: string;
  author: string;
  desc: string;
}[] = [
  {
    title: 'Beautiful Accomodation',
    author: 'Omeka Lotus',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweak patch.',
  },
  {
    title: 'Delicious Food',
    author: 'Omeka Lotus',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweak patch.',
  },
  {
    title: 'Beautiful Accomodation',
    author: 'Omeka Lotus',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweak patch.',
  },
  {
    title: 'Delicious Food',
    author: 'Omeka Lotus',
    desc: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweak patch.',
  },
];
