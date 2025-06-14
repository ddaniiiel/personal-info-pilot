import React, { memo, useState } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Bike, Utensils, Home, ChevronRight, ArrowUpRight, Circle } from 'lucide-react';
import { 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, PieChart, Pie, Cell, Sector, TooltipProps
} from 'recharts';
import { useChartConfig } from '@/hooks/use-chart-config';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface CO2FootprintSectionProps {
  isActive: boolean;
}

// Detaillierte Daten für CO2-Fußabdruck
const footprintData = [
  { category: 'Mobilität', value: 2.4, fullMark: 5 },
  { category: 'Wohnen', value: 1.8, fullMark: 5 },
  { category: 'Ernährung', value: 3.1, fullMark: 5 },
  { category: 'Konsum', value: 2.2, fullMark: 5 },
  { category: 'Freizeit', value: 1.5, fullMark: 5 },
];

// Daten für CO2-Reduktionspotenzial
const reductionData = [
  { name: 'Ernährung', aktuell: 3.1, potenzial: 1.8 },
  { name: 'Mobilität', aktuell: 2.4, potenzial: 0.9 },
  { name: 'Wohnen', aktuell: 1.8, potenzial: 1.0 },
  { name: 'Konsum', aktuell: 2.2, potenzial: 1.4 },
];

// Detaillierte Mobilitätsdaten
const mobilityData = [
  { name: 'Auto', value: 1.8 },
  { name: 'ÖPNV', value: 0.3 },
  { name: 'Flüge', value: 0.3 },
];

// Detaillierte Ernährungsdaten
const foodData = [
  { name: 'Fleisch', value: 1.6 },
  { name: 'Milchprodukte', value: 0.8 },
  { name: 'Gemüse', value: 0.3 },
  { name: 'Getreide', value: 0.2 },
  { name: 'Sonstiges', value: 0.2 },
];

// Detaillierte Mobilitätsdaten für das Kreisdiagramm
const mobilityPieData = [
  { name: 'Auto', value: 75 },
  { name: 'Öffentliche', value: 12 },
  { name: 'Flugzeug', value: 10 },
  { name: 'Fahrrad', value: 3 },
];

// Define comparisonData
const comparisonData = [
  { name: 'Dein Fußabdruck', value: 7.5 }, // Example value
  { name: 'Durchschnitt DE', value: 11.2 } // Example value
];

