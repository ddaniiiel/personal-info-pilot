
import React from 'react';
import { Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react';

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

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'storm':
        return <CloudLightning className="h-6 w-6 text-purple-500" />;
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{weatherData.location}</h3>
          <p className="text-3xl font-bold">{weatherData.temperature}°C</p>
        </div>
        {getWeatherIcon(weatherData.condition)}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {weatherData.forecast.map((day) => (
          <div key={day.day} className="text-center">
            <p className="text-sm text-muted-foreground">{day.day}</p>
            <div className="my-1">{getWeatherIcon(day.condition)}</div>
            <p className="text-sm font-medium">{day.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
