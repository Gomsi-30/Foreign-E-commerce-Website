'use client'
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import AddToCartButton from '../global/AddToCartButton'
import Image from 'next/image'
import {products} from '../data/products'
const ProductSlider = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 330;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 330;
  };


   return (
    <div className="relative w-full">
    <h1 className="text-3xl text-center font-bold text-pink-500 mb-6">Products</h1>
  
    <div className="relative">
      {/* Left Navigation Button */}
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10" 
        onClick={slideLeft}
      >
        <FiChevronLeft size={24} />
      </button>
  
      {/* Products Slider */}
      <div ref={sliderRef} className="flex pl-2 overflow-x-scroll gap-6 no-scrollbar scroll-smooth">
  {products.map((product) => (
    <div 
      key={product.id} 
      className="min-w-[310px] h-[350px] rounded-md flex-shrink-0 flex flex-col justify-between"
    >
      <Link href={`/${product.name.replace(/\s+/g, '-')}`}>
        <div className="relative w-[310px] h-[222px]">
          <Image 
            src={product.image} 
            alt={product.name} 
            layout="fill" // Fill the parent container
            objectFit="cover" // Maintain aspect ratio, crop if necessary
            className="rounded-md cursor-pointer"
          />
        </div>
        <h2 className="text-xl font-semibold mt-2 cursor-pointer">{product.name}</h2>
      </Link>
      <p className="text-gray-700 text-lg font-semibold mb-1">Price: {product.price}</p>
      <div className='mb-2'><AddToCartButton product={product} big={true} /></div>
    </div>
  ))}
</div>

  
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10" 
        onClick={slideRight}
      >
        <FiChevronRight size={24} />
      </button>
    </div>
    
    <Toaster />
  </div>
  );
}

export default ProductSlider;