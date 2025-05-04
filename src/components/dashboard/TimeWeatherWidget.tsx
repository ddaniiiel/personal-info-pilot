
import React, { useState, useEffect, useMemo } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Clock, Sun, Cloud, CloudRain, CloudLightning, MapPin } from 'lucide-react';

const TimeWeatherWidget: React.FC = () => {
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
    return format(currentTime, 'EEEE, dd. MMMM', { locale: de });
  }, [currentTime]);

  // Weather data (mock data, would come from API in real application)
  const weatherData = useMemo(() => ({
    temperature: 22,
    condition: 'sunny',
    location: 'Zürich',
    forecast: [
      { day: 'Heute', temp: 22, condition: 'sunny' },
      { day: 'Morgen', temp: 20, condition: 'cloudy' },
      { day: 'Übermorgen', temp: 18, condition: 'rainy' }
    ]
  }), []);

  const getWeatherIcon = (condition: string, size = 5) => {
    switch (condition) {
      case 'sunny':
        return <Sun className={`h-${size} w-${size} text-yellow-500`} />;
      case 'cloudy':
        return <Cloud className={`h-${size} w-${size} text-gray-500`} />;
      case 'rainy':
        return <CloudRain className={`h-${size} w-${size} text-blue-500`} />;
      case 'storm':
        return <CloudLightning className={`h-${size} w-${size} text-purple-500`} />;
      default:
        return <Sun className={`h-${size} w-${size} text-yellow-500`} />;
    }
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 transition-all hover:shadow-md animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-dashboard-purple mr-1.5" />
          <h3 className="text-sm font-semibold text-dashboard-purple">Zeit & Wetter</h3>
        </div>
        <div className="flex items-center">
          <MapPin className="h-3 w-3 text-dashboard-purple mr-1" />
          <span className="text-xs font-medium text-dashboard-purple">{weatherData.location}</span>
        </div>
      </div>
      
      <div className="flex gap-3">
        {/* Time Section */}
        <div className="w-1/2 bg-white rounded-md p-2.5 shadow-sm">
          <div className="text-2xl font-bold text-dashboard-purple mb-1 leading-tight">
            {formattedTime}
          </div>
          <div className="text-xs text-dashboard-purple/80 capitalize truncate">
            {formattedDate}
          </div>
        </div>
        
        {/* Current Weather */}
        <div className="w-1/2 bg-white rounded-md p-2.5 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-dashboard-purple leading-tight">
              {weatherData.temperature}°C
            </div>
            {getWeatherIcon(weatherData.condition)}
          </div>
          <div className="text-xs text-dashboard-purple/80">
            {weatherData.condition === 'sunny' ? 'Sonnig' :
             weatherData.condition === 'cloudy' ? 'Bewölkt' :
             weatherData.condition === 'rainy' ? 'Regnerisch' : 'Gewitter'}
          </div>
        </div>
      </div>
      
      {/* Forecast Row */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        {weatherData.forecast.map((day) => (
          <div key={day.day} className="bg-white rounded-md p-2 text-center shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-dashboard-purple leading-none">{day.day}</p>
              <p className="text-xs font-bold leading-tight">{day.temp}°C</p>
            </div>
            <div className="flex justify-center">
              {getWeatherIcon(day.condition, 4)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(TimeWeatherWidget);
