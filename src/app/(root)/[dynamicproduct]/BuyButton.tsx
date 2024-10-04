'use client';
import { useState, useEffect } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../_components/redux/hook';
import { addToWishlist, removeFromWishlist } from '../_components/redux/wishlistSlice'; 
import { Product } from '../_components/data/products';

const Buy = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist.products);
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Check if the product is already in the wishlist
  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [wishlist, product.id]);

  const handleClick = () => {
    // console.log(product);
    if (isInWishlist) {
      // console.log(product);
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <>
      {!isInWishlist ? (
        <button onClick={handleClick}>
          <IoIosHeartEmpty size={26} />
        </button>
      ) : (
        <button onClick={handleClick}>
          <FaHeart color="red" size={26} />
        </button>
      )}
    </>
  );
};

export default Buy;
