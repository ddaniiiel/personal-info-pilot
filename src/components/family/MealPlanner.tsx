
import React from 'react';
import { Button } from '@/components/ui/button';

const MealPlanner: React.FC = () => (
  <div className="space-y-4">
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h3 className="font-medium text-lg mb-2">Essensplan für diese Woche</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-medium">Montag</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
            <div className="w-24 h-24 mb-2 sm:mb-0 sm:mr-4 rounded-md bg-gray-200 overflow-hidden">
              <img src="/placeholder.svg" alt="Pasta" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">Pasta mit Tomatensauce</p>
              <p className="text-sm text-muted-foreground mb-2">Einfach und schnell zubereitet</p>
              <Button variant="link" className="p-0 h-auto text-dashboard-purple">
                Rezept anzeigen
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-medium">Dienstag</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
            <div className="w-24 h-24 mb-2 sm:mb-0 sm:mr-4 rounded-md bg-gray-200 overflow-hidden">
              <img src="/placeholder.svg" alt="Hähnchen" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">Hähnchen mit Gemüse</p>
              <p className="text-sm text-muted-foreground mb-2">Proteinreich und gesund</p>
              <Button variant="link" className="p-0 h-auto text-dashboard-purple">
                Rezept anzeigen
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-medium">Mittwoch</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
            <div className="w-24 h-24 mb-2 sm:mb-0 sm:mr-4 rounded-md bg-gray-200 overflow-hidden">
              <img src="/placeholder.svg" alt="Gemüseauflauf" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">Gemüseauflauf</p>
              <p className="text-sm text-muted-foreground mb-2">Vegetarisch und vollwertig</p>
              <Button variant="link" className="p-0 h-auto text-dashboard-purple">
                Rezept anzeigen
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button className="mt-4 w-full" variant="outline">Zum Essensplaner</Button>
    </div>
  </div>
);

export default MealPlanner;
