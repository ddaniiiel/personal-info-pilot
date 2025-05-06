
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, FileText, Calendar, PenTool } from 'lucide-react';

interface ArbeitContentProps {
  activeSubcategory: string | null;
}

const ArbeitContent: React.FC<ArbeitContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Berufliche Entwicklung" 
        description="Karriereplanung und berufliche Weiterbildung"
        isActive={activeSubcategory === '#entwicklung'}
        id="#entwicklung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Karriereplanung</h3>
                  <p className="text-sm">Setzen und verfolgen Sie Ihre beruflichen Ziele</p>
                  <Button variant="outline" size="sm" className="mt-2">Karriereplan ansehen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Berufliche Ziele</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Zertifizierung abschließen</h4>
                  <p className="text-xs text-muted-foreground">Frist: September 2025</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Team-Lead Position</h4>
                  <p className="text-xs text-muted-foreground">Ziel bis Ende 2026</p>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Gehaltserhöhung</h4>
                  <p className="text-xs text-muted-foreground">Nächstes Gespräch: 01.08.2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Bewerbungsmanagement" 
        description="Lebenslauf und Bewerbungsunterlagen verwalten"
        isActive={activeSubcategory === '#bewerbung'}
        id="#bewerbung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <FileText className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Bewerbungsunterlagen</h3>
                  <p className="text-sm">Verwalten und aktualisieren Sie Ihre Unterlagen</p>
                  <Button variant="outline" size="sm" className="mt-2">Dokumente ansehen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Meine Dokumente</h3>
              <div className="space-y-3">
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Lebenslauf.pdf</h4>
                    <p className="text-xs text-muted-foreground">Letzte Aktualisierung: 02.02.2025</p>
                  </div>
                  <Button variant="outline" size="sm">Bearbeiten</Button>
                </div>
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Anschreiben_Standard.docx</h4>
                    <p className="text-xs text-muted-foreground">Letzte Aktualisierung: 15.01.2025</p>
                  </div>
                  <Button variant="outline" size="sm">Bearbeiten</Button>
                </div>
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Zeugnisse.zip</h4>
                    <p className="text-xs text-muted-foreground">3 Dateien</p>
                  </div>
                  <Button variant="outline" size="sm">Verwalten</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Arbeitsorganisation" 
        description="Verbesserung der Produktivität und Arbeitsabläufe"
        isActive={activeSubcategory === '#organisation'}
        id="#organisation"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Zeitmanagement</h3>
                  <p className="text-sm">Optimieren Sie Ihren Arbeitsalltag</p>
                  <Button variant="outline" size="sm" className="mt-2">Tools entdecken</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <PenTool className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Kreativitätstechniken</h3>
                  <p className="text-sm">Methoden für mehr Kreativität und Innovation</p>
                  <Button variant="outline" size="sm" className="mt-2">Mehr erfahren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default ArbeitContent;
