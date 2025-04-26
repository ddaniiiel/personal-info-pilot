
import React, { ReactNode, useState } from 'react';
import { Menu, Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NotificationPanel } from '../dashboard/NotificationPanel';
import DashboardHeader from '../dashboard/DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-dashboard-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="bg-white border-b border-border sticky top-0 z-10">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold text-dashboard-purple ml-2">
                KI-Dashboard
              </h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </div>
          </div>
        </div>

        {/* Header with User Info */}
        <DashboardHeader />

        {/* Main Content */}
        <div className="container py-6 flex-grow">
          {children}
        </div>
      </div>

      {/* Notification Panel - Sliding from right */}
      <div 
        className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-30 ${
          notificationsOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold">Benachrichtigungen</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setNotificationsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <NotificationPanel />
      </div>
      
      {/* Overlay when notification panel is open */}
      {notificationsOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-20"
          onClick={() => setNotificationsOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
