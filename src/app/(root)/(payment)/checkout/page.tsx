'use client'
import { useAppSelector, useAppDispatch } from '../../_components/redux/hook'
import Link from 'next/link';
import Image from 'next/image';
import { removeFromCart } from '../../_components/redux/cartSlice';  
import Layout from '../layout'
import { Product } from '../../_components/data/products';
import withAuth from '../../_components/authenticate/withAuth'
const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems as Product[]);
  const dispatch = useAppDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + (
      (typeof item.price === 'number' ? item.price : parseFloat(item.price.replace(/[^0-9.-]+/g, ''))) * (item.quantity ?? 0)
    ),
    0
  );
  

  const handleRemove = (name: string) => {
    dispatch(removeFromCart(name));
  };

  return (
    <Layout>
    <div className="flex flex-col md:flex-row p-10 space-x-0 md:space-x-8 space-y-8 md:space-y-0">
      {/* Shipping Info Form */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold">Shipping Information</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <div className="flex space-x-4">
          <select className="w-1/2 p-3 border border-gray-300 rounded-md">
            <option>Country</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
          <input
            type="text"
            placeholder="Zipcode"
            className="w-1/2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <Link href='/shipping' className='mt-5'><button className="w-full p-3 mt-4 bg-pink-500 text-white rounded-md hover:bg-pink-600">
          Continue to shipping
        </button></Link>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Go back to <Link href="/">shopping!</Link></p>
        ) : (
          <div>
            <ul className="divide-y">
              {cartItems.map((item, index) => (
                <li key={index} className="flex gap-6 py-4">
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
        <input
          type="text"
          placeholder="Enter coupon code"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹ {totalAmount.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Calculated at the next step</p>
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

export default withAuth(Checkout);
