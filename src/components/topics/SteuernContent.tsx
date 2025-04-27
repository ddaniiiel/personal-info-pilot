
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Lightbulb, ArrowRight, AlertTriangle } from 'lucide-react';

const SteuernContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <FileText className="mr-2 h-5 w-5 text-dashboard-purple" /> 
              Steuerübersicht
            </CardTitle>
            <CardDescription>Ihre Steuersituation auf einen Blick</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-1 text-sm">Steuerbelastung 2024</h3>
                  <p className="text-lg font-semibold">CHF 18'250</p>
                  <p className="text-xs text-muted-foreground">Vorjahr: CHF 19'450</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-1 text-sm">Status</h3>
                  <div className="flex items-center">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Bezahlt</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Letzter Zahlungseingang: 30.03.2025</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-1 text-sm">Nächste Frist</h3>
                  <p className="text-sm font-medium">30.06.2025</p>
                  <p className="text-xs text-muted-foreground">Steuervorauszahlung Q2</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Wichtige Dokumente</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Steuerveranlagung 2024</span>
                    </div>
                    <Button variant="ghost" size="sm">Anzeigen</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Steuererklärung 2024</span>
                    </div>
                    <Button variant="ghost" size="sm">Anzeigen</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Lohnausweis 2024</span>
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
              <Lightbulb className="mr-2 h-5 w-5 text-dashboard-purple" />
              Steuerabzüge
            </CardTitle>
            <CardDescription>Optimieren Sie Ihre Steuersituation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-medium">Säule 3a Potenzial</h4>
                <p className="text-sm">Sie könnten durch zusätzliche Einzahlungen in die Säule 3a noch CHF 3'250 Steuern sparen.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Berechnung anzeigen <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium">Wohneigentum Abzüge</h4>
                <p className="text-sm">Durch energetische Sanierungsmassnahmen können Sie Abzüge von bis zu CHF 12'000 geltend machen.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Mehr erfahren <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-medium">Berufskosten</h4>
                <p className="text-sm">Haben Sie alle berufsbedingten Ausgaben geltend gemacht? Reisekosten, Weiterbildung und Arbeitsmittel sind abzugsfähig.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Checkliste öffnen <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
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
              Termine & Fristen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 p-2 rounded mr-2 text-xs font-medium">
                  31.05.
                </div>
                <div>
                  <p className="text-sm font-medium">Steuererklärung 2025 einreichen</p>
                  <p className="text-xs text-muted-foreground">Frist kann verlängert werden</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-2 rounded mr-2 text-xs font-medium">
                  30.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Steuervorauszahlung Q2</p>
                  <p className="text-xs text-muted-foreground">CHF 4'500</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 p-2 rounded mr-2 text-xs font-medium">
                  30.09.
                </div>
                <div>
                  <p className="text-sm font-medium">Steuervorauszahlung Q3</p>
                  <p className="text-xs text-muted-foreground">CHF 4'500</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-md text-amber-800">
              <AlertTriangle className="mr-2 h-4 w-4 text-amber-800" />
              Gesetzesänderung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-800">Ab 01.01.2026 werden die Steuerabzüge für Pendler auf maximal CHF 3'000 pro Jahr begrenzt.</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-amber-800">
              Details ansehen <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Steuer-Assistent</CardTitle>
            <CardDescription className="text-xs">Steuererklärung leicht gemacht</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full mb-2">
              <FileText className="h-4 w-4 mr-2" />
              Steuererklärung starten
            </Button>
            <Button variant="outline" className="w-full">
              <Lightbulb className="h-4 w-4 mr-2" />
              Steueroptimierung analysieren
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Steuerbelastung im Vergleich</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 w-full bg-gray-100 rounded flex items-center justify-center">
              <p className="text-sm text-gray-500">Sie zahlen 8% weniger als der Durchschnitt</p>
              {/* Hier könnte ein Chart eingebunden werden */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SteuernContent;
