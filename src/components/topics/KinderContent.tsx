
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Palette, ChartLine } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KinderContentProps {
  activeSubcategory: string | null;
}

const KinderContent: React.FC<KinderContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Schule/Kita" 
        description="Verwalten Sie schulische Angelegenheiten und Betreuung"
        isActive={activeSubcategory === '#schule'}
        id="#schule"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Book className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Grundschule Sonnenhof</h3>
                  <p className="text-sm text-muted-foreground">Montag - Freitag, 8:00 - 12:00</p>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm">Termine</Button>
                    <Button variant="outline" size="sm">Kontakt</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Book className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Elternabende</h3>
                  <p className="text-sm text-muted-foreground">Nächster Termin: 15.05.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-sm">In Kalender eintragen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Aktuelle Schulnoten</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Mathematik:</span>
                  <span className="font-medium">5.5</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Deutsch:</span>
                  <span className="font-medium">5.0</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Naturwissenschaften:</span>
                  <span className="font-medium">5.5</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Sport:</span>
                  <span className="font-medium">6.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Kurse & Hobbys" 
        description="Entdecken und verwalten Sie Freizeitaktivitäten für Kinder"
        isActive={activeSubcategory === '#hobbys'}
        id="#hobbys"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Palette className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Aktive Kurse</h3>
                  <p className="text-sm">Übersicht der aktuellen Freizeitaktivitäten</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Klavierunterricht</h4>
                    <p className="text-xs text-muted-foreground">Jeden Mittwoch, 16:00 - 17:00 Uhr</p>
                  </div>
                  <Button size="sm">Details</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Fussballtraining</h4>
                    <p className="text-xs text-muted-foreground">Jeden Freitag, 17:30 - 19:00 Uhr</p>
                  </div>
                  <Button size="sm">Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Empfohlene Kurse in Ihrer Nähe</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-medium">Schwimmkurs für Kinder</h4>
                    <p className="text-xs text-muted-foreground">Hallenbad Oerlikon, ab 6 Jahre</p>
                  </div>
                  <Button variant="outline" size="sm">Info</Button>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-medium">Kindermalerei</h4>
                    <p className="text-xs text-muted-foreground">Kulturzentrum, ab 4 Jahre</p>
                  </div>
                  <Button variant="outline" size="sm">Info</Button>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-medium">Leichtathletik für Kinder</h4>
                    <p className="text-xs text-muted-foreground">Sportverein Zürich, ab 8 Jahre</p>
                  </div>
                  <Button variant="outline" size="sm">Info</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Entwicklung" 
        description="Verfolgen Sie die Entwicklung Ihrer Kinder"
        isActive={activeSubcategory === '#entwicklung'}
        id="#entwicklung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <ChartLine className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Entwicklungsdokumentation</h3>
                  <p className="text-sm">Dokumentieren Sie wichtige Meilensteine</p>
                  <Button variant="outline" size="sm" className="mt-2">Neuen Eintrag erstellen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Entwicklungsverlauf</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Erstes Fahrrad ohne Stützräder</h4>
                  <p className="text-xs text-muted-foreground">Mai 2025, Alter: 5 Jahre</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Erste Buchstaben geschrieben</h4>
                  <p className="text-xs text-muted-foreground">Februar 2025, Alter: 4.5 Jahre</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Erste vollständige Schwimmbewegungen</h4>
                  <p className="text-xs text-muted-foreground">Dezember 2024, Alter: 4.3 Jahre</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Wachstumsdiagramm</h3>
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Wachstumsdiagramm wird geladen...</p>
              </div>
              <div className="mt-3 flex justify-end">
                <Button size="sm">Neue Messung hinzufügen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default KinderContent;
