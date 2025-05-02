
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  FileText, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  CircleDollarSign
} from 'lucide-react';

interface FoerderungenContentProps {
  activeSubcategory: string | null;
}

const FoerderungenContent: React.FC<FoerderungenContentProps> = ({ activeSubcategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Award className="mr-2 h-5 w-5 text-dashboard-purple" /> 
              Aktuelle Förderprogramme
            </CardTitle>
            <CardDescription>Verfügbare Förderungen für Ihre Situation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-100 rounded-md p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <Badge className="mr-2 bg-green-100 text-green-800 hover:bg-green-200">Empfohlen</Badge>
                    Förderung energetische Sanierung
                  </h3>
                  <Badge variant="outline">bis zu CHF 25'000</Badge>
                </div>
                <p className="text-sm mt-2">Staatliche Förderung für energetische Sanierungsmassnahmen an bestehenden Gebäuden wie Fassaden-, Dach- oder Fensterdämmung.</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-muted-foreground">Frist: 31.12.2025</span>
                  </div>
                  <Button>
                    Details ansehen
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">Solarförderung "Eigenverbrauch Plus"</h3>
                  <Badge variant="outline">bis zu CHF 10'000</Badge>
                </div>
                <p className="text-sm mt-2">Förderung für die Installation von Photovoltaikanlagen in Kombination mit Batteriespeichern für Ein- und Mehrfamilienhäuser.</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-muted-foreground">Frist: 30.06.2025</span>
                  </div>
                  <Button variant="outline">
                    Details ansehen
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">Heizungsersatz-Programm</h3>
                  <Badge variant="outline">bis zu CHF 18'000</Badge>
                </div>
                <p className="text-sm mt-2">Förderung für den Ersatz von fossilen Heizungen durch Wärmepumpen oder andere erneuerbare Energiesysteme.</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-muted-foreground">Frist: unbegrenzt</span>
                  </div>
                  <Button variant="outline">
                    Details ansehen
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">E-Mobilitäts-Förderung</h3>
                  <Badge variant="outline">bis zu CHF 4'000</Badge>
                </div>
                <p className="text-sm mt-2">Förderung für den Kauf von Elektrofahrzeugen und die Installation von Ladestationen für Privatpersonen.</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-muted-foreground">Frist: 31.08.2025</span>
                  </div>
                  <Button variant="outline">
                    Details ansehen
                  </Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Alle verfügbaren Förderprogramme anzeigen
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <FileText className="mr-2 h-5 w-5 text-dashboard-purple" />
              Ihre Förderanträge
            </CardTitle>
            <CardDescription>Status und Verlauf Ihrer Anträge</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-50 p-3 border-b">
                  <h3 className="font-medium">Laufende Anträge</h3>
                </div>
                <div className="p-0">
                  <div className="border-b flex items-center justify-between p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">Gebäudeprogramm: Fenstersanierung</p>
                        <p className="text-xs text-muted-foreground">Eingereicht am: 15.03.2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">In Bearbeitung</Badge>
                      <Button variant="ghost" size="sm">Ansehen</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">Solarförderung: PV-Anlage</p>
                        <p className="text-xs text-muted-foreground">Eingereicht am: 02.04.2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">Dokument fehlt</Badge>
                      <Button variant="ghost" size="sm">Ansehen</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-50 p-3 border-b">
                  <h3 className="font-medium">Abgeschlossene Anträge</h3>
                </div>
                <div className="p-0">
                  <div className="border-b flex items-center justify-between p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Wärmepumpen-Förderung</p>
                        <p className="text-xs text-muted-foreground">Abgeschlossen am: 10.12.2024</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-800 mr-2">CHF 12'500 erhalten</Badge>
                      <Button variant="ghost" size="sm">Ansehen</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50">
                    <div className="flex items-center">
                      <XCircle className="h-4 w-4 text-red-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">E-Auto Förderung</p>
                        <p className="text-xs text-muted-foreground">Abgeschlossen am: 05.09.2024</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="destructive" className="mr-2">Abgelehnt</Badge>
                      <Button variant="ghost" size="sm">Ansehen</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Calendar className="mr-2 h-5 w-5 text-dashboard-purple" />
              Wichtige Termine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 p-2 rounded mr-2 text-xs font-medium">
                  15.05.
                </div>
                <div>
                  <p className="text-sm font-medium">Fristende: Dokumente einreichen</p>
                  <p className="text-xs text-muted-foreground">Solarförderung: Kostenvoranschlag</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-2 rounded mr-2 text-xs font-medium">
                  30.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Fristende: Solarförderung</p>
                  <p className="text-xs text-muted-foreground">Antragsphase endet</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 p-2 rounded mr-2 text-xs font-medium">
                  15.07.
                </div>
                <div>
                  <p className="text-sm font-medium">Förderprogramm-Webinar</p>
                  <p className="text-xs text-muted-foreground">Neue Fördermöglichkeiten 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-md text-amber-800">
              <AlertTriangle className="mr-2 h-4 w-4 text-amber-800" />
              Wichtiger Hinweis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-800">Die Fördergelder für das Solarförderprogramm sind fast ausgeschöpft. Bei Interesse sollte der Antrag schnellstmöglich gestellt werden.</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-amber-800">
              Jetzt beantragen <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Förderassistent</CardTitle>
            <CardDescription className="text-xs">Wir helfen Ihnen bei der Antragstellung</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <CircleDollarSign className="h-4 w-4 mr-2" />
                Fördercheck starten
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center">
                <FileText className="h-4 w-4 mr-2" />
                Antrag erstellen lassen
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Fördersummen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm font-medium">Beantragt</span>
                <span className="text-sm">CHF 35'000</span>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm font-medium">Bewilligt</span>
                <span className="text-sm">CHF 12'500</span>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm font-medium">In Bearbeitung</span>
                <span className="text-sm">CHF 22'500</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-md">
              <Award className="mr-2 h-4 w-4 text-dashboard-purple" />
              Neues Programm
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Ab 01.07.2025: Neues Förderprogramm für energieeffiziente Haushaltsgeräte mit bis zu CHF 1'000 Förderung pro Haushalt.</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2">
              Vormerken <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FoerderungenContent;
