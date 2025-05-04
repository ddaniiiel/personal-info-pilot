
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
      time: '2 Std',
      category: 'Politik'
    },
    {
      id: 2, 
      title: 'Lokale Bauarbeiten verzögern sich',
      source: 'Zürich Tagesblatt',
      time: '3 Std',
      category: 'Lokal'
    },
    {
      id: 3, 
      title: 'Steuererhöhung für 2026 geplant',
      source: 'Finanz & Wirtschaft',
      time: '5 Std',
      category: 'Finanzen'
    },
    {
      id: 4, 
      title: 'Neuer Umweltschutz-Initiative lanciert',
      source: 'Schweizer Umwelt',
      time: '8 Std',
      category: 'Umwelt'
    }
  ];

  // Map categories to colors
  const categoryColors: Record<string, string> = {
    'Politik': 'bg-blue-500',
    'Lokal': 'bg-green-500',
    'Finanzen': 'bg-purple-500',
    'Umwelt': 'bg-amber-500',
    'default': 'bg-gray-500'
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 transition-all hover:shadow-md animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Newspaper className="h-4 w-4 text-dashboard-purple mr-1.5" />
          <h3 className="text-sm font-semibold text-dashboard-purple">Aktuelle Nachrichten</h3>
        </div>
      </div>

      <div className="space-y-2">
        {newsItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-2.5 rounded-md border-l-2 border-dashboard-purple shadow-sm hover:shadow transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
              <div 
                className={`w-2 h-2 rounded-full ml-1 mt-1 ${categoryColors[item.category] || categoryColors.default}`}
                title={item.category}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="truncate">{item.source}</span>
              <span className="text-dashboard-purple text-xs whitespace-nowrap">vor {item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(NewsWidget);
