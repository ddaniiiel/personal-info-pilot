
import React from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GaugeCircle } from 'lucide-react';

interface VerbrauchsanalyseSectionProps {
  isActive: boolean;
}

const VerbrauchsanalyseSection: React.FC<VerbrauchsanalyseSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Verbrauchsanalyse" 
      description="Analysieren Sie Ihren Energieverbrauch"
      isActive={isActive}
      id="#verbrauch"
    >
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <GaugeCircle className="h-10 w-10 text-dashboard-purple" />
              <div>
                <h3 className="font-medium">Stromverbrauch</h3>
                <p className="text-sm">Aktueller Verbrauch im Vergleich zum Vormonat</p>
                <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Verbrauchsübersicht</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>Strom:</span>
                <span className="font-medium">350 kWh</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Wasser:</span>
                <span className="font-medium">45 m³</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Heizung:</span>
                <span className="font-medium">120 l Öl</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Verbrauchsprognose</h3>
            <p className="text-sm mb-3">Basierend auf Ihrem bisherigen Verbrauch</p>
            <div className="flex space-x-2">
              <Button>Prognose anzeigen</Button>
              <Button variant="outline">Verbrauch optimieren</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default VerbrauchsanalyseSection;
