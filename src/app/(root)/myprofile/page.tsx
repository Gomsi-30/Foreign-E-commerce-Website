'use client';
import React, { useEffect, useState } from 'react';
import { getAuth, User } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Profile",
};
interface UserProfile {
  name: string | null;
  email: string | null;
  photoURL: string | null;
}

const MyProfile: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const currentUser: User | null = auth.currentUser;

    if (currentUser) {
      setUser({
        name: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
      });
      console.log(currentUser);
    } else {
      // Redirect to login if the user is not authenticated
      router.push('/');
    }
  }, [auth, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {user ? (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
          <div className="flex flex-col items-center">
            <div className="relative h-[200px] w-[200px]">
              <Image
                src={user.photoURL || '/default-profile.png'}
                alt="Profile Picture"
                fill
                className="object-cover object-center rounded-full mb-4"
              />
            </div>
            <h1 className="text-2xl font-semibold mb-2">{user.name || 'No Name'}</h1>
            <p className="text-gray-600">{user.email || 'No Email'}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyProfile;
