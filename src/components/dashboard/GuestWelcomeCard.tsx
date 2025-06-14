
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Eye, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GuestWelcomeCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card className="mb-6 border-dashboard-purple/20 bg-gradient-to-r from-dashboard-purple/5 to-purple-50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-dashboard-purple" />
          <CardTitle className="text-lg text-dashboard-purple">
            Willkommen im Gastmodus!
          </CardTitle>
        </div>
        <CardDescription className="text-base">
          Sie können alle Funktionen unseres KI-Dashboards kostenlos testen - ohne Anmeldung.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <Star className="h-4 w-4 text-dashboard-purple mt-0.5 flex-shrink-0" />
            <span>Alle Themen und Inhalte verfügbar</span>
          </div>
          <div className="flex items-start gap-2">
            <Star className="h-4 w-4 text-dashboard-purple mt-0.5 flex-shrink-0" />
            <span>Personalisierte Empfehlungen</span>
          </div>
          <div className="flex items-start gap-2">
            <Star className="h-4 w-4 text-dashboard-purple mt-0.5 flex-shrink-0" />
            <span>Interaktive Tools und Rechner</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-dashboard-purple hover:bg-dashboard-purple-dark flex-1"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Kostenloses Konto erstellen
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/topics/wohnen')}
            className="flex-1 border-dashboard-purple text-dashboard-purple hover:bg-dashboard-purple/10"
          >
            Dashboard erkunden
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Mit einem kostenlosen Konto können Sie Ihre Einstellungen speichern und erhalten 
          personalisierte Empfehlungen basierend auf Ihrem Profil.
        </p>
      </CardContent>
    </Card>
  );
};

export default GuestWelcomeCard;
