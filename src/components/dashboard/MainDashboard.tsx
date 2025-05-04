
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OverviewSection from './sections/OverviewSection';
import FamilyInfoSection from './sections/FamilyInfoSection';
import StatisticsSection from './sections/StatisticsSection';
import InsightsRecommendationsSection from './sections/InsightsRecommendationsSection';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Time/Weather, Finance and News Section */}
      <OverviewSection />
      
      {/* Main Dashboard Row - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Left Column - Family Information */}
        <div className="lg:col-span-2 space-y-4">
          <FamilyInfoSection />
        </div>

        {/* Right Column - Stats and Document Upload */}
        <div className="space-y-4">
          <StatisticsSection />
        </div>
      </div>

      {/* Insights and Recommendations */}
      <InsightsRecommendationsSection />
    </DashboardLayout>
  );
};

export default Dashboard;
