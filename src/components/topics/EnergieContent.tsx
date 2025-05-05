
import React from 'react';
import VerbrauchsanalyseSection from './energie/VerbrauchsanalyseSection';
import EinsparungspotentialeSection from './energie/EinsparungspotentialeSection';
import SmartHomeSection from './energie/SmartHomeSection';
import ErneuerbarEnergienSection from './energie/ErneuerbarEnergienSection';
import CO2FootprintSection from './energie/CO2FootprintSection';
import MuelltrennungSection from './energie/MuelltrennungSection';

interface EnergieContentProps {
  activeSubcategory: string | null;
}

const EnergieContent: React.FC<EnergieContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <VerbrauchsanalyseSection isActive={activeSubcategory === '#verbrauch'} />
      <EinsparungspotentialeSection isActive={activeSubcategory === '#einsparung'} />
      <SmartHomeSection isActive={activeSubcategory === '#smart-home'} />
      <ErneuerbarEnergienSection isActive={activeSubcategory === '#erneuerbare'} />
      <CO2FootprintSection isActive={activeSubcategory === '#co2'} />
      <MuelltrennungSection isActive={activeSubcategory === '#muell'} />
    </div>
  );
};

export default EnergieContent;
