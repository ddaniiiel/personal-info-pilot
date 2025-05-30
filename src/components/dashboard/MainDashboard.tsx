
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OverviewSection from './sections/OverviewSection';
import FamilyInfoSection from './sections/FamilyInfoSection';
import StatisticsSection from './sections/StatisticsSection';
import InsightsRecommendationsSection from './sections/InsightsRecommendationsSection';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Breadcrumb navigation */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-3.5 w-3.5 mr-1" />
                <span className="sr-only">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Time/Weather, Finance and News Section */}
      <OverviewSection />
      
      {/* Main Dashboard Content - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left Column - Family Information */}
        <div className="lg:col-span-2 space-y-6">
          <FamilyInfoSection />
        </div>

        {/* Right Column - Stats and Document Upload */}
        <div className="space-y-6">
          <StatisticsSection />
        </div>
      </div>

      {/* Insights and Recommendations */}
      <InsightsRecommendationsSection />
    </DashboardLayout>
  );
};

export default Dashboard;
