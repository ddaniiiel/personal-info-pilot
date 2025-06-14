
import React from 'react';
import TimeWeatherWidget from '../TimeWeatherWidget';
import FinanceOverviewWidget from '../FinanceOverviewWidget';
import NewsWidget from '../NewsWidget';
import HelpTooltip from '../HelpTooltip';

const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-6 mb-8">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold">Tagesübersicht</h2>
        <HelpTooltip 
          content="Hier finden Sie die wichtigsten Informationen für heute: Wetter, Finanzen und aktuelle Nachrichten."
          side="right"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <TimeWeatherWidget />
        </div>
        
        <div className="space-y-4">
          <FinanceOverviewWidget />
        </div>
        
        <div className="space-y-4">
          <NewsWidget />
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
