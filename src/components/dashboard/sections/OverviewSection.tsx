
import React from 'react';
import TimeWeatherWidget from '../TimeWeatherWidget';
import FinanceOverviewWidget from '../FinanceOverviewWidget';
import NewsWidget from '../NewsWidget';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Bolt, Droplet, Flame, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConsumptionStat {
  title: string;
  value: string;
  change: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

const OverviewSection: React.FC = () => {
  const consumptionStats: ConsumptionStat[] = [
    {
      title: 'Strom',
      value: '350',
      change: -5.2,
      unit: 'kWh',
      icon: <Bolt className="h-4 w-4 text-white" />,
      color: 'bg-yellow-500'
    },
    {
      title: 'Wasser',
      value: '45',
      change: 2.1,
      unit: 'm³',
      icon: <Droplet className="h-4 w-4 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Heizung',
      value: '120',
      change: -10.5,
      unit: 'l',
      icon: <Flame className="h-4 w-4 text-white" />,
      color: 'bg-red-500'
    },
    {
      title: 'Recycling',
      value: '85',
      change: 15.3,
      unit: '%',
      icon: <Trash2 className="h-4 w-4 text-white" />,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-dashboard-purple">Übersicht</h2>
        <div className="text-sm text-muted-foreground">
          Letzte Aktualisierung: {new Date().toLocaleTimeString('de-DE')}
        </div>
      </div>
      
      {/* Top widgets row with consistent heights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="h-full">
          <TimeWeatherWidget />
        </div>
        
        <div className="h-full">
          <FinanceOverviewWidget />
        </div>
        
        <div className="h-full">
          <NewsWidget />
        </div>
      </div>
      
      {/* Energy Consumption Stats */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold flex items-center text-dashboard-purple">
            <Lightbulb className="h-5 w-5 mr-2" />
            Energieverbrauch & Nachhaltigkeit
          </h2>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-dashboard-purple hover:bg-dashboard-purple/10 border-dashboard-purple"
          >
            Alle Details anzeigen
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {consumptionStats.map((stat, index) => (
            <Card key={index} className="bg-white border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`p-1.5 rounded-md ${stat.color} mr-2`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-sm font-medium">{stat.title}</h3>
                  </div>
                  <div className={`text-xs font-medium ${stat.change < 0 ? 'text-green-600' : 'text-amber-600'}`}>
                    {stat.change < 0 ? '↓' : '↑'} {Math.abs(stat.change)}%
                  </div>
                </div>
                <div className="flex justify-between items-end mb-2">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.unit}</div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${stat.color}`} 
                    style={{ width: `${stat.change < 0 ? 75 : 60}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground">
                  Verglichen mit dem Vormonat
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(OverviewSection);
