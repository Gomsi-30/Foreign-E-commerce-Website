'use client';

import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import Login from '../_components/authenticate/login';
import Signup from '../_components/authenticate/signup'; 
import { useRouter } from 'next/navigation';

const BuyButton: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSignupModal, setShowSignupModal] = useState<boolean>(false); 
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleBuyNowClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLoginModal(true);
    } else {
      router.push('/checkout');
    }
  };


  const openSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  
  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  return (
    <>
      <div
        className="p-2 px-3 sm:px-0 py-2.5 flex justify-center mt-2 bg-pink-600 text-lg text-white font-medium rounded-md w-[230%] sm:w-[100%]"
        onClick={handleBuyNowClick}
      >
        Buy Now
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className='fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded relative'>
            <button onClick={() => setShowLoginModal(false)} className="absolute top-2 right-2 text-xl">✕</button>
            <Login name='Continue to Shipping' openSignupModal={openSignupModal} />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className='fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded relative'>
            <button onClick={() => setShowSignupModal(false)} className="absolute top-2 right-2 text-xl">✕</button>
            <Signup name='Continue to Shipping' openLoginModal={openLoginModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default BuyButton;
