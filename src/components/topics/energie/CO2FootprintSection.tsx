
import React, { memo } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Bike, Utensils, Home, ChevronRight, ArrowUpRight } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface CO2FootprintSectionProps {
  isActive: boolean;
}

// Sample data for CO2 footprint breakdown
const footprintData = [
  { category: 'Mobilität', value: 2.4, fullMark: 5 },
  { category: 'Wohnen', value: 1.8, fullMark: 5 },
  { category: 'Ernährung', value: 3.1, fullMark: 5 },
  { category: 'Konsum', value: 2.2, fullMark: 5 },
  { category: 'Freizeit', value: 1.5, fullMark: 5 },
];

// Sample data for CO2 reduction potential
const reductionData = [
  { name: 'Ernährung', aktuell: 3.1, potenzial: 1.8 },
  { name: 'Mobilität', aktuell: 2.4, potenzial: 0.9 },
  { name: 'Wohnen', aktuell: 1.8, potenzial: 1.0 },
  { name: 'Konsum', aktuell: 2.2, potenzial: 1.4 },
];

const CO2FootprintSection: React.FC<CO2FootprintSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="CO2-Fußabdruck" 
      description="Berechnen und reduzieren Sie Ihren persönlichen CO2-Fußabdruck mit konkreten Maßnahmen."
      isActive={isActive}
      id="#co2"
    >
      <div className="space-y-6">
        <Card className="overflow-hidden border-green-100 transition-all hover:shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-green-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="h-10 w-10 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold">Ihr CO2-Fußabdruck</h3>
                  <p className="text-sm text-muted-foreground">Persönliche Klimabilanz im Überblick</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                  <h4 className="font-semibold">Gesamtbilanz pro Jahr:</h4>
                  <div className="text-right">
                    <span className="text-2xl font-bold">11.0</span>
                    <span className="text-sm font-medium text-muted-foreground"> t CO₂</span>
                  </div>
                </div>
                
                <div className="w-full bg-white/50 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-yellow-500 h-3 rounded-full" 
                    style={{ width: '65%' }} 
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>CH Durchschnitt: 14 t CO₂</span>
                  <span>Nachhaltigkeitsziel: 2 t CO₂</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                  CO₂-Rechner starten
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6">
              <h4 className="font-medium mb-4">CO₂-Verteilung nach Kategorien</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={footprintData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis domain={[0, 5]} tick={{ fill: '#888' }} axisLine={false} />
                    <Radar
                      name="CO₂-Ausstoß (t)"
                      dataKey="value"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.5}
                    />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="overflow-hidden">
            <CardHeader className="pb-3 pt-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bike className="h-5 w-5 text-blue-500" />
                  <span>Mobilität</span>
                </CardTitle>
                <span className="text-sm font-semibold">2.4 t CO₂</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <img 
                src="https://images.unsplash.com/photo-1556122071-e404eaae03bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Fahrrad statt Auto" 
                className="w-full h-32 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <div className="space-y-2">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 shrink-0 mr-1" />
                  <p className="text-sm">Öffentliche Verkehrsmittel statt Auto nutzen spart bis zu 1.5 t CO₂ pro Jahr</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 shrink-0 mr-1" />
                  <p className="text-sm">Kurzstrecken mit dem Fahrrad zurücklegen: -0.4 t CO₂ pro Jahr</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">Details anzeigen</Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="pb-3 pt-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-orange-500" />
                  <span>Ernährung</span>
                </CardTitle>
                <span className="text-sm font-semibold">3.1 t CO₂</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Pflanzliche Ernährung" 
                className="w-full h-32 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <div className="space-y-2">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 shrink-0 mr-1" />
                  <p className="text-sm">50% weniger Fleisch konsumieren spart bis zu 0.8 t CO₂ pro Jahr</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 shrink-0 mr-1" />
                  <p className="text-sm">Regionale und saisonale Produkte: -0.3 t CO₂ pro Jahr</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">Details anzeigen</Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="pb-3 pt-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Home className="h-5 w-5 text-purple-500" />
                  <span>Wohnen</span>
                </CardTitle>
                <span className="text-sm font-semibold">1.8 t CO₂</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <img 
                src="https://images.unsplash.com/photo-1531908012224-8f8865e79a96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Energieeffizientes Wohnen" 
                className="w-full h-32 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <div className="space-y-2">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 shrink-0 mr-1" />
                  <p className="text-sm">Wechsel zu erneuerbarer Energie spart bis zu 0.4 t CO₂ pro Jahr</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 shrink-0 mr-1" />
                  <p className="text-sm">Richtig heizen und lüften: -0.2 t CO₂ pro Jahr</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">Details anzeigen</Button>
            </CardFooter>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>CO₂-Reduktionspotenzial</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={reductionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar name="Aktueller CO₂-Ausstoß" dataKey="aktuell" fill="#6366f1" />
                  <Bar name="Möglicher CO₂-Ausstoß" dataKey="potenzial" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>CO₂-Kompensation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Kompensieren Sie unvermeidbaren CO₂-Ausstoß durch die Unterstützung zertifizierter Klimaschutzprojekte.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Aufforstungsprojekt" 
                    className="w-full h-32 object-cover rounded-md mb-3"
                    loading="lazy"
                  />
                  <h4 className="font-medium">Aufforstungsprojekt Schweiz</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Nachhaltige Waldpflanzung im Schweizer Alpenraum
                  </p>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Preis pro t CO₂:</span>
                    <span className="font-medium">CHF 39</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Unterstützen
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522196048887-a9554dc10712?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Solarenergie-Projekt" 
                    className="w-full h-32 object-cover rounded-md mb-3"
                    loading="lazy"
                  />
                  <h4 className="font-medium">Solarenergie-Projekt Kenia</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Installation von Solaranlagen in ländlichen Regionen
                  </p>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Preis pro t CO₂:</span>
                    <span className="font-medium">CHF 29</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Unterstützen
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1457041503452-a5f3fa78e5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Energieeffizienz-Projekt" 
                    className="w-full h-32 object-cover rounded-md mb-3"
                    loading="lazy"
                  />
                  <h4 className="font-medium">Energieeffizienz-Projekt Indien</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Modernisierung von Produktionsanlagen zur Reduktion von Emissionen
                  </p>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Preis pro t CO₂:</span>
                    <span className="font-medium">CHF 25</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Unterstützen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full md:w-auto">Alle Projekte anzeigen</Button>
          </CardFooter>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default memo(CO2FootprintSection);
