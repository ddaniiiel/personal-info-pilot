
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, FileText, ArrowRight, AlertTriangle, Scale } from 'lucide-react';

const VersicherungenContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Shield className="mr-2 h-5 w-5 text-dashboard-purple" /> 
              Versicherungsübersicht
            </CardTitle>
            <CardDescription>Ihre Versicherungen auf einen Blick</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Personenversicherungen</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center p-3 border rounded-md">
                    <div>
                      <span className="text-sm font-medium">Krankenversicherung</span>
                      <p className="text-xs text-muted-foreground">Grundversicherung + Zusatz</p>
                    </div>
                    <div>
                      <span className="text-sm">SwissCare</span>
                      <p className="text-xs text-muted-foreground">Police: 12345678</p>
                    </div>
                    <div>
                      <span className="text-sm">CHF 420/Monat</span>
                      <p className="text-xs text-muted-foreground">Fälligkeit: monatlich</p>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center p-3 border rounded-md">
                    <div>
                      <span className="text-sm font-medium">Unfallversicherung</span>
                      <p className="text-xs text-muted-foreground">Berufsunfall + Freizeit</p>
                    </div>
                    <div>
                      <span className="text-sm">ArbeitgeberPlus</span>
                      <p className="text-xs text-muted-foreground">Über Arbeitgeber</p>
                    </div>
                    <div>
                      <span className="text-sm">Gedeckt</span>
                      <Badge variant="outline" className="ml-1">Aktiv</Badge>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center p-3 border rounded-md">
                    <div>
                      <span className="text-sm font-medium">Lebensversicherung</span>
                      <p className="text-xs text-muted-foreground">Gemischte Versicherung</p>
                    </div>
                    <div>
                      <span className="text-sm">SwissLife</span>
                      <p className="text-xs text-muted-foreground">Police: 87654321</p>
                    </div>
                    <div>
                      <span className="text-sm">CHF 1'200/Jahr</span>
                      <p className="text-xs text-muted-foreground">Laufzeit: bis 2045</p>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Sachversicherungen</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center p-3 border rounded-md">
                    <div>
                      <span className="text-sm font-medium">Hausratversicherung</span>
                      <p className="text-xs text-muted-foreground">Inventar + Haftpflicht</p>
                    </div>
                    <div>
                      <span className="text-sm">Helvetia</span>
                      <p className="text-xs text-muted-foreground">Police: VH-789456</p>
                    </div>
                    <div>
                      <span className="text-sm">CHF 650/Jahr</span>
                      <p className="text-xs text-muted-foreground">Versicherungssumme: 150'000</p>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center p-3 border rounded-md">
                    <div>
                      <span className="text-sm font-medium">Gebäudeversicherung</span>
                      <p className="text-xs text-muted-foreground">Eigentum</p>
                    </div>
                    <div>
                      <span className="text-sm">GVZ</span>
                      <p className="text-xs text-muted-foreground">Police: GEB-123456</p>
                    </div>
                    <div>
                      <span className="text-sm">CHF 950/Jahr</span>
                      <p className="text-xs text-muted-foreground">Versicherungswert: 750'000</p>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Scale className="mr-2 h-5 w-5 text-dashboard-purple" />
              Versicherungsanalyse
            </CardTitle>
            <CardDescription>Optimierungspotential für Ihre Versicherungen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <h4 className="font-medium">Krankenversicherung</h4>
                <p className="text-sm">Durch Erhöhung der Franchise auf CHF 2'500 könnten Sie jährlich ca. CHF 960 sparen.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Berechnung anzeigen <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-medium">Hausratversicherung</h4>
                <p className="text-sm">Ihre Hausratversicherung bietet ein gutes Preis-Leistungs-Verhältnis. Keine Änderung empfohlen.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="font-medium">Lücke identifiziert</h4>
                <p className="text-sm">Sie haben keine Rechtsschutzversicherung. Dies könnte bei rechtlichen Auseinandersetzungen, z.B. im Mietrecht oder Arbeitsrecht, nützlich sein.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Angebote anzeigen <ArrowRight className="h-3 w-3 ml-1" />
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
              Termine & Zahlungen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 p-2 rounded mr-2 text-xs font-medium">
                  15.05.
                </div>
                <div>
                  <p className="text-sm font-medium">Krankenversicherung</p>
                  <p className="text-xs text-muted-foreground">CHF 420</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-2 rounded mr-2 text-xs font-medium">
                  01.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Gebäudeversicherung</p>
                  <p className="text-xs text-muted-foreground">Jahresbeitrag CHF 950</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 p-2 rounded mr-2 text-xs font-medium">
                  15.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Krankenversicherung</p>
                  <p className="text-xs text-muted-foreground">CHF 420</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-2">
                Alle Termine anzeigen
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-md text-green-800">
              <Shield className="mr-2 h-4 w-4 text-green-800" />
              Versicherungstipp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-800">Jährliche statt monatliche Zahlungen können bei vielen Versicherungen bis zu 5% der Prämie sparen.</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-green-800">
              Mehr Tipps <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Dokumentenverwaltung</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">Krankenversicherungspolice</span>
                </div>
                <Button variant="ghost" size="sm">Anzeigen</Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">Hausratversicherungspolice</span>
                </div>
                <Button variant="ghost" size="sm">Anzeigen</Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">Lebensversicherungspolice</span>
                </div>
                <Button variant="ghost" size="sm">Anzeigen</Button>
              </div>
              
              <Button variant="outline" className="w-full">
                Dokument hinzufügen
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Versicherungskosten</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 w-full bg-gray-100 rounded flex items-center justify-center">
              <p className="text-sm text-gray-500">Jährlich: CHF 9'840</p>
              {/* Hier könnte ein Chart eingebunden werden */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VersicherungenContent;
