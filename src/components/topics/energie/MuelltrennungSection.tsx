
import React, { memo } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Recycle, Calendar, MapPin, AlertCircle, Upload } from 'lucide-react';

interface MuelltrennungSectionProps {
  isActive: boolean;
}

type AbfallTyp = {
  name: string;
  icon: string;
  color: string;
  nextDate: string;
  description: string;
};

const abfallTypen: AbfallTyp[] = [
  {
    name: 'Papier',
    icon: '📄',
    color: 'bg-blue-100',
    nextDate: '15.05.2025',
    description: 'Zeitungen, Zeitschriften, Karton, Papierverpackungen'
  },
  {
    name: 'Glas',
    icon: '🍶',
    color: 'bg-green-100',
    nextDate: '22.05.2025',
    description: 'Flaschen, Gläser (nach Farben getrennt)'
  },
  {
    name: 'Kunststoff',
    icon: '♻️',
    color: 'bg-yellow-100',
    nextDate: '20.05.2025',
    description: 'PET-Flaschen, Plastikverpackungen'
  },
  {
    name: 'Metall',
    icon: '🥫',
    color: 'bg-gray-100',
    nextDate: '22.05.2025',
    description: 'Aludosen, Konservendosen, Metallverpackungen'
  },
  {
    name: 'Grüngut',
    icon: '🍃',
    color: 'bg-lime-100',
    nextDate: '18.05.2025',
    description: 'Gartenabfälle, Küchenabfälle, Speisereste'
  },
  {
    name: 'Restmüll',
    icon: '🗑️',
    color: 'bg-red-100',
    nextDate: '17.05.2025',
    description: 'Nicht recycelbare Abfälle'
  }
];

const recyclingOrte = [
  {
    name: 'Recycling-Center Nord',
    address: 'Industriestrasse 8, 8304 Wallisellen',
    distance: '1.2 km',
    hours: 'Mo-Fr: 8-18 Uhr, Sa: 9-16 Uhr'
  },
  {
    name: 'Entsorgungspark Hagenholz',
    address: 'Hagenholzstrasse 110, 8050 Zürich',
    distance: '4.8 km',
    hours: 'Mo-Fr: 7-17 Uhr, Sa: 8-15 Uhr'
  },
  {
    name: 'Werkhof Süd',
    address: 'Seestrasse 125, 8810 Horgen',
    distance: '8.3 km',
    hours: 'Mo-Fr: 8-18 Uhr, Sa: 8-12 Uhr'
  }
];

