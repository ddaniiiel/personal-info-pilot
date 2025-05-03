
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Newspaper } from 'lucide-react';

const NewsWidget = () => {
  // Mock news data - in a real application this would come from an API
  const newsItems = [
    {
      id: 1, 
      title: 'Neues Energiegesetz tritt in Kraft',
      source: 'SRF News',
      time: 'vor 2 Stunden',
      category: 'Politik'
    },
    {
      id: 2, 
      title: 'Lokale Bauarbeiten verzögern sich',
      source: 'Zürich Tagesblatt',
      time: 'vor 3 Stunden',
      category: 'Lokal'
    },
    {
      id: 3, 
      title: 'Steuererhöhung für 2026 geplant',
      source: 'Finanz & Wirtschaft',
      time: 'vor 5 Stunden',
      category: 'Finanzen'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-dashboard-purple">Aktuelle Nachrichten</h3>
        <div className="p-2 bg-dashboard-purple/10 rounded-md">
          <Newspaper className="h-5 w-5 text-dashboard-purple" />
        </div>
      </div>

      <div className="space-y-3">
        {newsItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-3 rounded-md border-l-4 border-dashboard-purple shadow-sm hover:shadow transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-sm">{item.title}</h4>
              <Badge variant="outline" className="text-xs px-1.5 py-0 ml-1 bg-dashboard-purple/5">
                {item.category}
              </Badge>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{item.source}</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(NewsWidget);
