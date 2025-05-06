
import React, { memo } from 'react';
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load all section components
const VerbrauchsanalyseSection = lazy(() => import('./energie/VerbrauchsanalyseSection'));
const EinsparungspotentialeSection = lazy(() => import('./energie/EinsparungspotentialeSection'));
const SmartHomeSection = lazy(() => import('./energie/SmartHomeSection'));
const ErneuerbarEnergienSection = lazy(() => import('./energie/ErneuerbarEnergienSection'));
const CO2FootprintSection = lazy(() => import('./energie/CO2FootprintSection'));
const MuelltrennungSection = lazy(() => import('./energie/MuelltrennungSection'));

interface EnergieContentProps {
  activeSubcategory: string | null;
}

const SectionLoader = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-64" />
    <Skeleton className="h-4 w-full" />
    <div className="grid gap-4">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

const EnergieContent: React.FC<EnergieContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <Suspense fallback={<SectionLoader />}>
        <VerbrauchsanalyseSection isActive={activeSubcategory === '#verbrauch'} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <EinsparungspotentialeSection isActive={activeSubcategory === '#einsparung'} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <SmartHomeSection isActive={activeSubcategory === '#smart-home'} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ErneuerbarEnergienSection isActive={activeSubcategory === '#erneuerbare'} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CO2FootprintSection isActive={activeSubcategory === '#co2'} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <MuelltrennungSection isActive={activeSubcategory === '#muell'} />
      </Suspense>
    </div>
  );
};

export default memo(EnergieContent);
