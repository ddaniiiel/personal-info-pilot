
import React from 'react';
import { Calendar } from 'lucide-react';

interface Event {
  title: string;
  time: string;
  person: string;
  category: 'appointment' | 'school' | 'sport' | 'work';
}

const FamilyEventsWidget: React.FC = () => {
  const events: Event[] = [
    {
      title: 'Arzttermin',
      time: '14:30 - 15:30',
      person: 'Marie',
      category: 'appointment'
    },
    {
      title: 'Fussballtraining',
      time: '17:00 - 18:30',
      person: 'Thomas',
      category: 'sport'
    },
    {
      title: 'Elternabend Schule',
      time: '19:00 - 21:00',
      person: 'Familie',
      category: 'school'
    },
    {
      title: 'Sitzung bei der Kantonalbank',
      time: '10:00 - 11:30',
      person: 'Anna',
      category: 'work'
    }
  ];

  const getCategoryColor = (category: Event['category']) => {
    switch (category) {
      case 'appointment':
        return 'border-blue-500 bg-blue-50';
      case 'school':
        return 'border-purple-500 bg-purple-50';
      case 'sport':
        return 'border-green-500 bg-green-50';
      case 'work':
        return 'border-amber-500 bg-amber-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  const getCategoryIcon = (category: Event['category']) => {
    // Could be expanded with different icons for each category
    return <Calendar className="h-4 w-4 text-muted-foreground mr-3" />;
  };

  return (
    <div className="space-y-3">
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`flex items-center p-3 border-l-4 rounded ${getCategoryColor(event.category)}`}
        >
          {getCategoryIcon(event.category)}
          <div>
            <div className="flex items-center">
              <p className="font-medium">{event.title}</p>
              <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 ml-2">
                {event.person}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{event.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FamilyEventsWidget;
