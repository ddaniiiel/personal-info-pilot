
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Newspaper, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NewsWidget = () => {
  const { toast } = useToast();
  
  // Mock news data - in a real application this would come from an API
  const newsItems = [
    {
      id: 1, 
      title: 'Neues Energiegesetz tritt in Kraft',
      source: 'SRF News',
      time: '2 Std',
      category: 'Politik',
      url: '#'
    },
    {
      id: 2, 
      title: 'Lokale Bauarbeiten verzögern sich',
      source: 'Zürich Tagesblatt',
      time: '3 Std',
      category: 'Lokal',
      url: '#'
    },
    {
      id: 3, 
      title: 'Steuererhöhung für 2026 geplant',
      source: 'Finanz & Wirtschaft',
      time: '5 Std',
      category: 'Finanzen',
      url: '#'
    },
    {
      id: 4, 
      title: 'Neuer Umweltschutz-Initiative lanciert',
      source: 'Schweizer Umwelt',
      time: '8 Std',
      category: 'Umwelt',
      url: '#'
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
  
  const handleReadMore = () => {
    toast({
      title: "Weitere Nachrichten",
      description: "Alle aktuellen Nachrichten werden geladen...",
    });
  };
  
  const handleNewsClick = (item: typeof newsItems[0]) => {
    toast({
      title: `${item.title}`,
      description: `Nachricht aus der Kategorie ${item.category} wird geöffnet...`,
    });
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 transition-all hover:shadow-md animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Newspaper className="h-4 w-4 text-dashboard-purple mr-1.5" />
          <h3 className="text-sm font-semibold text-dashboard-purple">Aktuelle Nachrichten</h3>
        </div>
        <Badge variant="outline" className="text-[10px]">Live Updates</Badge>
      </div>

      <div className="space-y-2 mb-2">
        {newsItems.map((item) => (
          <button 
            key={item.id} 
            className="bg-white w-full p-2.5 rounded-md border-l-2 border-dashboard-purple shadow-sm hover:shadow transition-shadow duration-200 text-left"
            onClick={() => handleNewsClick(item)}
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
              <span className="text-dashboard-purple text-xs whitespace-nowrap flex items-center">
                vor {item.time}
              </span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="text-right">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-dashboard-purple text-xs hover:text-dashboard-purple-dark"
          onClick={handleReadMore}
        >
          Alle Nachrichten <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </div>
      
      <div className="text-[10px] text-muted-foreground text-right mt-1">
        Quellen: SRF, Tageszeitungen
      </div>
    </div>
  );
};

export default React.memo(NewsWidget);
