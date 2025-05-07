
import React, { memo, useState } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GaugeCircle, TrendingDown, TrendingUp, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend, 
  LineChart, Line, BarChart, Bar 
} from 'recharts';
import { useChartConfig } from '@/hooks/use-chart-config';

interface VerbrauchsanalyseSectionProps {
  isActive: boolean;
}

// Realistische Daten für Stromverbrauch
const electricityData = [
  { month: 'Jan', verbrauch: 320, vergleich: 340 },
  { month: 'Feb', verbrauch: 300, vergleich: 310 },
  { month: 'Mär', verbrauch: 290, vergleich: 305 },
  { month: 'Apr', verbrauch: 270, vergleich: 290 },
  { month: 'Mai', verbrauch: 250, vergleich: 280 },
  { month: 'Jun', verbrauch: 220, vergleich: 260 },
  { month: 'Jul', verbrauch: 230, vergleich: 255 },
  { month: 'Aug', verbrauch: 240, vergleich: 260 },
  { month: 'Sep', verbrauch: 260, vergleich: 275 },
  { month: 'Okt', verbrauch: 280, vergleich: 290 },
  { month: 'Nov', verbrauch: 310, vergleich: 330 },
  { month: 'Dez', verbrauch: 350, vergleich: 360 }
];

// Realistische Daten für Wasserverbrauch
const waterData = [
  { month: 'Jan', verbrauch: 38, vergleich: 40 },
  { month: 'Feb', verbrauch: 42, vergleich: 39 },
  { month: 'Mär', verbrauch: 35, vergleich: 38 },
  { month: 'Apr', verbrauch: 30, vergleich: 36 },
  { month: 'Mai', verbrauch: 45, vergleich: 42 },
  { month: 'Jun', verbrauch: 52, vergleich: 46 },
  { month: 'Jul', verbrauch: 58, vergleich: 48 },
  { month: 'Aug', verbrauch: 50, vergleich: 47 },
  { month: 'Sep', verbrauch: 47, vergleich: 45 },
  { month: 'Okt', verbrauch: 42, vergleich: 43 },
  { month: 'Nov', verbrauch: 39, vergleich: 41 },
  { month: 'Dez', verbrauch: 41, vergleich: 40 }
];

// Heizungsverbrauchsdaten
const heatingData = [
  { month: 'Jan', verbrauch: 95, vergleich: 110 },
  { month: 'Feb', verbrauch: 85, vergleich: 100 },
  { month: 'Mär', verbrauch: 65, vergleich: 80 },
  { month: 'Apr', verbrauch: 45, vergleich: 50 },
  { month: 'Mai', verbrauch: 25, vergleich: 30 },
  { month: 'Jun', verbrauch: 10, vergleich: 15 },
  { month: 'Jul', verbrauch: 5, vergleich: 10 },
  { month: 'Aug', verbrauch: 5, vergleich: 10 },
  { month: 'Sep', verbrauch: 15, vergleich: 25 },
  { month: 'Okt', verbrauch: 40, vergleich: 50 },
  { month: 'Nov', verbrauch: 65, vergleich: 75 },
  { month: 'Dez', verbrauch: 90, vergleich: 105 }
];

// Tagesverbrauchsdaten für detaillierte Ansicht
const dailyUsageData = [
  { time: '00:00', value: 0.8 },
  { time: '02:00', value: 0.5 },
  { time: '04:00', value: 0.3 },
  { time: '06:00', value: 0.9 },
  { time: '08:00', value: 2.4 },
  { time: '10:00', value: 1.8 },
  { time: '12:00', value: 1.5 },
  { time: '14:00', value: 1.2 },
  { time: '16:00', value: 1.7 },
  { time: '18:00', value: 2.8 },
  { time: '20:00', value: 3.2 },
  { time: '22:00', value: 1.9 }
];

// Geräteverteilungsdaten
const deviceUsageData = [
  { name: 'Heizung', value: 45 },
  { name: 'Warmwasser', value: 15 },
  { name: 'Kühlung', value: 10 },
  { name: 'Beleuchtung', value: 8 },
  { name: 'Küche', value: 12 },
  { name: 'Andere', value: 10 }
];

