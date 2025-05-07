
import React, { useState } from 'react';
import { PiggyBank, ArrowUp, ArrowDown, Info, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useChartConfig } from '@/hooks/use-chart-config';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FinanceOverviewWidget: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { colors, areaChartConfig } = useChartConfig();
  const [activeView, setActiveView] = useState<'balance' | 'expenses'>('balance');
  
  // Mock financial data
  const financialData = {
    savings: '€3,240',
    change: { value: 18, isPositive: true },
    lastUpdated: 'Heute, 08:30',
    upcomingPayments: [
      { title: 'Steuervorauszahlung', date: '20.06', amount: '€650' },
      { title: 'Versicherungsbeitrag', date: '01.07', amount: '€230' }
    ]
  };

  // Mock Daten für Vermögensentwicklung
  const balanceData = [
    { month: 'Jan', value: 2450 },
    { month: 'Feb', value: 2580 },
    { month: 'Mär', value: 2790 },
    { month: 'Apr', value: 2860 },
    { month: 'Mai', value: 3240 },
    { month: 'Jun', value: 3240 }, // Prognose
    { month: 'Jul', value: 3420 }, // Prognose
  ];

  // Mock Daten für Ausgabenkategorien
  const expenseData = [
    { name: 'Wohnen', value: 1200 },
    { name: 'Lebensmittel', value: 450 },
    { name: 'Transport', value: 280 },
    { name: 'Unterhaltung', value: 150 },
    { name: 'Sonstiges', value: 220 },
  ];

  const handleViewDetails = () => {
    navigate('/finance');
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-5 shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <PiggyBank className="h-5 w-5 text-dashboard-purple mr-2" />
          <h3 className="text-base font-semibold text-dashboard-purple">Finanzübersicht</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <Info className="h-4 w-4 text-muted-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Finanzübersicht basierend auf Ihren verknüpften Konten</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-medium text-muted-foreground">Gesamtvermögen</p>
          <div className="flex items-center mb-0.5">
            {financialData.change.isPositive ? (
              <ArrowUp className="h-3 w-3 text-green-500 mr-0.5" />
            ) : (
              <ArrowDown className="h-3 w-3 text-red-500 mr-0.5" />
            )}
            <span className={`text-xs font-medium ${
              financialData.change.isPositive ? 'text-green-500' : 'text-red-500'
            }`}>
              {financialData.change.value}%
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-dashboard-purple leading-tight">{financialData.savings}</span>
          <span className="text-xs text-muted-foreground flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {financialData.lastUpdated}
          </span>
        </div>
      </div>
      
      <Tabs 
        value={activeView} 
        onValueChange={(value) => setActiveView(value as 'balance' | 'expenses')}
        className="mb-3"
      >
        <TabsList className="grid grid-cols-2 h-8">
          <TabsTrigger value="balance" className="text-xs">Entwicklung</TabsTrigger>
          <TabsTrigger value="expenses" className="text-xs">Ausgaben</TabsTrigger>
        </TabsList>
        
        <TabsContent value="balance" className="pt-3">
          <div className="h-[120px] bg-white rounded-md border border-gray-100 p-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={balanceData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorFinance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.primary} stopOpacity={0.6} />
                    <stop offset="95%" stopColor={colors.primary} stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 10, fill: colors.muted }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 10, fill: colors.muted }}
                  tickFormatter={(value) => `€${value}`}
                  tickLine={false}
                  axisLine={false}
                  width={40}
                />
                <RechartsTooltip 
                  formatter={(value: number) => [`€${value}`, 'Vermögen']}
                  contentStyle={areaChartConfig.tooltipStyle}
                  labelFormatter={(label) => `Monat: ${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={colors.primary} 
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorFinance)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-1 text-xs text-center text-muted-foreground">
            <span>Vermögensentwicklung der letzten Monate</span>
          </div>
        </TabsContent>
        
        <TabsContent value="expenses" className="pt-3">
          <div className="h-[120px] bg-white rounded-md border border-gray-100 p-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={expenseData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                barSize={12}
              >
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 9, fill: colors.muted }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 9, fill: colors.muted }}
                  tickFormatter={(value) => `€${value}`}
                  tickLine={false}
                  axisLine={false}
                  width={40}
                />
                <RechartsTooltip 
                  formatter={(value: number) => [`€${value}`, 'Ausgaben']}
                  contentStyle={areaChartConfig.tooltipStyle}
                />
                <Bar 
                  dataKey="value" 
                  fill={colors.expense} 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-1 text-xs text-center text-muted-foreground">
            <span>Hauptausgabenkategorien (monatlich)</span>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Upcoming Payments */}
      <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2">Anstehende Zahlungen</p>
        <div className="space-y-2">
          {financialData.upcomingPayments.map((payment, index) => (
            <div key={index} className="flex justify-between items-center text-xs bg-gray-50 p-2.5 rounded-md border border-gray-100">
              <div>
                <p className="font-medium line-clamp-1">{payment.title}</p>
                <p className="text-muted-foreground text-[10px] mt-0.5">{payment.date}</p>
              </div>
              <span className="font-semibold text-dashboard-purple">{payment.amount}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-right">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs text-dashboard-purple hover:text-dashboard-purple-dark"
          onClick={handleViewDetails}
        >
          <span className="mr-1">Detaillierte Übersicht</span>
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(FinanceOverviewWidget);
