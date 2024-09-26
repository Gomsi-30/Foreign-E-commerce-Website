'use client';
import { useState } from 'react';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image'; 

const emailSchema = z.string().email({ message: 'Invalid email address' });

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    try {
      emailSchema.parse(email);
      setError('');
      setEmail('');
      toast.success('Sent Successfully');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  }

  return (
    <footer className="bg-white text-gray-600">
      <div className="bg-pink-400 py-3 text-center text-white text-sm font-semibold">
        KNOW MORE ABOUT TRULYROSELLE
      </div>

      <div className="container mx-auto py-10 flex flex-col md:flex-row gap-12 md:gap-28">
        <div className="flex flex-col gap-10 w-full md:w-1/3">
          <div className="space-y-4">
            <Image 
              src="/logo.png" 
              alt="Trulyroselle Logo" 
              width={96}
              height={24} 
              className="w-24" 
            />

            <p>Sign up for our newsletter</p>
            <div className="flex flex-col md:flex-row md:space-x-3">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border border-gray-300 rounded-lg w-full md:w-3/4 px-2 py-2 ${error ? 'border-red-500' : ''}`}
              />
              <button onClick={handleSignUp} className="bg-gray-800 text-white rounded-lg w-full md:w-1/3 py-2 mt-2 md:mt-0">
                Sign Up
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Contact us</h4>
            <p>Trulyroselle Private Limited</p>
            <p>Third Floor, Magnum Vista, Raghuvanahalli, Bangalore 560062</p>
            <p>
              <a href="mailto:care@trulyroselle.com" className="text-blue-600">care@trulyroselle.com</a>
            </p>
            <p>7829558887 (10 AM to 6:30 PM)</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full justify-center md:w-[55%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-6 md:mt-8">
            <div className="space-y-2">
              <ul className="space-y-2 font-semibold">
                <li><a href="/" className="hover:text-pink-600">Home</a></li>
                <li><a href="/latestcollection" className="hover:text-pink-600">Latest Collections</a></li>
                <li><a href="#" className="hover:text-pink-600">Men&apos;s Jewellery</a></li>
                <li><a href="/gifts" className="hover:text-pink-600">Gifts</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <ul className="space-y-2 font-semibold">
                <li><a href="/ourstory" className="hover:text-pink-600">Our Story</a></li>
                <li><a href="/blogs" className="hover:text-pink-600">Blogs</a></li>
                <li><a href="/terms" className="hover:text-pink-600">Terms</a></li>
                <li><a href="/privacy-policy" className="hover:text-pink-600">Privacy</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <ul className="space-y-2 font-semibold">
                <li><a href="/help" className="hover:text-pink-600">Help</a></li>
                <li><a href="/disclaimer" className="hover:text-pink-600">Disclaimer</a></li>
                <li><a href="/shippingreturns" className="hover:text-pink-600">Shipping & Returns</a></li>
                <li><a href="/faq" className="hover:text-pink-600">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-2 sm:gap-5 mt-12 sm:mt-7">
            <FaInstagramSquare size={26} className="hover:text-pink-600 cursor-pointer" />
            <FaSquareXTwitter size={26} className="hover:text-pink-600 cursor-pointer" />
            <FaLinkedin size={26} className="hover:text-pink-600 cursor-pointer" />
            <FaGithub size={26} className="hover:text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="bg-black py-3 text-white text-center text-xs">
        &copy;COPYRIGHTS TRULYROSELLE.COM. ALL RIGHTS RESERVED
      </div>
      <Toaster />
    </footer>
  );
};

export default Footer;
