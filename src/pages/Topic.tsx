
import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TopicTabs from '@/components/dashboard/TopicTabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Filter, Mail, MapPin, Bell, Calendar, Upload } from 'lucide-react';
import DocumentUploader from '@/components/dashboard/DocumentUploader';

// Topic-specific content components
import WohnenContent from '@/components/topics/WohnenContent';
import SteuernContent from '@/components/topics/SteuernContent';
import VersicherungenContent from '@/components/topics/VersicherungenContent';
import EnergieContent from '@/components/topics/EnergieContent';
import RechtContent from '@/components/topics/RechtContent';
import FoerderungenContent from '@/components/topics/FoerderungenContent';

const Topic: React.FC = () => {
  const { topicId = 'wohnen' } = useParams<{ topicId: string }>();
  
  const renderTopicContent = () => {
    switch (topicId) {
      case 'wohnen':
        return <WohnenContent />;
      case 'steuern':
        return <SteuernContent />;
      case 'versicherungen':
        return <VersicherungenContent />;
      case 'energie':
        return <EnergieContent />;
      case 'recht':
        return <RechtContent />;
      case 'foerderungen':
        return <FoerderungenContent />;
      default:
        return <WohnenContent />;
    }
  };

  const getTopicTitle = () => {
    switch (topicId) {
      case 'wohnen': return 'Wohnen & Eigentum';
      case 'steuern': return 'Steuern';
      case 'versicherungen': return 'Versicherungen';
      case 'energie': return 'Energie';
      case 'recht': return 'Recht & Compliance';
      case 'foerderungen': return 'Förderprogramme';
      default: return 'Wohnen & Eigentum';
    }
  };
  
  return (
    <DashboardLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6">{getTopicTitle()}</h1>
        
        <TopicTabs />
        
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
