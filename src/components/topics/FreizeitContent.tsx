
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, MapPin, Calendar, Bookmark } from 'lucide-react';

interface FreizeitContentProps {
  activeSubcategory: string | null;
}

const FreizeitContent: React.FC<FreizeitContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Reiseplanung" 
        description="Urlaub und Reisen organisieren"
        isActive={activeSubcategory === '#reisen'}
        id="#reisen"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Globe className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Reisepläne</h3>
                  <p className="text-sm">Verwalten Sie Ihre Reisen und Buchungen</p>
                  <Button variant="outline" size="sm" className="mt-2">Pläne anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Kommende Reisen</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Barcelona</h4>
                  <p className="text-xs text-muted-foreground">12.07.2025 - 19.07.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Wanderwochenende Schwarzwald</h4>
                  <p className="text-xs text-muted-foreground">22.08.2025 - 24.08.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
              </div>
              <div className="mt-3">
                <Button size="sm">Neue Reise planen</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Dokumente</h3>
              <div className="space-y-3">
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Reisepass</h4>
                    <p className="text-xs text-muted-foreground">Gültig bis: 15.03.2027</p>
                  </div>
                  <Button variant="outline" size="sm">Ansehen</Button>
                </div>
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Impfpass</h4>
                    <p className="text-xs text-muted-foreground">Letzte Aktualisierung: 05.12.2024</p>
                  </div>
                  <Button variant="outline" size="sm">Ansehen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Lokale Aktivitäten" 
        description="Freizeitangebote in Ihrer Nähe"
        isActive={activeSubcategory === '#lokal'}
        id="#lokal"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">In Ihrer Nähe</h3>
                  <p className="text-sm">Entdecken Sie Aktivitäten in Ihrer Umgebung</p>
                  <Button variant="outline" size="sm" className="mt-2">Angebote erkunden</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Empfehlungen für Sie</h3>
              <div className="space-y-3">
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">Jazz im Park</h4>
                  <p className="text-xs text-muted-foreground">Samstag, 14.06.2025, 19:00 Uhr</p>
                  <p className="text-xs">Stadtpark, 8 km entfernt</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">Frühlingsmarkt</h4>
                  <p className="text-xs text-muted-foreground">Wochenende 21.-22.06.2025</p>
                  <p className="text-xs">Marktplatz, 3 km entfernt</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">Kunstausstellung</h4>
                  <p className="text-xs text-muted-foreground">Bis 30.06.2025</p>
                  <p className="text-xs">Städtisches Museum, 5 km entfernt</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Veranstaltungskalender" 
        description="Persönlicher Freizeitkalender"
        isActive={activeSubcategory === '#veranstaltungen'}
        id="#veranstaltungen"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Meine Veranstaltungen</h3>
                  <p className="text-sm">Geplante Termine und Aktivitäten</p>
                  <Button variant="outline" size="sm" className="mt-2">Kalender öffnen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Bevorstehende Ereignisse</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Konzert: Klassik im Park</h4>
                  <p className="text-xs text-muted-foreground">Samstag, 21.06.2025, 20:00 Uhr</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Kochkurs: Mediterrane Küche</h4>
                  <p className="text-xs text-muted-foreground">Freitag, 27.06.2025, 18:00 Uhr</p>
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
        title="Hobbys" 
        description="Persönliche Interessen und Aktivitäten"
        isActive={activeSubcategory === '#hobbys'}
        id="#hobbys"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Bookmark className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Meine Hobbys</h3>
                  <p className="text-sm">Verwalten Sie Ihre Freizeitaktivitäten</p>
                  <Button variant="outline" size="sm" className="mt-2">Übersicht öffnen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Hobbygruppen in Ihrer Nähe</h3>
              <div className="space-y-3">
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">Fotografie-Club</h4>
                  <p className="text-xs text-muted-foreground">Jeden 2. Dienstag im Monat</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Kontaktieren</Button>
                </div>
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">Wandergruppe "Bergfreunde"</h4>
                  <p className="text-xs text-muted-foreground">Wöchentliche Wanderungen</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Kontaktieren</Button>
                </div>
                <div className="p-2 border rounded-lg">
                  <h4 className="text-sm font-medium">Buchclub</h4>
                  <p className="text-xs text-muted-foreground">Monatliche Treffen</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Kontaktieren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default FreizeitContent;
