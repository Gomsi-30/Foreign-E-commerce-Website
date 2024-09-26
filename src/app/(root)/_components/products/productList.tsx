'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AddToCartButton from '../global/AddToCartButton';
import Image from 'next/image';
import {products as initialProducts} from '../data/products'


const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);

  const loadMore = () => {
    setVisibleCount((currentCount) => currentCount + 3);
  };

  const handleFilter = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (category === 'all') {
        return ['all'];
      } else {
        const updatedCategories = prevCategories.includes(category)
          ? prevCategories.filter((cat) => cat !== category)
          : [...prevCategories, category].filter((cat) => cat !== 'all');

        return updatedCategories.length === 0 ? ['all'] : updatedCategories;
      }
    });
  };

  useEffect(() => {
    if (selectedCategories.includes('all')) {
      setProducts(initialProducts);
    } else {
      setProducts(
        initialProducts.filter((product) =>
          selectedCategories.includes(product.category)
        )
      );
    }
  }, [selectedCategories]);

  return (
    <div className='flex flex-col sm:flex-row gap-10 sm:gap-24 md:gap-12 lg:gap-0 lg:justify-between'>
    <div className="sm:flex grid grid-cols-3 gap-3 sm:gap-0 sm:flex-col mt-16">
      <label className='flex flex-row gap-1 sm:gap-3 mt-0.5'>
        <input
          type="checkbox"
          checked={selectedCategories.includes('all')}
          onChange={() => handleFilter('all')}
        />{' '}
        <h1>All</h1>
      </label>
      <label className='flex flex-row gap-1 sm:gap-3 mt-0.5'>
        <input
          type="checkbox"
          checked={selectedCategories.includes('Rings')}
          onChange={() => handleFilter('Rings')}
        />{' '}
        <h1>Rings</h1>
      </label>
      <label className='flex flex-row gap-1 sm:gap-3 mt-0.5'>
        <input
          type="checkbox"
          checked={selectedCategories.includes('Earrings')}
          onChange={() => handleFilter('Earrings')}
        />{' '}
        Earrings
      </label>
      <label className='flex flex-row gap-1 sm:gap-3 mt-0.5'>
        <input
          type="checkbox"
          checked={selectedCategories.includes('Accessories')}
          onChange={() => handleFilter('Accessories')}
        />{' '}
        Accessories
      </label>
      <label className='flex flex-row gap-1 sm:gap-3 mt-0.5'>
        <input
          type="checkbox"
          checked={selectedCategories.includes('Anklets')}
          onChange={() => handleFilter('Anklets')}
        />{' '}
        <h1>Anklets</h1>
      </label>
      <label className='flex flex-row gap-1 sm:gap-3 mt-0.5'>
        <input
          type="checkbox"
          checked={selectedCategories.includes('Watches')}
          onChange={() => handleFilter('Watches')}
        />{' '}
        <h1>Watches</h1>
      </label>
    </div>

    <div className='flex flex-col gap-6'>
      <div className='w-full flex justify-end'>
        <select className='p-2 border border-[2px]'>
          <option value="volvo">Sort By : Product</option>
          <option value="saab">Sports</option>
          <option value="mercedes">Dresses</option>
          <option value="audi">Machines</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.slice(0, visibleCount).map((product) => (
         <Link href={`/${product.name.replace(/\s+/g, '-')}`}
            key={product.id}
            className="card md:min-w-[260px] sm:min-w-[370px] min-w-[230px] lg:min-w-[300px] rounded-md"
          >
            <Image
              src={product.image} // Use the Image component here
              alt={product.name}
              width={300} // Set an appropriate width
              height={200} // Set an appropriate height
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="text-gray-500">{product.name}</p>
            <h2 className="text-xl font-semibold mt-2">Price : {product.price}</h2>
            <AddToCartButton big={true} product={product} />
          </Link>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className='w-full flex justify-center'>
          <button
            onClick={loadMore}
            className="w-32 bg-white text-pink-600 border font-semibold border-pink-400 p-1 mt-4 rounded"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default ProductList;
