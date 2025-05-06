
import React, { memo } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Sun, Wind, Droplet, ArrowUpRight, Info, ThumbsUp } from 'lucide-react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

interface ErneuerbarEnergienSectionProps {
  isActive: boolean;
}

// Sample data for solar production
const solarData = [
  { month: 'Jan', production: 120 },
  { month: 'Feb', production: 180 },
  { month: 'Mär', production: 250 },
  { month: 'Apr', production: 310 },
  { month: 'Mai', production: 410 },
  { month: 'Jun', production: 450 },
  { month: 'Jul', production: 470 },
  { month: 'Aug', production: 420 },
  { month: 'Sep', production: 350 },
  { month: 'Okt', production: 220 },
  { month: 'Nov', production: 150 },
  { month: 'Dez', production: 100 }
];

// Sample data for energy mix
const energyMixData = [
  { name: 'Solar', value: 35 },
  { name: 'Wind', value: 5 },
  { name: 'Wasser', value: 40 },
  { name: 'Konventionell', value: 20 }
];

const COLORS = ['#F59E0B', '#3B82F6', '#10B981', '#6B7280'];

const ErneuerbarEnergienSection: React.FC<ErneuerbarEnergienSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Erneuerbare Energien" 
      description="Nutzen Sie erneuerbare Energiequellen und optimieren Sie Ihre Solaranlage für maximale Effizienz."
      isActive={isActive}
      id="#erneuerbare"
    >
      <div className="space-y-6">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="h-10 w-10 text-amber-500" />
                <div>
                  <h3 className="text-xl font-semibold">Ihre Solaranlage</h3>
                  <p className="text-sm text-muted-foreground">Aktuelle Daten und Ertragswerte</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Heutige Erzeugung</p>
                  <p className="text-2xl font-bold">15 kWh</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Aktuelle Leistung</p>
                  <p className="text-2xl font-bold">2.4 kW</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monatliche Erzeugung</p>
                  <p className="text-2xl font-bold">450 kWh</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Jährliche Erzeugung</p>
                  <p className="text-2xl font-bold">5400 kWh</p>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Solaranlage" 
                className="w-full h-48 object-cover rounded-lg mt-6"
                loading="lazy"
              />
            </div>
            
            <div className="md:w-1/2 p-6">
              <h3 className="font-medium mb-3">Solarertrag 2025</h3>
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={solarData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`${value} kWh`, 'Produktion']}
                      labelFormatter={(label) => `Monat: ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="production" 
                      stroke="#F59E0B" 
                      strokeWidth={2}
                      activeDot={{ r: 6 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex space-x-2">
                <Button variant="default">Details anzeigen</Button>
                <Button variant="outline">Optimierungspotenzial prüfen</Button>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">Energiemix</CardTitle>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={energyMixData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={false}
                    >
                      {energyMixData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Ihr aktueller Energiemix aus <span className="font-medium">80% erneuerbaren Quellen</span>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Einspeisevergütung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Aktuelle Vergütung:</span>
                  <span className="font-medium">0.12 CHF/kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Vergütung letzte 30 Tage:</span>
                  <span className="font-medium">CHF 54.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Vergütung dieses Jahr:</span>
                  <span className="font-medium">CHF 648.00</span>
                </div>
              </div>
              <div className="h-32 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={solarData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="production" stroke="#047857" fill="#047857" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Vergütungsdetails anzeigen</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Förderprogramme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ThumbsUp className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">ProKilowatt 2025</h4>
                    <p className="text-sm text-muted-foreground">Förderung für Erweiterungen bestehender Anlagen</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ThumbsUp className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Speicherförderung</h4>
                    <p className="text-sm text-muted-foreground">Zuschüsse für Batteriespeichersysteme</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ThumbsUp className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Eigenverbrauchsoptimierung</h4>
                    <p className="text-sm text-muted-foreground">Beratung und Förderung für Smart-Home-Integration</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Jetzt Förderung beantragen</Button>
            </CardFooter>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              Andere erneuerbare Energiequellen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-muted rounded-lg p-4 flex flex-col items-center text-center">
                <Wind className="h-10 w-10 text-blue-500 mb-2" />
                <h4 className="font-medium">Windenergie</h4>
                <p className="text-sm text-muted-foreground">Potential prüfen für kleine Windkraftanlagen</p>
                <Button variant="link" className="mt-auto" size="sm">
                  Mehr erfahren
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
              
              <div className="border border-muted rounded-lg p-4 flex flex-col items-center text-center">
                <Droplet className="h-10 w-10 text-blue-600 mb-2" />
                <h4 className="font-medium">Wasserkraft</h4>
                <p className="text-sm text-muted-foreground">Kleinwasserkraftanlagen für Eigenheime</p>
                <Button variant="link" className="mt-auto" size="sm">
                  Mehr erfahren
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
              
              <div className="border border-muted rounded-lg p-4 flex flex-col items-center text-center">
                <Leaf className="h-10 w-10 text-green-600 mb-2" />
                <h4 className="font-medium">Bioenergie</h4>
                <p className="text-sm text-muted-foreground">Nachhaltige Biomasseheizungen</p>
                <Button variant="link" className="mt-auto" size="sm">
                  Mehr erfahren
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default memo(ErneuerbarEnergienSection);
