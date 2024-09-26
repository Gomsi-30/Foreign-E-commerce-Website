'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiShoppingCart, FiX, FiMenu } from "react-icons/fi";
import { useAppSelector } from '../redux/hook'; 
import Signup from '../authenticate/signup'
import Login from '../authenticate/login'
import { usePathname } from 'next/navigation'

const ContentWithLogo = () => {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showSignupModal, set1ShowModal] = useState(false);
  const [showLoginModal, set2ShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openSignupModal = () => {
    set2ShowModal(false);
    set1ShowModal(true);
  };

  const openLoginModal = () => {
    set1ShowModal(false);
    set2ShowModal(true);
  };

  const closeModal = () => {
    set1ShowModal(false);
    set2ShowModal(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={`fixed z-20 bg-white max-w-full w-full container ${scrolled ? 'mt-10' : 'mt-14'} flex flex-col gap-4 border-b-[1px] py-3`}>
      {!scrolled && (
        <Link href='/'><div className='flex justify-center'>
          <Image alt='' src='/logo.png' height={120} width={140} className='object-cover object-center' />
        </div></Link>
      )}
      <div className='container flex flex-row justify-between items-center'>
        {scrolled ? (
          <Link href='/'><div className='flex justify-center'>
            <Image alt='' src='/logo.png' height={120} width={140} className='object-cover object-center' />
          </div></Link>
        ) : (
          <div className='w-32'></div>
        )}

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-row gap-6 whitespace-nowrap'>
          <Link className={`${path.startsWith('/latestcollection') ? 'underline' : ''} font-regular hidden lg:block`} href='/latestcollection'>Latest Collection</Link>
          <Link className={`${path.startsWith('/products') ? 'underline' : ''} font-regular`} href='/#'>Store</Link>
          <Link className={`${path.startsWith('/mensjewellery') ? 'underline' : ''} font-regular`} href='/#'>Men&apos;s Jewellery</Link>
          <Link className={`${path.startsWith('/blogs') ? 'underline' : ''} font-regular`} href='/blogs'>Blogs</Link>
          <Link className={`${path.startsWith('/ourstory') ? 'underline' : ''} font-regular`} href='/ourstory'>Our Story</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <FiMenu size={24} className='cursor-pointer' onClick={toggleDrawer} />
        </div>

        <div className='hidden md:flex flex-row gap-7 items-center'>
          <Link href="/cart" className='flex flex-row gap-2 items-center'>
            <FiShoppingCart size={20} color='black' />
            <p className='font-regular'>{cartItemCount}</p>
          </Link>
          <button className='font-regular hidden md:block bg-black text-white rounded-md text-sm py-2 px-4' onClick={openLoginModal}>LOGIN</button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${drawerOpen ? 'visible' : 'invisible'} transition-opacity duration-300`}
        onClick={closeDrawer}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white p-5 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <FiX size={24} className='cursor-pointer' onClick={closeDrawer} />
          <div className='mt-5 flex flex-col gap-4'>
            <Link href='/latestcollection' className='font-regular' onClick={closeDrawer}>Latest Collection</Link>
            <Link href='/#' className='font-regular' onClick={closeDrawer}>Store</Link>
            <Link href='/#' className='font-regular' onClick={closeDrawer}>Men&apos;s Jewellery</Link>
            <Link href='/blogs' className='font-regular' onClick={closeDrawer}>Blogs</Link>
            <Link href='/ourstory' className='font-regular' onClick={closeDrawer}>Our Story</Link>
            <button className='font-regular bg-blue-500 text-white rounded-md p-2' onClick={() => { openLoginModal(); closeDrawer(); }}>LOGIN</button>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded relative'>
            <FiX className='absolute top-2 right-2 cursor-pointer' size={24} onClick={closeModal} />
            <Signup openLoginModal={openLoginModal} />
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded relative'>
            <FiX className='absolute top-2 right-2 cursor-pointer' size={24} onClick={closeModal} />
            <Login openSignupModal={openSignupModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentWithLogo;
