import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Perform logout actions only on the client-side
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('email');
      axios.get('http://localhost:3000/admin/signout')
        .then(() => {
          router.push('/');
          localStorage.removeItem('isLoggedIn');
          setIsLoggedIn(false);
        })
        .catch((error) => {
          console.log('Error occurred during logout:', error);
        });
    }
  }, []);

  return null;
}