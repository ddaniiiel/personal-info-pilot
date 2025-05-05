
import React, { useState } from 'react';
import { Calendar, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Event {
  title: string;
  time: string;
  person: string;
  category: 'appointment' | 'school' | 'sport' | 'work';
}

const FamilyEventsWidget: React.FC = () => {
  const [showSyncDialog, setShowSyncDialog] = useState(false);
  
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
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-dashboard-purple" />
          Familienkalender
        </h3>
        <Dialog open={showSyncDialog} onOpenChange={setShowSyncDialog}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
              <CalendarDays className="h-3 w-3 mr-1" /> Sync
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Kalender synchronisieren</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Wählen Sie die Kalender aus, die Sie synchronisieren möchten.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="google-cal" className="rounded" />
                    <label htmlFor="google-cal">Google Kalender</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="outlook-cal" className="rounded" />
                    <label htmlFor="outlook-cal">Outlook Kalender</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="apple-cal" className="rounded" />
                    <label htmlFor="apple-cal">Apple Kalender</label>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <Button onClick={() => setShowSyncDialog(false)}>
                    Synchronisieren
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
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
      
      {/* Mini Calendar View */}
      <div className="bg-gray-50 p-2 rounded mt-2">
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium">
          <div>M</div><div>D</div><div>M</div><div>D</div>
          <div>F</div><div>S</div><div>S</div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {Array.from({ length: 31 }, (_, i) => (
            <div 
              key={i} 
              className={`aspect-square flex items-center justify-center text-[9px] rounded-sm ${
                i === 2 ? 'bg-blue-200 font-medium' : 
                i === 7 ? 'bg-green-200 font-medium' : 
                i === 12 ? 'bg-purple-200 font-medium' : 
                'bg-white'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyEventsWidget;
