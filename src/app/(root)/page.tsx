import Category from "./_components/categories/categories";
import Latest from "./_components/latest/latest";
import Banner from "./_components/global/banner";
import CarouselDemo from "./_components/carousel/carousel";
import Faq from './_components/faqs/faqs';
import ProductSlider from './_components/products/products';
import Image from 'next/image';
import Reviews from './_components/global/reviews';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-[90px]">
      <CarouselDemo />
      <div className='container'>
        <Category />
      </div>
      <div className=''>
        <Banner />
      </div>
      <div className='container mt-8'>
        <Latest />
      </div>
      <div className='container'>
        <ProductSlider />
      </div>
      <div className="container relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[400px]">
        <Image
          src='/gifting-banner-desktop-wb.webp'
          alt="Banner Image"
          fill
          className="object-fit object-center sm:object-cover"
        />
      </div>
      <Reviews />
      <div className='container mt-[40px]'>
        <Faq />
      </div>
    </div>
  );
}
