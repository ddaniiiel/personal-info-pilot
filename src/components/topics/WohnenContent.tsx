
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Home, Wrench, Shield, Package, Cog } from 'lucide-react';
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
    </div>
  );
};

export default WohnenContent;
