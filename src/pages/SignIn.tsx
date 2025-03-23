
import React from 'react';
import { TenderNavbar } from '@/components/TenderNavbar';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TenderNavbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Sign in to TenderFlow</h2>
              <p className="text-gray-600 mt-2">Enter your details to access your account</p>
            </div>
            
            <ClerkSignIn 
              path="/signin"
              routing="path"
              signUpUrl="/signup"
              redirectUrl="/dashboard"
            />
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-tender-600 hover:text-tender-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
