
import React, { useState, useEffect, memo } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Clock } from 'lucide-react';

const TimeWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Memoize formatted time strings to prevent unnecessary re-renders
  const formattedTime = format(currentTime, 'HH:mm:ss');
  const formattedDate = format(currentTime, 'EEEE, dd. MMMM yyyy', { locale: de });

  return (
    <div className="dashboard-card h-32 flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">
            {formattedTime}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {formattedDate}
          </p>
        </div>
        <Clock className="h-5 w-5 text-dashboard-purple" />
      </div>
    </div>
  );
};

// Export as memoized component to prevent unnecessary re-renders
export default memo(TimeWidget);
