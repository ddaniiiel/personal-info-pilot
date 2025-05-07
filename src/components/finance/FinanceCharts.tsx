
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useChartConfig } from '@/hooks/use-chart-config';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';

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
  { name: 'Wohnen', value: 1200, color: '#7E69AB' },  // dashboard-purple
  { name: 'Lebensmittel', value: 450, color: '#0EA5E9' }, // blue
  { name: 'Transport', value: 280, color: '#10b981' }, // green
  { name: 'Versicherungen', value: 320, color: '#F97316' }, // orange
  { name: 'Freizeit', value: 150, color: '#8b5cf6' }, // violet
  { name: 'Sonstiges', value: 220, color: '#6b7280' }, // gray
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
  const { colors, areaChartConfig } = useChartConfig();

  // Formatierung für die Tooltip-Darstellung
  const formatCurrency = (value: number) => {
    return `€${value.toLocaleString('de-DE')}`;
  };

  if (activeTab !== 'overview') return null;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              Finanztrends (letzte 12 Monate)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={financialTrendsData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorEinnahmen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={colors.income} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={colors.income} stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorAusgaben" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={colors.expense} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={colors.expense} stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: colors.muted }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <YAxis 
                    tickFormatter={formatCurrency}
                    tick={{ fill: colors.muted }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), '']}
                    contentStyle={areaChartConfig.tooltipStyle}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="einnahmen"
                    name="Einnahmen"
                    stroke={colors.income}
                    fill="url(#colorEinnahmen)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="ausgaben"
                    name="Ausgaben"
                    stroke={colors.expense}
                    fill="url(#colorAusgaben)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ausgabenverteilung</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseBreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({name, value, percent}) => {
                      return `${name}: ${(percent * 100).toFixed(0)}%`;
                    }}
                  >
                    {expenseBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [formatCurrency(value), 'Ausgaben']}
                    contentStyle={areaChartConfig.tooltipStyle}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Wöchentliche Transaktionen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyTransactionsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={25}
                  barGap={10}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: colors.muted }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <YAxis 
                    tickFormatter={formatCurrency}
                    tick={{ fill: colors.muted }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), '']}
                    contentStyle={areaChartConfig.tooltipStyle}
                  />
                  <Legend />
                  <Bar 
                    dataKey="einnahmen" 
                    name="Einnahmen" 
                    fill={colors.income} 
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="ausgaben" 
                    name="Ausgaben" 
                    fill={colors.expense} 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sparziele</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={savingsGoalsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={25}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={colors.border} />
                  <XAxis 
                    type="number"
                    tickFormatter={formatCurrency}
                    tick={{ fill: colors.muted }}
                    axisLine={{ stroke: colors.border }}
                    tickLine={{ stroke: colors.border }}
                  />
                  <YAxis 
                    dataKey="name"
                    type="category"
                    tick={{ fill: colors.muted }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), '']}
                    contentStyle={areaChartConfig.tooltipStyle}
                  />
                  <Legend />
                  <Bar 
                    dataKey="aktuell" 
                    name="Aktueller Stand" 
                    fill={colors.primary} 
                    radius={[0, 4, 4, 0]}
                    stackId="a"
                  />
                  <Bar 
                    dataKey="ziel" 
                    name="Sparziel" 
                    fill={colors.muted}
                    fillOpacity={0.3}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FinanceCharts;
