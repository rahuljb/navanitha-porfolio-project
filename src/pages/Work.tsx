import React from 'react';
import { WorkSection } from '../components/WorkSection';
import { CategoryList } from '../components/CategoryList';
import { ContactSection } from '../components/ContactSection';

export const Work: React.FC = () => {
  return (
    <div className="pt-28 bg-[#0A0A0A] text-[#F4F1EB]">
      <WorkSection />
      <CategoryList />
      <ContactSection />
    </div>
  );
};
