
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
import { Settings, LogOut, User, UserPlus, Star, Sparkles } from 'lucide-react';
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
    <div className="glass border-b border-border/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="apple-title">Willkommen, {userName}!</h1>
              {user.isGuest && (
                <div className="apple-badge">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Gast-Modus
                </div>
              )}
            </div>
            <div className="apple-body max-w-2xl">
              {user.isGuest && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span>Entdecken Sie unser KI-Dashboard kostenlos im Gastmodus.</span>
                  <Button variant="link" className="apple-button-ghost p-0 h-auto text-primary font-medium" onClick={handleLoginRedirect}>
                    <Star className="h-3 w-3 mr-1" />
                    Jetzt kostenloses Konto erstellen
                  </Button>
                </div>
              )}
              {!user.isGuest && (
                <span>
                  {userType === 'private' ? 'Ihr persönliches' : 'Ihr Unternehmens-'} 
                  Dashboard mit personalisierten Empfehlungen und Tools
                </span>
              )}
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="apple-button-secondary h-11 px-6 rounded-xl flex items-center gap-3 shadow-apple">
                <User size={16} />
                {user.isGuest ? 'Gast-Profil' : 'Mein Profil'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 glass border-border/30 shadow-apple-lg rounded-xl">
              <DropdownMenuLabel className="p-4">
                <div className="space-y-1">
                  <p className="font-medium">
                    {user.isGuest ? 'Gast-Modus' : (isLoggedIn ? `${user.firstName} ${user.lastName}` : 'Besucher')}
                  </p>
                  {user.isGuest ? (
                    <p className="text-xs text-muted-foreground">
                      Alle Funktionen verfügbar - Einstellungen temporär
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  )}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="mx-2 border-border/30" />
              <DropdownMenuItem onClick={() => setShowProfileSettings(true)} className="apple-focus mx-2 rounded-lg">
                <Settings className="mr-3 h-4 w-4" />
                {user.isGuest ? 'Gast-Einstellungen' : 'Profileinstellungen'}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="mx-2 border-border/30" />
              {isLoggedIn ? (
                <DropdownMenuItem onClick={() => logout()} className="apple-focus mx-2 rounded-lg">
                  <LogOut className="mr-3 h-4 w-4" />
                  Abmelden
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem onClick={handleLoginRedirect} className="apple-focus mx-2 rounded-lg">
                  <UserPlus className="mr-3 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Kostenloses Konto erstellen</span>
                    <span className="text-xs text-muted-foreground">Einstellungen dauerhaft speichern</span>
                  </div>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <Dialog open={showProfileSettings} onOpenChange={setShowProfileSettings}>
        <DialogContent className="glass border-border/30 shadow-apple-xl rounded-2xl max-w-md">
          <DialogHeader className="space-y-3">
            <DialogTitle className="apple-subtitle">
              {user.isGuest ? 'Gast-Einstellungen' : 'Profileinstellungen'}
            </DialogTitle>
            {user.isGuest && (
              <div className="apple-card p-4 bg-primary/5 border-primary/20">
                <p className="apple-body">
                  Im Gastmodus können Sie temporäre Einstellungen vornehmen.
                </p>
                <Button 
                  variant="link" 
                  className="apple-button-ghost p-0 h-auto mt-2 text-primary font-medium"
                  onClick={handleLoginRedirect}
                >
                  Erstellen Sie ein Konto, um Einstellungen dauerhaft zu speichern →
                </Button>
              </div>
            )}
          </DialogHeader>
          <ProfileSettings />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default React.memo(DashboardHeader);
