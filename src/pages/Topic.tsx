
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import SubcategoryNavigation from '@/components/dashboard/SubcategoryNavigation';
import TopicContentRenderer from '@/components/topics/TopicContentRenderer';
import TopicActionBar from '@/components/topics/TopicActionBar';
import TopicBackButton from '@/components/topics/TopicBackButton';
import { getTopicTitle, getTopicSubcategories } from '@/utils/topicUtils';

const Topic: React.FC = () => {
  const { topicId = 'wohnen' } = useParams<{ topicId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Set active subcategory based on URL hash or default to the first subcategory
  useEffect(() => {
    if (location.hash) {
      setActiveSubcategory(location.hash);
    } else {
      const currentSubcategories = getTopicSubcategories(topicId);
      if (currentSubcategories.length > 0) {
        setActiveSubcategory(currentSubcategories[0].href);
        navigate(`${location.pathname}${currentSubcategories[0].href}`, { replace: true });
      }
    }
  }, [topicId, location.pathname, location.hash, navigate]);
  
  const handleSubcategoryChange = (href: string) => {
    setIsLoading(true); // Show loading state
    setActiveSubcategory(href);
    navigate(`${location.pathname}${href}`);
    
    // Short loading time since the components are optimized
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  // Get subcategories for current topic
  const currentSubcategories = getTopicSubcategories(topicId);
  
  return (
    <DashboardLayout>
      <div className="container py-6">
        <div className="mb-6">
          <TopicBackButton />
        </div>
        
        <div className="mt-6 animate-fade-in">
          <h1 className="text-2xl font-bold mb-6 text-dashboard-purple">{getTopicTitle(topicId)}</h1>
          
          {/* Standardized subcategory navigation */}
          <SubcategoryNavigation 
            subcategories={currentSubcategories}
            activeSubcategory={activeSubcategory}
            onSubcategoryChange={handleSubcategoryChange}
          />
          
          <div className="mb-6">
            <TopicActionBar />
            
            <TopicContentRenderer 
              topicId={topicId} 
              activeSubcategory={activeSubcategory} 
              isLoading={isLoading} 
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Topic;
