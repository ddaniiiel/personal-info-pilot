
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useChartConfig } from '@/hooks/use-chart-config';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Sector, LegendProps as RechartsLegendProps
} from 'recharts';
import * as RechartsPrimitive from 'recharts'; // For LegendType
import { TrendingUp, PieChart as PieIcon, BarChart2, Target } from 'lucide-react';

interface FinanceChartsProps {
  activeTab: string;
}

// Einnahmen und Ausgaben über die letzten 12 Monate
const financialTrendsData = [
  { month: 'Jan', einnahmen: 2800, ausgaben: 2100 },
  { month: 'Feb', einnahmen: 2800, ausgaben: 2300 },
  { month: 'Mär', einnahmen: 3200, ausgaben: 2400 },
  { month: 'Apr', einnahmen: 2800, ausgaben: 2200 },
  { month: 'Mai', einnahmen: 2800, ausgaben: 2100 },
  { month: 'Jun', einnahmen: 2800, ausgaben: 2000 },
  { month: 'Jul', einnahmen: 3000, ausgaben: 2100 },
  { month: 'Aug', einnahmen: 2800, ausgaben: 2300 },
  { month: 'Sep', einnahmen: 2800, ausgaben: 2200 },
  { month: 'Okt', einnahmen: 2800, ausgaben: 2100 },
  { month: 'Nov', einnahmen: 2800, ausgaben: 2400 },
  { month: 'Dez', einnahmen: 3500, ausgaben: 2600 },
];

// Ausgabenverteilung nach Kategorien für das Kreisdiagramm
const expenseBreakdownData = [
  { name: 'Wohnen', value: 1200, color: 'hsl(var(--chart-cat-wohnen))' },  // dashboard-purple
  { name: 'Lebensmittel', value: 450, color: 'hsl(var(--chart-cat-lebensmittel))' }, // blue
  { name: 'Transport', value: 280, color: 'hsl(var(--chart-cat-transport))' }, // green
  { name: 'Versicherungen', value: 320, color: 'hsl(var(--chart-cat-versicherungen))' }, // orange
  { name: 'Freizeit', value: 150, color: 'hsl(var(--chart-cat-freizeit))' }, // violet
  { name: 'Sonstiges', value: 220, color: 'hsl(var(--chart-cat-sonstiges))' }, // gray
];

// Wöchentliche Transaktionen der letzten 4 Wochen
const weeklyTransactionsData = [
  { name: 'KW 18', einnahmen: 700, ausgaben: 520 },
  { name: 'KW 19', einnahmen: 700, ausgaben: 600 },
  { name: 'KW 20', einnahmen: 700, ausgaben: 480 },
  { name: 'KW 21', einnahmen: 700, ausgaben: 550 },
];

// Sparziele und aktueller Fortschritt
const savingsGoalsData = [
  { name: 'Notfallfonds', ziel: 5000, aktuell: 3200 },
  { name: 'Urlaub', ziel: 2000, aktuell: 1450 },
  { name: 'Neues Auto', ziel: 10000, aktuell: 2500 },
  { name: 'Altersvorsorge', ziel: 20000, aktuell: 8500 },
];

