
import React, { useState, useEffect } from 'react';
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

  return (
    <div className="dashboard-card h-full flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">
            {format(currentTime, 'HH:mm:ss')}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {format(currentTime, 'EEEE, dd. MMMM yyyy', { locale: de })}
          </p>
        </div>
        <Clock className="h-6 w-6 text-dashboard-purple" />
      </div>
    </div>
  );
};

export default TimeWidget;
