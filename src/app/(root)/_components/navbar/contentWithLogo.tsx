'use client';
import { useAppSelector } from '../redux/hook';
import { IoIosHeartEmpty } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiShoppingCart, FiX, FiMenu, FiChevronDown } from "react-icons/fi";
import Signup from '../authenticate/signup';
import Login from '../authenticate/login';
import { usePathname } from 'next/navigation';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const ContentWithLogo: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showSignupModal, setShowSignupModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); 
  // const [user, setUser] = useState<UserType | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false); 

  const auth = getAuth();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems.length;
  const wishlistCount = useAppSelector((state) => state.wishlist.products.length);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      // setUser(user as UserType);  // Casting user to UserType
    });

    return () => unsubscribe();
  }, [auth]);

  const closeModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setShowDropdown(false);
      router.push('/')
    } catch (error) {
      console.error("Error logging out:", error);
    }
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
        
        <div className='hidden md:flex flex-row gap-6 whitespace-nowrap'>
          {/* Links */}
          <Link className={`${path.startsWith('/latestcollection') ? 'underline' : ''} font-regular hidden lg:block`} href='/latestcollection'>Latest Collection</Link>
          <Link className={`${path.startsWith('/mensjewellery') ? 'underline' : ''} font-regular`} href='/mensjewellery'>Men&apos;s Jewellery</Link>
          <Link className={`${path.startsWith('/blogs') ? 'underline' : ''} font-regular`} href='/blogs'>Blogs</Link>
          <Link className={`${path.startsWith('/ourstory') ? 'underline' : ''} font-regular`} href='/ourstory'>Our Story</Link>
          
          {/* Wishlist Icon */}
          <div className='relative flex flex-row items-center gap-1'>
            <Link className={`${path.startsWith('/wishlist') ? 'underline' : ''} font-regular`} href='/wishlist'>
              <IoIosHeartEmpty size={27} />
            </Link>
            <h1 className='absolute bottom-4 left-4 h-4 w-4 text-xs flex justify-center items-center rounded-full bg-pink-400 text-white font-semibold'>
              {wishlistCount}
            </h1>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <FiMenu size={24} className='cursor-pointer' onClick={() => setDrawerOpen(true)} />
        </div>

        {/* Desktop Menu for Cart and Login/Account */}
        <div className='hidden md:flex flex-row gap-7 items-center relative'>
          <Link href="/cart" className='flex flex-row gap-2 items-center'>
            <FiShoppingCart size={20} color='black' />
            <p className='font-regular'>{cartItemCount}</p>
          </Link>

          {isAuthenticated ? (
            <div className="relative">
              <button className='font-regular flex items-center bg-black text-white rounded-md text-sm py-2 px-4' onClick={() => setShowDropdown(!showDropdown)}>
                My Account <FiChevronDown className='ml-1' />
              </button>
              {showDropdown && (
                <div className="absolute w-[150%] right-0 mt-2 bg-white border rounded shadow-lg">
                  <Link href="/myorders" className='block px-4 py-2 text-black hover:bg-gray-100' onClick={() => setShowDropdown(false)}>My Orders</Link>
                  <Link href="/myprofile" className='block px-4 py-2 text-black hover:bg-gray-100' onClick={() => setShowDropdown(false)}>My Profile</Link>
                  <button className='block w-full text-left px-4 py-2 text-black hover:bg-gray-100' onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button className='font-regular hidden md:block bg-black text-white rounded-md text-sm py-2 px-4' onClick={() => setShowLoginModal(true)}>
              LOGIN
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${drawerOpen ? 'visible' : 'invisible'} transition-opacity duration-300`} onClick={() => setDrawerOpen(false)}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-white p-5 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`} onClick={(e) => e.stopPropagation()}>
          <FiX size={24} className='cursor-pointer' onClick={() => setDrawerOpen(false)} />
          <div className='mt-5 flex flex-col gap-4'>
            {/* Drawer Links */}
            <Link href='/latestcollection' className='font-regular' onClick={() => setDrawerOpen(false)}>Latest Collection</Link>
            <Link href='/mensjewellery' className='font-regular' onClick={() => setDrawerOpen(false)}>Men&apos;s Jewellery</Link>
            <Link href='/blogs' className='font-regular' onClick={() => setDrawerOpen(false)}>Blogs</Link>
            <Link href='/ourstory' className='font-regular' onClick={() => setDrawerOpen(false)}>Our Story</Link>

            {/* Wishlist in Drawer */}
            <div className='flex flex-row items-center gap-1'>
              <Link href='/wishlist' className='font-regular' onClick={() => setDrawerOpen(false)}>Wishlist</Link>
              <h1 className='h-5 w-5 text-xs flex justify-center items-center rounded-full bg-blue-400 text-white font-semibold'>
                {wishlistCount}
              </h1>
            </div>

            {isAuthenticated ? (
              <button className='font-regular text-left bg-black text-white rounded-md text-sm py-2 px-4' onClick={handleLogout}>Logout</button>
            ) : (
              <button className='font-regular bg-black text-white rounded-md text-sm py-2 px-4' onClick={() => setShowLoginModal(true)}>Login</button>
            )}
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70'>
          <div className='bg-white p-8 rounded-lg relative'>
            <FiX className='absolute top-4 right-4 cursor-pointer' size={24} onClick={closeModal} />
            <Signup  openLoginModal={() => { setShowSignupModal(false); setShowLoginModal(true); }} />
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70'>
          <div className='bg-white p-8 rounded-lg relative'>
            <FiX className='absolute top-4 right-4 cursor-pointer' size={24} onClick={closeModal} />
            <Login  openSignupModal={() => { setShowLoginModal(false); setShowSignupModal(true); }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentWithLogo;
