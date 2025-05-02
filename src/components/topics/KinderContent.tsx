
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Palette, ChartLine, Bookmark, Calendar, Clock, GraduationCap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Book className="h-10 w-10 text-dashboard-purple" />
                </div>
                <div>
                  <h3 className="text-base font-medium">Grundschule Sonnenhof</h3>
                  <p className="text-sm text-muted-foreground">Montag - Freitag, 8:00 - 12:00</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="bg-blue-50">Primarschule</Badge>
                    <Badge variant="outline" className="bg-green-50">Deutsch/Englisch</Badge>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Termine
                    </Button>
                    <Button variant="outline" size="sm">
                      <Clock className="h-4 w-4 mr-1" />
                      Kontakt
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <GraduationCap className="h-10 w-10 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-base font-medium">Elternabende</h3>
                  <p className="text-sm text-muted-foreground">Nächster Termin: 15.05.2025</p>
                  <p className="text-xs mt-2">Thema: "Digitale Medien in der Grundschule"</p>
                  <div className="mt-3">
                    <Button variant="link" className="p-0 h-auto text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      In Kalender eintragen
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Aktuelle Schulnoten</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Mathematik:</span>
                    <span className="font-medium">5.5</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Deutsch:</span>
                    <span className="font-medium">5.0</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Naturwissenschaften:</span>
                    <span className="font-medium">5.5</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Sport:</span>
                    <span className="font-medium">6.0</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-3 px-4">
              <Button variant="outline" size="sm" className="ml-auto">
                <Bookmark className="h-4 w-4 mr-1" />
                Notenverlauf anzeigen
              </Button>
            </CardFooter>
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
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center">
                <Palette className="h-5 w-5 mr-2 text-dashboard-purple" />
                Aktive Kurse
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm mb-4">Übersicht der aktuellen Freizeitaktivitäten</p>
              <div className="space-y-4">
                <div className="flex justify-between items-start p-3 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Klavierunterricht</h4>
                    <p className="text-xs text-muted-foreground">Jeden Mittwoch, 16:00 - 17:00 Uhr</p>
                    <p className="text-xs mt-1">Musikschule Harmonie, Fr. Meyer</p>
                  </div>
                  <div>
                    <Button size="sm">Details</Button>
                  </div>
                </div>
                <div className="flex justify-between items-start p-3 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Fussballtraining</h4>
                    <p className="text-xs text-muted-foreground">Jeden Freitag, 17:30 - 19:00 Uhr</p>
                    <p className="text-xs mt-1">FC Zürich Jugend, Sportplatz Letzigrund</p>
                  </div>
                  <div>
                    <Button size="sm">Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Empfohlene Kurse in Ihrer Nähe</CardTitle>
              <p className="text-xs text-muted-foreground">Basierend auf den Interessen und dem Alter Ihres Kindes</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <div>
                    <h4 className="font-medium">Schwimmkurs für Kinder</h4>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="mr-2 bg-blue-50">Ab 6 Jahre</Badge>
                      <p className="text-xs text-muted-foreground">Hallenbad Oerlikon</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Info</Button>
                </div>
                <div className="flex justify-between items-center text-sm p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <div>
                    <h4 className="font-medium">Kindermalerei</h4>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="mr-2 bg-purple-50">Ab 4 Jahre</Badge>
                      <p className="text-xs text-muted-foreground">Kulturzentrum</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Info</Button>
                </div>
                <div className="flex justify-between items-center text-sm p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <div>
                    <h4 className="font-medium">Leichtathletik für Kinder</h4>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="mr-2 bg-green-50">Ab 8 Jahre</Badge>
                      <p className="text-xs text-muted-foreground">Sportverein Zürich</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Info</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-3 px-4">
              <Button className="w-full">Alle Kurse anzeigen</Button>
            </CardFooter>
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
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <ChartLine className="h-10 w-10 text-dashboard-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Entwicklungsdokumentation</h3>
                  <p className="text-sm">Dokumentieren Sie wichtige Meilensteine</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      <Award className="h-4 w-4 mr-1" />
                      Neuen Eintrag erstellen
                    </Button>
                    <Button size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Terminerinnerung
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Entwicklungsverlauf</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Erstes Fahrrad ohne Stützräder</h4>
                  <p className="text-xs text-muted-foreground">Mai 2025, Alter: 5 Jahre</p>
                  <p className="text-xs mt-1">Hat nach nur drei Versuchen selbständig fahren gelernt.</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Erste Buchstaben geschrieben</h4>
                  <p className="text-xs text-muted-foreground">Februar 2025, Alter: 4.5 Jahre</p>
                  <p className="text-xs mt-1">Konnte den eigenen Namen ohne Hilfe schreiben.</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Erste vollständige Schwimmbewegungen</h4>
                  <p className="text-xs text-muted-foreground">Dezember 2024, Alter: 4.3 Jahre</p>
                  <p className="text-xs mt-1">5 Meter ohne Hilfe geschwommen.</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <Button variant="link" size="sm">
                  Alle Entwicklungsmeilensteine anzeigen
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Wachstumsdiagramm</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Wachstumsdiagramm</p>
                  <div className="flex justify-center space-x-4 text-dashboard-purple">
                    <div className="text-center">
                      <p className="font-bold text-xl">110 cm</p>
                      <p className="text-xs">Größe</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-xl">19 kg</p>
                      <p className="text-xs">Gewicht</p>
                    </div>
                  </div>
                </div>
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
