
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scale, HeartPulse } from 'lucide-react';
import SubcategoryLayout from '../SubcategoryLayout';

interface GewichtsverlaufSectionProps {
  isActive: boolean;
}

const GewichtsverlaufSection: React.FC<GewichtsverlaufSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Gewichtsverlauf" 
      description="Entwicklung und Ernährung"
      isActive={isActive}
      id="#gewicht"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Scale className="h-5 w-5 mr-2 text-dashboard-purple" />
                Gewichtsverlauf - Luna
              </CardTitle>
              <Badge variant="outline">Hund</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">Gewichtsverlauf-Diagramm wird hier angezeigt</p>
            </div>
            <div className="flex justify-end mt-4">
              <Button size="sm" variant="outline">Gewicht eintragen</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <HeartPulse className="h-5 w-5 mr-2 text-dashboard-purple" />
                Gesundheitswerte - Luna
              </CardTitle>
              <Badge variant="outline">Hund</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Letzte Kontrolle</p>
                <p className="font-medium">15.04.2025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium text-green-600">Gesund</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nächste Impfung</p>
                <p className="font-medium">22.09.2025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Allergie</p>
                <p className="font-medium">Keine</p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button size="sm" variant="outline">Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default GewichtsverlaufSection;
