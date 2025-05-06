
import React, { memo } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GaugeCircle, TrendingDown, TrendingUp, Info } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface VerbrauchsanalyseSectionProps {
  isActive: boolean;
}

// Sample data for electricity usage chart
const electricityData = [
  { month: 'Jan', verbrauch: 320 },
  { month: 'Feb', verbrauch: 300 },
  { month: 'Mär', verbrauch: 290 },
  { month: 'Apr', verbrauch: 270 },
  { month: 'Mai', verbrauch: 250 },
  { month: 'Jun', verbrauch: 220 },
  { month: 'Jul', verbrauch: 230 },
  { month: 'Aug', verbrauch: 240 },
  { month: 'Sep', verbrauch: 260 },
  { month: 'Okt', verbrauch: 280 },
  { month: 'Nov', verbrauch: 310 },
  { month: 'Dez', verbrauch: 350 }
];

// Sample data for water usage chart
const waterData = [
  { month: 'Jan', verbrauch: 38 },
  { month: 'Feb', verbrauch: 42 },
  { month: 'Mär', verbrauch: 35 },
  { month: 'Apr', verbrauch: 30 },
  { month: 'Mai', verbrauch: 45 },
  { month: 'Jun', verbrauch: 52 },
  { month: 'Jul', verbrauch: 58 },
  { month: 'Aug', verbrauch: 50 },
  { month: 'Sep', verbrauch: 47 },
  { month: 'Okt', verbrauch: 42 },
  { month: 'Nov', verbrauch: 39 },
  { month: 'Dez', verbrauch: 41 }
];

const VerbrauchsanalyseSection: React.FC<VerbrauchsanalyseSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Verbrauchsanalyse" 
      description="Analysieren Sie Ihren Energieverbrauch im Detail und erkennen Sie Einsparpotentiale durch zeitliche Trends und Vergleiche."
      isActive={isActive}
      id="#verbrauch"
    >
      <div className="space-y-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <CardContent className="p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="p-3 bg-blue-50 rounded-full">
                <GaugeCircle className="h-12 w-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Stromverbrauch im Überblick</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Erhalten Sie einen umfassenden Einblick in Ihren Stromverbrauch und vergleichen Sie ihn mit früheren Zeiträumen.
                </p>
                <div className="flex items-center gap-5 mb-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Aktueller Monat</p>
                    <p className="text-2xl font-bold flex items-center">
                      350 kWh
                      <TrendingDown className="h-5 w-5 text-green-500 ml-2" />
                      <span className="text-sm text-green-500 font-normal ml-1">-5%</span>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Durchschnitt</p>
                    <p className="text-2xl font-bold">368 kWh</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Jahresverbrauch</p>
                    <p className="text-2xl font-bold">4,216 kWh</p>
                  </div>
                </div>
                <Button size="sm">Stromverbrauch analysieren</Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1592833167684-c696f9a569a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Smart Home Energy Monitor" 
                className="rounded-lg w-20 h-20 object-cover hidden lg:block"
                loading="lazy" 
              />
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="strom" className="w-full">
          <TabsList className="mb-2">
            <TabsTrigger value="strom">Strom</TabsTrigger>
            <TabsTrigger value="wasser">Wasser</TabsTrigger>
            <TabsTrigger value="heizung">Heizung</TabsTrigger>
          </TabsList>
          <TabsContent value="strom">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-medium">Stromverbrauch (kWh)</h4>
                  <div className="flex items-center text-sm">
                    <div className="flex items-center mr-4">
                      <div className="w-3 h-3 rounded bg-blue-500 mr-1"></div>
                      <span>2025</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded bg-gray-300 mr-1"></div>
                      <span>2024</span>
                    </div>
                  </div>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={electricityData}
                      margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="verbrauch" stroke="#4D7FE5" fill="#D2E1FA" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wasser">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-medium">Wasserverbrauch (m³)</h4>
                  <div className="flex items-center text-sm">
                    <div className="flex items-center mr-4">
                      <div className="w-3 h-3 rounded bg-blue-400 mr-1"></div>
                      <span>2025</span>
                    </div>
                  </div>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={waterData}
                      margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="verbrauch" stroke="#2E95CA" fill="#C1E6FF" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="heizung">
            <Card>
              <CardContent className="pt-6 text-center h-72 flex items-center justify-center">
                <div>
                  <Info className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h4 className="text-lg font-medium mb-2">Heizdaten werden vorbereitet</h4>
                  <p className="text-muted-foreground">
                    Die Heizungsdaten werden derzeit aufbereitet und stehen in Kürze zur Verfügung.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3 flex items-center">
                <TrendingDown className="h-4 w-4 mr-1.5 text-green-500" />
                Verbrauchsoptimierung
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Basierend auf Ihrer Verbrauchsanalyse haben wir folgende Einsparpotenziale identifiziert:
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 mb-4">
                <li>Standby-Verbrauch: <span className="font-medium">ca. 15% Ihres Gesamtverbrauchs</span></li>
                <li>Spitzenverbrauch: <span className="font-medium">zwischen 19 und 21 Uhr</span></li>
                <li>Ineffiziente Geräte: <span className="font-medium">Kühlschrank, Waschmaschine</span></li>
              </ul>
              <Button variant="outline" size="sm">Optimierungsvorschläge anzeigen</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Vergleichswerte</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Ihr Haushalt</span>
                    <span className="font-medium">4.216 kWh/Jahr</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-dashboard-purple h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Ähnliche Haushalte</span>
                    <span className="font-medium">5.320 kWh/Jahr</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Durchschnitt CH</span>
                    <span className="font-medium">5.500 kWh/Jahr</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SubcategoryLayout>
  );
};

export default memo(VerbrauchsanalyseSection);
