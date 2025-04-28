
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Lightbulb, ArrowRight, AlertTriangle, Calculator, BarChart } from 'lucide-react';
import SubcategoryLayout from './SubcategoryLayout';
import { cn } from '@/lib/utils';

const SteuernContent: React.FC = () => {
  const location = useLocation();
  const currentHash = location.hash;

  return (
    <div className="space-y-6">
      {/* Steuererklärungen Section */}
      <div id="erklaerungen" className={cn("scroll-mt-20", currentHash === '#erklaerungen' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Steuererklärungen" 
          description="Einreichung und Status Ihrer Steuererklärungen"
          isActive={currentHash === '#erklaerungen'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Steuererklärungen Historie</h3>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Neue Steuererklärung
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Steuererklärung 2024</h4>
                      <p className="text-sm text-muted-foreground">Fälligkeit: 31.03.2025</p>
                    </div>
                    <Badge variant="secondary">In Bearbeitung</Badge>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">Dokument öffnen</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Steuererklärung 2023</h4>
                      <p className="text-sm text-muted-foreground">Eingereicht: 25.03.2024</p>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800">Abgeschlossen</Badge>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">Dokument öffnen</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Steuererklärung 2022</h4>
                      <p className="text-sm text-muted-foreground">Eingereicht: 28.02.2023</p>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800">Abgeschlossen</Badge>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">Dokument öffnen</Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 p-4 bg-amber-50 rounded-md border border-amber-200">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800">Wichtiger Termin</h4>
                  <p className="text-sm text-amber-700">
                    Die Frist für die Einreichung der Steuererklärung 2024 endet am 31.03.2025. Vergessen Sie nicht, alle notwendigen Belege beizufügen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      {/* Steueroptimierung Section */}
      <div id="optimierung" className={cn("scroll-mt-20", currentHash === '#optimierung' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Steueroptimierung" 
          description="Möglichkeiten zur Optimierung Ihrer Steuersituation"
          isActive={currentHash === '#optimierung'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Steuerabzüge</h3>
              <Button variant="outline" size="sm">
                <Calculator className="h-4 w-4 mr-2" />
                Optimierung berechnen
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-dashboard-purple" />
                    Säule 3a Potenzial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Sie könnten durch zusätzliche Einzahlungen in die Säule 3a noch CHF 3'250 Steuern sparen.</p>
                  <div className="mt-3 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-dashboard-purple rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>Aktuell: CHF 4'200</span>
                    <span>Maximum: CHF 7'056</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-dashboard-purple">
                    Berechnung anzeigen <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-dashboard-purple" />
                    Wohneigentum Abzüge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Durch energetische Sanierungsmassnahmen können Sie Abzüge von bis zu CHF 12'000 geltend machen.</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Energieeinsparung</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Nachhaltig</Badge>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-dashboard-purple">
                    Mehr erfahren <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-dashboard-purple" />
                    Berufskosten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Haben Sie alle berufsbedingten Ausgaben geltend gemacht? Reisekosten, Weiterbildung und Arbeitsmittel sind abzugsfähig.</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Pendlerkosten</span>
                      <span>CHF 2'340</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Weiterbildung</span>
                      <span>CHF 1'200</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Arbeitsmittel</span>
                      <span>CHF 850</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-dashboard-purple">
                    Checkliste öffnen <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-dashboard-purple" />
                    Spenden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Spenden an gemeinnützige Organisationen können Sie von der Steuer absetzen.</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Bisherige Spenden 2024</span>
                      <span>CHF 850</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-dashboard-purple">
                    Organisation finden <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Steuerersparnis Übersicht</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 w-full bg-gray-50 rounded flex items-center justify-center p-4">
                  <div className="w-full">
                    <h4 className="text-sm font-medium mb-3 text-center">Aktuelle Steuerersparnis nach Kategorie</h4>
                    <div className="space-y-2 w-full">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Säule 3a</span>
                          <span>CHF 1'040</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{width: '70%'}}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Wohneigentum</span>
                          <span>CHF 3'200</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-green-500 rounded-full" style={{width: '40%'}}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Berufskosten</span>
                          <span>CHF 1'320</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-purple-500 rounded-full" style={{width: '55%'}}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Spenden</span>
                          <span>CHF 210</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-yellow-500 rounded-full" style={{width: '15%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SubcategoryLayout>
      </div>

      {/* Rechtliches Section */}
      <div id="rechtliches" className={cn("scroll-mt-20", currentHash === '#rechtliches' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Rechtliches" 
          description="Steuerrechtliche Informationen und Neuerungen"
          isActive={currentHash === '#rechtliches'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Aktuelle Steuergesetze</h3>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Alle anzeigen
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-md text-amber-800">
                    <AlertTriangle className="mr-2 h-4 w-4 text-amber-800" />
                    Gesetzesänderung 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-800">Ab 01.01.2026 werden die Steuerabzüge für Pendler auf maximal CHF 3'000 pro Jahr begrenzt.</p>
                  <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-amber-800">
                    Details ansehen <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Steuerrechtliche Ressourcen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <a href="#" className="hover:underline">Eidgenössisches Steuergesetz</a>
                      </li>
                      <li className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <a href="#" className="hover:underline">Kantonale Steuergesetze</a>
                      </li>
                      <li className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <a href="#" className="hover:underline">Doppelbesteuerungsabkommen</a>
                      </li>
                      <li className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <a href="#" className="hover:underline">Steuerrechtliche Präzedenzfälle</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Rechtliche Beratung</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">Bei komplexen steuerrechtlichen Fragen können Sie eine Beratung vereinbaren.</p>
                    <Button className="w-full">
                      Steuerberater kontaktieren
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <BarChart className="h-4 w-4 mr-2 text-dashboard-purple" />
                    Steuervergleich nach Kantonen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 w-full bg-gray-50 rounded flex items-center justify-center">
                    <p className="text-sm text-gray-500">Interaktive Karte mit kantonalen Steuersätzen</p>
                    {/* Hier könnte eine Karte oder ein Chart eingebunden werden */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SubcategoryLayout>
      </div>
    </div>
  );
};

export default SteuernContent;
