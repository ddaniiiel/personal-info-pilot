
import React from 'react';
import { Bell } from 'lucide-react';

const mockNotifications = [
  {
    id: 1,
    title: 'Neue Förderungsmöglichkeit',
    message: 'Ein neues Förderprogramm für energetische Sanierung ist verfügbar.',
    time: 'vor 1 Stunde',
    read: false
  },
  {
    id: 2,
    title: 'Steuerfristen beachten',
    message: 'Die Frist für die Steuererklärung endet in 30 Tagen.',
    time: 'vor 3 Stunden',
    read: false
  },
  {
    id: 3,
    title: 'Gesetzesänderung',
    message: 'Änderungen beim Mietrecht treten nächsten Monat in Kraft.',
    time: 'vor 1 Tag',
    read: true
  },
  {
    id: 4,
    title: 'Energiespartipp',
    message: 'Neue Analyse zeigt Einsparpotenzial bei Ihrer Heizung.',
    time: 'vor 2 Tagen',
    read: true
  }
];

export const NotificationPanel: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto">
      {mockNotifications.length > 0 ? (
        <div className="divide-y divide-border">
          {mockNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 hover:bg-muted/50 cursor-pointer ${!notification.read ? 'bg-blue-50/50' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 p-1.5 rounded-full ${!notification.read ? 'bg-dashboard-purple/10' : 'bg-muted'}`}>
                  <Bell className={`h-4 w-4 ${!notification.read ? 'text-dashboard-purple' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className={`text-sm font-medium ${!notification.read ? 'text-dashboard-purple' : ''}`}>
                    {notification.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <Bell className="h-12 w-12 text-muted-foreground opacity-20 mb-2" />
          <p className="text-muted-foreground">Keine Benachrichtigungen</p>
        </div>
      )}
    </div>
  );
};
