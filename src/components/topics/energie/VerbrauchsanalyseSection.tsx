import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import { Droplets, Zap,Flame, Trash2 } from 'lucide-react';
import { useChartConfig } from '@/hooks/use-chart-config'; // Ensure this is imported

const waterData = [
  { month: 'Jan', verbrauch: 25 },
  { month: 'Feb', verbrauch: 22 },
  { month: 'Mär', verbrauch: 28 },
  { month: 'Apr', verbrauch: 26 },
  { month: 'Mai', verbrauch: 24 },
  { month: 'Jun', verbrauch: 23 },
  { month: 'Jul', verbrauch: 27 },
  { month: 'Aug', verbrauch: 29 },
  { month: 'Sep', verbrauch: 25 },
  { month: 'Okt', verbrauch: 23 },
  { month: 'Nov', verbrauch: 21 },
  { month: 'Dez', verbrauch: 24 },
];

const electricityData = [
  { month: 'Jan', verbrauch: 220 },
  { month: 'Feb', verbrauch: 200 },
  { month: 'Mär', verbrauch: 230 },
  { month: 'Apr', verbrauch: 210 },
  { month: 'Mai', verbrauch: 190 },
  { month: 'Jun', verbrauch: 180 },
  { month: 'Jul', verbrauch: 200 },
  { month: 'Aug', verbrauch: 240 },
  { month: 'Sep', verbrauch: 210 },
  { month: 'Okt', verbrauch: 230 },
  { month: 'Nov', verbrauch: 250 },
  { month: 'Dez', verbrauch: 240 },
];

const heatingData = [
  { month: 'Jan', verbrauch: 800 },
  { month: 'Feb', verbrauch: 750 },
  { month: 'Mär', verbrauch: 600 },
  { month: 'Apr', verbrauch: 450 },
  { month: 'Mai', verbrauch: 300 },
  { month: 'Jun', verbrauch: 200 },
  { month: 'Jul', verbrauch: 150 },
  { month: 'Aug', verbrauch: 180 },
  { month: 'Sep', verbrauch: 300 },
  { month: 'Okt', verbrauch: 500 },
  { month: 'Nov', verbrauch: 700 },
  { month: 'Dez', verbrauch: 850 },
];

const wasteData = [
  {
    type: '2024',
    anteil: {
      restmuell: 15,
      papier: 8,
      bio: 12,
      gelberSack: 5,
    },
  },
];

