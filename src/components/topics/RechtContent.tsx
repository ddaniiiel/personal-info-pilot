
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Briefcase, Download, ExternalLink, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface RechtContentProps {
  activeSubcategory: string | null;
}

const RechtContent: React.FC<RechtContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Verträge" 
        description="Verwalten Sie Ihre Verträge und Vereinbarungen"
        isActive={activeSubcategory === '#vertraege'}
        id="#vertraege"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base font-medium">Mietvertrag</CardTitle>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Aktiv</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <FileText className="h-10 w-10 text-dashboard-purple" />
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Gültig bis: <span className="font-medium">31.12.2025</span></p>
                    <p className="text-sm text-muted-foreground">Objekt: <span className="font-medium">Musterstrasse 123, Zürich</span></p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Anzeigen
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Herunterladen
                    </Button>
                    <Button variant="outline" size="sm">
                      Bearbeiten
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base font-medium">Arbeitsvertrag</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Unbefristet</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Beginn: <span className="font-medium">01.01.2023</span></p>
                    <p className="text-sm text-muted-foreground">Arbeitgeber: <span className="font-medium">Musterfirma AG</span></p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Anzeigen
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Herunterladen
                    </Button>
                    <Button variant="outline" size="sm">
                      Bearbeiten
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Wichtige Vertragsdetails</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                  <span>Mietzins:</span>
                  <span className="font-medium">CHF 2'100</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                  <span>Kündigungsfrist:</span>
                  <span className="font-medium">3 Monate</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                  <span>Nächste Mietzinsanpassung:</span>
                  <span className="font-medium">01.01.2026</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                  <span>Kaution:</span>
                  <span className="font-medium">CHF 4'200</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                  <span>Nebenkosten:</span>
                  <span className="font-medium">CHF 250 monatlich</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-3 px-4">
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-1" />
                Erinnerung für Kündigungstermin einstellen
              </Button>
            </CardFooter>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Dokumentenvorlagen" 
        description="Nutzen Sie Vorlagen für rechtssichere Dokumente"
        isActive={activeSubcategory === '#vorlagen'}
        id="#vorlagen"
      >
        <div className="space-y-4">
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <BookOpen className="h-10 w-10 text-dashboard-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Mietvertrag Vorlage</h3>
                  <p className="text-sm text-muted-foreground">Erstellen Sie einen rechtssicheren Mietvertrag</p>
                  <p className="text-xs mt-2">Diese Vorlage wurde von Rechtsexperten geprüft und entspricht den aktuellen gesetzlichen Bestimmungen in der Schweiz.</p>
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Vorlage herunterladen
                    </Button>
                    <Button size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Online ausfüllen
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Weitere Vorlagen</CardTitle>
              <p className="text-sm text-muted-foreground">Rechtssichere Dokumente für verschiedene Zwecke</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-dashboard-purple mr-3" />
                    <div>
                      <p className="font-medium">Arbeitsvertrag Vorlage</p>
                      <p className="text-xs text-muted-foreground">Für Vollzeit- und Teilzeitanstellungen</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Herunterladen
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-dashboard-purple mr-3" />
                    <div>
                      <p className="font-medium">Kaufvertrag Vorlage</p>
                      <p className="text-xs text-muted-foreground">Für Waren und Dienstleistungen</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Herunterladen
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-dashboard-purple mr-3" />
                    <div>
                      <p className="font-medium">Vollmacht Vorlage</p>
                      <p className="text-xs text-muted-foreground">Für verschiedene Vertretungszwecke</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Herunterladen
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-3 px-4 flex justify-center">
              <Button variant="link">
                <ExternalLink className="h-4 w-4 mr-1" />
                Alle Vorlagen ansehen
              </Button>
            </CardFooter>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Rechtliche Beratung" 
        description="Finden Sie professionelle Unterstützung"
        isActive={activeSubcategory === '#beratung'}
        id="#beratung"
      >
        <div className="space-y-4">
          <Card className="hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Briefcase className="h-10 w-10 text-dashboard-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Online Rechtsberatung</h3>
                  <p className="text-sm">Erhalten Sie schnell und unkompliziert Rat</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-green-100 text-green-800">Verfügbar</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Antwort in 24h</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3">
                    <Mail className="h-4 w-4 mr-1" />
                    Beratung starten
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Empfohlene Anwälte</CardTitle>
              <p className="text-sm text-muted-foreground">Fachleute in Ihrer Nähe</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="p-3 border rounded-lg hover:shadow-sm transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Dr. Anna Weber</h4>
                      <p className="text-xs text-muted-foreground">Zürich, Spezialgebiet Mietrecht</p>
                      <div className="flex items-center mt-1">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                        <span className="text-xs">Zertifiziert</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Kontakt
                    </Button>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Erfahrung: 15+ Jahre</span>
                    <span>Stundensatz: ab CHF 250</span>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg hover:shadow-sm transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Martin Schweizer</h4>
                      <p className="text-xs text-muted-foreground">Bern, Spezialgebiet Arbeitsrecht</p>
                      <div className="flex items-center mt-1">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                        <span className="text-xs">Zertifiziert</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Kontakt
                    </Button>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Erfahrung: 8+ Jahre</span>
                    <span>Stundensatz: ab CHF 200</span>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg hover:shadow-sm transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Laura Müller</h4>
                      <p className="text-xs text-muted-foreground">Luzern, Spezialgebiet Familienrecht</p>
                      <div className="flex items-center mt-1">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                        <span className="text-xs">Zertifiziert</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Kontakt
                    </Button>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Erfahrung: 12+ Jahre</span>
                    <span>Stundensatz: ab CHF 220</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-200 bg-gradient-to-br from-purple-50 to-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Rechtsschutzversicherung</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <FileText className="h-6 w-6 text-dashboard-purple" />
                </div>
                <p className="text-sm">Schützen Sie sich vor hohen Anwaltskosten mit einer Rechtsschutzversicherung.</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Übernahme von Anwalts- und Gerichtskosten</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Telefonische Rechtsberatung</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Mediation bei Konflikten</span>
                </div>
              </div>
              <Button className="w-full">Angebote vergleichen</Button>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default RechtContent;
