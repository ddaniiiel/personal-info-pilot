
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Utensils, Moon } from 'lucide-react';

interface GesundheitContentProps {
  activeSubcategory: string | null;
}

const GesundheitContent: React.FC<GesundheitContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Allgemeine Gesundheit" 
        description="Gesundheitskontrolle und Check-ups"
        isActive={activeSubcategory === '#allgemein'}
        id="#allgemein"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Heart className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Gesundheitsübersicht</h3>
                  <p className="text-sm">Erfassen und verfolgen Sie wichtige Gesundheitsdaten</p>
                  <Button variant="outline" size="sm" className="mt-2">Dashboard öffnen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Vorsorgetermine</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Allgemeine Vorsorgeuntersuchung</h4>
                  <p className="text-xs text-muted-foreground">25.06.2025, Dr. Huber</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Zahnarzt</h4>
                  <p className="text-xs text-muted-foreground">02.09.2025, Dr. Fischer</p>
                </div>
              </div>
              <div className="mt-3">
                <Button size="sm">Termin hinzufügen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Fitness & Sport" 
        description="Körperliche Aktivität und Fitnessverfolgung"
        isActive={activeSubcategory === '#fitness'}
        id="#fitness"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Activity className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Aktivitätsverfolgung</h3>
                  <p className="text-sm">Überwachen Sie Ihre sportlichen Aktivitäten</p>
                  <Button variant="outline" size="sm" className="mt-2">Statistiken anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Sportliche Ziele</h3>
              <div className="space-y-3">
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">10.000 Schritte täglich</h4>
                  <p className="text-xs text-muted-foreground mb-1">8.423 Schritte heute</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-dashboard-purple h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">3x pro Woche trainieren</h4>
                  <p className="text-xs text-muted-foreground mb-1">2/3 diese Woche</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-dashboard-purple h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Ernährung" 
        description="Ernährungsgewohnheiten und Rezepte"
        isActive={activeSubcategory === '#ernaehrung'}
        id="#ernaehrung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Utensils className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Ernährungsplanung</h3>
                  <p className="text-sm">Erstellen und verfolgen Sie Ihren Ernährungsplan</p>
                  <Button variant="outline" size="sm" className="mt-2">Plan öffnen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Gesunde Rezepte</h3>
              <p className="text-sm mb-3">Entdecken Sie neue Rezepte für eine ausgewogene Ernährung.</p>
              <Button>Rezepte durchsuchen</Button>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Wohlbefinden" 
        description="Mentale Gesundheit und Entspannung"
        isActive={activeSubcategory === '#wohlbefinden'}
        id="#wohlbefinden"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Moon className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Schlafanalyse</h3>
                  <p className="text-sm">Erfassen und verbessern Sie Ihre Schlafqualität</p>
                  <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Stressbewältigung</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Meditation</h4>
                  <p className="text-xs text-muted-foreground">5-10 Minuten täglich</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Meditation starten</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Atemübungen</h4>
                  <p className="text-xs text-muted-foreground">Für akute Stresssituationen</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Übungen anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default GesundheitContent;
