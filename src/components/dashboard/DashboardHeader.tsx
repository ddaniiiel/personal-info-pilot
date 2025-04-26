
import React from 'react';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import TopicSelector from './TopicSelector';

const DashboardHeader: React.FC = () => {
  const { user, isLoggedIn } = useUser();
  
  if (!isLoggedIn) return null;
  
  return (
    <div className="bg-white border-b border-border">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Willkommen, {user.firstName}!</h1>
            <p className="text-muted-foreground">
              {user.userType === 'private' ? 'Ihr persönliches' : 'Ihr Unternehmens-'} 
              Dashboard mit aktuellen Informationen und Empfehlungen
            </p>
          </div>
          <Button variant="outline">Profil bearbeiten</Button>
        </div>
        
        <TopicSelector />
      </div>
    </div>
  );
};

export default DashboardHeader;
