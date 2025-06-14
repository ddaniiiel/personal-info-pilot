
import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <Badge 
      variant="outline" 
      className="fixed bottom-4 right-4 z-50 bg-destructive/10 text-destructive border-destructive/20 backdrop-blur-sm animate-fade-in"
    >
      <WifiOff className="h-3 w-3 mr-1" />
      Offline Modus
    </Badge>
  );
};

export default OfflineIndicator;
