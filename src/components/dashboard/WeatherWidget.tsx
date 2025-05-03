
import React from 'react';
import { Sun, Cloud, CloudRain, CloudLightning, MapPin } from 'lucide-react';

const WeatherWidget = () => {
  const weatherData = {
    temperature: 22,
    condition: 'sunny',
    location: 'Zürich',
    forecast: [
      { day: 'Heute', temp: 22, condition: 'sunny' },
      { day: 'Morgen', temp: 20, condition: 'cloudy' },
      { day: 'Übermorgen', temp: 18, condition: 'rainy' }
    ]
  };

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
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
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
  );
};

export default React.memo(WeatherWidget);
