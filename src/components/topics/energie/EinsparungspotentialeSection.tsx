
import React, { memo } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Bolt, ArrowRight, Flame, ChevronRight } from 'lucide-react';

interface EinsparungspotentialeSectionProps {
  isActive: boolean;
}

const EinsparungspotentialeSection: React.FC<EinsparungspotentialeSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Einsparungspotenziale" 
      description="Entdecken Sie konkrete Möglichkeiten, Energie einzusparen und Ihre Kosten zu reduzieren."
      isActive={isActive}
      id="#einsparung"
    >
      <div className="space-y-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-green-100">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gradient-to-br from-green-50 to-green-100 p-6 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1623227773277-a49d08e87bcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Energiesparlampe" 
                className="max-h-48 object-contain"
                loading="lazy"
              />
            </div>
            <div className="sm:w-2/3 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold">Energiespartipps</h3>
                  <p className="text-sm text-muted-foreground">Praktische Massnahmen zur sofortigen Reduktion Ihres Verbrauchs</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-sm">
                  Mit diesen einfachen Maßnahmen können Sie sofort beginnen, Energie zu sparen und Ihre Umweltbilanz zu verbessern.
                  Unsere Analysen zeigen, dass Sie damit bis zu <span className="font-semibold">20% Ihrer Energiekosten</span> reduzieren können.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-1" />
                    <span>Elektrogeräte vollständig ausschalten</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-1" />
                    <span>LED-Beleuchtung nutzen</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-1" />
                    <span>Richtig lüften (Stosslüften)</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-1" />
                    <span>Heizkörper nicht verdecken</span>
                  </div>
                </div>
              </div>
              <Button>
                Alle Tipps anzeigen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 pb-0 pt-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">LED-Lampen</CardTitle>
                <Bolt className="h-6 w-6 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <img 
                src="https://images.unsplash.com/photo-1565354136635-2d9b35e3a6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="LED-Lampen" 
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Jährliche Einsparung:</span>
                  <span className="font-medium">CHF 50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Amortisation:</span>
                  <span className="font-medium">1-2 Jahre</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>CO₂-Reduktion:</span>
                  <span className="font-medium">125 kg/Jahr</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">LED-Optionen entdecken</Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-orange-50 to-orange-100 pb-0 pt-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">Standby-Killer</CardTitle>
                <Bolt className="h-6 w-6 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <img 
                src="https://images.unsplash.com/photo-1575490035056-4e1381ac8623?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Standby-Steckdose" 
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Jährliche Einsparung:</span>
                  <span className="font-medium">CHF 30</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Amortisation:</span>
                  <span className="font-medium">~6 Monate</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>CO₂-Reduktion:</span>
                  <span className="font-medium">75 kg/Jahr</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Standby-Optionen anzeigen</Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-red-50 to-red-100 pb-0 pt-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">Heizungsoptimierung</CardTitle>
                <Flame className="h-6 w-6 text-red-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <img 
                src="https://images.unsplash.com/photo-1517468605558-7a068cbff19b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Thermostat" 
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Jährliche Einsparung:</span>
                  <span className="font-medium">CHF 80</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Amortisation:</span>
                  <span className="font-medium">~1 Jahr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>CO₂-Reduktion:</span>
                  <span className="font-medium">195 kg/Jahr</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Heizungsoptimierung starten</Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-4">Förderprogramme nutzen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Profitieren Sie von staatlichen Fördergeldern für energieeffiziente Massnahmen. 
              Aktuell stehen folgende Programme zur Verfügung:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Bolt className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Energetische Sanierung</h4>
                  <p className="text-sm text-muted-foreground">Fördermittel für Dachsanierung, Fassadendämmung und Fensteraustausch</p>
                  <p className="text-sm mt-1"><span className="font-medium">Fördervolumen:</span> Bis zu 20% der Investitionen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Bolt className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Heizungsersatz</h4>
                  <p className="text-sm text-muted-foreground">Zuschüsse beim Austausch fossiler Heizsysteme gegen Wärmepumpen</p>
                  <p className="text-sm mt-1"><span className="font-medium">Fördervolumen:</span> CHF 3'000 bis CHF 10'000</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Button variant="default">Programme anzeigen</Button>
              <Button variant="outline">Beratungstermin buchen</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default memo(EinsparungspotentialeSection);
