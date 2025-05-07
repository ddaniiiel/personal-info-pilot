
import React, { lazy, Suspense } from 'react';

// Lazy-loaded components for better performance
const WohnenContent = lazy(() => import('@/components/topics/WohnenContent'));
const SteuernContent = lazy(() => import('@/components/topics/SteuernContent'));
const VersicherungenContent = lazy(() => import('@/components/topics/VersicherungenContent'));
const EnergieContent = lazy(() => import('@/components/topics/EnergieContent'));
const RechtContent = lazy(() => import('@/components/topics/RechtContent'));
const FoerderungenContent = lazy(() => import('@/components/topics/FoerderungenContent'));
const KinderContent = lazy(() => import('@/components/topics/KinderContent'));
const MobilitaetContent = lazy(() => import('@/components/topics/MobilitaetContent'));
const HaustiereContent = lazy(() => import('@/components/topics/HaustiereContent'));
const BildungContent = lazy(() => import('@/components/topics/BildungContent'));
const VorsorgeContent = lazy(() => import('@/components/topics/VorsorgeContent'));
const ArbeitContent = lazy(() => import('@/components/topics/ArbeitContent'));
const GesundheitContent = lazy(() => import('@/components/topics/GesundheitContent'));
const FreizeitContent = lazy(() => import('@/components/topics/FreizeitContent'));

// Loading fallback component
const ContentLoader = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="h-24 bg-gray-200 rounded md:col-span-2"></div>
    </div>
  </div>
);

interface TopicContentRendererProps {
  topicId: string;
  activeSubcategory: string | null;
  isLoading: boolean;
}

const TopicContentRenderer: React.FC<TopicContentRendererProps> = ({
  topicId,
  activeSubcategory,
  isLoading
}) => {
  if (isLoading) {
    return <ContentLoader />;
  }

  return (
    <Suspense fallback={<ContentLoader />}>
      {(() => {
        switch (topicId) {
          case 'wohnen':
            return <WohnenContent activeSubcategory={activeSubcategory} />;
          case 'steuern':
            return <SteuernContent activeSubcategory={activeSubcategory} />;
          case 'versicherungen':
          case 'finanzen': 
            return <VersicherungenContent activeSubcategory={activeSubcategory} />;
          case 'energie':
            return <EnergieContent activeSubcategory={activeSubcategory} />;
          case 'recht':
            return <RechtContent activeSubcategory={activeSubcategory} />;
          case 'foerderungen':
            return <FoerderungenContent activeSubcategory={activeSubcategory} />;
          case 'kinder':
            return <KinderContent activeSubcategory={activeSubcategory} />;
          case 'mobilitaet':
            return <MobilitaetContent activeSubcategory={activeSubcategory} />;
          case 'haustiere':
            return <HaustiereContent activeSubcategory={activeSubcategory} />;
          case 'bildung':
            return <BildungContent activeSubcategory={activeSubcategory} />;
          case 'vorsorge':
            return <VorsorgeContent activeSubcategory={activeSubcategory} />;
          case 'arbeit':
            return <ArbeitContent activeSubcategory={activeSubcategory} />;
          case 'gesundheit':
            return <GesundheitContent activeSubcategory={activeSubcategory} />;
          case 'freizeit':
            return <FreizeitContent activeSubcategory={activeSubcategory} />;
          default:
            return <WohnenContent activeSubcategory={activeSubcategory} />;
        }
      })()}
    </Suspense>
  );
};

export default TopicContentRenderer;
