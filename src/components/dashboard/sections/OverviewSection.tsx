
import React from 'react';
import TimeWeatherWidget from '../TimeWeatherWidget';
import FinanceOverviewWidget from '../FinanceOverviewWidget';
import NewsWidget from '../NewsWidget';

const OverviewSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="h-[220px]">
        <TimeWeatherWidget />
      </div>
      <div className="h-[220px]">
        <FinanceOverviewWidget />
      </div>
      <div className="h-[220px]">
        <NewsWidget />
      </div>
    </div>
  );
};

export default React.memo(OverviewSection);
