'use client';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../_components/redux/hook';
import Link from 'next/link';
import Image from 'next/image';
import { removeFromCart } from '../_components/redux/cartSlice';  
import { Product } from '../_components/data/products';


const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems as Product[]);
  const totalAmount = cartItems.reduce(
    (total, item) => total + (
      (typeof item.price === 'number' ? item.price : parseFloat(item.price.replace(/[^0-9.-]+/g, ''))) * (item.quantity ?? 0)
    ),
    0
  );
  
  const discount = 57571; 

  const dispatch = useAppDispatch(); 

  const handleRemove = (name: string) => {
    alert('click');
    dispatch(removeFromCart(name)); 
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty. Go back to <Link href="/">shopping!</Link></p>
        ) : (
          <div>
            <ul className="divide-y">
              {cartItems.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row gap-4 py-4">
                  <div className="w-full h-[60%] sm:h-auto sm:w-[50%]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={250}
                      className="rounded-md w-full"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <h2 className="font-bold text-2xl sm:text-2xl mt-2">{item.name}</h2>
                    <p className="text-gray-500 mt-1 sm:mt-2">Quantity: {item.quantity}</p>
                    <p className="text-pink-500 font-semibold mt-1 sm:mt-2">
                      {item.price.toLocaleString()}
                    </p>
                    <div className="mt-2 flex gap-4 text-sm sm:text-md">
                      <button
                        className="text-red-500 bg-black text-white font-semibold p-2 rounded-md mt-2"
                        onClick={() => handleRemove(item.name)}
                      >
                        Remove
                      </button>
                      <button className="text-gray-500">Move to Wishlist</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Order Summary Section */}
      <div className="p-4 sm:p-6 bg-gray-100 rounded-lg">
        <h2 className="text-lg sm:text-xl font-bold mb-4">ORDER SUMMARY</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Coupon Code</label>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="w-full px-3 py-2 border rounded-md mb-2"
          />
          <button className="bg-pink-400 font-semibold text-white w-full py-2 rounded-md">
            Apply
          </button>
        </div>

        <ul className="mb-4 space-y-2 text-sm sm:text-base">
          <li className="flex justify-between">
            <span>Sub Total</span>
            <span>₹ {totalAmount.toLocaleString()}</span>
          </li>
          <li className="flex justify-between">
            <span>Discount</span>
            <span className="text-red-500">- ₹ {discount.toLocaleString()}</span>
          </li>
          <li className="flex justify-between">
            <span>Delivery Charge</span>
            <span>FREE</span>
          </li>
        </ul>

        <div className="border-t pt-4 mb-4">
          <h3 className="text-base sm:text-lg font-bold flex justify-between">
            <span>Total (Incl. all Taxes)</span>
            <span>₹ {(totalAmount - discount).toLocaleString()}</span>
          </h3>
        </div>

        <div className="text-green-500 font-semibold text-center mb-4">
          YOU SAVE ₹ {discount.toLocaleString()}
        </div>

        <Link href="/checkout">
          <button className="bg-black text-white w-full py-3 rounded-lg font-semibold">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
