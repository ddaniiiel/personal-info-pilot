
import React from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface MuelltrennungSectionProps {
  isActive: boolean;
}

const MuelltrennungSection: React.FC<MuelltrennungSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Mülltrennung" 
      description="Optimieren Sie Ihre Mülltrennung"
      isActive={isActive}
      id="#muell"
    >
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Trash2 className="h-10 w-10 text-dashboard-purple" />
              <div>
                <h3 className="font-medium">Mülltrennung</h3>
                <p className="text-sm">Informationen zur korrekten Mülltrennung</p>
                <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Abfallkalender</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>Nächste Abholung:</span>
                <span className="font-medium">15.05.2025</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Art:</span>
                <span className="font-medium">Papier</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Recyclinghöfe</h3>
            <p className="text-sm mb-3">Finden Sie Recyclinghöfe in Ihrer Nähe.</p>
            <div className="flex space-x-2">
              <Button>Standorte anzeigen</Button>
              <Button variant="outline">FAQ durchsuchen</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default MuelltrennungSection;
