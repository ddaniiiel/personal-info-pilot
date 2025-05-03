
import React, { useState, useEffect, useMemo } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Clock } from 'lucide-react';

const TimeWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Memoize formatted time and date to prevent unnecessary re-renders
  const formattedTime = useMemo(() => {
    return format(currentTime, 'HH:mm:ss');
  }, [currentTime]);
  
  const formattedDate = useMemo(() => {
    return format(currentTime, 'EEEE, dd. MMMM yyyy', { locale: de });
  }, [currentTime]);

  const formattedDay = useMemo(() => {
    return format(currentTime, 'EEEE', { locale: de });
  }, [currentTime]);

  const formattedDayMonth = useMemo(() => {
    return format(currentTime, 'dd. MMMM', { locale: de });
  }, [currentTime]);

  const formattedYear = useMemo(() => {
    return format(currentTime, 'yyyy', { locale: de });
  }, [currentTime]);

  return (
    <div className="h-full w-full bg-gradient-to-br from-dashboard-purple/5 to-dashboard-purple/20 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-dashboard-purple">Aktuelle Zeit</h3>
        <div className="p-2 bg-dashboard-purple/10 rounded-md">
          <Clock className="h-5 w-5 text-dashboard-purple" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-4xl font-bold text-dashboard-purple mb-1">
          {formattedTime}
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-medium text-dashboard-purple/90 capitalize">{formattedDay}</span>
          <div className="flex items-center text-muted-foreground">
            <span>{formattedDayMonth}</span>
            <span className="mx-1">•</span>
            <span>{formattedYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export as memoized component to prevent unnecessary re-renders
export default React.memo(TimeWidget);
