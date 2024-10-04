'use client';
import { useAppSelector, useAppDispatch } from '../_components/redux/hook';
import { removeFromWishlist } from '../_components/redux/wishlistSlice';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'; 

type ProductDetails = {
  inspiration: string;
  design: string[];
  shipping: string[];
};

interface Product {
  description: string;
  details: ProductDetails;
  quantity?: number;
  category?: string;
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  discount: number;
}

const Wishlist = () => {
  const wishlist = useAppSelector((state) => state.wishlist.products as Product[]); 
  const dispatch = useAppDispatch();

  const handleRemove = (product: Product) => {
    dispatch(removeFromWishlist(product));
  };

  const formatTitleForUrl = (title: string) => {
    return title.replace(/\s+/g, '-');
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mt-10">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6 mt-8">
          {wishlist.map((product: Product): JSX.Element => (
            <div
              key={product.id}
              className="flex items-center bg-white shadow-lg rounded-lg p-4 space-x-4"
            >
             
              <div className="relative w-24 h-24"> 
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg" 
                />
              </div>

        
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                  <Link href={`/${formatTitleForUrl(product.name)}`}>
                    {product.name}
                  </Link>
                </h3>
                <div className="text-sm text-gray-500">
                 
                  <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">
                    {product.rating}★
                  </span>
                  <span className="ml-2 inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    Assured
                  </span>
                </div>
                <div className="text-gray-900 font-bold text-lg mt-1">
                  {product.price}{' '}
                  <span className="line-through text-gray-500 text-sm">
                    {product.price + product.discount}
                  </span>{' '}
                  <span className="text-green-500">{product.discount}% off</span>
                </div>
              </div>

              <button
                className="text-gray-400 hover:text-red-600"
                onClick={() => handleRemove(product)}
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
