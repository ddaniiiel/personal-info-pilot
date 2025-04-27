
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, Calendar, ArrowRight, AlertTriangle, Zap, LineChart } from 'lucide-react';

const EnergieContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Zap className="mr-2 h-5 w-5 text-dashboard-purple" /> 
              Energieverbrauch
            </CardTitle>
            <CardDescription>Ihr Energieverbrauch auf einen Blick</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-1 text-sm">Stromverbrauch</h3>
                  <p className="text-lg font-semibold">3'250 kWh</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-600">-8% zum Vorjahr</span>
                    <svg className="w-3 h-3 text-green-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-1 text-sm">Heizenergie</h3>
                  <p className="text-lg font-semibold">12'400 kWh</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-red-600">+2% zum Vorjahr</span>
                    <svg className="w-3 h-3 text-red-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-1 text-sm">Kosten Total</h3>
                  <p className="text-lg font-semibold">CHF 2'450</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-600">-5% zum Vorjahr</span>
                    <svg className="w-3 h-3 text-green-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="h-60 w-full bg-gray-100 rounded flex items-center justify-center">
                <p className="text-sm text-gray-500">Jahresverbrauch im Zeitverlauf</p>
                {/* Hier könnte ein Chart eingebunden werden */}
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Verbrauchsverteilung</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="text-sm font-medium mb-3">Strom nach Verbrauchern</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Küche</span>
                        <div className="flex items-center">
                          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <span className="text-xs ml-2">45%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Elektronik</span>
                        <div className="flex items-center">
                          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                          <span className="text-xs ml-2">25%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Beleuchtung</span>
                        <div className="flex items-center">
                          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                          <span className="text-xs ml-2">20%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sonstiges</span>
                        <div className="flex items-center">
                          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                          <span className="text-xs ml-2">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="text-sm font-medium mb-3">Heizenergie nach Nutzung</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Raumheizung</span>
                        <div className="flex items-center">
                          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <span className="text-xs ml-2">70%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Warmwasser</span>
                        <div className="flex items-center">
                          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                          <span className="text-xs ml-2">25%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Lüftung</span>
                        <div className="flex items-center">
                          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: '5%' }}></div>
                          </div>
                          <span className="text-xs ml-2">5%</span>
                        </div>
                      </div>
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
              <Lightbulb className="mr-2 h-5 w-5 text-dashboard-purple" />
              Energieeinsparungspotenzial
            </CardTitle>
            <CardDescription>Optimieren Sie Ihren Energieverbrauch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-medium">Hoher ROI: Beleuchtung</h4>
                <p className="text-sm">Durch den Austausch der restlichen Glühlampen gegen LED könnten Sie jährlich ca. 180 kWh (CHF 45) sparen.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Details anzeigen <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium">Mittlerer ROI: Smart Home</h4>
                <p className="text-sm">Mit smarten Heizkörperthermostaten könnten Sie bis zu 15% Heizenergie einsparen (ca. CHF 280 pro Jahr).</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Berechnung anzeigen <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <h4 className="font-medium">Langfristig: Wärmepumpe</h4>
                <p className="text-sm">Eine Umstellung von Gas auf Wärmepumpe würde ihre CO₂-Emissionen um 80% reduzieren. Amortisation nach ca. 8-10 Jahren.</p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Förderungen prüfen <ArrowRight className="h-3 w-3 ml-1" />
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
              Zahlungen & Termine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 p-2 rounded mr-2 text-xs font-medium">
                  15.05.
                </div>
                <div>
                  <p className="text-sm font-medium">Stromrechnung</p>
                  <p className="text-xs text-muted-foreground">CHF 120 (Q2)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-2 rounded mr-2 text-xs font-medium">
                  30.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Gasrechnung</p>
                  <p className="text-xs text-muted-foreground">CHF 95 (Sommerrate)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-800 p-2 rounded mr-2 text-xs font-medium">
                  10.07.
                </div>
                <div>
                  <p className="text-sm font-medium">Energieberatung</p>
                  <p className="text-xs text-muted-foreground">Kostenlose Beratung vor Ort</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-md text-blue-800">
              <Zap className="mr-2 h-4 w-4 text-blue-800" />
              Aktuelle Energiesituation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-800">Die Strompreise sind um 3% gegenüber dem Vorjahr gesunken. Überprüfen Sie Ihre Tarife!</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-blue-800">
              Tarifvergleich starten <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Energieeffizienz</CardTitle>
            <CardDescription className="text-xs">Ihre Immobilie im Vergleich</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm font-medium">Energieeffizienzklasse</span>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">C</Badge>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm font-medium">CO₂-Emissionen</span>
                <span className="text-sm">5.2 t / Jahr</span>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm font-medium">Vergleich Umgebung</span>
                <span className="text-sm text-green-600">-15%</span>
              </div>
              
              <Button variant="outline" className="w-full">
                Vollständigen Energiebericht
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Energietrends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 w-full bg-gray-100 rounded flex items-center justify-center">
              <p className="text-sm text-gray-500">Ihre Einsparung: 320 kg CO₂ / Jahr</p>
              {/* Hier könnte ein Chart eingebunden werden */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnergieContent;
