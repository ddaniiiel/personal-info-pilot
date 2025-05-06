
import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Heart, Shield, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface VorsorgeContentProps {
  activeSubcategory: string | null;
}

const VorsorgeContent: React.FC<VorsorgeContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Altersvorsorge" 
        description="Planung Ihrer finanziellen Zukunft"
        isActive={activeSubcategory === '#altersvorsorge'}
        id="#altersvorsorge"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Settings className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Rentenübersicht</h3>
                  <p className="text-sm">Aktueller Stand Ihrer Altersvorsorge</p>
                  <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Vorsorgekonzept</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Sparziel Altersvorsorge:</span>
                    <span className="font-medium">CHF 1.000.000</span>
                  </div>
                  <Progress value={42} className="h-2" />
                  <p className="text-xs text-right mt-1">42% erreicht</p>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>1. Säule (AHV):</span>
                    <span className="font-medium">CHF 28.680/Jahr</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>2. Säule (Pensionskasse):</span>
                    <span className="font-medium">CHF 32.400/Jahr</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>3. Säule (Privat):</span>
                    <span className="font-medium">CHF 8.500/Jahr</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Vorsorgestrategie anpassen</h3>
              <p className="text-sm mb-3">Optimieren Sie Ihre Altersvorsorge.</p>
              <div className="flex space-x-2">
                <Button>Beratung anfordern</Button>
                <Button variant="outline">Strategie ändern</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Gesundheitsvorsorge" 
        description="Prävention und medizinische Vorsorge"
        isActive={activeSubcategory === '#gesundheit'}
        id="#gesundheit"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Heart className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Vorsorgeuntersuchungen</h3>
                  <p className="text-sm">Übersicht Ihrer anstehenden Check-ups</p>
                  <Button variant="outline" size="sm" className="mt-2">Kalender öffnen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Nächste Termine</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Jährlicher Gesundheits-Check</h4>
                  <p className="text-xs text-muted-foreground">12.06.2025, Dr. Müller</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">In Kalender eintragen</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3 py-1">
                  <h4 className="text-sm font-medium">Zahnreinigung</h4>
                  <p className="text-xs text-muted-foreground">03.08.2025, Dr. Schmidt</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">In Kalender eintragen</Button>
                </div>
                <div className="border-l-2 border-orange-500 pl-3 py-1">
                  <h4 className="text-sm font-medium text-orange-600">Überfällig: Augenarzt</h4>
                  <p className="text-xs text-muted-foreground">Letzte Untersuchung: 10.04.2024</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs text-orange-600">Termin buchen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Absicherung" 
        description="Versicherungen und finanzielle Absicherung"
        isActive={activeSubcategory === '#absicherung'}
        id="#absicherung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Versicherungsanalyse</h3>
                  <p className="text-sm">Überprüfen Sie Ihren Versicherungsschutz</p>
                  <Button variant="outline" size="sm" className="mt-2">Analyse starten</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Aktuelle Absicherung</h3>
              <div className="space-y-3">
                <div className="p-2 border rounded-lg flex justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Lebensversicherung</h4>
                    <p className="text-xs text-muted-foreground">Deckungssumme: CHF 500.000</p>
                  </div>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
                <div className="p-2 border rounded-lg flex justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Berufsunfähigkeit</h4>
                    <p className="text-xs text-muted-foreground">Monatliche Rente: CHF 3.500</p>
                  </div>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
                <div className="p-2 border rounded-lg flex justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Privathaftpflicht</h4>
                    <p className="text-xs text-muted-foreground">Deckungssumme: CHF 5 Mio.</p>
                  </div>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-medium text-amber-600">Versicherungslücken erkannt</h3>
                  <p className="text-sm mb-3">Unsere Analyse hat potenzielle Lücken in Ihrem Versicherungsschutz festgestellt.</p>
                  <Button>Beratungstermin vereinbaren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Notfallplanung" 
        description="Vorbereitung für den Ernstfall"
        isActive={activeSubcategory === '#notfall'}
        id="#notfall"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Wichtige Dokumente</h3>
              <div className="space-y-3">
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Patientenverfügung</h4>
                    <p className="text-xs text-muted-foreground">Letzte Aktualisierung: 12.03.2025</p>
                  </div>
                  <Button variant="outline" size="sm">Ansehen</Button>
                </div>
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Vorsorgevollmacht</h4>
                    <p className="text-xs text-muted-foreground">Nicht vorhanden</p>
                  </div>
                  <Button variant="outline" size="sm">Erstellen</Button>
                </div>
                <div className="p-2 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">Testament</h4>
                    <p className="text-xs text-muted-foreground">Nicht vorhanden</p>
                  </div>
                  <Button variant="outline" size="sm">Erstellen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Notfallkontakte</h3>
              <p className="text-sm mb-3">Hinterlegen Sie wichtige Kontakte für den Notfall.</p>
              <Button>Kontakte verwalten</Button>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default VorsorgeContent;
