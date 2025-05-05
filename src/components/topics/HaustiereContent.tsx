
import React from 'react';
import HaustiereProfilSection from './haustiere/HaustiereProfilSection';
import GesundheitSection from './haustiere/GesundheitSection';
import GewichtsverlaufSection from './haustiere/GewichtsverlaufSection';

interface HaustiereContentProps {
  activeSubcategory: string | null;
}

const HaustiereContent: React.FC<HaustiereContentProps> = ({ activeSubcategory }) => {
  return (
    <div className="space-y-6">
      <HaustiereProfilSection isActive={activeSubcategory === '#profile'} />
      <GesundheitSection isActive={activeSubcategory === '#gesundheit'} />
      <GewichtsverlaufSection isActive={activeSubcategory === '#gewicht'} />
    </div>
  );
};

export default HaustiereContent;
