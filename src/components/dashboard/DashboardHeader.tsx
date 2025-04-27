
import React, { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import TopicSelector from './TopicSelector';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Settings, LogOut, User } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProfileSettings from './ProfileSettings';

const DashboardHeader: React.FC = () => {
  const { user, isLoggedIn, logout } = useUser();
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  
  // Standardbenutzerdaten für nicht angemeldete Benutzer
  const userName = isLoggedIn ? user.firstName : 'Gast';
  const userType = isLoggedIn ? user.userType : 'private';
  
  return (
    <div className="bg-white border-b border-border">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Willkommen, {userName}!</h1>
            <p className="text-muted-foreground">
              {userType === 'private' ? 'Ihr persönliches' : 'Ihr Unternehmens-'} 
              Dashboard mit aktuellen Informationen und Empfehlungen
            </p>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <User size={16} />
                Profil
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {isLoggedIn ? `${user.firstName} ${user.lastName}` : 'Gast'}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowProfileSettings(true)}>
                <Settings className="mr-2 h-4 w-4" />
                Einstellungen
              </DropdownMenuItem>
              {isLoggedIn && (
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Abmelden
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <TopicSelector />
      </div>
      
      <Dialog open={showProfileSettings} onOpenChange={setShowProfileSettings}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Profileinstellungen</DialogTitle>
          </DialogHeader>
          <ProfileSettings />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardHeader;
