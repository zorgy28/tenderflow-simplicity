
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

export const TenderHero: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Animated subtle shapes in background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tender-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tender-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float -z-10" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Manage your tenders efficiently for better outcomes
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            The smart way to track, analyze, and win more business opportunities
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto mt-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your company email"
              className="h-12 text-base border-gray-200 focus:border-tender-400 shadow-sm transition-all duration-200"
            />
            <Button className="h-12 bg-tender-600 hover:bg-tender-700 text-white px-8 shadow-md hover:shadow-lg transition-all duration-200">
              <span>GET STARTED</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">Or call <a href="tel:8005557890" className="text-tender-600 hover:text-tender-700 font-medium">800-555-7890</a></p>
        </div>
        
        <div className="max-w-2xl mx-auto mt-12">
          <p className="text-gray-600">
            Streamline your tender process. Track deadlines automatically. No missed opportunities, paperwork hassles, or compliance issues.
          </p>
        </div>
        
        {/* Illustration */}
        <div className="w-full max-w-3xl mx-auto mt-16 relative">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent pointer-events-none z-10"></div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-tender-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-500">TenderFlow Dashboard</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-gray-50 p-4 rounded-lg h-40 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="text-sm font-medium text-gray-700">Active Tenders</div>
                      <div className="text-xs text-tender-600 bg-tender-50 px-2 py-1 rounded-full">12 open</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-2 rounded shadow-sm flex items-center justify-center">
                          <div className="w-full h-4 bg-gray-200 rounded-sm"></div>
                        </div>
                      ))}
                    </div>
                    <div className="w-2/3 h-2 bg-gray-200 rounded-full mt-2"></div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg h-40 flex flex-col justify-between">
                    <div className="text-sm font-medium text-gray-700">Analytics</div>
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-full border-4 border-tender-400 border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg h-24 flex flex-col justify-between">
                    <div className="text-sm font-medium text-gray-700">Upcoming Deadlines</div>
                    <div className="flex items-center">
                      <div className="w-full space-y-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-tender-50 p-4 rounded-lg h-24 flex items-center justify-center">
                    <div className="text-tender-600 flex items-center">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="ml-2 font-medium">All tasks complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tender-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-soft -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-soft -z-10" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};
