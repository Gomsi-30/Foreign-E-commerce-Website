'use client';
import { useAppSelector, useAppDispatch } from '../../_components/redux/hook';
import Link from 'next/link';
import Image from 'next/image';
import { removeFromCart } from '../../_components/redux/cartSlice';
import { useState } from 'react';
import Layout from '../layout';
import { CiCirclePlus } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { Product } from '../../_components/data/products';


interface Address {
  address: string;
  city: string;
  zip: string;
}

const Shipping = () => {
  const route = useRouter();
  const [click, setClick] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems as Product[]);
  const dispatch = useAppDispatch();
  
  const totalAmount = cartItems.reduce(
    (total, item) => total + (
      (typeof item.price === 'number' ? item.price : parseFloat(item.price.replace(/[^0-9.-]+/g, ''))) * (item.quantity ?? 0)
    ),
    0
  );
  

  const [selectedShipping, setSelectedShipping] = useState<string>('4-7 Business Days');
  const addresses = useAppSelector((state) => state.address.addresses as Address[]); 

  const handleRemove = (name: string) => {
    dispatch(removeFromCart(name));
  };

  const add = () => {
    route.push('/add-address');
    setClick(!click);
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row p-10 space-x-0 md:space-x-8 space-y-8 md:space-y-0">
        {/* Shipping Options */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold">Shipping</h2>
          <hr />
          {addresses.length > 0 ? (
            addresses.map((addr, idx) => (
              <div key={idx} className="border p-4 rounded-md">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={`shipping-${idx}`}
                    name="shipping"
                    value={`${addr.address}, ${addr.city} - ${addr.zip}`}
                    checked={selectedShipping === `${addr.address}, ${addr.city} - ${addr.zip}`}
                    onChange={(e) => setSelectedShipping(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={`shipping-${idx}`} className="text-lg">
                    {`${addr.address}, ${addr.city} - ${addr.zip}`}
                  </label>
                </div>
              </div>
            ))
          ) : (
            <p>No address added yet.</p>
          )}

          <div onClick={add} className='text-sm flex flex-row items-center gap-1'>
            <CiCirclePlus size={16} />
            <h1>Add a new address</h1>
          </div>

          <button className="w-full p-3 bg-pink-500 text-white rounded-md hover:bg-pink-600">
            Continue to payment
          </button>
        </div>

        {/* Cart Summary */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty. Go back to <Link href="/">shopping!</Link></p>
          ) : (
            <div>
              <ul className="divide-y">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-6 py-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover object-center"
                    />
                    <div className="flex-1">
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-pink-500 font-semibold">{item.price.toLocaleString()}</p>
                      <div className="mt-2 flex gap-4 text-sm">
                        <button
                          className="text-red-500"
                          onClick={() => handleRemove(item.name)}
                        >
                          Remove
                        </button>
                        <button className="text-gray-500 whitespace-nowrap">Move to Wishlist</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="border-t pt-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹ {totalAmount.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>{selectedShipping}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>₹ {totalAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
