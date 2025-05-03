
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
    return format(currentTime, 'EEEE, dd. MMMM yyyy', { locale: de });
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

  const getWeatherIcon = (condition: string, size = 6) => {
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
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start h-full">
        {/* Time Section */}
        <div className="mb-6 md:mb-0 md:w-1/2 md:pr-6 md:border-r border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-dashboard-purple">Aktuelle Zeit</h3>
            <div className="p-2 bg-dashboard-purple/10 rounded-md">
              <Clock className="h-5 w-5 text-dashboard-purple" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-dashboard-purple mb-2">
              {formattedTime}
            </div>
            <div className="text-sm text-dashboard-purple/80 capitalize">
              {formattedDate}
            </div>
          </div>
        </div>
        
        {/* Weather Section */}
        <div className="md:w-1/2 md:pl-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-dashboard-purple mr-1" />
              <h3 className="text-sm font-semibold text-dashboard-purple">{weatherData.location}</h3>
            </div>
            {getWeatherIcon(weatherData.condition, 5)}
          </div>
          
          <div className="flex items-end mb-4">
            <div className="text-4xl font-bold text-dashboard-purple">
              {weatherData.temperature}°C
            </div>
            <span className="text-sm text-muted-foreground ml-2 mb-1">
              {weatherData.condition === 'sunny' ? 'Sonnig' :
              weatherData.condition === 'cloudy' ? 'Bewölkt' :
              weatherData.condition === 'rainy' ? 'Regnerisch' : 'Gewitter'}
            </span>
          </div>
          
          <div className="border-t border-gray-200 pt-3">
            <h4 className="text-xs text-muted-foreground mb-2">Wettervorhersage</h4>
            <div className="grid grid-cols-3 gap-2">
              {weatherData.forecast.map((day) => (
                <div key={day.day} className="bg-white rounded-md p-2 text-center shadow-sm">
                  <p className="text-xs font-medium text-dashboard-purple">{day.day}</p>
                  <div className="my-1 flex justify-center">
                    {getWeatherIcon(day.condition, 4)}
                  </div>
                  <p className="text-sm font-bold">{day.temp}°C</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TimeWeatherWidget);
