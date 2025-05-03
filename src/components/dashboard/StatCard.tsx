
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
  // Determine change indicator component once using useMemo
  const changeIndicator = change && (
    <div className="flex items-center mt-1">
      {change.isPositive !== undefined && (
        change.isPositive ? (
          <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
        ) : (
          <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
        )
      )}
      <span className={`text-sm font-medium ${
        change.isPositive ? 'text-green-500' : 
        change.isPositive === false ? 'text-red-500' : 'text-muted-foreground'
      }`}>
        {change.value > 0 ? '+' : ''}{change.value}%
      </span>
    </div>
  );

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start h-full">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-2xl font-bold text-dashboard-purple mt-1">{value}</p>
          {changeIndicator}
        </div>
        
        {icon && (
          <div className="p-2 bg-dashboard-purple/10 rounded-md">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

// Export as memoized component to prevent unnecessary re-renders
export default memo(StatCard);
