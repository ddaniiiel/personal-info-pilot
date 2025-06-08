
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Calendar, CheckCircle, Clock } from 'lucide-react';
import { TodayPriority } from '@/hooks/useDashboardData';

interface TodayPrioritiesSectionProps {
  priorities: TodayPriority[];
}

const TodayPrioritiesSection: React.FC<TodayPrioritiesSectionProps> = ({ priorities }) => {
  const getIcon = (type: TodayPriority['type']) => {
    switch (type) {
      case 'alert': return <AlertTriangle className="h-4 w-4" />;
      case 'event': return <Calendar className="h-4 w-4" />;
      case 'task': return <CheckCircle className="h-4 w-4" />;
      case 'reminder': return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getUrgencyColor = (urgency: TodayPriority['urgency']) => {
    switch (urgency) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-amber-500 bg-amber-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getBadgeVariant = (urgency: TodayPriority['urgency']) => {
    switch (urgency) {
      case 'high': return 'destructive' as const;
      case 'medium': return 'default' as const;
      case 'low': return 'secondary' as const;
      default: return 'outline' as const;
    }
  };

  if (priorities.length === 0) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg text-dashboard-purple flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
            Alles erledigt!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Sie haben heute keine wichtigen Aufgaben. Genießen Sie Ihren Tag!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6 border-dashboard-purple/20">
      <CardHeader>
        <CardTitle className="text-lg text-dashboard-purple flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Wichtig heute
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {priorities.slice(0, 3).map((priority) => (
            <div
              key={priority.id}
              className={`p-3 rounded-lg border-l-4 transition-all hover:shadow-sm ${getUrgencyColor(priority.urgency)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="mt-1">
                    {getIcon(priority.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-sm">{priority.title}</h4>
                      <Badge variant={getBadgeVariant(priority.urgency)} className="text-xs">
                        {priority.urgency === 'high' ? 'Dringend' : 
                         priority.urgency === 'medium' ? 'Wichtig' : 'Normal'}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{priority.description}</p>
                    {priority.deadline && (
                      <p className="text-xs text-dashboard-purple font-medium">
                        Frist: {priority.deadline}
                      </p>
                    )}
                  </div>
                </div>
                {priority.action && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={priority.action.onClick}
                    className="text-dashboard-purple hover:text-dashboard-purple-dark ml-2 shrink-0"
                  >
                    {priority.action.label}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        {priorities.length > 3 && (
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm">
              {priorities.length - 3} weitere Aufgaben anzeigen
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default React.memo(TodayPrioritiesSection);
