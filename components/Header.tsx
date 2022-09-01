type HeaderType = {
  t1: String;
  bg: string;
};
export default function Header({ t1, bg }: HeaderType) {
  return (
    <main
      className={`bg-c1 text-white bg-cover lg:bg-auto bg-no-repeat bg-right h-[70vh] bg-${bg}`}
    >
      <div className='absolute left-4 lg:left-[12vw] top-[35vh] '>
        <h1 className='text-5xl lg:text-8xl font-f2 font-medium'>{t1}</h1>
        <p className='mt-8 font-f1 text-2xl'>
          Discover a hotel that defines <br /> a new dimension of luxury.{' '}
        </p>
      </div>
      <div className='bg-contact bg-room bg-about w-0 h-0'></div>
    </main>
  );
}
