
import React from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';

interface EinsparungspotentialeSectionProps {
  isActive: boolean;
}

const EinsparungspotentialeSection: React.FC<EinsparungspotentialeSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Einsparungspotenziale" 
      description="Entdecken Sie Möglichkeiten, Energie zu sparen"
      isActive={isActive}
      id="#einsparung"
    >
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-10 w-10 text-dashboard-purple" />
              <div>
                <h3 className="font-medium">Energiespartipps</h3>
                <p className="text-sm">Einfache Massnahmen zur Reduktion des Verbrauchs</p>
                <Button variant="outline" size="sm" className="mt-2">Tipps anzeigen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Individuelle Empfehlungen</h3>
            <div className="space-y-3">
              <div className="border-l-2 border-dashboard-purple pl-3">
                <h4 className="text-sm font-medium">LED-Lampen verwenden</h4>
                <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 50/Jahr</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
              </div>
              <div className="border-l-2 border-dashboard-purple pl-3">
                <h4 className="text-sm font-medium">Standby-Geräte ausschalten</h4>
                <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 30/Jahr</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
              </div>
              <div className="border-l-2 border-dashboard-purple pl-3">
                <h4 className="text-sm font-medium">Stosslüften statt Dauerlüften</h4>
                <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 80/Jahr</p>
                <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Förderprogramme nutzen</h3>
            <p className="text-sm mb-3">Profitieren Sie von Fördergeldern für energieeffiziente Massnahmen.</p>
            <div className="flex space-x-2">
              <Button>Programme anzeigen</Button>
              <Button variant="outline">Beratung anfordern</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default EinsparungspotentialeSection;
