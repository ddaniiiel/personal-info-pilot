
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Calendar, MapPin, ArrowRight, FileText, Lightbulb } from 'lucide-react';

const WohnenContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Home className="mr-2 h-5 w-5 text-dashboard-purple" /> 
              Eigentumsübersicht
            </CardTitle>
            <CardDescription>Ihre Immobilieninformationen auf einen Blick</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Wohneigentum</h3>
                  <p className="text-sm mb-1">Musterstrasse 1, 8000 Zürich</p>
                  <p className="text-sm text-muted-foreground">4.5 Zimmer, 120 m²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Kaufpreis</h3>
                  <p className="text-lg font-semibold">CHF 950'000</p>
                  <p className="text-sm text-muted-foreground">Gekauft am 15.03.2019</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Wichtige Dokumente</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Kaufvertrag</span>
                    </div>
                    <Button variant="ghost" size="sm">Anzeigen</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Grundbuchauszug</span>
                    </div>
                    <Button variant="ghost" size="sm">Anzeigen</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Hypothek</span>
                    </div>
                    <Button variant="ghost" size="sm">Anzeigen</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <MapPin className="mr-2 h-5 w-5 text-dashboard-purple" />
              Nachbarschaft
            </CardTitle>
            <CardDescription>Aktuelle Informationen aus Ihrer Umgebung</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium">Strassensanierung</h4>
                <p className="text-sm">Die Musterstrasse wird vom 15.05 bis 30.05.2025 komplett saniert. Mit Verkehrsbehinderungen ist zu rechnen.</p>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Bekanntgabe: 20.04.2025</span>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-medium">Neuer Bioladen eröffnet</h4>
                <p className="text-sm">In der Nachbarschaft eröffnet am 01.05.2025 ein neuer Bio-Supermarkt mit regionalen Produkten.</p>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Bekanntgabe: 15.04.2025</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">Alle Nachbarschafts-Updates anzeigen</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Calendar className="mr-2 h-5 w-5 text-dashboard-purple" />
              Termine & Fristen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 p-2 rounded mr-2 text-xs font-medium">
                  15.05.
                </div>
                <div>
                  <p className="text-sm font-medium">Hypothekarzinsen fällig</p>
                  <p className="text-xs text-muted-foreground">CHF 1'250</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-2 rounded mr-2 text-xs font-medium">
                  01.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Eigentümerversammlung</p>
                  <p className="text-xs text-muted-foreground">19:00 Uhr, Gemeinschaftsraum</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 p-2 rounded mr-2 text-xs font-medium">
                  15.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Gebäudeversicherung</p>
                  <p className="text-xs text-muted-foreground">Jahresprämie CHF 650</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-2">Termin hinzufügen</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Lightbulb className="mr-2 h-5 w-5 text-dashboard-purple" />
              Tipps & Empfehlungen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-3 rounded-md">
                <h4 className="font-medium text-sm">Energiespartipp</h4>
                <p className="text-xs mt-1">Mit smarten Thermostaten können Sie bis zu 20% Heizkosten einsparen.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1 text-xs">
                  Mehr erfahren <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md">
                <h4 className="font-medium text-sm">Wertsteigerung</h4>
                <p className="text-xs mt-1">Eine energetische Sanierung kann den Wert Ihrer Immobilie um bis zu 10% steigern.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1 text-xs">
                  Mehr erfahren <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Immobilienwert-Entwicklung</CardTitle>
            <CardDescription className="text-xs">Basierend auf Marktdaten</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 w-full bg-gray-100 rounded flex items-center justify-center">
              <p className="text-sm text-gray-500">Wertsteigerung: +12% seit Kauf</p>
              {/* Hier könnte ein Chart eingebunden werden */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WohnenContent;
