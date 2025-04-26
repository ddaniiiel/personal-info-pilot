
import React from 'react';
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
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-start">
        <div>
          <p className="dashboard-label">{title}</p>
          <p className="dashboard-stat mt-1">{value}</p>
          
          {change && (
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
          )}
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

export default StatCard;
