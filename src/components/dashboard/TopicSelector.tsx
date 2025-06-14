
import React, { useRef, useEffect, useState, memo, useCallback } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, Users, Book, GraduationCap, Lightbulb, PiggyBank, 
  Briefcase, Heart, Globe, Settings, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const TopicSelector: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  // Optimiertes Scroll-Verhalten mit useCallback
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    setScrollPosition(scrollLeft);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Finde aktives Element und scrolle zu ihm beim initialen Rendering
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const activeNavItem = scrollContainer.querySelector('[aria-current="page"]');
    if (!activeNavItem) return;
    
    // Berechne Position, um aktives Element in die Mitte zu scrollen
    const containerWidth = scrollContainer.clientWidth;
    const itemLeft = (activeNavItem as HTMLElement).offsetLeft;
    const itemWidth = (activeNavItem as HTMLElement).clientWidth;
    const scrollTo = itemLeft - (containerWidth / 2) + (itemWidth / 2);
    
    // Verwende smooth-scroll Verhalten für bessere UX
    scrollContainer.scrollTo({
      left: Math.max(0, scrollTo),
      behavior: 'smooth'
    });
    
    // Update scroll indicators
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    setCanScrollLeft(scrollTo > 10);
    setCanScrollRight(scrollTo < maxScroll - 10);
  }, [pathname]);
  
  // Topic-Items mit ihren Routen und Icons
  const topicItems = [
    { href: '/', icon: <Home className="h-3.5 w-3.5 mr-1.5" />, label: 'Dashboard' },
    { href: '/finance', icon: <PiggyBank className="h-3.5 w-3.5 mr-1.5" />, label: 'Finanzen' },
    { href: '/family', icon: <Users className="h-3.5 w-3.5 mr-1.5" />, label: 'Familie' },
    { href: '/topics/bildung', icon: <Book className="h-3.5 w-3.5 mr-1.5" />, label: 'Bildung' },
    { href: '/topics/energie', icon: <Lightbulb className="h-3.5 w-3.5 mr-1.5" />, label: 'Energie' },
    { href: '/topics/vorsorge', icon: <Settings className="h-3.5 w-3.5 mr-1.5" />, label: 'Vorsorge' },
    { href: '/topics/arbeit', icon: <Briefcase className="h-3.5 w-3.5 mr-1.5" />, label: 'Arbeit & Karriere' },
    { href: '/topics/gesundheit', icon: <Heart className="h-3.5 w-3.5 mr-1.5" />, label: 'Gesundheit' },
    { href: '/topics/freizeit', icon: <Globe className="h-3.5 w-3.5 mr-1.5" />, label: 'Freizeit & Reisen' },
  ];

  return (
    <div className="relative w-full">
      {/* Mobile scroll buttons */}
      {canScrollLeft && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 md:hidden bg-white/90 backdrop-blur-sm shadow-sm rounded-full w-8 h-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      
      {canScrollRight && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 md:hidden bg-white/90 backdrop-blur-sm shadow-sm rounded-full w-8 h-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      <ScrollArea className="w-full max-w-full">
        <div 
          ref={scrollContainerRef} 
          className="flex items-center space-x-2 md:space-x-4 pt-1 pb-1 overflow-x-auto hide-scrollbar px-8 md:px-0"
          onScroll={handleScroll}
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {topicItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={index}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  "min-w-max flex items-center px-3 py-2 rounded-md transition-all duration-200 text-sm",
                  isActive 
                    ? 'bg-dashboard-purple/10 text-dashboard-purple shadow-sm' 
                    : 'hover:bg-dashboard-purple/5 text-gray-700',
                  "transform transition-transform hover:scale-105"
                )}
              >
                <span className={cn(
                  "transition-transform",
                  isActive ? 'text-dashboard-purple scale-110' : ''
                )}>
                  {item.icon}
                </span>
                <span className="whitespace-nowrap font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </ScrollArea>
      
      {/* Subtile Verläufe für scrollbare Inhalte - nur auf Desktop */}
      {scrollPosition > 10 && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
      )}
      
      {scrollContainerRef.current && 
       scrollPosition < (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10) && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
      )}
    </div>
  );
};

export default memo(TopicSelector);
