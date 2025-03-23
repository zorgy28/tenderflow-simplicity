
import React from 'react';
import { Calendar, FileText, BarChart3, HandshakeIcon } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-12 h-12 text-tender-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export const TenderBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            When You Should Turn To TenderFlow
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            TenderFlow specializes in helping you manage your tender submission process efficiently, 
            without any hassle. We've helped companies in situations like these and more:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<FileText className="h-6 w-6" />}
            title="Document Organization"
            description="Keep all your tender documents organized in one place with smart categorization."
          />
          <Feature 
            icon={<Calendar className="h-6 w-6" />}
            title="Deadline Management"
            description="Never miss a deadline with automated reminders and timeline visualization."
          />
          <Feature 
            icon={<BarChart3 className="h-6 w-6" />}
            title="Analytics & Insights"
            description="Gain valuable insights from comprehensive analytics to improve your win rate."
          />
          <Feature 
            icon={<HandshakeIcon className="h-6 w-6" />}
            title="Improved Win Rates"
            description="Our clients see an average increase of 27% in tender win rates."
          />
        </div>
      </div>
    </section>
  );
};
