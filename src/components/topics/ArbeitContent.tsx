
import React, { memo } from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, FileText, Calendar, PenTool, TrendingUp, Users, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ArbeitContentProps {
  activeSubcategory: string | null;
}

// Sample data for visualizations
const careerGoals = [
  { id: 1, name: "Zertifizierung abschließen", progress: 65, deadline: "September 2025", priority: "high" },
  { id: 2, name: "Team-Lead Position", progress: 30, deadline: "Ende 2026", priority: "medium" },
  { id: 3, name: "Gehaltserhöhung", progress: 50, deadline: "01.08.2025", priority: "high" }
];

const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high': return 'text-red-600';
    case 'medium': return 'text-orange-500';
    case 'low': return 'text-green-500';
    default: return 'text-gray-500';
  }
};

const ArbeitContent: React.FC<ArbeitContentProps> = ({ activeSubcategory }) => {
  return (
    <div className="space-y-8">
      <SubcategoryLayout 
        title="Berufliche Entwicklung" 
        description="Karriereplanung und berufliche Weiterbildung"
        isActive={activeSubcategory === '#entwicklung'}
        id="#entwicklung"
        category="arbeit"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-100 p-3 rounded-full">
                    <Briefcase className="h-8 w-8 text-dashboard-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Karriereplanung</h3>
                    <p className="text-sm text-muted-foreground">Setzen und verfolgen Sie Ihre beruflichen Ziele</p>
                    <Button variant="outline" size="sm" className="mt-2">Karriereplan ansehen</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <TrendingUp className="h-8 w-8 text-dashboard-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Fähigkeiten</h3>
                    <p className="text-sm text-muted-foreground">Analysieren Sie Ihr Kompetenzprofil</p>
                    <Button variant="outline" size="sm" className="mt-2">Skills-Analyse</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-dashboard-purple" />
                Berufliche Ziele
              </h3>
              <div className="space-y-5">
                {careerGoals.map(goal => (
                  <div key={goal.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium">{goal.name}</h4>
                      <Badge variant={goal.priority === 'high' ? 'destructive' : 'outline'}>
                        {goal.deadline}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Progress value={goal.progress} className="h-2" />
                      <span className={`text-xs ${getPriorityColor(goal.priority)}`}>
                        {goal.progress}%
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-2 flex justify-end">
                  <Button size="sm">
                    <PenTool className="h-4 w-4 mr-2" />
                    Neues Ziel erstellen
                  </Button>
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
        category="arbeit"
      >
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-8 w-8 text-dashboard-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Bewerbungsunterlagen</h3>
                    <p className="text-sm text-muted-foreground">Verwalten und aktualisieren Sie Ihre Unterlagen</p>
                  </div>
                </div>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Neue Bewerbung
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Bewerbungsvorlagen" 
                  className="h-48 w-full object-cover rounded-md"
                  loading="lazy"
                />
                
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="text-sm font-medium">Lebenslauf.pdf</h4>
                      <p className="text-xs text-muted-foreground">Letzte Aktualisierung: 02.02.2025</p>
                    </div>
                    <Button variant="outline" size="sm">Bearbeiten</Button>
                  </div>
                  <div className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="text-sm font-medium">Anschreiben_Standard.docx</h4>
                      <p className="text-xs text-muted-foreground">Letzte Aktualisierung: 15.01.2025</p>
                    </div>
                    <Button variant="outline" size="sm">Bearbeiten</Button>
                  </div>
                  <div className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="text-sm font-medium">Zeugnisse.zip</h4>
                      <p className="text-xs text-muted-foreground">3 Dateien</p>
                    </div>
                    <Button variant="outline" size="sm">Verwalten</Button>
                  </div>
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
        category="arbeit"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Calendar className="h-6 w-6 text-dashboard-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Zeitmanagement</h3>
                  <p className="text-sm text-muted-foreground">Optimieren Sie Ihren Arbeitsalltag</p>
                </div>
              </div>
              <img 
                src="/placeholder.svg" 
                alt="Zeitmanagement-Tools" 
                className="h-32 w-full object-cover rounded-md mb-4"
                loading="lazy"
              />
              <p className="text-sm mb-4">
                Effektives Zeitmanagement steigert Ihre Produktivität und reduziert Stress. 
                Entdecken Sie Tools und Techniken für bessere Arbeitsabläufe.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Tools entdecken
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Users className="h-6 w-6 text-dashboard-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Team-Produktivität</h3>
                  <p className="text-sm text-muted-foreground">Verbessern Sie die Teamarbeit</p>
                </div>
              </div>
              <img 
                src="/placeholder.svg" 
                alt="Team-Produktivität" 
                className="h-32 w-full object-cover rounded-md mb-4"
                loading="lazy"
              />
              <p className="text-sm mb-4">
                Eine starke Teamdynamik ist entscheidend für den Erfolg. Lernen Sie Strategien 
                kennen, um Meetings effektiver zu gestalten und die Kommunikation zu verbessern.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Team-Strategien erkunden
              </Button>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default memo(ArbeitContent);
