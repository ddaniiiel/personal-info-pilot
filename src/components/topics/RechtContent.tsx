import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Briefcase } from 'lucide-react';

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
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Mietvertrag</h3>
                  <p className="text-sm text-muted-foreground">Gültig bis: 31.12.2025</p>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm">Anzeigen</Button>
                    <Button variant="outline" size="sm">Bearbeiten</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Arbeitsvertrag</h3>
                  <p className="text-sm text-muted-foreground">Beginn: 01.01.2023</p>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm">Anzeigen</Button>
                    <Button variant="outline" size="sm">Bearbeiten</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Wichtige Vertragsdetails</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Mietzins:</span>
                  <span className="font-medium">CHF 2'100</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Kündigungsfrist:</span>
                  <span className="font-medium">3 Monate</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Nächste Mietzinsanpassung:</span>
                  <span className="font-medium">01.01.2026</span>
                </div>
              </div>
            </CardContent>
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
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Mietvertrag Vorlage</h3>
                  <p className="text-sm">Erstellen Sie einen rechtssicheren Mietvertrag</p>
                  <Button variant="outline" size="sm" className="mt-2">Vorlage herunterladen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Weitere Vorlagen</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Arbeitsvertrag Vorlage</span>
                  <Button variant="ghost" size="sm">Herunterladen</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Kaufvertrag Vorlage</span>
                  <Button variant="ghost" size="sm">Herunterladen</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Vollmacht Vorlage</span>
                  <Button variant="ghost" size="sm">Herunterladen</Button>
                </li>
              </ul>
            </CardContent>
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
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Online Rechtsberatung</h3>
                  <p className="text-sm">Erhalten Sie schnell und unkompliziert Rat</p>
                  <Button variant="outline" size="sm" className="mt-2">Beratung starten</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Empfohlene Anwälte</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-medium">Anwalt für Mietrecht</h4>
                    <p className="text-xs text-muted-foreground">Zürich, Spezialgebiet Mietrecht</p>
                  </div>
                  <Button variant="outline" size="sm">Kontakt</Button>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-medium">Anwalt für Arbeitsrecht</h4>
                    <p className="text-xs text-muted-foreground">Bern, Spezialgebiet Arbeitsrecht</p>
                  </div>
                  <Button variant="outline" size="sm">Kontakt</Button>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-medium">Anwalt für Familienrecht</h4>
                    <p className="text-xs text-muted-foreground">Luzern, Spezialgebiet Familienrecht</p>
                  </div>
                  <Button variant="outline" size="sm">Kontakt</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Rechtsschutzversicherung</h3>
              <p className="text-sm mb-3">Schützen Sie sich vor hohen Anwaltskosten mit einer Rechtsschutzversicherung.</p>
              <Button>Angebote vergleichen</Button>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default RechtContent;
