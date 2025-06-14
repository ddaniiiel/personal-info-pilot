
import React, { ReactNode, useState, useMemo, useEffect } from 'react';
import { Menu, Bell, X, User, LogOut, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NotificationPanel } from '../dashboard/NotificationPanel';
import DashboardHeader from '../dashboard/DashboardHeader';
import TopicSelector from '../dashboard/TopicSelector';
import { useUser } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
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
              {user.isGuest && (
                <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full border border-green-200">
                  Kostenloses Testen
                </span>
              )}
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
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className={`${user.isGuest ? 'bg-green-500' : 'bg-dashboard-purple'} text-white text-xs`}>
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
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
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {isLoggedIn ? (
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Abmelden</span>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={handleLoginRedirect}>
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
        
        {/* Topic Selector Navigation */}
        <div className="bg-white border-b border-gray-200 py-2 sticky top-16 z-10">
          <div className="container">
            <MemoizedTopicSelector />
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-6 flex-grow">
          {children}
        </div>

        {/* Enhanced Footer */}
        <footer className="bg-white border-t border-border py-8 mt-auto">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-dashboard-purple mb-2">KI-Dashboard</h3>
                <p className="text-muted-foreground">
                  Ihr persönlicher Assistent für alle Lebensbereiche - 
                  kostenlos und ohne Anmeldung nutzbar.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Schnellzugriff</h4>
                <div className="space-y-1">
                  <Button variant="link" className="p-0 h-auto text-sm justify-start" onClick={() => navigate('/finance')}>
                    Finanzen verwalten
                  </Button>
                  <Button variant="link" className="p-0 h-auto text-sm justify-start" onClick={() => navigate('/family')}>
                    Familie organisieren  
                  </Button>
                  <Button variant="link" className="p-0 h-auto text-sm justify-start" onClick={() => navigate('/topics/energie')}>
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
                      className="bg-dashboard-purple hover:bg-dashboard-purple-dark"
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
