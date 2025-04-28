
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Wrench, 
  Home as HomeIcon, 
  TruckMoving, 
  Shield, 
  ShoppingBag,
  Tv
} from 'lucide-react';

interface WohnenContentProps {
  activeSubcategory: string | null;
}

const WohnenContent: React.FC<WohnenContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Dokumentenmanagement" 
        description="Organisieren Sie Ihre Dokumente effizient"
        isActive={activeSubcategory === '#dokumente'}
        id="#dokumente"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Mietvertrag</h3>
                  <p className="text-sm text-muted-foreground">Letzte Änderung: 14.03.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-sm">Ansehen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Versicherungsnachweis</h3>
                  <p className="text-sm text-muted-foreground">Letzte Änderung: 20.02.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-sm">Ansehen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Kaufvertrag</h3>
                  <p className="text-sm text-muted-foreground">Letzte Änderung: 05.01.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-sm">Ansehen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Wartung & Instandhaltung" 
        description="Planen Sie anstehende Wartungsarbeiten und Reparaturen"
        isActive={activeSubcategory === '#wartung'}
        id="#wartung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-dashboard-purple" />
                  <div>
                    <h3 className="font-medium">Heizungswartung</h3>
                    <p className="text-sm text-muted-foreground">Fällig am: 15.06.2025</p>
                  </div>
                </div>
                <Button size="sm">Termin vereinbaren</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-dashboard-purple" />
                  <div>
                    <h3 className="font-medium">Rauchmelder prüfen</h3>
                    <p className="text-sm text-muted-foreground">Fällig am: 30.07.2025</p>
                  </div>
                </div>
                <Button size="sm">Als erledigt markieren</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Immobilienverwaltung" 
        description="Verwalten Sie Ihre Immobilien und Liegenschaften"
        isActive={activeSubcategory === '#immobilien'}
        id="#immobilien"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <HomeIcon className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Hauptwohnsitz</h3>
                  <p className="text-sm">Musterstrasse 123, 8000 Zürich</p>
                  <p className="text-sm text-muted-foreground">Miete: CHF 2'100 / Monat</p>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm">Details</Button>
                    <Button variant="outline" size="sm">Kosten einsehen</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Umzug & Renovation" 
        description="Planen Sie Ihren Umzug oder Renovationsarbeiten"
        isActive={activeSubcategory === '#umzug'}
        id="#umzug"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TruckMoving className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Umzugsplan</h3>
                  <p className="text-sm">Ein strukturierter Zeitplan für Ihren nächsten Umzug</p>
                  <Button variant="outline" size="sm" className="mt-2">Plan erstellen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Checkliste für Umzug</h3>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Umzugshelfer organisieren</li>
                <li>Adressänderung melden</li>
                <li>Versicherungen anpassen</li>
                <li>Internet und Telefon umziehen</li>
                <li>Nachsendeauftrag einrichten</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Sicherheit" 
        description="Sorgen Sie für Sicherheit in Ihrem Zuhause"
        isActive={activeSubcategory === '#sicherheit'}
        id="#sicherheit"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Sicherheitscheck</h3>
                  <p className="text-sm">Führen Sie einen umfassenden Sicherheitscheck durch</p>
                  <Button variant="outline" size="sm" className="mt-2">Check starten</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Ihre Sicherheitsgeräte</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Rauchmelder Wohnzimmer</span>
                  <span className="text-green-600 font-medium">Aktiv</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Rauchmelder Küche</span>
                  <span className="text-green-600 font-medium">Aktiv</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Bewegungsmelder Eingang</span>
                  <span className="text-green-600 font-medium">Aktiv</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>CO2-Melder</span>
                  <span className="text-amber-600 font-medium">Batterie schwach</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Verbrauchsmaterialien & Inventar" 
        description="Behalten Sie den Überblick über Ihre Vorräte und Inventar"
        isActive={activeSubcategory === '#inventar'}
        id="#inventar"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Inventarverwaltung</h3>
                  <p className="text-sm">Verwalten Sie Ihre Haushaltsgeräte und Möbel</p>
                  <Button variant="outline" size="sm" className="mt-2">Inventar anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Einkaufsliste</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Glühbirnen (E27)</span>
                  <Button variant="ghost" size="sm">Hinzufügen</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Wasserfilter</span>
                  <Button variant="ghost" size="sm">Hinzufügen</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Heizkörperfolie</span>
                  <Button variant="ghost" size="sm">Hinzufügen</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Hausautomatisierung" 
        description="Steuern und automatisieren Sie Ihr Smart Home"
        isActive={activeSubcategory === '#smart-home'}
        id="#smart-home"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Tv className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Smart Home Geräte</h3>
                  <p className="text-sm">Verwalten Sie Ihre vernetzten Geräte</p>
                  <Button variant="outline" size="sm" className="mt-2">Geräte anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Automatisierungen</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Morgen-Routine</span>
                  <span className="text-green-600 font-medium">Aktiv</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Abend-Routine</span>
                  <span className="text-green-600 font-medium">Aktiv</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Urlaubs-Modus</span>
                  <span className="text-gray-600 font-medium">Inaktiv</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default WohnenContent;
