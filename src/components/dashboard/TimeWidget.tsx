
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Clock, Calendar } from 'lucide-react';

const TimeWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Optimized time update - only every 30 seconds for better performance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  // Memoize formatted values to prevent unnecessary re-renders
  const timeData = useMemo(() => {
    const time = format(currentTime, 'HH:mm');
    const day = format(currentTime, 'EEEE', { locale: de });
    const date = format(currentTime, 'dd. MMMM', { locale: de });
    const year = format(currentTime, 'yyyy', { locale: de });
    
    return { time, day, date, year };
  }, [currentTime]);

  const getTimeGradient = useCallback(() => {
    const hour = currentTime.getHours();
    if (hour >= 6 && hour < 12) return 'from-amber-100 to-orange-100';
    if (hour >= 12 && hour < 18) return 'from-blue-100 to-indigo-100';
    if (hour >= 18 && hour < 22) return 'from-purple-100 to-pink-100';
    return 'from-slate-100 to-gray-200';
  }, [currentTime]);

  return (
    <div className={`h-full w-full bg-gradient-to-br ${getTimeGradient()} rounded-lg p-6 transition-all duration-300 hover:shadow-md border border-white/20`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-white/30 rounded-md backdrop-blur-sm">
            <Clock className="h-4 w-4 text-dashboard-purple" />
          </div>
          <h3 className="text-sm font-semibold text-dashboard-purple">Aktuelle Zeit</h3>
        </div>
        <div className="p-1.5 bg-white/20 rounded-md">
          <Calendar className="h-3 w-3 text-dashboard-purple/70" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-3xl font-bold text-dashboard-purple mb-2 tracking-tight">
          {timeData.time}
        </div>
        <div className="flex flex-col text-sm space-y-1">
          <span className="font-medium text-dashboard-purple/90 capitalize">
            {timeData.day}
          </span>
          <div className="flex items-center text-muted-foreground">
            <span>{timeData.date}</span>
            <span className="mx-1.5 text-dashboard-purple/50">•</span>
            <span>{timeData.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TimeWidget);
