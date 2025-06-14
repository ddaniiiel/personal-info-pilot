
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Database, TrendingUp } from 'lucide-react';
import HelpTooltip from './HelpTooltip';

interface DataSource {
  name: string;
  description: string;
  url?: string;
  lastUpdated?: string;
  reliability?: 'high' | 'medium' | 'low';
}

interface DataSourceCardProps {
  title: string;
  value: string | number;
  description?: string;
  sources: DataSource[];
  trend?: 'up' | 'down' | 'stable';
  helpText?: string;
}

const DataSourceCard: React.FC<DataSourceCardProps> = ({
  title,
  value,
  description,
  sources,
  trend,
  helpText
}) => {
  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
    return null;
  };

  const getReliabilityColor = (reliability?: string) => {
    switch (reliability) {
      case 'high': return 'bg-green-100 text-green-800 border-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            {title}
            {helpText && <HelpTooltip content={helpText} />}
          </CardTitle>
          {getTrendIcon()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-2xl font-bold text-dashboard-purple">{value}</div>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          
          <div className="border-t pt-3">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-dashboard-purple" />
              <span className="text-sm font-medium">Datenquellen:</span>
            </div>
            <div className="space-y-2">
              {sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  <div className="flex-1">
                    <div className="font-medium">{source.name}</div>
                    <div className="text-muted-foreground">{source.description}</div>
                    {source.lastUpdated && (
                      <div className="text-muted-foreground">
                        Aktualisiert: {source.lastUpdated}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {source.reliability && (
                      <Badge variant="outline" className={getReliabilityColor(source.reliability)}>
                        {source.reliability === 'high' ? 'Hoch' : 
                         source.reliability === 'medium' ? 'Mittel' : 'Niedrig'}
                      </Badge>
                    )}
                    {source.url && (
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dashboard-purple hover:text-dashboard-purple-dark"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSourceCard;
