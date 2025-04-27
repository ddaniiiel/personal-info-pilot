
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Filter, Calendar, Upload } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

// Topic-specific content components
import WohnenContent from '@/components/topics/WohnenContent';
import SteuernContent from '@/components/topics/SteuernContent';
import VersicherungenContent from '@/components/topics/VersicherungenContent';
import EnergieContent from '@/components/topics/EnergieContent';
import RechtContent from '@/components/topics/RechtContent';
import FoerderungenContent from '@/components/topics/FoerderungenContent';

// Placeholder component for new categories
const PlaceholderContent = ({ title }: { title: string }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">{title} Content</h2>
    <p className="text-muted-foreground">Diese Seite wird noch entwickelt.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-6 border rounded-md bg-white shadow-sm">
          <div className="h-8 w-8 rounded-full bg-gray-200 mb-4"></div>
          <div className="h-4 w-3/4 bg-gray-200 mb-2"></div>
          <div className="h-3 w-1/2 bg-gray-200"></div>
        </div>
      ))}
    </div>
  </div>
);

// Define the subcategory items for each main category
const subcategories = {
  wohnen: [
    { title: "Dokumentenmanagement", href: "#dokumentenmanagement" },
    { title: "Immobilienverwaltung", href: "#immobilienverwaltung" },
    { title: "Umzug & Renovation", href: "#umzug-renovation" },
    { title: "Sicherheit", href: "#sicherheit" },
    { title: "Verbrauchsmaterialien & Inventar", href: "#inventar" },
    { title: "Hausautomatisierung", href: "#smart-home" }
  ],
  energie: [
    { title: "Verbrauchsanalyse", href: "#verbrauchsanalyse" },
    { title: "Einsparungspotenziale", href: "#einsparungspotenziale" },
    { title: "Smart Home (Energie)", href: "#smart-home-energie" },
    { title: "Erneuerbare Energien", href: "#erneuerbare-energien" },
    { title: "CO2-Fußabdruck", href: "#co2-fussabdruck" },
    { title: "Mülltrennung", href: "#muelltrennung" }
  ],
  finanzen: [
    { title: "Konten", href: "#konten" },
    { title: "Budgetplanung", href: "#budgetplanung" },
    { title: "Kreditmanagement", href: "#kreditmanagement" },
    { title: "Versicherungen", href: "#versicherungen" },
    { title: "Investments", href: "#investments" }
  ],
  steuern: [
    { title: "Steuererklärungen", href: "#steuererklaerungen" },
    { title: "Steueroptimierung", href: "#steueroptimierung" },
    { title: "Rechtliches", href: "#rechtliches" }
  ],
  kinder: [
    { title: "Schule/Kita", href: "#schule" },
    { title: "Kurse & Hobbys", href: "#hobbys" },
    { title: "Entwicklung", href: "#entwicklung" }
  ],
  mobilitaet: [
    { title: "Fahrzeuge", href: "#fahrzeuge" },
    { title: "Öffentlicher Nahverkehr", href: "#oeffentlicher-verkehr" },
    { title: "Carsharing", href: "#carsharing" }
  ],
  haustiere: [
    { title: "Profil", href: "#profil" },
    { title: "Gesundheit", href: "#gesundheit" },
    { title: "Fütterung", href: "#fuetterung" },
    { title: "Pflege", href: "#pflege" },
    { title: "Kosten", href: "#kosten" },
    { title: "Haustier-Sitter", href: "#sitter" }
  ]
};

const Topic: React.FC = () => {
  const { topicId = 'wohnen' } = useParams<{ topicId: string }>();
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  
  const renderTopicContent = () => {
    switch (topicId) {
      case 'wohnen':
        return <WohnenContent />;
      case 'steuern':
        return <SteuernContent />;
      case 'versicherungen':
      case 'finanzen':
        return <VersicherungenContent />;
      case 'energie':
        return <EnergieContent />;
      case 'recht':
        return <RechtContent />;
      case 'foerderungen':
        return <FoerderungenContent />;
      case 'kinder':
        return <PlaceholderContent title="Kinder & Bildung" />;
      case 'mobilitaet':
        return <PlaceholderContent title="Mobilität" />;
      case 'haustiere':
        return <PlaceholderContent title="Haustiere" />;
      default:
        return <WohnenContent />;
    }
  };

  const getTopicTitle = () => {
    switch (topicId) {
      case 'wohnen': return 'Wohnen & Eigentum';
      case 'steuern': return 'Steuern & Recht';
      case 'versicherungen': 
      case 'finanzen': return 'Finanzen & Versicherungen';
      case 'energie': return 'Energie & Nachhaltigkeit';
      case 'recht': return 'Recht & Compliance';
      case 'foerderungen': return 'Förderprogramme';
      case 'kinder': return 'Kinder & Bildung';
      case 'mobilitaet': return 'Mobilität';
      case 'haustiere': return 'Haustiere';
      default: return 'Wohnen & Eigentum';
    }
  };

  // Get subcategories for current topic
  const currentSubcategories = (subcategories as any)[topicId] || [];
  
  return (
    <DashboardLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6">{getTopicTitle()}</h1>
        
        {/* Subcategory Navigation */}
        {currentSubcategories.length > 0 && (
          <NavigationMenu className="mb-6">
            <NavigationMenuList>
              {currentSubcategories.map((subcategory: any, index: number) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      activeSubcategory === subcategory.href 
                        ? "bg-accent text-accent-foreground" 
                        : ""
                    )}
                    href={subcategory.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSubcategory(subcategory.href);
                    }}
                  >
                    {subcategory.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Heute
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="py-4">
                    <h3 className="text-lg font-medium">Filter anwenden</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Wählen Sie die gewünschten Filter aus, um die Inhalte anzupassen.
                    </p>
                    {/* Filter options would go here */}
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Kanton</label>
                        <select className="w-full border rounded p-2">
                          <option>Alle Kantone</option>
                          <option>Zürich</option>
                          <option>Bern</option>
                          <option>Luzern</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Zeitraum</label>
                        <select className="w-full border rounded p-2">
                          <option>Letzte Woche</option>
                          <option>Letzter Monat</option>
                          <option>Letztes Jahr</option>
                        </select>
                      </div>
                      
                      <Button className="w-full mt-4">Filter anwenden</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Dokument hochladen
            </Button>
          </div>
          
          {renderTopicContent()}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Topic;
