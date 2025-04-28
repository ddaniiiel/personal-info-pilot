
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Home, Wrench, Shield, Package, Cog, MoveRight, BarChart } from 'lucide-react';
import SubcategoryLayout from './SubcategoryLayout';
import { cn } from '@/lib/utils';

const WohnenContent: React.FC = () => {
  const location = useLocation();
  const currentHash = location.hash;

  const documents = [
    { id: 1, title: 'Mietvertrag.pdf', type: 'Vertrag', date: '01.01.2024', status: 'Aktiv' },
    { id: 2, title: 'Grundrissplan.pdf', type: 'Plan', date: '15.01.2024', status: 'Aktiv' },
    { id: 3, title: 'Versicherungspolice.pdf', type: 'Versicherung', date: '01.02.2024', status: 'Aktiv' }
  ];

  const maintenance = [
    { id: 1, title: 'Heizungswartung', due: '15.05.2024', priority: 'Hoch', status: 'Ausstehend' },
    { id: 2, title: 'Fensterreinigung', due: '01.06.2024', priority: 'Mittel', status: 'Geplant' },
    { id: 3, title: 'Rauchmelder prüfen', due: '10.06.2024', priority: 'Hoch', status: 'Geplant' }
  ];

  const properties = [
    { id: 1, title: 'Hauptwohnsitz', address: 'Musterstraße 123, 8001 Zürich', type: 'Eigentumswohnung', size: '110m²' },
    { id: 2, title: 'Ferienhaus', address: 'Bergweg 45, 7270 Davos', type: 'Haus', size: '85m²' }
  ];

  const smartDevices = [
    { id: 1, title: 'Thermostat Wohnzimmer', status: 'Online', temperature: '21.5°C' },
    { id: 2, title: 'Lichtsteuerung', status: 'Online', rooms: 4 },
    { id: 3, title: 'Sicherheitssystem', status: 'Online', sensors: 6 }
  ];

  const securityItems = [
    { id: 1, title: 'Rauchmelder', location: 'Wohnzimmer', nextCheck: '10.06.2024' },
    { id: 2, title: 'Sicherheitsschloss', location: 'Haustür', nextCheck: '15.07.2024' },
    { id: 3, title: 'Bewegungssensor', location: 'Eingangsbereich', nextCheck: '22.05.2024' }
  ];

  const inventory = [
    { id: 1, title: 'Waschmaschine', brand: 'Bosch', purchaseDate: '15.03.2022', warranty: '15.03.2025' },
    { id: 2, title: 'Kühlschrank', brand: 'Siemens', purchaseDate: '10.01.2021', warranty: '10.01.2026' },
    { id: 3, title: 'Fernseher', brand: 'Samsung', purchaseDate: '05.12.2023', warranty: '05.12.2025' }
  ];

  const movingTasks = [
    { id: 1, title: 'Umzugsfirma kontaktieren', deadline: '01.06.2024', status: 'Ausstehend' },
    { id: 2, title: 'Adressänderung melden', deadline: '15.06.2024', status: 'Ausstehend' },
    { id: 3, title: 'Internetanschluss umziehen', deadline: '20.06.2024', status: 'Ausstehend' }
  ];

  return (
    <div className="space-y-6">
      <div id="dokumente" className={cn("scroll-mt-20", currentHash === '#dokumente' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Dokumentenmanagement" 
          description="Wichtige Unterlagen und Verträge"
          isActive={currentHash === '#dokumente'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Dokumente</h3>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Dokument hochladen
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map(doc => (
                <Card key={doc.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground">{doc.date}</p>
                        <Badge className="mt-2" variant="outline">{doc.type}</Badge>
                      </div>
                      <Badge variant="secondary">{doc.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="wartung" className={cn("scroll-mt-20", currentHash === '#wartung' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Wartung & Instandhaltung" 
          description="Anstehende Wartungsarbeiten und Reparaturen"
          isActive={currentHash === '#wartung'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Wartungsplan</h3>
              <Button variant="outline" size="sm">
                <Wrench className="h-4 w-4 mr-2" />
                Wartung hinzufügen
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {maintenance.map(task => (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">Fällig: {task.due}</p>
                        <Badge 
                          className="mt-2" 
                          variant={task.priority === 'Hoch' ? 'destructive' : 'outline'}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <Badge variant="secondary">{task.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="immobilien" className={cn("scroll-mt-20", currentHash === '#immobilien' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Immobilienverwaltung" 
          description="Übersicht und Verwaltung Ihrer Immobilien"
          isActive={currentHash === '#immobilien'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Meine Immobilien</h3>
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Immobilie hinzufügen
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {properties.map(property => (
                <Card key={property.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{property.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{property.address}</p>
                    <div className="flex justify-between mt-4">
                      <div>
                        <Badge variant="outline">{property.type}</Badge>
                        <span className="ml-2 text-sm">{property.size}</span>
                      </div>
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-dashboard-purple" />
                    Immobilienwertentwicklung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Grafik: Wertentwicklung Ihrer Immobilien</p>
                    {/* Hier könnte ein Chart eingebunden werden */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="umzug" className={cn("scroll-mt-20", currentHash === '#umzug' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Umzug & Renovation" 
          description="Planung und Organisation von Umzügen und Renovierungen"
          isActive={currentHash === '#umzug'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Umzugsplanung</h3>
              <Button variant="outline" size="sm">
                <MoveRight className="h-4 w-4 mr-2" />
                Aufgabe hinzufügen
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {movingTasks.map(task => (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">Fällig: {task.deadline}</p>
                      </div>
                      <Badge variant="secondary">{task.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Geplante Renovationen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-blue-50 rounded-md text-center">
                    <p className="text-sm">Keine geplanten Renovationen momentan.</p>
                    <Button variant="link" className="mt-2">
                      Renovation planen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="sicherheit" className={cn("scroll-mt-20", currentHash === '#sicherheit' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Sicherheit" 
          description="Sicherheitseinrichtungen und -massnahmen"
          isActive={currentHash === '#sicherheit'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Sicherheitskomponenten</h3>
              <Button variant="outline" size="sm">
                <Shield className="h-4 w-4 mr-2" />
                Komponente hinzufügen
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {securityItems.map(item => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">Standort: {item.location}</p>
                        <p className="text-sm">Nächste Prüfung: {item.nextCheck}</p>
                      </div>
                      <Shield className="h-5 w-5 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="inventar" className={cn("scroll-mt-20", currentHash === '#inventar' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Verbrauchsmaterialien & Inventar" 
          description="Übersicht über Haushaltsgeräte und Verbrauchsmaterialien"
          isActive={currentHash === '#inventar'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Inventarliste</h3>
              <Button variant="outline" size="sm">
                <Package className="h-4 w-4 mr-2" />
                Gerät hinzufügen
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {inventory.map(item => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">Marke: {item.brand}</p>
                      <p className="text-sm">Gekauft: {item.purchaseDate}</p>
                      <p className="text-sm">Garantie bis: {item.warranty}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="smart-home" className={cn("scroll-mt-20", currentHash === '#smart-home' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Hausautomatisierung" 
          description="Smart Home Geräte und Steuerung"
          isActive={currentHash === '#smart-home'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Smart Devices</h3>
              <Button variant="outline" size="sm">
                <Cog className="h-4 w-4 mr-2" />
                Gerät hinzufügen
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {smartDevices.map(device => (
                <Card key={device.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{device.title}</h4>
                        <p className="text-sm text-muted-foreground">Status: {device.status}</p>
                        <p className="text-sm">
                          {device.temperature && `Temperatur: ${device.temperature}`}
                          {device.rooms && `${device.rooms} Räume`}
                          {device.sensors && `${device.sensors} Sensoren`}
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Automationsszenarien</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <Cog className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Morgenroutine</span>
                    </div>
                    <Badge variant="outline">Aktiv</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <Cog className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Energiesparmodus</span>
                    </div>
                    <Badge variant="outline">Aktiv</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center">
                      <Cog className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Urlaubsmodus</span>
                    </div>
                    <Badge variant="outline" className="bg-gray-100">Inaktiv</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SubcategoryLayout>
      </div>
    </div>
  );
};

export default WohnenContent;
