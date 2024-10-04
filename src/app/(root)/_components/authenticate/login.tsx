import {  AuthError } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler,FieldError, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { auth } from '../../../../firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';


const signupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});


interface LoginProps {
  openSignupModal: () => void;
  name?:string;
}

const Login: React.FC<LoginProps> = ({ openSignupModal,name='Login Here' }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
    resolver: zodResolver(signupSchema),
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

 
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Sign-up successful!');
      reset();
      router.push('/'); 
    } catch (error) {
      const firebaseError = error as AuthError;
      toast.error(firebaseError.message || 'Error during sign-up. Please try again.');
    }
  };

 
  const handleLoginWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      toast.success('Login successful!');
      if(name==='Login Here'){
        router.push('/');
      }else{
        router.push('/checkout');
      }
    } catch (error) {
      const firebaseError = error as AuthError;
      toast.error(firebaseError.message || 'Error during login. Please try again.');
    }
  };

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex z-30 justify-center items-center h-2/3">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Login Here</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full mt-1 px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
     {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {typeof errors.email === 'string' 
      ? errors.email 
      : (errors.email as FieldError).message || 'Error'}
  </p>
)}


          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password')}
              className={`w-full mt-1 px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[67%] transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </button>
            {errors.password && (
  <p className="text-red-500 text-sm mt-1">
    {typeof errors.password === 'string' 
      ? errors.password 
      : (errors.password as FieldError).message || 'Error'}
  </p>
)}


          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md"
          >
            {name}
          </button>
          <button
            type="button"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md"
            onClick={handleLoginWithGoogle}
          >
            Google Login
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={openSignupModal}
                className="text-pink-500 hover:text-pink-600"
              >
                Signup here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
