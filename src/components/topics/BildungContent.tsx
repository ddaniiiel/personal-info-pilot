
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, GraduationCap, Award, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface BildungContentProps {
  activeSubcategory: string | null;
}

const BildungContent: React.FC<BildungContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Schulbildung" 
        description="Schulische Bildung und Unterstützung"
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
                    <Button variant="outline" size="sm">Kontakt</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Kommende Schultermine</h3>
              <div className="space-y-2">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Elternabend</h4>
                  <p className="text-xs text-muted-foreground">15.05.2025, 19:00 Uhr</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Schulfest</h4>
                  <p className="text-xs text-muted-foreground">22.06.2025, ganztägig</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Schulferien</h4>
                  <p className="text-xs text-muted-foreground">Ab 05.07.2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Weiterbildung" 
        description="Persönliche und berufliche Weiterbildungsmöglichkeiten"
        isActive={activeSubcategory === '#weiterbildung'}
        id="#weiterbildung"
      >
        <div className="space-y-4">
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-dashboard-purple" />
                Meine Kurse
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-start p-3 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Projektmanagement Zertifikat</h4>
                    <p className="text-xs text-muted-foreground">Online-Kurs, noch 4 Module</p>
                    <div className="w-full mt-2">
                      <Progress value={60} className="h-2" />
                      <p className="text-xs text-right mt-1">60% abgeschlossen</p>
                    </div>
                  </div>
                  <div>
                    <Button size="sm">Fortsetzen</Button>
                  </div>
                </div>
                <div className="flex justify-between items-start p-3 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Sprachkurs Italienisch</h4>
                    <p className="text-xs text-muted-foreground">VHS Zürich, wöchentlich</p>
                    <div className="w-full mt-2">
                      <Progress value={30} className="h-2" />
                      <p className="text-xs text-right mt-1">30% abgeschlossen</p>
                    </div>
                  </div>
                  <div>
                    <Button size="sm">Nächste Stunde</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Empfehlungen für Sie</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Excel für Fortgeschrittene</h4>
                  <p className="text-sm text-muted-foreground">Online-Kurs, Flexibel</p>
                  <div className="flex justify-between items-center mt-2">
                    <Badge>4.8/5 ★</Badge>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
                <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Nachhaltige Finanzanlagen</h4>
                  <p className="text-sm text-muted-foreground">Seminar, Zürich</p>
                  <div className="flex justify-between items-center mt-2">
                    <Badge>4.6/5 ★</Badge>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-3 px-4">
              <Button className="w-full">Alle Empfehlungen anzeigen</Button>
            </CardFooter>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Finanzbildung" 
        description="Finanzwissen erweitern und optimieren"
        isActive={activeSubcategory === '#finanzbildung'}
        id="#finanzbildung"
      >
        <div className="space-y-4">
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Award className="h-10 w-10 text-dashboard-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Finanzkurse und Ressourcen</h3>
                  <p className="text-sm">Lernen Sie mehr über Finanzen und Investitionen</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      Ressourcen
                    </Button>
                    <Button size="sm">
                      Kurse entdecken
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Finanzbildungs-Ressourcen</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Grundlagen der Geldanlage</h4>
                  <p className="text-xs text-muted-foreground">Kostenloser PDF-Ratgeber</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Herunterladen</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Einführung in ETFs</h4>
                  <p className="text-xs text-muted-foreground">Video-Tutorial, 45 Min.</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Ansehen</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Immobilien als Kapitalanlage</h4>
                  <p className="text-xs text-muted-foreground">Webinar-Aufzeichnung</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Starten</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default BildungContent;
