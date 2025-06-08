
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  PiggyBank, 
  Users, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { DashboardStats } from '@/hooks/useDashboardData';

interface QuickStatsSectionProps {
  stats: DashboardStats;
}

const QuickStatsSection: React.FC<QuickStatsSectionProps> = ({ stats }) => {
  const statCards = [
    {
      title: 'Energie heute',
      value: `${stats.energy.todayUsage} kWh`,
      change: stats.energy.change,
      icon: <Zap className="h-5 w-5" />,
      color: stats.energy.status === 'good' ? 'text-green-600' : 
             stats.energy.status === 'warning' ? 'text-amber-600' : 'text-red-600',
      bgColor: stats.energy.status === 'good' ? 'bg-green-100' : 
               stats.energy.status === 'warning' ? 'bg-amber-100' : 'bg-red-100',
      href: '/topics/energie',
      description: stats.energy.change < 0 ? 'Reduziert vs. gestern' : 'Erhöht vs. gestern'
    },
    {
      title: 'Budget übrig',
      value: `${stats.finance.monthlyBudget - stats.finance.spent}€`,
      change: stats.finance.change,
      icon: <PiggyBank className="h-5 w-5" />,
      color: stats.finance.change < 0 ? 'text-green-600' : 'text-amber-600',
      bgColor: stats.finance.change < 0 ? 'bg-green-100' : 'bg-amber-100',
      href: '/finance',
      description: `${Math.round((stats.finance.spent / stats.finance.monthlyBudget) * 100)}% vom Budget verwendet`
    },
    {
      title: 'Familie',
      value: `${stats.family.upcomingEvents} Termine`,
      change: 0,
      icon: <Users className="h-5 w-5" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      href: '/family',
      description: `${stats.family.pendingTasks} offene Aufgaben`
    }
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-dashboard-purple">Schnellübersicht</h2>
        <Badge variant="outline" className="text-xs">
          Aktualisiert vor wenigen Sekunden
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statCards.map((stat, index) => (
          <Card key={index} className="group hover:shadow-md transition-all duration-200 cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                {stat.change !== 0 && (
                  <div className={`flex items-center text-sm ${
                    stat.change < 0 ? 'text-green-600' : 'text-amber-600'
                  }`}>
                    {stat.change < 0 ? (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(stat.change)}%
                  </div>
                )}
              </div>
              
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-dashboard-purple">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
              
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-dashboard-purple hover:text-dashboard-purple-dark"
                  onClick={() => window.location.href = stat.href}
                >
                  Details anzeigen
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default React.memo(QuickStatsSection);
