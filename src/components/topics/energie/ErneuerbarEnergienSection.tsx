
import React from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

interface ErneuerbarEnergienSectionProps {
  isActive: boolean;
}

const ErneuerbarEnergienSection: React.FC<ErneuerbarEnergienSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Erneuerbare Energien" 
      description="Nutzen Sie erneuerbare Energiequellen"
      isActive={isActive}
      id="#erneuerbare"
    >
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Leaf className="h-10 w-10 text-dashboard-purple" />
              <div>
                <h3 className="font-medium">Solaranlage</h3>
                <p className="text-sm">Informationen zu Ihrer Solaranlage</p>
                <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Erzeugung</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>Heutige Erzeugung:</span>
                <span className="font-medium">15 kWh</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Monatliche Erzeugung:</span>
                <span className="font-medium">450 kWh</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Jährliche Erzeugung:</span>
                <span className="font-medium">5400 kWh</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Einspeisevergütung</h3>
            <p className="text-sm mb-3">Ihre Vergütung für eingespeisten Strom</p>
            <div className="flex space-x-2">
              <Button>Vergütung anzeigen</Button>
              <Button variant="outline">FAQ durchsuchen</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default ErneuerbarEnergienSection;
