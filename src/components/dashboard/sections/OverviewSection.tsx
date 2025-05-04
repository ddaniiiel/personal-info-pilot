
import React from 'react';
import TimeWeatherWidget from '../TimeWeatherWidget';
import FinanceOverviewWidget from '../FinanceOverviewWidget';
import NewsWidget from '../NewsWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OverviewSection: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-medium">Übersicht</h2>
        <div className="text-sm text-muted-foreground">
          Letzte Aktualisierung: {new Date().toLocaleTimeString('de-DE')}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="border-0 shadow-none p-0 bg-transparent">
          <CardContent className="p-0 h-[220px]">
            <TimeWeatherWidget />
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-none p-0 bg-transparent">
          <CardContent className="p-0 h-[220px]">
            <FinanceOverviewWidget />
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-none p-0 bg-transparent">
          <CardContent className="p-0 h-[220px]">
            <NewsWidget />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default React.memo(OverviewSection);
