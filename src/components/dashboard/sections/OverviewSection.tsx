
import React from 'react';
import TimeWeatherWidget from '../TimeWeatherWidget';
import FinanceOverviewWidget from '../FinanceOverviewWidget';
import NewsWidget from '../NewsWidget';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Bolt, Droplet, Flame, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ConsumptionStat {
  title: string;
  value: string;
  change: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
  trend: 'up' | 'down';
  status: 'good' | 'warning' | 'critical';
}

const OverviewSection: React.FC = () => {
  const consumptionStats: ConsumptionStat[] = [
    {
      title: 'Strom',
      value: '28.5',
      change: -5.2,
      unit: 'kWh',
      icon: <Bolt className="h-4 w-4 text-white" />,
      color: 'bg-amber-500',
      trend: 'down',
      status: 'good'
    },
    {
      title: 'Wasser',
      value: '45',
      change: 2.1,
      unit: 'm³',
      icon: <Droplet className="h-4 w-4 text-white" />,
      color: 'bg-blue-500',
      trend: 'up',
      status: 'warning'
    },
    {
      title: 'Heizung',
      value: '120',
      change: -10.5,
      unit: 'l',
      icon: <Flame className="h-4 w-4 text-white" />,
      color: 'bg-red-500',
      trend: 'down',
      status: 'good'
    },
    {
      title: 'Recycling',
      value: '85',
      change: 15.3,
      unit: '%',
      icon: <Trash2 className="h-4 w-4 text-white" />,
      color: 'bg-green-500',
      trend: 'up',
      status: 'good'
    }
  ];

  const getStatusBadge = (status: ConsumptionStat['status']) => {
    switch (status) {
      case 'good': return <Badge variant="outline" className="text-green-600 border-green-200">Gut</Badge>;
      case 'warning': return <Badge variant="outline" className="text-amber-600 border-amber-200">Achtung</Badge>;
      case 'critical': return <Badge variant="destructive">Kritisch</Badge>;
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-dashboard-purple">Aktuelle Übersicht</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Ihre wichtigsten Kennzahlen auf einen Blick
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          Aktualisiert: {new Date().toLocaleTimeString('de-DE', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
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
            Detailanalyse anzeigen
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {consumptionStats.map((stat, index) => (
            <Card key={index} className="bg-white border shadow-sm hover:shadow-md transition-all duration-200 group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`p-1.5 rounded-md ${stat.color} mr-2`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-sm font-medium">{stat.title}</h3>
                  </div>
                  {getStatusBadge(stat.status)}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div className="text-2xl font-bold text-dashboard-purple">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.unit}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center text-xs font-medium ${
                      stat.change < 0 ? 'text-green-600' : 'text-amber-600'
                    }`}>
                      {stat.trend === 'down' ? (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      )}
                      {Math.abs(stat.change)}%
                    </div>
                    <div className="text-xs text-muted-foreground">vs. Vormonat</div>
                  </div>
                  
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stat.color} transition-all duration-500`} 
                      style={{ width: `${Math.min(100, Math.abs(stat.change) * 5 + 40)}%` }}
                    ></div>
                  </div>
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
