'use client';
import { useAppDispatch, useAppSelector } from '../../_components/redux/hook';
import { addToCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import { Product } from '../data/products';


interface AddToCartButtonProps {
  product: Product;
  big?: boolean; 
  color?:boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, big = false,color=false }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);


  const isProductInCart = cartItems.some(item => item.name === product.name);

  const handleAddToCart = () => {
    if (!isProductInCart) {
      dispatch(addToCart(product));
      toast.success('Added Successfully'); 
    }
  };

  return (
    <div className={`flex mt-2 flex-row justify-center whitespace-nowrap font-semibold items-center gap-3 ${color ? 'bg-white text-black border border-[1px] border-black' : 'bg-pink-500 text-white'} text-md py-3 px-4 rounded-md ${big ? 'w-full' : 'w-[40%]'}`}>
      {isProductInCart ? (
        <Link href='/cart' className="flex items-center gap-2">
          <h1>GO TO CART</h1>
        </Link>
      ) : (
        <button 
          onClick={handleAddToCart} 
          className=""
        >
          <h1>ADD TO CART</h1>
        </button>
      )}
      <IoCartOutline size={20} />
      <Toaster />
    </div>
  );
};

export default AddToCartButton;
