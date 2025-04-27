
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Scale, Calendar, FileText, AlertTriangle, ArrowRight, Upload } from 'lucide-react';

const RechtContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Scale className="mr-2 h-5 w-5 text-dashboard-purple" /> 
              Rechtliche Dokumente
            </CardTitle>
            <CardDescription>Verwaltung Ihrer wichtigen rechtlichen Unterlagen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="border rounded-md overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                    <h3 className="font-medium">Verträge</h3>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Hinzufügen
                    </Button>
                  </div>
                  <div className="p-0">
                    <div className="border-b flex items-center justify-between p-3 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Arbeitsvertrag</p>
                          <p className="text-xs text-muted-foreground">Aktualisiert: 01.03.2024</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Anzeigen</Button>
                    </div>
                    <div className="border-b flex items-center justify-between p-3 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Kaufvertrag Immobilie</p>
                          <p className="text-xs text-muted-foreground">Aktualisiert: 15.03.2019</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Anzeigen</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Versicherungsverträge</p>
                          <p className="text-xs text-muted-foreground">Aktualisiert: 10.01.2025</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Anzeigen</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                    <h3 className="font-medium">Vollmachten & Verfügungen</h3>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Hinzufügen
                    </Button>
                  </div>
                  <div className="p-0">
                    <div className="border-b flex items-center justify-between p-3 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Patientenverfügung</p>
                          <p className="text-xs text-muted-foreground">Aktualisiert: 12.06.2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Anzeigen</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Vorsorgeauftrag</p>
                          <p className="text-xs text-muted-foreground">Aktualisiert: 12.06.2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Anzeigen</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                    <h3 className="font-medium">Sonstige rechtliche Dokumente</h3>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Hinzufügen
                    </Button>
                  </div>
                  <div className="p-0">
                    <div className="border-b flex items-center justify-between p-3 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Testament</p>
                          <p className="text-xs text-muted-foreground">Aktualisiert: 05.11.2022</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Anzeigen</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Ehevertrag</p>
                          <p className="text-xs text-muted-foreground">Aktualisiert: 20.05.2018</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Anzeigen</Button>
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
              <AlertTriangle className="mr-2 h-5 w-5 text-dashboard-purple" />
              Gesetzesänderungen
            </CardTitle>
            <CardDescription>Relevante rechtliche Änderungen für Sie</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="font-medium">Neue Datenschutzgesetzgebung</h4>
                <p className="text-sm">Ab 01.09.2025 tritt die neue Schweizer Datenschutzgesetzgebung in Kraft. Prüfen Sie, ob Ihre Dokumente den neuen Anforderungen entsprechen.</p>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Veröffentlicht: 15.03.2025</span>
                </div>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Mehr erfahren <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <h4 className="font-medium">Änderungen im Mietrecht</h4>
                <p className="text-sm">Die Gesetzesänderungen zum Mietrecht könnten Auswirkungen auf Ihre Vermieter- oder Mieterrechte haben.</p>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Veröffentlicht: 02.04.2025</span>
                </div>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Details ansehen <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium">Neue Regeln für Hypotheken</h4>
                <p className="text-sm">Die Finanzmarktaufsicht hat neue Regelungen für die Hypothekenvergabe beschlossen.</p>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Veröffentlicht: 10.04.2025</span>
                </div>
                <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                  Analyse lesen <ArrowRight className="h-3 w-3 ml-1" />
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
                  15.05.
                </div>
                <div>
                  <p className="text-sm font-medium">Frist: Einspruch Steuerbescheid</p>
                  <p className="text-xs text-muted-foreground">30 Tage ab Zustellung</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-2 rounded mr-2 text-xs font-medium">
                  01.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Rechtsberatungstermin</p>
                  <p className="text-xs text-muted-foreground">Erbrecht, 14:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 p-2 rounded mr-2 text-xs font-medium">
                  30.06.
                </div>
                <div>
                  <p className="text-sm font-medium">Frist: Aktualisierung Vorsorgedokumente</p>
                  <p className="text-xs text-muted-foreground">Zweijährliche Überprüfung</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-2">
                Termin hinzufügen
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-md text-purple-800">
              <Scale className="mr-2 h-4 w-4 text-purple-800" />
              Rechtstipp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-800">Überprüfen Sie regelmässig Ihre Vorsorgedokumente und halten Sie sie aktuell. Besonders wichtig nach Lebensereignissen wie Heirat oder Geburt eines Kindes.</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-purple-800">
              Mehr Tipps <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Rechtliche Checkliste</CardTitle>
            <CardDescription className="text-xs">Sind Ihre Dokumente vollständig?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center p-2 border rounded-md">
                <input type="checkbox" className="mr-2" id="testament" checked={true} />
                <label htmlFor="testament" className="text-sm">Testament</label>
              </div>
              <div className="flex items-center p-2 border rounded-md">
                <input type="checkbox" className="mr-2" id="vorsorgeauftrag" checked={true} />
                <label htmlFor="vorsorgeauftrag" className="text-sm">Vorsorgeauftrag</label>
              </div>
              <div className="flex items-center p-2 border rounded-md">
                <input type="checkbox" className="mr-2" id="patientenverfuegung" checked={true} />
                <label htmlFor="patientenverfuegung" className="text-sm">Patientenverfügung</label>
              </div>
              <div className="flex items-center p-2 border rounded-md">
                <input type="checkbox" className="mr-2" id="vollmachten" />
                <label htmlFor="vollmachten" className="text-sm">Vollmachten</label>
              </div>
              <div className="flex items-center p-2 border rounded-md">
                <input type="checkbox" className="mr-2" id="vollmachten" />
                <label htmlFor="vollmachten" className="text-sm">Digitaler Nachlass</label>
              </div>
              
              <Button variant="outline" className="w-full mt-2">
                Dokumenten-Check starten
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Rechtliche Beratung</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-2">Beratung buchen</Button>
            <Button variant="outline" className="w-full">Dokumentenanalyse starten</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RechtContent;
