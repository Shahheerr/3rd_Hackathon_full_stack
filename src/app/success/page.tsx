import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    // Clear the cart from localStorage after successful payment
    localStorage.removeItem('cart');
    
    // You can also make an API call here to update your database
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="text-xl mb-8">Your payment was successful.</p>
      <button 
        onClick={() => router.push('/')}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Continue Shopping
      </button>
    </div>
  );
}