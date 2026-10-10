import React from 'react';
import { ContactSection } from '../components/ContactSection';

export const Contact: React.FC = () => {
  return (
    <div className="pt-28 bg-[#0A0A0A] text-[#F4F1EB]">
      <ContactSection standalone={true} />
    </div>
  );
};
