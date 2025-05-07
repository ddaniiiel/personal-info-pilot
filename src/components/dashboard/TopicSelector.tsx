
import React, { useRef, useEffect, useState, memo, useCallback } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, Users, Book, GraduationCap, Lightbulb, PiggyBank, 
  Briefcase, Heart, Globe, Settings 
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const TopicSelector: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Optimiertes Scroll-Verhalten mit useCallback
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  }, []);

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
    
    setScrollPosition(scrollContainer.scrollLeft);
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
      <ScrollArea className="w-full max-w-full">
        <div 
          ref={scrollContainerRef} 
          className="flex items-center space-x-4 pt-1 pb-1 overflow-x-auto hide-scrollbar"
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
                  "min-w-max flex items-center px-3 py-2 rounded-md transition-all duration-200",
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
      
      {/* Subtile Verläufe für scrollbare Inhalte */}
      {scrollPosition > 10 && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      )}
      
      {scrollContainerRef.current && 
       scrollPosition < (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10) && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default memo(TopicSelector);
