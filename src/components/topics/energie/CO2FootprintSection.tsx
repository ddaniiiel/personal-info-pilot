
import React from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

interface CO2FootprintSectionProps {
  isActive: boolean;
}

const CO2FootprintSection: React.FC<CO2FootprintSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="CO2-Fußabdruck" 
      description="Reduzieren Sie Ihren CO2-Fußabdruck"
      isActive={isActive}
      id="#co2"
    >
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Leaf className="h-10 w-10 text-dashboard-purple" />
              <div>
                <h3 className="font-medium">CO2-Rechner</h3>
                <p className="text-sm">Berechnen Sie Ihren persönlichen CO2-Fußabdruck</p>
                <Button variant="outline" size="sm" className="mt-2">Berechnen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Reduktionsmassnahmen</h3>
            <div className="space-y-3">
              <div className="border-l-2 border-gray-300 pl-3">
                <h4 className="text-sm font-medium">Weniger Fleisch konsumieren</h4>
                <p className="text-xs text-muted-foreground">Reduziert den CO2-Ausstoss der Landwirtschaft</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <h4 className="text-sm font-medium">Öffentliche Verkehrsmittel nutzen</h4>
                <p className="text-xs text-muted-foreground">Reduziert den CO2-Ausstoss des Verkehrs</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <h4 className="text-sm font-medium">Energieeffiziente Geräte verwenden</h4>
                <p className="text-xs text-muted-foreground">Reduziert den CO2-Ausstoss der Stromerzeugung</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">CO2-Kompensation</h3>
            <p className="text-sm mb-3">Kompensieren Sie Ihren CO2-Ausstoss durch Spenden.</p>
            <div className="flex space-x-2">
              <Button>Projekte anzeigen</Button>
              <Button variant="outline">FAQ durchsuchen</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default CO2FootprintSection;
