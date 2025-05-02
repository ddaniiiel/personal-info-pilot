import React from 'react';
import SubcategoryLayout from './SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Bolt, Leaf, GaugeCircle, Trash2 } from 'lucide-react';

interface EnergieContentProps {
  activeSubcategory: string | null;
}

const EnergieContent: React.FC<EnergieContentProps> = ({ activeSubcategory }) => {
  return (
    <div>
      <SubcategoryLayout 
        title="Verbrauchsanalyse" 
        description="Analysieren Sie Ihren Energieverbrauch"
        isActive={activeSubcategory === '#verbrauch'}
        id="#verbrauch"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <GaugeCircle className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Stromverbrauch</h3>
                  <p className="text-sm">Aktueller Verbrauch im Vergleich zum Vormonat</p>
                  <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Verbrauchsübersicht</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>Strom:</span>
                  <span className="font-medium">350 kWh</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Wasser:</span>
                  <span className="font-medium">45 m³</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Heizung:</span>
                  <span className="font-medium">120 l Öl</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Verbrauchsprognose</h3>
              <p className="text-sm mb-3">Basierend auf Ihrem bisherigen Verbrauch</p>
              <div className="flex space-x-2">
                <Button>Prognose anzeigen</Button>
                <Button variant="outline">Verbrauch optimieren</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Einsparungspotenziale" 
        description="Entdecken Sie Möglichkeiten, Energie zu sparen"
        isActive={activeSubcategory === '#einsparung'}
        id="#einsparung"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Energiespartipps</h3>
                  <p className="text-sm">Einfache Massnahmen zur Reduktion des Verbrauchs</p>
                  <Button variant="outline" size="sm" className="mt-2">Tipps anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Individuelle Empfehlungen</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">LED-Lampen verwenden</h4>
                  <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 50/Jahr</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Standby-Geräte ausschalten</h4>
                  <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 30/Jahr</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
                <div className="border-l-2 border-dashboard-purple pl-3">
                  <h4 className="text-sm font-medium">Stosslüften statt Dauerlüften</h4>
                  <p className="text-xs text-muted-foreground">Potenzielle Einsparung: CHF 80/Jahr</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Mehr erfahren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Förderprogramme nutzen</h3>
              <p className="text-sm mb-3">Profitieren Sie von Fördergeldern für energieeffiziente Massnahmen.</p>
              <div className="flex space-x-2">
                <Button>Programme anzeigen</Button>
                <Button variant="outline">Beratung anfordern</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
      
      <SubcategoryLayout 
        title="Smart Home (Energie)" 
        description="Integrieren Sie Energieeffizienz in Ihr Smart Home"
        isActive={activeSubcategory === '#smart-home'}
        id="#smart-home"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Bolt className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Smarte Geräte</h3>
                  <p className="text-sm">Steuern Sie Ihren Energieverbrauch mit intelligenten Geräten</p>
                  <Button variant="outline" size="sm" className="mt-2">Geräte verwalten</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Automatisierungen</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Automatische Heizungssteuerung</h4>
                  <p className="text-xs text-muted-foreground">Reduziert den Verbrauch bei Abwesenheit</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Intelligente Beleuchtung</h4>
                  <p className="text-xs text-muted-foreground">Passt die Helligkeit automatisch an</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Energiemanagement-System</h4>
                  <p className="text-xs text-muted-foreground">Überwacht und optimiert den Gesamtverbrauch</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Integration mit erneuerbaren Energien</h3>
              <p className="text-sm mb-3">Verbinden Sie Ihr Smart Home mit Ihrer Solaranlage.</p>
              <div className="flex space-x-2">
                <Button>Verbinden</Button>
                <Button variant="outline">FAQ durchsuchen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout 
        title="Erneuerbare Energien" 
        description="Nutzen Sie erneuerbare Energiequellen"
        isActive={activeSubcategory === '#erneuerbare'}
        id="#erneuerbare"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Leaf className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Solaranlage</h3>
                  <p className="text-sm">Informationen zu Ihrer Solaranlage</p>
                  <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Erzeugung</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>Heutige Erzeugung:</span>
                  <span className="font-medium">15 kWh</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Monatliche Erzeugung:</span>
                  <span className="font-medium">450 kWh</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Jährliche Erzeugung:</span>
                  <span className="font-medium">5400 kWh</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Einspeisevergütung</h3>
              <p className="text-sm mb-3">Ihre Vergütung für eingespeisten Strom</p>
              <div className="flex space-x-2">
                <Button>Vergütung anzeigen</Button>
                <Button variant="outline">FAQ durchsuchen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout 
        title="CO2-Fußabdruck" 
        description="Reduzieren Sie Ihren CO2-Fußabdruck"
        isActive={activeSubcategory === '#co2'}
        id="#co2"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Leaf className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">CO2-Rechner</h3>
                  <p className="text-sm">Berechnen Sie Ihren persönlichen CO2-Fußabdruck</p>
                  <Button variant="outline" size="sm" className="mt-2">Berechnen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Reduktionsmassnahmen</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Weniger Fleisch konsumieren</h4>
                  <p className="text-xs text-muted-foreground">Reduziert den CO2-Ausstoss der Landwirtschaft</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Öffentliche Verkehrsmittel nutzen</h4>
                  <p className="text-xs text-muted-foreground">Reduziert den CO2-Ausstoss des Verkehrs</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h4 className="text-sm font-medium">Energieeffiziente Geräte verwenden</h4>
                  <p className="text-xs text-muted-foreground">Reduziert den CO2-Ausstoss der Stromerzeugung</p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-xs">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">CO2-Kompensation</h3>
              <p className="text-sm mb-3">Kompensieren Sie Ihren CO2-Ausstoss durch Spenden.</p>
              <div className="flex space-x-2">
                <Button>Projekte anzeigen</Button>
                <Button variant="outline">FAQ durchsuchen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout 
        title="Mülltrennung" 
        description="Optimieren Sie Ihre Mülltrennung"
        isActive={activeSubcategory === '#muell'}
        id="#muell"
      >
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Trash2 className="h-10 w-10 text-dashboard-purple" />
                <div>
                  <h3 className="font-medium">Mülltrennung</h3>
                  <p className="text-sm">Informationen zur korrekten Mülltrennung</p>
                  <Button variant="outline" size="sm" className="mt-2">Details anzeigen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Abfallkalender</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>Nächste Abholung:</span>
                  <span className="font-medium">15.05.2025</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Art:</span>
                  <span className="font-medium">Papier</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Recyclinghöfe</h3>
              <p className="text-sm mb-3">Finden Sie Recyclinghöfe in Ihrer Nähe.</p>
              <div className="flex space-x-2">
                <Button>Standorte anzeigen</Button>
                <Button variant="outline">FAQ durchsuchen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default EnergieContent;
