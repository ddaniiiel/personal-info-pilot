
import React from 'react';
import { PiggyBank, Calendar, ArrowUp, ArrowDown } from 'lucide-react';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';

const FinanceOverviewWidget: React.FC = () => {
  // Mock financial data
  const financialData = {
    savings: '€3,240',
    change: { value: 18, isPositive: true },
    upcomingDeadlines: [
      { title: 'Steuervorauszahlung', date: '20.06', amount: '€650' },
      { title: 'Versicherungsbeitrag', date: '01.07', amount: '€230' }
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
    <div className="h-full w-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 transition-all hover:shadow-md animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <PiggyBank className="h-4 w-4 text-dashboard-purple mr-1.5" />
          <h3 className="text-sm font-semibold text-dashboard-purple">Finanzübersicht</h3>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Savings Overview */}
        <div className="bg-white p-2.5 rounded-md shadow-sm">
          <p className="text-xs font-medium text-muted-foreground mb-1">Gesamte Einsparungen</p>
          <div className="flex items-end">
            <span className="text-2xl font-bold text-dashboard-purple leading-tight">{financialData.savings}</span>
            <div className="flex items-center ml-2 mb-0.5">
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
          
          {/* Mini Chart */}
          <div style={{ width: '100%', height: 30 }} className="mt-1 -mb-1 -ml-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financialData.expenseData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#7E69AB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide={true} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#7E69AB" 
                  strokeWidth={1}
                  fillOpacity={1} 
                  fill="url(#colorExpense)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Upcoming Deadlines */}
        <div className="bg-white p-2.5 rounded-md shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xs font-medium text-muted-foreground">Anstehende Termine</p>
            <Calendar className="h-3 w-3 text-dashboard-purple" />
          </div>
          <div className="space-y-1.5">
            {financialData.upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex justify-between items-center text-xs">
                <div>
                  <p className="font-medium line-clamp-1">{deadline.title}</p>
                  <p className="text-muted-foreground text-[10px]">{deadline.date}</p>
                </div>
                <span className="font-semibold text-dashboard-purple">{deadline.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Monthly Stats */}
      <div className="mt-2 bg-white p-2.5 rounded-md shadow-sm">
        <p className="text-xs font-medium text-muted-foreground mb-1.5">Monatliche Ausgaben</p>
        <div className="grid grid-cols-5 gap-1">
          {financialData.expenseData.map((data, index) => (
            <div key={index} className="text-center">
              <div 
                className="mx-auto w-full bg-dashboard-purple/10 rounded-sm relative"
                style={{ height: '24px' }}
              >
                <div 
                  className="absolute bottom-0 left-0 w-full bg-dashboard-purple rounded-sm"
                  style={{ height: `${(data.value / 1300) * 100}%` }}
                />
              </div>
              <p className="text-[10px] mt-1 text-muted-foreground">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FinanceOverviewWidget);
