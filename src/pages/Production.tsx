import React from 'react';
import { ProductionSection } from '../components/ProductionSection';
import { CreativeStatement } from '../components/CreativeStatement';
import { ContactSection } from '../components/ContactSection';

export const Production: React.FC = () => {
  return (
    <div className="pt-28 bg-[#0A0A0A] text-[#F4F1EB]">
      <ProductionSection />
      <CreativeStatement />
      <ContactSection />
    </div>
  );
};
