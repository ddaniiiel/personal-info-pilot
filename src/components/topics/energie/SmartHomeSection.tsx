
import React from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bolt } from 'lucide-react';

interface SmartHomeSectionProps {
  isActive: boolean;
}

const SmartHomeSection: React.FC<SmartHomeSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Smart Home (Energie)" 
      description="Integrieren Sie Energieeffizienz in Ihr Smart Home"
      isActive={isActive}
      id="#smart-home"
    >
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bolt className="h-10 w-10 text-dashboard-purple" />
              <div>
                <h3 className="font-medium">Smarte Geräte</h3>
                <p className="text-sm">Steuern Sie Ihren Energieverbrauch mit intelligenten Geräten</p>
                <Button variant="outline" size="sm" className="mt-2">Geräte verwalten</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Automatisierungen</h3>
            <div className="space-y-3">
              <div className="border-l-2 border-gray-300 pl-3">
                <h4 className="text-sm font-medium">Automatische Heizungssteuerung</h4>
                <p className="text-xs text-muted-foreground">Reduziert den Verbrauch bei Abwesenheit</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <h4 className="text-sm font-medium">Intelligente Beleuchtung</h4>
                <p className="text-xs text-muted-foreground">Passt die Helligkeit automatisch an</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <h4 className="text-sm font-medium">Energiemanagement-System</h4>
                <p className="text-xs text-muted-foreground">Überwacht und optimiert den Gesamtverbrauch</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Integration mit erneuerbaren Energien</h3>
            <p className="text-sm mb-3">Verbinden Sie Ihr Smart Home mit Ihrer Solaranlage.</p>
            <div className="flex space-x-2">
              <Button>Verbinden</Button>
              <Button variant="outline">FAQ durchsuchen</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default SmartHomeSection;
