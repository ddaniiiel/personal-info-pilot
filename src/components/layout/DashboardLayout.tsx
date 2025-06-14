
import React, { ReactNode, useState, useMemo, useEffect } from 'react';
import { Menu, Bell, X, User, LogOut, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NotificationPanel } from '../dashboard/NotificationPanel';
import DashboardHeader from '../dashboard/DashboardHeader';
import TopicSelector from '../dashboard/TopicSelector';
import ThemeToggle from '../dashboard/ThemeToggle';
import { useUser } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { usePerformance } from '@/hooks/use-performance';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const MemoizedNotificationPanel = React.memo(NotificationPanel);
const MemoizedDashboardHeader = React.memo(DashboardHeader);
const MemoizedTopicSelector = React.memo(TopicSelector);

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isLoggedIn, logout } = useUser();
  const navigate = useNavigate();
  const performanceMetrics = usePerformance();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Register service worker for offline functionality
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (performanceMetrics && process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', performanceMetrics);
    }
  }, [performanceMetrics]);

  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeNotifications = () => setNotificationsOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
      // Nach Logout bleiben wir im Dashboard als Gast
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/auth');
  };

  const getUserInitials = () => {
    if (!user.firstName && !user.lastName) return user.isGuest ? 'G' : 'U';
    return `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase();
  };

  const notificationPanel = useMemo(() => {
    if (!notificationsOpen) return null;
    
    return (
      <>
        <div 
          className="fixed inset-y-0 right-0 w-80 bg-card shadow-xl transform transition-transform duration-300 ease-in-out z-30 translate-x-0 border-l border-border backdrop-blur-md"
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-semibold">Benachrichtigungen</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeNotifications}
              className="hover:bg-muted focus-modern"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <MemoizedNotificationPanel />
        </div>
        
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-20 animate-fade-in backdrop-blur-sm"
          onClick={closeNotifications}
        />
      </>
    );
  }, [notificationsOpen]);

  return (
    <div className="flex min-h-screen bg-background transition-colors duration-300">
      <div className="flex-1 flex flex-col">
        {/* Top Navigation with Glass Effect */}
        <div className={`glass-effect border-b border-border sticky top-0 z-10 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-lg' : 'backdrop-blur-md'}`}>
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="md:hidden focus-modern"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold text-primary ml-2">
                KI-Dashboard
              </h1>
              {user.isGuest && (
                <span className="ml-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
                  Kostenloses Testen
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleNotifications}
                className="relative focus-modern hover:bg-primary/10"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full focus-modern">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className={`${user.isGuest ? 'bg-primary/20 text-primary' : 'bg-primary text-primary-foreground'} text-xs transition-colors duration-200`}>
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 z-50 bg-card border border-border shadow-lg backdrop-blur-md" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.isGuest ? 'Gast-Nutzer' : `${user.firstName} ${user.lastName}`}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.isGuest ? 'Kostenlos testen' : user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')} className="focus-modern">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {isLoggedIn ? (
                    <DropdownMenuItem onClick={handleLogout} className="focus-modern">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Abmelden</span>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={handleLoginRedirect} className="focus-modern">
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Kostenloses Konto erstellen</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Header with User Info */}
        <MemoizedDashboardHeader />
        
        {/* Topic Selector Navigation with Glass Effect */}
        <div className="glass-effect border-b border-border py-2 sticky top-16 z-10">
          <div className="container">
            <MemoizedTopicSelector />
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-6 flex-grow">
          {children}
        </div>

        {/* Enhanced Footer with Dark Mode Support */}
        <footer className="glass-effect border-t border-border py-8 mt-auto">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-primary mb-2">KI-Dashboard</h3>
                <p className="text-muted-foreground">
                  Ihr persönlicher Assistent für alle Lebensbereiche - 
                  kostenlos und ohne Anmeldung nutzbar.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Schnellzugriff</h4>
                <div className="space-y-1">
                  <Button variant="link" className="p-0 h-auto text-sm justify-start focus-modern" onClick={() => navigate('/finance')}>
                    Finanzen verwalten
                  </Button>
                  <Button variant="link" className="p-0 h-auto text-sm justify-start focus-modern" onClick={() => navigate('/family')}>
                    Familie organisieren  
                  </Button>
                  <Button variant="link" className="p-0 h-auto text-sm justify-start focus-modern" onClick={() => navigate('/topics/energie')}>
                    Energie sparen
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Ihr Vorteil</h4>
                {user.isGuest ? (
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      ✓ Kostenlos alle Funktionen testen<br/>
                      ✓ Keine Anmeldung erforderlich<br/>
                      ✓ Sofort loslegen
                    </p>
                    <Button 
                      size="sm" 
                      className="btn-primary focus-modern"
                      onClick={handleLoginRedirect}
                    >
                      Einstellungen dauerhaft speichern
                    </Button>
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    ✓ Personalisierte Empfehlungen<br/>
                    ✓ Gespeicherte Einstellungen<br/>
                    ✓ Vollzugriff auf alle Features
                  </p>
                )}
              </div>
            </div>
            
            <div className="border-t border-border mt-6 pt-6 text-center text-muted-foreground">
              <p>&copy; 2024 KI-Dashboard. Alle Rechte vorbehalten.</p>
              {performanceMetrics && process.env.NODE_ENV === 'development' && (
                <p className="text-xs mt-2 opacity-50">
                  Ladezeit: {performanceMetrics.loadTime.toFixed(0)}ms | 
                  Render: {performanceMetrics.renderTime.toFixed(0)}ms
                  {performanceMetrics.memoryUsage && ` | Speicher: ${(performanceMetrics.memoryUsage / 1024 / 1024).toFixed(1)}MB`}
                </p>
              )}
            </div>
          </div>
        </footer>
      </div>

      {/* Notification Panel */}
      {notificationPanel}
    </div>
  );
};

export default React.memo(DashboardLayout);
