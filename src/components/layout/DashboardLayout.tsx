
import React, { ReactNode, useState, useMemo, useEffect } from 'react';
import { Menu, Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NotificationPanel } from '../dashboard/NotificationPanel';
import DashboardHeader from '../dashboard/DashboardHeader';
import TopicSelector from '../dashboard/TopicSelector';

interface DashboardLayoutProps {
  children: ReactNode;
}

// Optimize static components with React.memo
const MemoizedNotificationPanel = React.memo(NotificationPanel);
const MemoizedDashboardHeader = React.memo(DashboardHeader);
const MemoizedTopicSelector = React.memo(TopicSelector);

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Event-Handler für Scroll-Erkennung
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimierte Toggle-Handler
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeNotifications = () => setNotificationsOpen(false);

  // Memoize the notification panel to prevent re-rendering
  const notificationPanel = useMemo(() => {
    if (!notificationsOpen) return null;
    
    return (
      <>
        <div 
          className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-30 translate-x-0 border-l"
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-semibold">Benachrichtigungen</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeNotifications}
              className="hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <MemoizedNotificationPanel />
        </div>
        
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-20 animate-fade-in"
          onClick={closeNotifications}
        />
      </>
    );
  }, [notificationsOpen]);

  return (
    <div className="flex min-h-screen bg-dashboard-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation - mit leichtem Schatten beim Scrollen */}
        <div className={`bg-white border-b border-border sticky top-0 z-10 transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
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
                onClick={toggleNotifications}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </div>
          </div>
        </div>

        {/* Header with User Info */}
        <MemoizedDashboardHeader />
        
        {/* Zentrale TopicSelector-Navigation */}
        <div className="bg-white border-b border-gray-200 py-2 sticky top-16 z-10">
          <div className="container">
            <MemoizedTopicSelector />
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-6 flex-grow">
          {children}
        </div>
      </div>

      {/* Notification Panel - Sliding from right */}
      {notificationPanel}
    </div>
  );
};

export default React.memo(DashboardLayout);
