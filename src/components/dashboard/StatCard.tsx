
import React, { memo } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive?: boolean;
  };
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  // Determine change indicator component
  const changeIndicator = change && (
    <div className="flex items-center">
      {change.isPositive !== undefined && (
        change.isPositive ? (
          <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
        ) : (
          <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
        )
      )}
      <span className={`text-xs font-medium ${
        change.isPositive ? 'text-green-500' : 
        change.isPositive === false ? 'text-red-500' : 'text-muted-foreground'
      }`}>
        {change.value > 0 ? '+' : ''}{change.value}%
      </span>
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 transition-all hover:shadow-md h-full">
      <div className="flex justify-between items-start">
        {icon && (
          <div className="p-1.5 bg-dashboard-purple/10 rounded-md">
            {icon}
          </div>
        )}
        
        <div className={`flex flex-col items-end ${icon ? 'text-right' : 'text-left w-full'}`}>
          <p className="text-xs text-muted-foreground font-medium mb-1">{title}</p>
          <p className="text-lg font-bold text-dashboard-purple leading-tight">{value}</p>
          {changeIndicator}
        </div>
      </div>
    </div>
  );
};

// Export as memoized component to prevent unnecessary re-renders
export default memo(StatCard);
