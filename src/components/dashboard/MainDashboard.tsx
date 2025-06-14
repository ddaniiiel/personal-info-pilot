
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OverviewSection from './sections/OverviewSection';
import FamilyInfoSection from './sections/FamilyInfoSection';
import StatisticsSection from './sections/StatisticsSection';
import InsightsRecommendationsSection from './sections/InsightsRecommendationsSection';
import PersonalizedGreeting from './PersonalizedGreeting';
import TodayPrioritiesSection from './TodayPrioritiesSection';
import QuickStatsSection from './QuickStatsSection';
import GuestWelcomeCard from './GuestWelcomeCard';
import OfflineIndicator from './OfflineIndicator';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useUser } from '@/contexts/UserContext';
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
  const { 
    currentTime, 
    greeting, 
    todayPriorities, 
    dashboardStats, 
    isLoggedIn 
  } = useDashboardData();
  
  const { user } = useUser();

  return (
    <DashboardLayout>
      {/* Apple-style Breadcrumb navigation */}
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="apple-focus rounded-lg p-1 -m-1">
                <Home className="h-3.5 w-3.5 mr-1" />
                <span className="sr-only">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Guest Welcome Card - only show for guests */}
      {user.isGuest && (
        <div className="mb-8 apple-fade-in">
          <GuestWelcomeCard />
        </div>
      )}

      {/* Content with Apple-style animations */}
      <div className="space-y-8">
        {/* Personalized Greeting */}
        <div className="apple-fade-in">
          <PersonalizedGreeting 
            greeting={greeting}
            currentTime={currentTime}
            isLoggedIn={isLoggedIn}
          />
        </div>
        
        {/* Today's Priorities */}
        <div className="apple-slide-up" style={{ animationDelay: '0.1s' }}>
          <TodayPrioritiesSection priorities={todayPriorities} />
        </div>
        
        {/* Quick Stats Overview */}
        <div className="apple-slide-up" style={{ animationDelay: '0.2s' }}>
          <QuickStatsSection stats={dashboardStats} />
        </div>
        
        {/* Time/Weather, Finance and News Section */}
        <div className="apple-slide-up" style={{ animationDelay: '0.3s' }}>
          <OverviewSection />
        </div>
        
        {/* Main Dashboard Content - Responsive Apple Grid */}
        <div className="apple-grid grid-cols-1 lg:grid-cols-3 mb-8 apple-slide-up" style={{ animationDelay: '0.4s' }}>
          {/* Left Column - Family Information */}
          <div className="lg:col-span-2 space-y-8">
            <FamilyInfoSection />
          </div>

          {/* Right Column - Stats and Document Upload */}
          <div className="space-y-8">
            <StatisticsSection />
          </div>
        </div>

        {/* Insights and Recommendations */}
        <div className="apple-slide-up" style={{ animationDelay: '0.5s' }}>
          <InsightsRecommendationsSection />
        </div>
      </div>

      {/* Offline Indicator */}
      <OfflineIndicator />
    </DashboardLayout>
  );
};

export default Dashboard;
