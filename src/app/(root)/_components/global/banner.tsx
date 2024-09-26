import Image from 'next/image';

const Banner = ()=> {
    return (
            <div className='w-full h-[230px] sm:h-[300px] relative'>
                <Image alt='' src='/categories/banner.png' fill className='object-fit sm:object-cover object-center' />
            </div>
    );
  }
export default Banner