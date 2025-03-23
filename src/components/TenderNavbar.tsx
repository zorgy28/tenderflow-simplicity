
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const TenderNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ddf5b223-f267-4af6-bf72-2504517c68bd.png" 
            alt="Taktik Logo" 
            className="h-10" 
          />
        </div>
        
        <nav className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a href="#login" className="text-sm font-medium text-gray-700 hover:text-tender-600 transition-colors">
              Sign In
            </a>
            <Button className="bg-tender-600 hover:bg-tender-700 text-white rounded-md px-5">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