const FinanceCharts: React.FC<FinanceChartsProps> = ({ activeTab }) => {
  const { colors, financeChartConfig, areaChartConfig } = useChartConfig();

  const formatCurrency = (value: number) => {
    return `€${value.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };
  
  const formatCurrencyWithDigits = (value: number) => {
    return `€${value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (activeTab !== 'overview') return null;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-apple hover:shadow-apple-lg transition-shadow duration-300 rounded-2xl bg-surface-primary/80 backdrop-blur-md border-border/30">
          <CardHeader className="border-b border-border/30 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Finanzielle Trends (12 Monate)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ChartContainer config={financeChartConfig} className="h-[300px] w-full">
              <AreaChart
                accessibilityLayer
                data={financialTrendsData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                {...areaChartConfig} // Spread areaChartConfig for tooltipStyle etc.
              >
                <defs>
                  <linearGradient id="fillEinnahmen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-einnahmen)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-einnahmen)" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="fillAusgaben" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-ausgaben)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-ausgaben)" stopOpacity={0.1} />
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
                  tickFormatter={formatCurrency}
                  className="text-xs"
                  width={60}
                />
                <ChartTooltip
                  cursor={true}
                  content={
                    <ChartTooltipContent 
                      indicator="dot" 
                      formatter={(value, name) => {
                        const itemConfig = financeChartConfig[name as keyof typeof financeChartConfig];
                        const itemLabel = itemConfig?.label || name;
                        const formattedValue = formatCurrencyWithDigits(value as number);
                        return (
                          <div className="flex w-full justify-between items-center gap-4">
                            <div className="flex items-center gap-2">
                              {itemConfig?.icon && <itemConfig.icon className="h-4 w-4" />}
                              <span className="text-muted-foreground capitalize">{itemLabel}</span>
                            </div>
                            <span className="font-semibold tabular-nums">{formattedValue}</span>
                          </div>
                        );
                      }} 
                    />
                  }
                />
                <Area
                  dataKey="einnahmen"
                  type="monotone"
                  fill="url(#fillEinnahmen)"
                  strokeWidth={2}
                  stroke="var(--color-einnahmen)"
                  stackId="a"
                  activeDot={{ r: 5, strokeWidth: 2, className: "stroke-primary fill-background" }}
                />
                <Area
                  dataKey="ausgaben"
                  type="monotone"
                  fill="url(#fillAusgaben)"
                  strokeWidth={2}
                  stroke="var(--color-ausgaben)"
                  stackId="b" // Using a different stackId or none if not stacked
                  activeDot={{ r: 5, strokeWidth: 2, className: "stroke-primary fill-background" }}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-apple hover:shadow-apple-lg transition-shadow duration-300 rounded-2xl bg-surface-primary/80 backdrop-blur-md border-border/30">
          <CardHeader className="border-b border-border/30 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <PieIcon className="h-5 w-5 mr-2 text-primary" />
              Ausgabenverteilung
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 flex justify-center items-center">
            <ChartContainer config={financeChartConfig} className="h-[300px] max-w-[350px] w-full">
              <PieChart accessibilityLayer margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent 
                    hideLabel 
                    formatter={(value, name, props) => {
                      const categoryConfig = financeChartConfig[props.name as keyof typeof financeChartConfig];
                      const itemLabel = categoryConfig?.label || props.name;
                      const percentage = ((props.payload?.percent || 0) * 100).toFixed(0);
                      const formattedValue = formatCurrencyWithDigits(value as number);
                      return (
                        <div className="flex w-full justify-between items-center gap-4">
                           <div className="flex items-center gap-2">
                            {categoryConfig?.icon && <categoryConfig.icon className="h-4 w-4" />}
                            <span className="text-muted-foreground capitalize">{itemLabel}</span>
                          </div>
                          <span className="font-semibold tabular-nums">{`${formattedValue} (${percentage}%)`}</span>
                        </div>
                      );
                    }}
                  />}
                />
                <Pie
                  data={expenseBreakdownData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  paddingAngle={3}
                  labelLine={false}
                  label={({ name, percent, ...entry }) => {
                    const categoryLabel = financeChartConfig[name as keyof typeof financeChartConfig]?.label || name;
                    if ((percent ?? 0) < 0.05) return null; // Hide small labels
                    return `${(percent * 100).toFixed(0)}%`;
                  }}
                >
                  {expenseBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} className="stroke-background focus:outline-none hover:opacity-80 transition-opacity" strokeWidth={3}/>
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" className="text-xs"/>} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="shadow-apple hover:shadow-apple-lg transition-shadow duration-300 rounded-2xl bg-surface-primary/80 backdrop-blur-md border-border/30">
          <CardHeader className="border-b border-border/30 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <BarChart2 className="h-5 w-5 mr-2 text-primary" />
              Wöchentliche Transaktionen
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
             <ChartContainer config={financeChartConfig} className="h-[250px] w-full">
              <BarChart 
                accessibilityLayer 
                data={weeklyTransactionsData} 
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                barGap={8} // Adjusted barGap
                barCategoryGap="20%" // Added category gap
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-border/50" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  className="text-xs"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={formatCurrency}
                  className="text-xs"
                  width={60}
                />
                <ChartTooltip
                  cursor={true}
                  content={<ChartTooltipContent 
                    indicator="dot" 
                    formatter={(value, name) => {
                      const itemConfig = financeChartConfig[name as keyof typeof financeChartConfig];
                      const itemLabel = itemConfig?.label || name;
                      const formattedValue = formatCurrencyWithDigits(value as number);
                      return (
                        <div className="flex w-full justify-between items-center gap-4">
                          <div className="flex items-center gap-2">
                            {itemConfig?.icon && <itemConfig.icon className="h-4 w-4" />}
                            <span className="text-muted-foreground capitalize">{itemLabel}</span>
                          </div>
                          <span className="font-semibold tabular-nums">{formattedValue}</span>
                        </div>
                      );
                    }} 
                  />}
                />
                <Bar
                  dataKey="einnahmen"
                  fill="var(--color-einnahmen)"
                  radius={[6, 6, 0, 0]} // Adjusted radius
                  className="hover:opacity-90 transition-opacity"
                />
                <Bar
                  dataKey="ausgaben"
                  fill="var(--color-ausgaben)"
                  radius={[6, 6, 0, 0]} // Adjusted radius
                  className="hover:opacity-90 transition-opacity"
                />
                <ChartLegend content={<ChartLegendContent className="text-xs"/>} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card className="shadow-apple hover:shadow-apple-lg transition-shadow duration-300 rounded-2xl bg-surface-primary/80 backdrop-blur-md border-border/30">
          <CardHeader className="border-b border-border/30 pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <Target className="h-5 w-5 mr-2 text-primary" />
              Sparziele
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ChartContainer config={financeChartConfig} className="h-[250px] w-full">
                <BarChart 
                  accessibilityLayer 
                  data={savingsGoalsData} 
                  layout="vertical" 
                  margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
                  barCategoryGap="25%" // Adjusted category gap
                >
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" className="stroke-border/50" />
                  <XAxis
                    type="number"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={formatCurrency}
                    className="text-xs"
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    width={90} // Adjusted width
                    className="text-xs truncate" // Added truncate for long labels
                  />
                  <ChartTooltip
                    cursor={true}
                    content={
                      <ChartTooltipContent 
                        formatter={(value, name, item) => {
                          const dataName = item.name; // 'aktuell' or 'ziel'
                          const originalName = item.payload.name; // 'Notfallfonds', 'Urlaub', etc.
                          const formattedValue = formatCurrencyWithDigits(value as number);
                          let displayLabel = financeChartConfig[dataName as keyof typeof financeChartConfig]?.label || dataName;
                          
                          if (dataName === "aktuell") {
                            const goalValue = item.payload.ziel;
                            const percentage = goalValue ? (((value as number) / goalValue) * 100).toFixed(0) : 0;
                            return (
                                <div className="flex w-full justify-between items-center gap-4">
                                    <span className="text-muted-foreground">{originalName} ({displayLabel})</span>
                                    <span className="font-semibold tabular-nums">{`${formattedValue} (${percentage}%)`}</span>
                                </div>
                            );
                          }
                          return (
                            <div className="flex w-full justify-between items-center gap-4">
                                <span className="text-muted-foreground">{originalName} ({displayLabel})</span>
                                <span className="font-semibold tabular-nums">{formattedValue}</span>
                            </div>
                          );
                        }}
                        indicator="dot" 
                      />
                    }
                  />
                  <Bar
                    dataKey="aktuell"
                    name="Aktueller Stand" // This name is used for config lookup by ChartLegend
                    fill="var(--color-aktuell)"
                    radius={[0, 6, 6, 0]} // Adjusted radius
                    barSize={20} // Adjusted barSize
                    className="hover:opacity-90 transition-opacity"
                  >
                     {/* Background bar for the goal - rendered behind 'aktuell' */}
                    {savingsGoalsData.map((entry, index) => (
                      <Cell key={`background-cell-${index}`} fill="var(--color-ziel)" className="opacity-30" />
                    ))}
                  </Bar>
                  {/* This Bar is only for the legend and tooltip to correctly pick up 'ziel' */}
                  <Bar dataKey="ziel" name="Sparziel" fill="var(--color-ziel)" visibility="hidden" />

                  <ChartLegend 
                    content={<ChartLegendContent 
                        payload={[
                            { value: 'aktuell', type: 'square' as RechartsPrimitive.LegendType, id: 'aktuell', color: 'var(--color-aktuell)'},
                            { value: 'ziel', type: 'square' as RechartsPrimitive.LegendType, id: 'ziel', color: 'var(--color-ziel)' }
                        ]} 
                        className="text-xs"
                    />} 
                   />
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FinanceCharts;