const VerbrauchsanalyseSection: React.FC = () => {
  const { colors, financeChartConfig, areaChartConfig } = useChartConfig(); // Destructure areaChartConfig here
  const chartConfig = financeChartConfig; // alias for easier use if needed

  const formatValue = (value: number, unit: string) => `${value.toLocaleString('de-DE')} ${unit}`;

  const renderAreaChart = (data: any[], dataKey: string, colorKey: keyof typeof colors, unit: string, title: string, Icon: React.ElementType) => (
    <Card className="shadow-apple hover:shadow-apple-lg transition-shadow duration-300 rounded-2xl bg-surface-primary/80 backdrop-blur-md border-border/30">
      <CardHeader className="border-b border-border/30 pb-4">
        <CardTitle className="flex items-center text-lg font-semibold text-foreground">
          <Icon className="h-5 w-5 mr-2" style={{ color: colors[colorKey] }} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer 
            config={{
                [dataKey]: { label: title, color: colors[colorKey] }
            }} 
            className="h-[250px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }} // Margin applied directly
            // Removed {...areaChartConfig} spread if it only contains tooltipStyle and we handle tooltip below
          >
            <defs>
              <linearGradient id={`fill-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`var(--color-${dataKey})`} stopOpacity={0.8} />
                <stop offset="95%" stopColor={`var(--color-${dataKey})`} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-border/50" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              className="text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => formatValue(value, unit)}
              className="text-xs"
              width={70}
            />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent 
                  style={areaChartConfig.tooltipStyle} // Apply tooltipStyle from areaChartConfig
                  indicator="dot"
                  formatter={(value, name) => {
                    const itemLabel = chartConfig[name as keyof typeof chartConfig]?.label || name;
                    const formattedValue = formatValue(value as number, unit);
                    return (
                      <div className="flex w-full justify-between items-center gap-4">
                        <span className="text-muted-foreground capitalize">{itemLabel}</span>
                        <span className="font-semibold tabular-nums">{formattedValue}</span>
                      </div>
                    );
                  }}
                />
              }
            />
            <Area
              dataKey={dataKey}
              type="monotone"
              fill={`url(#fill-${dataKey})`}
              stroke={`var(--color-${dataKey})`}
              strokeWidth={2}
              activeDot={{ r: 5, strokeWidth: 2, className: "stroke-primary fill-background" }}
            />
            {/* <ChartLegend content={<ChartLegendContent className="text-xs"/>} /> Removed if only one data series */}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-1">Verbrauchsanalyse</h2>
        <p className="text-muted-foreground mb-6">
          Analysieren Sie Ihren monatlichen Verbrauch von Wasser, Strom, Heizung und die produzierte Müllmenge.
        </p>
      </div>

      <Tabs defaultValue="water" className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 p-1 bg-surface-secondary rounded-xl">
          <TabsTrigger value="water" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <Droplets className="h-4 w-4 mr-2" /> Wasser
          </TabsTrigger>
          <TabsTrigger value="electricity" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <Zap className="h-4 w-4 mr-2" /> Strom
          </TabsTrigger>
          <TabsTrigger value="heating" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <Flame className="h-4 w-4 mr-2" /> Heizung
          </TabsTrigger>
          <TabsTrigger value="waste" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <Trash2 className="h-4 w-4 mr-2" /> Müll
          </TabsTrigger>
        </TabsList>

        <TabsContent value="water" className="animate-fade-in">
          {renderAreaChart(waterData, "verbrauch", "primary", "m³", "Wasserverbrauch", Droplets)}
        </TabsContent>
        <TabsContent value="electricity" className="animate-fade-in">
          {renderAreaChart(electricityData, "verbrauch", "accent", "kWh", "Stromverbrauch", Zap)}
        </TabsContent>
        <TabsContent value="heating" className="animate-fade-in">
          {renderAreaChart(heatingData, "verbrauch", "savings", "kWh", "Heizenergie", Flame)}
        </TabsContent>
        <TabsContent value="waste" className="animate-fade-in">
           <Card className="shadow-apple hover:shadow-apple-lg transition-shadow duration-300 rounded-2xl bg-surface-primary/80 backdrop-blur-md border-border/30">
            <CardHeader className="border-b border-border/30 pb-4">
              <CardTitle className="flex items-center text-lg font-semibold text-foreground">
                <Trash2 className="h-5 w-5 mr-2 text-red-500" />
                Müllaufkommen nach Art
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ChartContainer 
                config={{
                    restmuell: { label: "Restmüll", color: colors.muted }, // Replaced quaternary with muted
                    papier: { label: "Papier", color: colors.transport }, // Example color
                    bio: { label: "Bioabfall", color: colors.income }, // Example color
                    gelberSack: { label: "Gelber Sack", color: colors.expense } // Example color
                }} 
                className="h-[300px] w-full"
              >
                <BarChart 
                    data={wasteData} 
                    layout="vertical" 
                    margin={{top: 5, right: 20, left: 10, bottom: 5}}
                    barCategoryGap="20%"
                >
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" className="stroke-border/50" />
                  <XAxis type="number" tickFormatter={(val) => `${val} kg`} className="text-xs"/>
                  <YAxis dataKey="type" type="category" tickLine={false} axisLine={false} width={80} className="text-xs"/>
                  <ChartTooltip
                    cursor={{fill: 'hsl(var(--muted))', opacity: 0.3}}
                    content={
                        <ChartTooltipContent 
                            formatter={(value, name) => {
                                const itemConfig = chartConfig[name as keyof typeof chartConfig];
                                const itemLabel = itemConfig?.label || name;
                                const formattedValue = `${value} kg`;
                                return (
                                  <div className="flex w-full justify-between items-center gap-4">
                                    <span className="text-muted-foreground capitalize">{itemLabel}</span>
                                    <span className="font-semibold tabular-nums">{formattedValue}</span>
                                  </div>
                                );
                            }}
                        />
                    }
                  />
                   {Object.keys(wasteData[0].anteil).map((wasteTypeKey) => (
                    <Bar key={wasteTypeKey} dataKey={`anteil.${wasteTypeKey}`} name={wasteTypeKey} stackId="a" fill={`var(--color-${wasteTypeKey})`} radius={[0, 4, 4, 0]} />
                  ))}
                  <ChartLegend content={<ChartLegendContent className="text-xs"/>} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VerbrauchsanalyseSection;
