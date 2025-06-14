
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Calendar, CheckCircle } from 'lucide-react';
import { useChartConfig } from '@/hooks/use-chart-config';
import DataSourceCard from '../DataSourceCard';
import HelpTooltip from '../HelpTooltip';

const StatisticsSection: React.FC = () => {
  const { colors, areaChartConfig } = useChartConfig();

  // Sample data with sources
  const monthlyData = [
    { month: 'Jan', tasks: 85, events: 12 },
    { month: 'Feb', tasks: 92, events: 15 },
    { month: 'Mar', tasks: 78, events: 18 },
    { month: 'Apr', tasks: 95, events: 22 },
    { month: 'Mai', tasks: 88, events: 25 },
    { month: 'Jun', tasks: 96, events: 28 }
  ];

  const dataSources = [
    {
      name: 'Dashboard Analytics',
      description: 'Interne Nutzungsstatistiken',
      lastUpdated: '14.06.2025',
      reliability: 'high' as const
    },
    {
      name: 'Bundesamt für Statistik',
      description: 'Schweizer Haushaltserhebung 2024',
      url: 'https://www.bfs.admin.ch',
      lastUpdated: '01.06.2025',
      reliability: 'high' as const
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold">Statistiken & Trends</h2>
        <HelpTooltip 
          content="Diese Statistiken zeigen Ihre persönliche Nutzung und Vergleichswerte aus offiziellen Quellen."
          side="right"
        />
      </div>

      {/* Performance Metrics with Data Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DataSourceCard
          title="Aufgaben-Effizienz"
          value="94%"
          description="Durchschnittliche Erledigungsrate der letzten 6 Monate"
          sources={dataSources}
          trend="up"
          helpText="Zeigt an, wie viele Ihrer geplanten Aufgaben erfolgreich abgeschlossen wurden."
        />
        
        <DataSourceCard
          title="Familienorganisation"
          value="8.7/10"
          description="Bewertung der Haushaltsorganisation"
          sources={[
            {
              name: 'Familien-Feedback',
              description: 'Wöchentliche Selbsteinschätzung',
              lastUpdated: '12.06.2025',
              reliability: 'medium' as const
            }
          ]}
          trend="up"
          helpText="Basiert auf Ihrer wöchentlichen Bewertung der Haushaltsorganisation."
        />
      </div>

      {/* Chart with enhanced tooltips */}
      <Card className="dashboard-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              Monatlicher Verlauf
              <HelpTooltip 
                content="Zeigt die Entwicklung Ihrer Aufgaben und Termine über die letzten 6 Monate."
                side="right"
              />
            </CardTitle>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-dashboard-purple rounded-full"></div>
                <span>Aufgaben</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Termine</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={monthlyData} {...areaChartConfig}>
              <defs>
                <linearGradient id="taskGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colors.primary} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="eventGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.secondary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colors.secondary} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis 
                dataKey="month" 
                stroke={colors.muted}
                fontSize={12}
              />
              <YAxis stroke={colors.muted} fontSize={12} />
              <Tooltip 
                contentStyle={areaChartConfig.tooltipStyle}
                labelFormatter={(label) => `Monat: ${label}`}
                formatter={(value: number, name: string) => [
                  `${value}${name === 'tasks' ? ' Aufgaben' : ' Termine'}`,
                  name === 'tasks' ? 'Erledigte Aufgaben' : 'Termine'
                ]}
              />
              <Area
                type="monotone"
                dataKey="tasks"
                stroke={colors.primary}
                fillOpacity={1}
                fill="url(#taskGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="events"
                stroke={colors.secondary}
                fillOpacity={1}
                fill="url(#eventGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Quick Stats with tooltips */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="dashboard-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="dashboard-label flex items-center gap-1">
                  Aktive Nutzer
                  <HelpTooltip content="Anzahl der Personen in Ihrem Haushalt, die das Dashboard nutzen." />
                </p>
                <p className="dashboard-stat">4</p>
              </div>
              <Users className="h-8 w-8 text-dashboard-purple" />
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="dashboard-label flex items-center gap-1">
                  Termine
                  <HelpTooltip content="Anzahl der Termine in den nächsten 7 Tagen." />
                </p>
                <p className="dashboard-stat">12</p>
              </div>
              <Calendar className="h-8 w-8 text-dashboard-purple" />
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="dashboard-label flex items-center gap-1">
                  Offene Aufgaben
                  <HelpTooltip content="Anzahl der noch nicht erledigten Aufgaben." />
                </p>
                <p className="dashboard-stat">8</p>
              </div>
              <CheckCircle className="h-8 w-8 text-dashboard-purple" />
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="dashboard-label flex items-center gap-1">
                  Fortschritt
                  <HelpTooltip content="Gesamtfortschritt aller laufenden Projekte." />
                </p>
                <p className="dashboard-stat">87%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-dashboard-purple" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsSection;
