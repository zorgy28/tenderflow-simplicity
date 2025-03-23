
import React, { useEffect } from 'react';
import { TenderNavbar } from '@/components/TenderNavbar';
import { TenderHero } from '@/components/TenderHero';
import { TenderBenefits } from '@/components/TenderBenefits';
import { TenderSignup } from '@/components/TenderSignup';
import { TenderFooter } from '@/components/TenderFooter';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: 'smooth',
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <TenderNavbar />
      <TenderHero />
      <TenderBenefits />
      <TenderSignup />
      <TenderFooter />
    </div>
  );
};

export default Index;
