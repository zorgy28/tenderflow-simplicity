
import React from 'react';
import { TenderNavbar } from '@/components/TenderNavbar';
import { UserProfile } from '@clerk/clerk-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TenderNavbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
            <p className="text-gray-600 mb-8">Welcome to your TenderFlow dashboard! Manage your tenders efficiently.</p>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
              <div className="border rounded-lg overflow-hidden">
                <UserProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
