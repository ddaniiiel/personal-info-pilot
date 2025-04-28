
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div className="dashboard-card h-32 overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Aktuelle Nachrichten</h3>
        <Newspaper className="h-5 w-5 text-dashboard-purple" />
      </div>

      <div className="space-y-2">
        {newsItems.map((item) => (
          <div key={item.id} className="text-sm border-b pb-1 last:border-b-0">
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-xs">{item.title}</h4>
              <Badge variant="outline" className="text-xs px-1 py-0">{item.category}</Badge>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-0.5">
              <span>{item.source}</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsWidget;
