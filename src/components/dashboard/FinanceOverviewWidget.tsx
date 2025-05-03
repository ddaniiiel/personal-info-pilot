
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, Calendar, ArrowUp, ArrowDown, PiggyBank } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FinanceOverviewWidget: React.FC = () => {
  // Mock financial data
  const financialData = {
    savings: '€3,240',
    change: { value: 18, isPositive: true },
    upcomingDeadlines: [
      { title: 'Steuervorauszahlung', date: '20.06.2025', amount: '€650' },
      { title: 'Versicherungsbeitrag', date: '01.07.2025', amount: '€230' }
    ],
    expenseData: [
      { name: 'Jan', value: 1200 },
      { name: 'Feb', value: 1100 },
      { name: 'Mär', value: 1300 },
      { name: 'Apr', value: 950 },
      { name: 'Mai', value: 1000 }
    ]
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-dashboard-purple">Finanzübersicht</h3>
        <div className="p-2 bg-dashboard-purple/10 rounded-md">
          <PiggyBank className="h-5 w-5 text-dashboard-purple" />
        </div>
      </div>
      
      {/* Savings Overview */}
      <div className="bg-white p-4 rounded-md shadow-sm mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium text-muted-foreground">Gesamte Einsparungen</h4>
          <Coins className="h-4 w-4 text-dashboard-purple" />
        </div>
        <div className="flex items-end mt-1">
          <span className="text-2xl font-bold text-dashboard-purple">{financialData.savings}</span>
          <div className="flex items-center ml-2 mb-1">
            {financialData.change.isPositive ? (
              <ArrowUp className="h-3 w-3 text-green-500" />
            ) : (
              <ArrowDown className="h-3 w-3 text-red-500" />
            )}
            <span className={`text-xs font-medium ${
              financialData.change.isPositive ? 'text-green-500' : 'text-red-500'
            }`}>
              {financialData.change.value}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Upcoming Deadlines */}
      <div className="bg-white p-4 rounded-md shadow-sm mb-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm font-medium text-muted-foreground">Anstehende Termine</h4>
          <Calendar className="h-4 w-4 text-dashboard-purple" />
        </div>
        <div className="space-y-2">
          {financialData.upcomingDeadlines.map((deadline, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0 last:pb-0">
              <div>
                <p className="text-xs font-medium">{deadline.title}</p>
                <p className="text-xs text-muted-foreground">{deadline.date}</p>
              </div>
              <span className="text-sm font-semibold text-dashboard-purple">{deadline.amount}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Expenses Chart */}
      <div className="bg-white p-3 rounded-md shadow-sm">
        <h4 className="text-xs font-medium text-muted-foreground mb-2">Ausgaben der letzten Monate</h4>
        <div style={{ width: '100%', height: 100 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={financialData.expenseData}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7E69AB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fill: '#999' }}
                dy={5}
              />
              <YAxis hide={true} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #f0f0f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  padding: '4px 8px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#7E69AB" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorExpense)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FinanceOverviewWidget);
