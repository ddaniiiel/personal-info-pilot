
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

  return (
    <div className="flex items-center justify-between h-full w-full">
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-bold text-dashboard-purple">
          {formattedTime}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {formattedDate}
        </p>
      </div>
      <div className="p-2 bg-dashboard-purple/10 rounded-md">
        <Clock className="h-5 w-5 text-dashboard-purple" />
      </div>
    </div>
  );
};

// Export as memoized component to prevent unnecessary re-renders
export default React.memo(TimeWidget);
