
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
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
        <div className="fixed inset-y-0 right-0 w-80 glass border-l border-border/30 transform transition-transform duration-300 ease-out z-30 translate-x-0 apple-fade-in">
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <h2 className="apple-subtitle">Benachrichtigungen</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeNotifications}
              className="apple-button-ghost h-8 w-8 rounded-lg"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <MemoizedNotificationPanel />
        </div>
        
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-20 apple-fade-in backdrop-blur-sm"
          onClick={closeNotifications}
        />
      </>
    );
  }, [notificationsOpen]);

  return (
    <div className="flex min-h-screen bg-background transition-colors duration-300">
      <div className="flex-1 flex flex-col">
        {/* Top Navigation with Apple Glass Effect */}
        <div className={`apple-nav transition-all duration-300 ${isScrolled ? 'shadow-apple' : ''}`}>
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="md:hidden apple-button-ghost h-10 w-10 rounded-xl"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold text-foreground ml-2">
                KI-Dashboard
              </h1>
              {user.isGuest && (
                <span className="ml-3 apple-badge">
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
                className="apple-button-ghost h-10 w-10 rounded-xl relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive animate-apple-bounce"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="apple-button-ghost h-10 w-10 rounded-xl p-0">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className={`${user.isGuest ? 'bg-primary/10 text-primary' : 'bg-primary text-primary-foreground'} text-xs font-medium`}>
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 glass border-border/30 shadow-apple-lg rounded-xl" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-4">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.isGuest ? 'Gast-Nutzer' : `${user.firstName} ${user.lastName}`}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.isGuest ? 'Kostenlos testen' : user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="mx-2 border-border/30" />
                  <DropdownMenuItem onClick={() => navigate('/profile')} className="apple-focus mx-2 rounded-lg">
                    <User className="mr-3 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="mx-2 border-border/30" />
                  {isLoggedIn ? (
                    <DropdownMenuItem onClick={handleLogout} className="apple-focus mx-2 rounded-lg">
                      <LogOut className="mr-3 h-4 w-4" />
                      <span>Abmelden</span>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={handleLoginRedirect} className="apple-focus mx-2 rounded-lg">
                      <UserPlus className="mr-3 h-4 w-4" />
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
        <div className="glass border-b border-border/30 py-4 sticky top-16 z-10">
          <div className="container">
            <MemoizedTopicSelector />
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-8 flex-grow">
          {children}
        </div>

        {/* Enhanced Footer with Apple Design */}
        <footer className="glass border-t border-border/30 py-12 mt-auto">
          <div className="container">
            <div className="apple-grid grid-cols-1 md:grid-cols-3 text-sm">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">KI-Dashboard</h3>
                <p className="apple-body">
                  Ihr persönlicher Assistent für alle Lebensbereiche - 
                  kostenlos und ohne Anmeldung nutzbar.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Schnellzugriff</h4>
                <div className="space-y-2">
                  <Button variant="link" className="apple-button-ghost p-0 h-auto text-sm justify-start" onClick={() => navigate('/finance')}>
                    Finanzen verwalten
                  </Button>
                  <Button variant="link" className="apple-button-ghost p-0 h-auto text-sm justify-start" onClick={() => navigate('/family')}>
                    Familie organisieren  
                  </Button>
                  <Button variant="link" className="apple-button-ghost p-0 h-auto text-sm justify-start" onClick={() => navigate('/topics/energie')}>
                    Energie sparen
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Ihr Vorteil</h4>
                {user.isGuest ? (
                  <div className="space-y-3">
                    <div className="apple-body space-y-1">
                      <p>✓ Kostenlos alle Funktionen testen</p>
                      <p>✓ Keine Anmeldung erforderlich</p>
                      <p>✓ Sofort loslegen</p>
                    </div>
                    <Button 
                      size="sm" 
                      className="apple-button-primary h-10 px-4 rounded-xl"
                      onClick={handleLoginRedirect}
                    >
                      Einstellungen dauerhaft speichern
                    </Button>
                  </div>
                ) : (
                  <div className="apple-body space-y-1">
                    <p>✓ Personalisierte Empfehlungen</p>
                    <p>✓ Gespeicherte Einstellungen</p>
                    <p>✓ Vollzugriff auf alle Features</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="apple-divider" />
            
            <div className="text-center text-muted-foreground">
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
