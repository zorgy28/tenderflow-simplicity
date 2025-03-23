
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const TenderSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    setFormData({ name: '', email: '', company: '', password: '' });
  };
  
  return (
    <section id="signup" className="py-16 px-6 bg-gray-50">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create your TenderFlow account</h2>
          
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="h-12 text-base border-gray-200 focus:border-tender-400"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Company Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="h-12 text-base border-gray-200 focus:border-tender-400"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company Ltd."
              className="h-12 text-base border-gray-200 focus:border-tender-400"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose a secure password"
              className="h-12 text-base border-gray-200 focus:border-tender-400"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full h-12 bg-tender-600 hover:bg-tender-700 text-white rounded-md"
          >
            Create Account
          </Button>
          
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </Button>
              
              <Button
                variant="outline"
                className="h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#00A4EF">
                  <path d="M11.4 24H0V12.6h11.4V24z" />
                  <path d="M24 24H12.6V12.6H24V24z" fill="#FFB900" />
                  <path d="M11.4 11.4H0V0h11.4v11.4z" fill="#F25022" />
                  <path d="M24 11.4H12.6V0H24v11.4z" fill="#7FBA00" />
                </svg>
                Microsoft
              </Button>
            </div>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-tender-600 hover:text-tender-700">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-tender-600 hover:text-tender-700">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};
