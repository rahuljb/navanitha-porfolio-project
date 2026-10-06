import React, { useEffect } from 'react';
import { ProductionSection } from '../components/ProductionSection';
import { CreativeStatement } from '../components/CreativeStatement';
import { ContactSection } from '../components/ContactSection';

export const Production: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-24 bg-[#0A0A0A] text-[#F4F1EB]">
      <ProductionSection showBreadcrumb={true} />
      <CreativeStatement />
      <ContactSection />
    </div>
  );
};
