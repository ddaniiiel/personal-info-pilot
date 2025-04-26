
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
  stroke?: string;
  fill?: string;
  height?: number;
}

const ChartCard: React.FC<ChartCardProps> = ({ 
  title, 
  data, 
  dataKey, 
  stroke = "#7E69AB", 
  fill = "#9b87f5", 
  height = 300 
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={fill} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={fill} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#999' }}
              />
              <YAxis 
                hide={true}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #f0f0f0',
                  borderRadius: '6px',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey={dataKey} 
                stroke={stroke} 
                strokeWidth={2}
                fillOpacity={1} 
                fill={`url(#color${dataKey})`} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