const VerbrauchsanalyseSection: React.FC<VerbrauchsanalyseSectionProps> = ({ isActive }) => {
  const { colors, areaChartConfig } = useChartConfig();
  const [chartView, setChartView] = useState<'month' | 'day'>('month');
  
  // Formatierung für die Tooltip-Darstellung
  const formatTooltipValue = (value: number, name: string) => {
    switch(name) {
      case 'verbrauch':
        return [`${value} kWh`, 'Aktuell'];
      case 'vergleich':
        return [`${value} kWh`, 'Vorjahr'];
      default:
        return [`${value}`, name];
    }
  };

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
        
        {/* Zeitskalawechsel für die Diagrammanzeige */}
        <div className="flex justify-end mb-2">
          <div className="inline-flex rounded-md shadow-sm">
            <Button 
              variant={chartView === 'month' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setChartView('month')}
              className="rounded-l-md rounded-r-none"
            >
              Monatlich
            </Button>
            <Button 
              variant={chartView === 'day' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setChartView('day')}
              className="rounded-l-none rounded-r-md"
            >
              Tageszeit
            </Button>
          </div>
        </div>
        
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
                    {chartView === 'month' ? (
                      <LineChart
                        data={electricityData}
                        margin={areaChartConfig.margin}
                      >
                        <defs>
                          <linearGradient {...areaChartConfig.gradientConfig("colorElectricity", colors.primary)} />
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                        <XAxis 
                          dataKey="month" 
                          tick={{ fill: colors.muted }}
                          axisLine={{ stroke: colors.border }}
                          tickLine={{ stroke: colors.border }}
                        />
                        <YAxis 
                          tick={{ fill: colors.muted }}
                          axisLine={{ stroke: colors.border }}
                          tickLine={{ stroke: colors.border }}
                        />
                        <Tooltip 
                          contentStyle={areaChartConfig.tooltipStyle}
                          formatter={formatTooltipValue}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="verbrauch" 
                          name="Aktuell" 
                          stroke={colors.primary} 
                          activeDot={{ r: 8 }}
                          strokeWidth={2} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="vergleich" 
                          name="Vorjahr" 
                          stroke={colors.muted}
                          strokeDasharray="5 5"  
                        />
                      </LineChart>
                    ) : (
                      <AreaChart
                        data={dailyUsageData}
                        margin={areaChartConfig.margin}
                      >
                        <defs>
                          <linearGradient {...areaChartConfig.gradientConfig("colorDailyUsage", colors.primary)} />
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                        <XAxis 
                          dataKey="time" 
                          tick={{ fill: colors.muted }}
                          axisLine={{ stroke: colors.border }}
                          tickLine={{ stroke: colors.border }}
                        />
                        <YAxis 
                          tick={{ fill: colors.muted }}
                          axisLine={{ stroke: colors.border }}
                          tickLine={{ stroke: colors.border }}
                        />
                        <Tooltip 
                          contentStyle={areaChartConfig.tooltipStyle}
                          formatter={(value: number) => [`${value} kWh`, 'Verbrauch']}
                          labelFormatter={(label) => `Uhrzeit: ${label}`}
                        />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          name="Stromverbrauch" 
                          stroke={colors.primary} 
                          fillOpacity={0.6}
                          fill={`url(#colorDailyUsage)`} 
                        />
                      </AreaChart>
                    )}
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
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded bg-gray-300 mr-1"></div>
                      <span>2024</span>
                    </div>
                  </div>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={waterData}
                      margin={areaChartConfig.margin}
                    >
                      <defs>
                        <linearGradient {...areaChartConfig.gradientConfig("colorWater", colors.secondary)} />
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: colors.muted }}
                        axisLine={{ stroke: colors.border }}
                        tickLine={{ stroke: colors.border }}
                      />
                      <YAxis 
                        tick={{ fill: colors.muted }}
                        axisLine={{ stroke: colors.border }}
                        tickLine={{ stroke: colors.border }}
                      />
                      <Tooltip 
                        contentStyle={areaChartConfig.tooltipStyle}
                        formatter={(value: number, name: string) => {
                          if (name === 'verbrauch') return [`${value} m³`, 'Aktuell'];
                          return [`${value} m³`, 'Vorjahr'];
                        }}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="verbrauch" 
                        name="Aktuell" 
                        stroke={colors.secondary} 
                        fillOpacity={0.6}
                        fill={`url(#colorWater)`} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="vergleich" 
                        name="Vorjahr" 
                        stroke={colors.muted}
                        strokeDasharray="5 5" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="heizung">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-medium">Heizungsverbrauch (kWh)</h4>
                  <div className="flex items-center text-sm">
                    <div className="flex items-center mr-4">
                      <div className="w-3 h-3 rounded bg-orange-500 mr-1"></div>
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
                    <BarChart
                      data={heatingData}
                      margin={areaChartConfig.margin}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: colors.muted }}
                        axisLine={{ stroke: colors.border }}
                        tickLine={{ stroke: colors.border }}
                      />
                      <YAxis 
                        tick={{ fill: colors.muted }}
                        axisLine={{ stroke: colors.border }}
                        tickLine={{ stroke: colors.border }}
                      />
                      <Tooltip 
                        contentStyle={areaChartConfig.tooltipStyle}
                        formatter={(value: number, name: string) => {
                          if (name === 'verbrauch') return [`${value} kWh`, 'Aktuell'];
                          return [`${value} kWh`, 'Vorjahr'];
                        }}
                      />
                      <Legend />
                      <Bar 
                        dataKey="verbrauch" 
                        name="Aktuell" 
                        fill={colors.quaternary} 
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar 
                        dataKey="vergleich" 
                        name="Vorjahr" 
                        fill={colors.muted}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
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
