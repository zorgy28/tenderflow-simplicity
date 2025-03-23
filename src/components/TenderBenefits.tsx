
import React, { useEffect, useRef } from 'react';
import { Calendar, FileText, BarChart3, HandshakeIcon } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={featureRef} 
      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 translate-y-10"
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '600ms' }}
    >
      <div className="w-12 h-12 bg-tender-100 text-tender-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const TenderBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (headingRef.current) {
            headingRef.current.classList.add('opacity-100', 'translate-y-0');
            headingRef.current.classList.remove('opacity-0', 'translate-y-10');
          }
          if (textRef.current) {
            setTimeout(() => {
              textRef.current?.classList.add('opacity-100', 'translate-y-0');
              textRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 200);
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="benefits" ref={sectionRef} className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 opacity-0 translate-y-10 transition-all duration-500"
          >
            When You Should Turn To TenderFlow
          </h2>
          <p 
            ref={textRef}
            className="text-lg text-gray-600 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-500"
          >
            TenderFlow specializes in helping you manage your tender submission process efficiently, 
            without any hassle. We've helped companies in situations like these and more:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<FileText className="h-6 w-6" />}
            title="Document Organization"
            description="Keep all your tender documents organized in one place with smart categorization and quick access."
            delay={0}
          />
          <Feature 
            icon={<Calendar className="h-6 w-6" />}
            title="Deadline Management"
            description="Never miss a deadline with automated reminders and timeline visualization for each tender."
            delay={100}
          />
          <Feature 
            icon={<BarChart3 className="h-6 w-6" />}
            title="Analytics & Insights"
            description="Gain valuable insights from comprehensive analytics to improve your tender strategy and win rate."
            delay={200}
          />
          <Feature 
            icon={<HandshakeIcon className="h-6 w-6" />}
            title="Improved Win Rates"
            description="Our clients see an average increase of 27% in tender win rates within the first six months."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
