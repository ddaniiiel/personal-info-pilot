
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Filter, Upload } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";

const TopicActionBar: React.FC = () => {
  const handleUploadDocument = () => {
    toast({
      title: "Dokument-Upload",
      description: "Die Upload-Funktion wird vorbereitet...",
    });
  };

  return (
    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
      <div className="flex flex-wrap items-center space-x-2">
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
      
      <Button onClick={handleUploadDocument} className="bg-dashboard-purple hover:bg-dashboard-purple/90">
        <Upload className="h-4 w-4 mr-2" />
        Dokument hochladen
      </Button>
    </div>
  );
};

export default TopicActionBar;