const MuelltrennungSection: React.FC<MuelltrennungSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Mülltrennung" 
      description="Optimieren Sie Ihre Mülltrennung und tragen Sie aktiv zum Umweltschutz bei"
      isActive={isActive}
      id="#muell"
    >
      <div className="space-y-6">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-br from-teal-50 to-teal-100 p-6 flex flex-col justify-center">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/70 rounded-full">
                  <Recycle className="h-10 w-10 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Recycling richtig gemacht</h3>
                  <p className="text-sm text-muted-foreground">Einfacher Leitfaden zur korrekten Mülltrennung</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Mülltrennung" 
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            
            <div className="md:w-2/3 p-6">
              <h3 className="font-medium mb-4">Warum sollte ich meinen Müll trennen?</h3>
              <div className="space-y-4 mb-6">
                <p className="text-sm">
                  Durch korrekte Mülltrennung können wertvolle Rohstoffe wiederverwertet werden, 
                  was Energie spart und den CO₂-Ausstoß reduziert. In der Schweiz werden bereits 
                  über 53% aller Abfälle recycelt, aber wir können noch besser werden.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex flex-col items-center bg-blue-50 p-3 rounded-lg">
                    <span className="text-xl mb-1">🌲</span>
                    <span className="font-medium">1 Tonne</span>
                    <span className="text-xs text-center">recyceltes Papier rettet 17 Bäume</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-yellow-50 p-3 rounded-lg">
                    <span className="text-xl mb-1">⚡</span>
                    <span className="font-medium">95%</span>
                    <span className="text-xs text-center">weniger Energie beim Aluminium-Recycling</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-green-50 p-3 rounded-lg">
                    <span className="text-xl mb-1">♻️</span>
                    <span className="font-medium">60%</span>
                    <span className="text-xs text-center">weniger CO₂ durch Recycling</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="default">
                  <Upload className="mr-2 h-4 w-4" />
                  Trennguide herunterladen
                </Button>
                <Button variant="outline">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Häufige Fragen
                </Button>
              </div>
            </div>
          </div>
        </Card>
        
        <Tabs defaultValue="kalender">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="kalender">Abfallkalender</TabsTrigger>
            <TabsTrigger value="trennung">Trennungsguide</TabsTrigger>
            <TabsTrigger value="recyclinghof">Recyclinghöfe</TabsTrigger>
          </TabsList>
          
          <TabsContent value="kalender" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  Abfuhrtermine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {abfallTypen.map((typ, index) => (
                    <Card key={index} className={`border-l-4 border-l-teal-500 ${typ.color}`}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span className="text-xl mr-2">{typ.icon}</span>
                            <h4 className="font-medium">{typ.name}</h4>
                          </div>
                          {new Date(typ.nextDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && (
                            <Badge variant="default" className="bg-red-500">Bald</Badge>
                          )}
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Nächste Abholung:</span>
                          <span className="font-medium">{typ.nextDate}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{typ.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full sm:w-auto">
                  Erinnerungen einrichten
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="trennung" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mülltrennung leicht gemacht</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Für eine nachhaltige Umwelt ist es wichtig, Abfälle richtig zu trennen. 
                  Hier finden Sie eine Übersicht der wichtigsten Abfallkategorien und wie Sie diese korrekt entsorgen.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-blue-50 p-3 flex items-center">
                      <span className="text-xl mr-2">📄</span>
                      <h3 className="font-medium">Papier & Karton</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">Wie trennen:</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Zeitungen, Zeitschriften bündeln</li>
                        <li>Karton flach zusammenlegen</li>
                        <li>Keine Verbundmaterialien (z.B. Tetrapak)</li>
                        <li>Keine verschmutzten Papiere/Kartons</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-green-50 p-3 flex items-center">
                      <span className="text-xl mr-2">🍶</span>
                      <h3 className="font-medium">Glas</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">Wie trennen:</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Nach Farben trennen (grün, braun, weiss)</li>
                        <li>Deckel und Verschlüsse entfernen</li>
                        <li>Keine Trinkgläser oder Fensterglas</li>
                        <li>Keine Keramik oder Porzellan</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-yellow-50 p-3 flex items-center">
                      <span className="text-xl mr-2">♻️</span>
                      <h3 className="font-medium">Kunststoff</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">Wie trennen:</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>PET-Flaschen separat sammeln</li>
                        <li>Andere Plastikflaschen (HDPE) separat</li>
                        <li>Folien und Verpackungen reinigen</li>
                        <li>Auf Recyclingzeichen achten</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-lime-50 p-3 flex items-center">
                      <span className="text-xl mr-2">🍃</span>
                      <h3 className="font-medium">Grünabfall</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">Wie trennen:</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Gartenabfälle und Küchenabfälle trennen</li>
                        <li>Keine gekochten Speisereste</li>
                        <li>Keine Fleisch- oder Fischabfälle</li>
                        <li>Keine Kunststofftüten verwenden</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-4">
                  Ausführlichen Trennungsguide anzeigen
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="recyclinghof" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  Recyclinghöfe in Ihrer Nähe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1515923019249-6b544314450f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Kartenansicht der Recyclinghöfe" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recyclingOrte.map((ort, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h4 className="font-medium">{ort.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{ort.address}</p>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Entfernung:</span>
                          <span className="font-medium">{ort.distance}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Öffnungszeiten:</span>
                          <span className="font-medium">{ort.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
                  <Button>Standorte anzeigen</Button>
                  <Button variant="outline">Was kann ich wo entsorgen?</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Sonderabfall richtig entsorgen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              Batterien, Elektronikgeräte, Farben und Chemikalien gehören nicht in den Hausmüll. 
              Sie enthalten umweltgefährdende Stoffe und müssen separat entsorgt werden.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border rounded-lg p-4 text-center space-y-2">
                <span className="text-3xl block">🔋</span>
                <h4 className="font-medium">Batterien & Akkus</h4>
                <p className="text-xs text-muted-foreground">
                  Rückgabe im Handel oder bei Sammelstellen möglich
                </p>
              </div>
              
              <div className="border rounded-lg p-4 text-center space-y-2">
                <span className="text-3xl block">💻</span>
                <h4 className="font-medium">Elektronikgeräte</h4>
                <p className="text-xs text-muted-foreground">
                  Kostenlose Rückgabe beim Händler
                </p>
              </div>
              
              <div className="border rounded-lg p-4 text-center space-y-2">
                <span className="text-3xl block">🧪</span>
                <h4 className="font-medium">Medikamente</h4>
                <p className="text-xs text-muted-foreground">
                  Rückgabe in Apotheken und Drogerien
                </p>
              </div>
              
              <div className="border rounded-lg p-4 text-center space-y-2">
                <span className="text-3xl block">🎨</span>
                <h4 className="font-medium">Farben & Lacke</h4>
                <p className="text-xs text-muted-foreground">
                  Abgabe bei Sonderabfall-Sammelstellen
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Alle Sonderabfälle anzeigen</Button>
          </CardFooter>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default memo(MuelltrennungSection);
