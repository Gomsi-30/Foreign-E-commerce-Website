'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../_components/redux/hook';
import { addAddress } from '../_components/redux/addressSlice';


const AddAddress = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addAddress({ address, city, zip }));

    router.push('/shipping');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10 bg-white shadow-md rounded-md w-full max-w-md">
        <div className='text-white bg-gray-400 flex justify-center items-center mb-3 py-2 rounded'><h2 className="text-lg font-semibold text-center  text-white">Add a new address</h2></div>
        <hr></hr>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">ZIP Code</label>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-pink-500 text-white rounded-md hover:bg-pink-600"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
