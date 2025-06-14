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
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip as RechartsTooltip, ResponsiveContainer, Legend as RechartsLegend, Sector
} from 'recharts';
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
  const { colors, financeChartConfig } = useChartConfig();

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
        <Card className="lg:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Finanztrends (letzte 12 Monate)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={financeChartConfig} className="h-[300px] w-full">
              <AreaChart
                accessibilityLayer
                data={financialTrendsData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="fillEinnahmen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-einnahmen)" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="var(--color-einnahmen)" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="fillAusgaben" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-ausgaben)" stopOpacity={0.6} />
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
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={formatCurrency}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" formatter={(value, name) => ({ value: formatCurrencyWithDigits(value as number), name })} />}
                />
                <Area
                  dataKey="einnahmen"
                  type="natural"
                  fill="url(#fillEinnahmen)"
                  stroke="var(--color-einnahmen)"
                  stackId="a"
                  strokeWidth={2}
                  activeDot={{ r: 5 }}
                />
                <Area
                  dataKey="ausgaben"
                  type="natural"
                  fill="url(#fillAusgaben)"
                  stroke="var(--color-ausgaben)"
                  stackId="b"
                  strokeWidth={2}
                  activeDot={{ r: 5 }}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <PieIcon className="h-5 w-5 mr-2 text-primary" />
              Ausgabenverteilung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={financeChartConfig} className="h-[300px] w-full">
              <PieChart accessibilityLayer margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel formatter={(value, name, props) => {
                    const percentage = ((props.payload?.percent || 0) * 100).toFixed(0);
                    return ({value: `${formatCurrencyWithDigits(value as number)} (${percentage}%)`, name: props.name})
                  }}/>}
                />
                <Pie
                  data={expenseBreakdownData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={50}
                  paddingAngle={2}
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {expenseBreakdownData.map((entry) => (
                    <Cell key={`cell-${entry.name}`} fill={entry.color} className="stroke-background focus:outline-none" strokeWidth={2}/>
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} className="mt-2" />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <BarChart2 className="h-5 w-5 mr-2 text-primary" />
              Wöchentliche Transaktionen
            </CardTitle>
          </CardHeader>
          <CardContent>
             <ChartContainer config={financeChartConfig} className="h-[250px] w-full">
              <BarChart 
                accessibilityLayer 
                data={weeklyTransactionsData} 
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                barGap={6}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-border/50" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={formatCurrency}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" formatter={(value, name) => ({ value: formatCurrencyWithDigits(value as number), name })} />}
                />
                <Bar
                  dataKey="einnahmen"
                  fill="var(--color-einnahmen)"
                  radius={[4, 4, 0, 0]}
                  barSize={25}
                />
                <Bar
                  dataKey="ausgaben"
                  fill="var(--color-ausgaben)"
                  radius={[4, 4, 0, 0]}
                  barSize={25}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-foreground">
              <Target className="h-5 w-5 mr-2 text-primary" />
              Sparziele
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={financeChartConfig} className="h-[250px] w-full">
                <BarChart 
                  accessibilityLayer 
                  data={savingsGoalsData} 
                  layout="vertical" 
                  margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
                  barGap={6}
                >
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" className="stroke-border/50" />
                  <XAxis
                    type="number"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={formatCurrency}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    width={80} 
                    className="text-xs"
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent 
                        formatter={(value, name, item) => {
                          if (name === "aktuell") {
                            const goalValue = item.payload.ziel;
                            const percentage = goalValue ? ((value as number / goalValue) * 100).toFixed(0) : 0;
                            return { value: `${formatCurrencyWithDigits(value as number)} (${percentage}%)`, name: "Aktueller Stand" };
                          }
                          return { value: formatCurrencyWithDigits(value as number), name: "Sparziel" };
                        }}
                        indicator="dot" 
                      />
                    }
                  />
                  <Bar
                    dataKey="aktuell"
                    name="Aktueller Stand"
                    fill="var(--color-aktuell)"
                    radius={[0, 4, 4, 0]}
                    barSize={18}
                  />
                   {/* Background bar for the goal - not directly supported by ChartLegend, so we handle it visually only */}
                  <Bar
                    dataKey="ziel"
                    name="Sparziel"
                    fill="var(--color-ziel)"
                    radius={[0, 4, 4, 0]}
                    barSize={18}
                    className="opacity-30"
                  />
                   <ChartLegend content={<ChartLegendContent payload={[{value: 'aktuell', type: 'square', id: 'aktuell', color: 'var(--color-aktuell)'}, {value: 'ziel', type: 'square', id: 'ziel', color: 'var(--color-ziel)', payload: {color: 'var(--color-ziel)'}}].map(p => ({...p, dataKey: p.value}))} />} />
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FinanceCharts;
