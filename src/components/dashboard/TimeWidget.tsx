
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

const TimeWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard-card">
      <div className="text-center">
        <p className="text-3xl font-bold">
          {format(currentTime, 'HH:mm:ss')}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {format(currentTime, 'EEEE, dd. MMMM yyyy', { locale: de })}
        </p>
      </div>
    </div>
  );
};

export default TimeWidget;
