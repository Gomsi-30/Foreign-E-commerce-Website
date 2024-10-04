'use client'
import Category from "./_components/categories/categories";
import Latest from "./_components/latest/latest";
import Banner from "./_components/global/banner";
import CarouselDemo from "./_components/carousel/carousel";
import Faq from './_components/faqs/faqs';
import ProductSlider from './_components/products/products';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Reviews from './_components/global/reviews';

export default function Home() {
  // Function to determine the appropriate image source based on screen size
  const [imageSrc, setImageSrc] = useState('/gifting-banner-desktop-wb.webp');

  const updateImageSrc = () => {
    // Check if the window width is less than or equal to 640px
    if (window.innerWidth <= 640) {
      setImageSrc('/gifting-banner-mobile-wb.webp'); // Mobile image
    } else {
      setImageSrc('/gifting-banner-desktop-wb.webp'); // Desktop image
    }
  };

  useEffect(() => {
    updateImageSrc(); // Set initial image source based on current width
    window.addEventListener('resize', updateImageSrc); // Update on resize

    return () => {
      window.removeEventListener('resize', updateImageSrc); // Cleanup listener
    };
  }, []);


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
      <div className="container relative w-full h-[240px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[420px] p-8 sm:p-0">
      <Image
        src={imageSrc}
        alt="Banner Image"
        fill
        className="object-cover object-center"
      />
    </div>
      <Reviews />
      <div className='container mt-[40px]'>
        <Faq />
      </div>
    </div>
  );
}
