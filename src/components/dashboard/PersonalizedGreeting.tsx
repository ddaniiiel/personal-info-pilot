
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sun, Moon, Cloud, Sunrise } from 'lucide-react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

interface PersonalizedGreetingProps {
  greeting: string;
  currentTime: Date;
  isLoggedIn: boolean;
}

const PersonalizedGreeting: React.FC<PersonalizedGreetingProps> = ({ 
  greeting, 
  currentTime, 
  isLoggedIn 
}) => {
  const hour = currentTime.getHours();
  
  const getTimeIcon = () => {
    if (hour >= 6 && hour < 12) return <Sunrise className="h-5 w-5" />;
    if (hour >= 12 && hour < 18) return <Sun className="h-5 w-5" />;
    if (hour >= 18 && hour < 22) return <Cloud className="h-5 w-5" />;
    return <Moon className="h-5 w-5" />;
  };

  const getTimeMessage = () => {
    if (hour >= 6 && hour < 9) return "Starten Sie gut in den Tag!";
    if (hour >= 9 && hour < 12) return "Einen produktiven Vormittag!";
    if (hour >= 12 && hour < 14) return "Zeit für eine Pause?";
    if (hour >= 14 && hour < 18) return "Der Nachmittag ist da!";
    if (hour >= 18 && hour < 22) return "Entspannen Sie sich!";
    return "Gute Nacht und süße Träume!";
  };

  const getGradientClass = () => {
    if (hour >= 6 && hour < 12) return "from-amber-50 to-orange-50";
    if (hour >= 12 && hour < 18) return "from-blue-50 to-indigo-50";
    if (hour >= 18 && hour < 22) return "from-purple-50 to-pink-50";
    return "from-slate-50 to-gray-100";
  };

  return (
    <Card className={`mb-6 bg-gradient-to-r ${getGradientClass()} border-dashboard-purple/20`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/50 rounded-lg">
              {getTimeIcon()}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-dashboard-purple mb-1">
                {greeting}
              </h1>
              <p className="text-sm text-muted-foreground">
                {getTimeMessage()}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-lg font-semibold text-dashboard-purple">
              {format(currentTime, 'HH:mm')}
            </p>
            <p className="text-sm text-muted-foreground">
              {format(currentTime, 'EEEE, dd. MMMM', { locale: de })}
            </p>
            {!isLoggedIn && (
              <Badge variant="outline" className="mt-2 text-xs">
                Gastzugang
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(PersonalizedGreeting);
