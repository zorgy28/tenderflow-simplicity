
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const TenderHero: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Manage your tenders efficiently for better outcomes
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            The smart way to track, analyze, and win more business opportunities
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto mt-6 space-y-4">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your company email"
            className="h-12 text-base border-gray-200 focus:border-tender-400 shadow-sm transition-all duration-200"
          />
          <Button className="w-full h-12 bg-tender-600 hover:bg-tender-700 text-white px-8 shadow-sm transition-all duration-200 rounded-md">
            <span>GET STARTED</span>
          </Button>
          
          <p className="text-sm text-gray-500">Or call <a href="tel:8005557890" className="text-tender-600 hover:text-tender-700 font-medium">800-555-7890</a></p>
        </div>
        
        <div className="max-w-2xl mx-auto mt-6">
          <p className="text-sm text-gray-600">
            Streamline your tender process. Track deadlines automatically. No missed opportunities, paperwork hassles, or compliance issues.
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto mt-8">
          <img 
            src="/lovable-uploads/c8ecb62f-9e42-44f8-a606-04c39c5e8fed.png" 
            alt="Tender illustration" 
            className="mx-auto w-full max-w-sm opacity-80"
          />
        </div>
      </div>
    </section>
  );
};
