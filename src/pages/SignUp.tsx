
import React from 'react';
import { TenderNavbar } from '@/components/TenderNavbar';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TenderNavbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create your TenderFlow account</h2>
              <p className="text-gray-600 mt-2">Start managing your tenders efficiently</p>
            </div>
            
            <ClerkSignUp 
              path="/signup"
              routing="path"
              signInUrl="/signin"
              redirectUrl="/dashboard"
            />
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <Link to="/signin" className="text-tender-600 hover:text-tender-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
