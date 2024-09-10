import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white rounded-xl shadow-lg p-10 w-96 text-center">
        {/* Welcome Section */}
        <h3 className="text-3xl font-semibold mb-8 text-gray-800">
          Welcome to Dhruv Blog
        </h3>
        <p className="text-gray-600 mb-6">
          Create your account and start sharing your thoughts with the world.
        </p>

        {/* Signup Button */}
        <button
          onClick={() => loginWithRedirect()}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-lg"
        >
          Create Account
        </button>

        {/* Optional Additional Text */}
        <p className="mt-6 text-sm text-gray-500">
          Already have an account?{' '}
          <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => loginWithRedirect()}>
            Log In
          </span>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