const CO2FootprintSection: React.FC<CO2FootprintSectionProps> = ({ isActive }) => {
  const { colors } = useChartConfig();
  const [activePieIndex, setActivePieIndex] = useState<number | undefined>();
  
  // Chart-Farbschemata
  const RADAR_COLORS = {
    area: colors.accent || '#10b981', // Fallback if colors.accent is not defined
    stroke: '#059669', // Example, consider deriving from theme
  };
  
  const BAR_COLORS = {
    actual: colors.primary || '#6366f1', 
    potential: colors.savings || '#10b981', // Using savings color for potential
  };
  
  const PIE_COLORS = [colors.transport, colors.secondary, colors.wohnen, colors.accent]; // Using theme colors

  // Define chart configs locally
  const mobilityPieChartConfig: ChartConfig = {
    Auto: { label: "Auto", color: PIE_COLORS[0] },
    Öffentliche: { label: "Öffentliche Verkehrsmittel", color: PIE_COLORS[1] },
    Flugzeug: { label: "Flugzeug", color: PIE_COLORS[2] },
    Fahrrad: { label: "Fahrrad", color: PIE_COLORS[3] },
  };

  // Config for the comparison chart. Keys match 'name' in comparisonData
  const co2ComparisonChartConfig: ChartConfig = {
    "Dein Fußabdruck": { label: "Dein Fußabdruck", color: "var(--color-benutzer)" }, // CSS variable defined by ChartStyle
    "Durchschnitt DE": { label: "Durchschnitt DE", color: "var(--color-durchschnitt)" }, // CSS variable
  };
  
  const formatTooltipValue = (value: number | string | Array<number | string>, name: string | number ) => [`${value} t CO₂`, name as string];
  
  const renderActiveShape = (props: any) => {
    // ... keep existing code (renderActiveShape implementation)
    const { 
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value
    } = props;
  
    return (
      <g>
        <text x={cx} y={cy} dy={-20} textAnchor="middle" fill={colors.muted} className="text-xs">
          {payload.name}
        </text>
        <text x={cx} y={cy} textAnchor="middle" fill={fill} className="text-base font-medium">
          {`${(value as number).toFixed(0)}%`}
        </text>
        <text x={cx} y={cy} dy={18} textAnchor="middle" fill={colors.muted} className="text-xs">
          {`${(percent * 100).toFixed(0)}% Anteil`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    );
  };

  // Berechnung des Gesamtfußabdrucks
  const totalFootprint = footprintData.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <SubcategoryLayout 
      title="CO2-Fußabdruck" 
      description="Berechnen und reduzieren Sie Ihren persönlichen CO2-Fußabdruck mit konkreten Maßnahmen."
      isActive={isActive}
      id="co2" // Ensure id doesn't start with # if SubcategoryLayout expects it plain
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
                    <span className="text-2xl font-bold">{totalFootprint.toFixed(1)}</span>
                    <span className="text-sm font-medium text-muted-foreground"> t CO₂</span>
                  </div>
                </div>
                
                <div className="w-full bg-white/50 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-yellow-500 h-3 rounded-full" 
                    style={{ width: `${(totalFootprint / 14) * 100}%` }} // Example dynamic width based on average
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
                    <PolarGrid stroke={colors.border} />
                    <PolarAngleAxis 
                      dataKey="category" 
                      tick={{ fill: colors.muted, fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={30} // Common setting for radar radius axis
                      domain={[0, 5]} 
                      tick={{ fill: colors.muted, fontSize: 10 }} 
                      axisLine={{ stroke: colors.border }}
                      tickLine={{ stroke: colors.border }}
                    />
                    <Tooltip 
                      formatter={formatTooltipValue}
                      contentStyle={{
                        backgroundColor: colors.background,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '6px',
                        padding: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Radar
                      name="CO₂-Ausstoß"
                      dataKey="value"
                      stroke={RADAR_COLORS.stroke}
                      fill={RADAR_COLORS.area}
                      fillOpacity={0.6} // Standard opacity
                    />
                    {/* Removed Legend as it's often redundant for single-series radar, or can be custom if needed */}
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mobility Card */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-3 pt-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bike className="h-5 w-5 text-blue-500" />
                  <span>Mobilität</span>
                </CardTitle>
                <span className="text-sm font-semibold">2.4 t CO₂</span> {/* Example: This should be dynamic if data changes */}
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="h-32 mb-3">
                <ChartContainer
                  config={mobilityPieChartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip 
                      cursor={{fill: colors.muted, opacity:0.3}}
                      content={<ChartTooltipContent 
                        formatter={(value: ValueType, name: NameType) => { // name is from data, e.g. "Auto"
                            const itemConfig = mobilityPieChartConfig[name as string];
                            const itemLabel = itemConfig?.label || name;
                            return (
                                <div className="flex w-full justify-between items-center gap-2">
                                    <span className="text-muted-foreground capitalize">{itemLabel}</span>
                                    <span className="font-semibold tabular-nums">{value}%</span>
                                </div>
                            );
                        }}
                      />}
                    />
                    <Pie
                      activeIndex={activePieIndex}
                      activeShape={renderActiveShape}
                      data={mobilityPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
                      dataKey="value"
                      onMouseEnter={(_, index) => setActivePieIndex(index)}
                      onMouseLeave={() => setActivePieIndex(undefined)}
                    >
                      {mobilityPieData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={PIE_COLORS[index % PIE_COLORS.length]} 
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </div>
              {/* ... keep existing code (Mobility CardContent tips) ... */}
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
          
          {/* Food Card */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-3 pt-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-orange-500" />
                  <span>Ernährung</span>
                </CardTitle>
                <span className="text-sm font-semibold">3.1 t CO₂</span> {/* Example value */}
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="h-32 mb-3">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={foodData}
                    layout="vertical"
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  >
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fill: colors.muted, fontSize: 10 }}
                      axisLine={{ stroke: 'none' }}
                      tickLine={{ stroke: 'none' }}
                      width={60}
                    />
                    <Tooltip 
                      formatter={(value: ValueType) => [`${value} t CO₂`, 'Ausstoß']}
                      contentStyle={{
                        backgroundColor: colors.background,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '6px',
                        padding: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Bar 
                      dataKey="value" 
                      fill={colors.accent || PIE_COLORS[3]} // Using accent or fallback
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* ... keep existing code (Food CardContent tips) ... */}
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
          
          {/* Housing Card */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-3 pt-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Home className="h-5 w-5 text-purple-500" />
                  <span>Wohnen</span>
                </CardTitle>
                <span className="text-sm font-semibold">1.8 t CO₂</span> {/* Example value */}
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
        
        {/* CO2 Reduction Potential Card */}
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
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: colors.muted }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <YAxis 
                    tick={{ fill: colors.muted }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                    label={{ 
                      value: 'CO₂ in Tonnen', 
                      angle: -90, 
                      position: 'insideLeft',
                      fill: colors.muted,
                      fontSize: 12
                    }}
                  />
                  <Tooltip 
                    formatter={(value: ValueType) => [`${value} t CO₂`, '']}
                    contentStyle={{
                      backgroundColor: colors.background,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '6px',
                      padding: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Legend />
                  <Bar 
                    name="Aktueller CO₂-Ausstoß" 
                    dataKey="aktuell" 
                    fill={BAR_COLORS.actual}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    name="Möglicher CO₂-Ausstoß" 
                    dataKey="potenzial" 
                    fill={BAR_COLORS.potential}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Durch die vorgeschlagenen Maßnahmen könnten Sie Ihren jährlichen CO₂-Ausstoß um 
                <span className="font-semibold text-green-600"> 4.4 Tonnen </span> 
                reduzieren, was einer Einsparung von 
                <span className="font-semibold text-green-600"> 40% </span> 
                entspricht.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* CO2 Compensation Section */}
        <Card>
          <CardHeader>
            <CardTitle>CO₂-Kompensation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Kompensieren Sie unvermeidbaren CO₂-Ausstoß durch die Unterstützung zertifizierter Klimaschutzprojekte.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {/* Project Card 1 */}
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
              {/* Project Card 2 */}
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
              {/* Project Card 3 */}
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
        
        {/* CO2 Comparison Chart Card */}
        <Card>
          <CardHeader>
            <CardTitle>CO₂-Vergleichsdurchschnitt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              {/* This ChartContainer needs 'benutzer' and 'durchschnitt' keys in its config for ChartStyle to apply colors */}
              {/* The actual data keys in 'comparisonData' are 'Dein Fußabdruck' and 'Durchschnitt DE'. */}
              {/* We need to align these. Let's use 'benutzer' and 'durchschnitt' in comparisonData and co2ComparisonChartConfig */}
              <ChartContainer
                config={co2ComparisonChartConfig} // Uses "Dein Fußabdruck" and "Durchschnitt DE" as keys
                className="h-[200px] w-full" 
              >
                <BarChart
                  accessibilityLayer
                  data={comparisonData} // Uses "Dein Fußabdruck" and "Durchschnitt DE" as item.payload.name
                  layout="vertical"
                  margin={{ left: 10, right: 30 }}
                >
                  <CartesianGrid horizontal={false} />
                  <XAxis type="number" dataKey="value" tickFormatter={(val) => `${val} t`} />
                  <YAxis
                    dataKey="name" // This is "Dein Fußabdruck" or "Durchschnitt DE"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    className="capitalize"
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent 
                        indicator="dot" // Added for consistency
                        formatter={(value, _name, item) => { // item.payload.name is "Dein Fußabdruck" etc.
                            const keyForConfig = item.payload.name as string;
                            const itemConfig = co2ComparisonChartConfig[keyForConfig];
                            const label = itemConfig?.label || keyForConfig;
                            return (
                                <div className="flex w-full justify-between items-center gap-4">
                                    <span className="text-muted-foreground capitalize">{label}</span>
                                    <span className="font-semibold tabular-nums">{value} t</span>
                                </div>
                            );
                        }}
                    />}
                  />
                  <Bar dataKey="value" layout="vertical" radius={5}>
                    {comparisonData.map((entry) => (
                      <Cell
                        key={entry.name}
                        // ChartStyle will set --color-Dein Fußabdruck and --color-Durchschnitt DE if keys have spaces
                        // It's better to use keys without spaces for CSS variables.
                        // Let's assume ChartStyle handles this or use keys like 'userFootprint' and 'avgFootprint'
                        // For now, relying on the config keys "Dein Fußabdruck" and "Durchschnitt DE"
                        fill={entry.name === "Dein Fußabdruck" ? co2ComparisonChartConfig["Dein Fußabdruck"].color : co2ComparisonChartConfig["Durchschnitt DE"].color}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Vergleich mit dem Durchschnitt der Schweizer Bevölkerung:
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default memo(CO2FootprintSection);
