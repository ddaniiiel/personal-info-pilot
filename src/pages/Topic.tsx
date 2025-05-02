import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Filter, Calendar, Upload, ArrowLeft } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import SubcategoryNavigation from '@/components/dashboard/SubcategoryNavigation';

// Lazy-loaded components for better performance
const WohnenContent = lazy(() => import('@/components/topics/WohnenContent'));
const SteuernContent = lazy(() => import('@/components/topics/SteuernContent'));
const VersicherungenContent = lazy(() => import('@/components/topics/VersicherungenContent'));
const EnergieContent = lazy(() => import('@/components/topics/EnergieContent'));
const RechtContent = lazy(() => import('@/components/topics/RechtContent'));
const FoerderungenContent = lazy(() => import('@/components/topics/FoerderungenContent'));
const KinderContent = lazy(() => import('@/components/topics/KinderContent'));
const MobilitaetContent = lazy(() => import('@/components/topics/MobilitaetContent'));
const HaustiereContent = lazy(() => import('@/components/topics/HaustiereContent'));

// Loading fallback component
const ContentLoader = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="h-24 bg-gray-200 rounded md:col-span-2"></div>
    </div>
  </div>
);

// Define the subcategory items for each main category
const subcategories = {
  wohnen: [
    { title: "Dokumentenmanagement", href: "#dokumente" },
    { title: "Wartung & Instandhaltung", href: "#wartung" },
    { title: "Immobilienverwaltung", href: "#immobilien" },
    { title: "Umzug & Renovation", href: "#umzug" },
    { title: "Sicherheit", href: "#sicherheit" },
    { title: "Verbrauchsmaterialien & Inventar", href: "#inventar" },
    { title: "Hausautomatisierung", href: "#smart-home" }
  ],
  energie: [
    { title: "Verbrauchsanalyse", href: "#verbrauch" },
    { title: "Einsparungspotenziale", href: "#einsparung" },
    { title: "Smart Home (Energie)", href: "#smart-home" },
    { title: "Erneuerbare Energien", href: "#erneuerbare" },
    { title: "CO2-Fußabdruck", href: "#co2" },
    { title: "Mülltrennung", href: "#muell" }
  ],
  finanzen: [
    { title: "Konten", href: "#konten" },
    { title: "Budgetplanung", href: "#budget" },
    { title: "Kreditmanagement", href: "#kredit" },
    { title: "Versicherungen", href: "#versicherungen" },
    { title: "Investments", href: "#investments" }
  ],
  steuern: [
    { title: "Steuererklärungen", href: "#erklaerungen" },
    { title: "Steueroptimierung", href: "#optimierung" },
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
    { title: "Reiseplanung", href: "#reiseplanung" }
  ],
  haustiere: [
    { title: "Haustierprofile", href: "#profile" },
    { title: "Gesundheit", href: "#gesundheit" },
    { title: "Gewichtsverlauf", href: "#gewicht" },
    { title: "Fütterung", href: "#fuetterung" },
    { title: "Pflege", href: "#pflege" },
    { title: "Kosten", href: "#kosten" },
    { title: "Haustier-Sitter", href: "#sitter" }
  ],
  versicherungen: [
    { title: "Krankenversicherung", href: "#kranken" },
    { title: "Rentenversicherung", href: "#renten" },
    { title: "Hausratversicherung", href: "#hausrat" },
    { title: "Haftpflicht", href: "#haftpflicht" },
    { title: "Rechtsschutz", href: "#rechtsschutz" }
  ],
  recht: [
    { title: "Verträge", href: "#vertraege" },
    { title: "Dokumentenvorlagen", href: "#vorlagen" },
    { title: "Rechtliche Beratung", href: "#beratung" }
  ],
  foerderungen: [
    { title: "Verfügbare Programme", href: "#programme" },
    { title: "Antragsstellung", href: "#antrag" },
    { title: "Förderhistorie", href: "#historie" }
  ]
};

const Topic: React.FC = () => {
  const { topicId = 'wohnen' } = useParams<{ topicId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Set active subcategory based on URL hash or default to the first subcategory
  useEffect(() => {
    if (location.hash) {
      setActiveSubcategory(location.hash);
    } else {
      const currentSubcategories = (subcategories as any)[topicId] || [];
      if (currentSubcategories.length > 0) {
        setActiveSubcategory(currentSubcategories[0].href);
        navigate(`${location.pathname}${currentSubcategories[0].href}`, { replace: true });
      }
    }
  }, [topicId, location.pathname, location.hash, navigate]);
  
  const handleSubcategoryChange = (href: string) => {
    setIsLoading(true); // Show loading state
    setActiveSubcategory(href);
    navigate(`${location.pathname}${href}`);
    
    // Simulate content loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleUploadDocument = () => {
    toast({
      title: "Dokument-Upload",
      description: "Die Upload-Funktion wird vorbereitet...",
    });
  };
  
  const renderTopicContent = () => {
    return (
      <Suspense fallback={<ContentLoader />}>
        {(() => {
          switch (topicId) {
            case 'wohnen':
              return <WohnenContent activeSubcategory={activeSubcategory} />;
            case 'steuern':
              return <SteuernContent activeSubcategory={activeSubcategory} />;
            case 'versicherungen': 
            case 'finanzen': return <VersicherungenContent activeSubcategory={activeSubcategory} />;
            case 'energie':
              return <EnergieContent activeSubcategory={activeSubcategory} />;
            case 'recht':
              return <RechtContent activeSubcategory={activeSubcategory} />;
            case 'foerderungen':
              return <FoerderungenContent activeSubcategory={activeSubcategory} />;
            case 'kinder':
              return <KinderContent activeSubcategory={activeSubcategory} />;
            case 'mobilitaet':
              return <MobilitaetContent activeSubcategory={activeSubcategory} />;
            case 'haustiere':
              return <HaustiereContent activeSubcategory={activeSubcategory} />;
            default:
              return <WohnenContent activeSubcategory={activeSubcategory} />;
          }
        })()}
      </Suspense>
    );
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
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/')}
            className="mb-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zum Dashboard
          </Button>
        </div>
        
        <div className="mt-6 animate-fade-in">
          <h1 className="text-2xl font-bold mb-6">{getTopicTitle()}</h1>
          
          {/* Standardized Subcategory Navigation */}
          <SubcategoryNavigation 
            subcategories={currentSubcategories}
            activeSubcategory={activeSubcategory}
            onSubcategoryChange={handleSubcategoryChange}
          />
          
          <div className="mb-6">
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
                  <SheetContent side="right" className="w-full sm:w-[400px]">
                    <div className="py-4">
                      <h3 className="text-lg font-medium">Filter anwenden</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Wählen Sie die gewünschten Filter aus, um die Inhalte anzupassen.
                      </p>
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
              
              <Button onClick={handleUploadDocument}>
                <Upload className="h-4 w-4 mr-2" />
                Dokument hochladen
              </Button>
            </div>
            
            {isLoading ? <ContentLoader /> : renderTopicContent()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Topic;
