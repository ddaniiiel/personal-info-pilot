
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, TrendingUp, Scale } from 'lucide-react';

interface SteuernContentProps {
  activeSubcategory: string | null;
}

const SteuernContent: React.FC<SteuernContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Steuererklärungen" 
        description="Verwalten Sie Ihre Steuererklärungen und Fälligkeiten"
        isActive={activeSubcategory === '#erklaerungen'}
        id="#erklaerungen"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="text-base font-medium">Steuererklärung 2024</h3>
                  <p className="text-sm text-muted-foreground">Fällig am: 31.03.2025</p>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm">Bearbeiten</Button>
                    <Button variant="outline" size="sm">PDF herunterladen</Button>
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
                  <h3 className="text-base font-medium">Steuererklärung 2023</h3>
                  <p className="text-sm text-muted-foreground">Status: Eingereicht am 28.02.2024</p>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm">Details anzeigen</Button>
                    <Button variant="outline" size="sm">PDF herunterladen</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Steuerrückforderungen</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Steuerrückerstattung 2023:</span>
                  <span className="font-medium text-green-600">CHF 1,250.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Status:</span>
                  <span className="font-medium">In Bearbeitung</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Voraussichtliche Auszahlung:</span>
                  <span className="font-medium">Juni 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Steueroptimierung" 
        description="Entdecken Sie Möglichkeiten, Ihre Steuerlast zu optimieren"
        isActive={activeSubcategory === '#optimierung'}
        id="#optimierung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Optimierungspotenzial</h3>
                  <p className="text-sm">Basierend auf Ihrer letzten Steuererklärung</p>
                  <Button variant="outline" size="sm" className="mt-2">Analyse starten</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Empfehlungen für Steueroptimierung</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Säule 3a Einzahlungen maximieren</h4>
                  <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 1,200</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Abzüge für Weiterbildung</h4>
                  <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 850</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Liegenschaftsunterhalt optimieren</h4>
                  <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 2,300</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Steuerberater konsultieren</h3>
              <p className="text-sm mb-3">Sprechen Sie mit einem Steuerexperten, um Ihre persönliche Situation zu optimieren.</p>
              <Button>Termin vereinbaren</Button>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Rechtliches" 
        description="Rechtliche Aspekte der Steuerplanung und -erklärung"
        isActive={activeSubcategory === '#rechtliches'}
        id="#rechtliches"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Scale className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Steuerrechtliche Dokumente</h3>
                  <p className="text-sm">Wichtige rechtliche Informationen zu Steuern</p>
                  <Button variant="outline" size="sm" className="mt-2">Dokumente anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Aktuelle Änderungen im Steuerrecht</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Neue Abzüge für Homeoffice</h4>
                  <p className="text-xs text-muted-foreground">Gültig ab: 01.01.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Änderungen bei Quellensteuer</h4>
                  <p className="text-xs text-muted-foreground">Gültig ab: 01.01.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Neue Freibeträge für Kinder</h4>
                  <p className="text-xs text-muted-foreground">Gültig ab: 01.01.2025</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Steuerrechtliche Beratung</h3>
              <p className="text-sm mb-3">Haben Sie Fragen zum Steuerrecht oder benötigen Sie Unterstützung bei Einsprachen?</p>
              <div className="flex space-x-2">
                <Button>Beratung anfordern</Button>
                <Button variant="outline">FAQ durchsuchen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default SteuernContent;
