
import React, { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Settings, LogOut, User, UserPlus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProfileSettings from './ProfileSettings';
import { useNavigate } from 'react-router-dom';

const DashboardHeader: React.FC = () => {
  const { user, isLoggedIn, logout } = useUser();
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const navigate = useNavigate();
  
  const userName = user.isGuest ? 'Gast' : (isLoggedIn ? user.firstName : 'Besucher');
  const userType = user.userType;

  const handleLoginRedirect = () => {
    navigate('/auth');
  };
  
  return (
    <div className="bg-white border-b border-border">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Willkommen, {userName}!</h1>
            <p className="text-muted-foreground">
              {user.isGuest && (
                <>
                  Entdecken Sie unser Dashboard als Gast. 
                  <Button variant="link" className="p-0 h-auto ml-1" onClick={handleLoginRedirect}>
                    Registrieren Sie sich für personalisierte Funktionen.
                  </Button>
                </>
              )}
              {!user.isGuest && (
                <>
                  {userType === 'private' ? 'Ihr persönliches' : 'Ihr Unternehmens-'} 
                  Dashboard mit aktuellen Informationen und Empfehlungen
                </>
              )}
            </p>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <User size={16} />
                {user.isGuest ? 'Gast' : 'Profil'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {user.isGuest ? 'Gast' : (isLoggedIn ? `${user.firstName} ${user.lastName}` : 'Besucher')}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowProfileSettings(true)}>
                <Settings className="mr-2 h-4 w-4" />
                {user.isGuest ? 'Gasteinstellungen' : 'Einstellungen'}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {isLoggedIn ? (
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Abmelden
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem onClick={handleLoginRedirect}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Anmelden / Registrieren
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <Dialog open={showProfileSettings} onOpenChange={setShowProfileSettings}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {user.isGuest ? 'Gasteinstellungen' : 'Profileinstellungen'}
            </DialogTitle>
          </DialogHeader>
          <ProfileSettings />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default React.memo(DashboardHeader);
