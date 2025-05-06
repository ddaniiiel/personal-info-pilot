
import React, { useRef, useEffect, useState, memo } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, Users, Book, GraduationCap, Lightbulb, PiggyBank, 
  Briefcase, Heart, Globe, Settings 
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TopicSelector: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Find active element and scroll to it on initial render
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const activeNavItem = scrollContainer.querySelector('[aria-current="page"]');
    if (!activeNavItem) return;
    
    // Calculate position to scroll the active element to center
    const containerWidth = scrollContainer.clientWidth;
    const itemLeft = (activeNavItem as HTMLElement).offsetLeft;
    const itemWidth = (activeNavItem as HTMLElement).clientWidth;
    const scrollTo = itemLeft - (containerWidth / 2) + (itemWidth / 2);
    
    scrollContainer.scrollLeft = Math.max(0, scrollTo);
    setScrollPosition(scrollContainer.scrollLeft);
  }, [pathname]);
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };

  // Topic items with their routes and icons
  const topicItems = [
    { href: '/', icon: <Home />, label: 'Dashboard' },
    { href: '/finance', icon: <PiggyBank />, label: 'Finanzen' },
    { href: '/family', icon: <Users />, label: 'Familie' },
    { href: '/topics/bildung', icon: <Book />, label: 'Bildung' },
    { href: '/topics/energie', icon: <Lightbulb />, label: 'Energie' },
    { href: '/topics/vorsorge', icon: <Settings />, label: 'Vorsorge' },
    { href: '/topics/arbeit', icon: <Briefcase />, label: 'Arbeit & Karriere' },
    { href: '/topics/gesundheit', icon: <Heart />, label: 'Gesundheit' },
    { href: '/topics/freizeit', icon: <Globe />, label: 'Freizeit & Reisen' },
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
          {topicItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`min-w-max flex items-center px-3 py-2 rounded-md transition-all duration-200 ${
                pathname === item.href 
                  ? 'bg-dashboard-purple/10 text-dashboard-purple shadow-sm' 
                  : 'hover:bg-dashboard-purple/5 text-gray-700'
              }`}
            >
              <span className={`h-4 w-4 mr-1.5 transition-transform ${pathname === item.href ? 'text-dashboard-purple scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className="whitespace-nowrap font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </ScrollArea>
      
      {/* Add subtle gradients to indicate scrollable content */}
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
