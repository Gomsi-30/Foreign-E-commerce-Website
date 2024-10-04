// withAuth.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../../../firebase';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthHOC: React.FC<P> = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
        console.log(user);
        setLoading(false);
        if (!user) {
          router.push('/help');
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <div>loading...</div>;
    }

    
    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
