
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TenderNavbar } from '@/components/TenderNavbar';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would be replaced with actual authentication logic
    setIsLoading(true);
    try {
      // Simulating an authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show a success message and redirect
      toast.success("Successfully signed in!");
      navigate('/');
    } catch (error) {
      toast.error("Failed to sign in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <TenderNavbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-5">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Sign in to TenderFlow</h2>
              <p className="text-gray-600 mt-2">Enter your details to access your account</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="h-12 text-base border-gray-200 focus:border-tender-400"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-tender-600 hover:text-tender-700">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="h-12 text-base border-gray-200 focus:border-tender-400"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-tender-600 hover:bg-tender-700 text-white rounded-md"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
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
                  type="button"
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
                  type="button"
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
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-tender-600 hover:text-tender-700 font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
