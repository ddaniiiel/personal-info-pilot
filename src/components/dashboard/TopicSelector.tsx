import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Users, Book, GraduationCap, Lightbulb, PiggyBank } from 'lucide-react';
import { usePathname } from 'next/navigation';

const TopicSelector: React.FC = () => {
  const pathname = usePathname() || '/';

  return (
    <ScrollArea className="w-full max-w-full">
      <nav className="flex items-center space-x-4 pt-1 pb-1">
        <a
          href="/"
          className={`min-w-max flex items-center px-3 py-2 rounded-md transition-colors ${
            pathname === '/' ? 'bg-dashboard-purple/10 text-dashboard-purple' : 
            'hover:bg-dashboard-purple/5 text-gray-700'
          }`}
        >
          <Home className={`h-4 w-4 mr-1.5 ${pathname === '/' ? 'text-dashboard-purple' : ''}`} />
          <span className="whitespace-nowrap font-medium">Dashboard</span>
        </a>
        
        <a
          href="/finance"
          className={`min-w-max flex items-center px-3 py-2 rounded-md transition-colors ${
            pathname === '/finance' ? 'bg-dashboard-purple/10 text-dashboard-purple' : 
            'hover:bg-dashboard-purple/5 text-gray-700'
          }`}
        >
          <PiggyBank className={`h-4 w-4 mr-1.5 ${pathname === '/finance' ? 'text-dashboard-purple' : ''}`} />
          <span className="whitespace-nowrap font-medium">Finanzen</span>
        </a>
        
        <a
          href="/family"
          className={`min-w-max flex items-center px-3 py-2 rounded-md transition-colors ${
            pathname === '/family' ? 'bg-dashboard-purple/10 text-dashboard-purple' : 
            'hover:bg-dashboard-purple/5 text-gray-700'
          }`}
        >
          <Users className={`h-4 w-4 mr-1.5 ${pathname === '/family' ? 'text-dashboard-purple' : ''}`} />
          <span className="whitespace-nowrap font-medium">Familie</span>
        </a>

        <a
          href="/topics/bildung"
          className={`min-w-max flex items-center px-3 py-2 rounded-md transition-colors ${
            pathname === '/topics/bildung' ? 'bg-dashboard-purple/10 text-dashboard-purple' : 
            'hover:bg-dashboard-purple/5 text-gray-700'
          }`}
        >
          <Book className={`h-4 w-4 mr-1.5 ${pathname === '/topics/bildung' ? 'text-dashboard-purple' : ''}`} />
          <span className="whitespace-nowrap font-medium">Bildung</span>
        </a>

        <a
          href="/topics/energie"
          className={`min-w-max flex items-center px-3 py-2 rounded-md transition-colors ${
            pathname === '/topics/energie' ? 'bg-dashboard-purple/10 text-dashboard-purple' : 
            'hover:bg-dashboard-purple/5 text-gray-700'
          }`}
        >
          <Lightbulb className={`h-4 w-4 mr-1.5 ${pathname === '/topics/energie' ? 'text-dashboard-purple' : ''}`} />
          <span className="whitespace-nowrap font-medium">Energie</span>
        </a>

        <a
          href="/topics/vorsorge"
          className={`min-w-max flex items-center px-3 py-2 rounded-md transition-colors ${
            pathname === '/topics/vorsorge' ? 'bg-dashboard-purple/10 text-dashboard-purple' : 
            'hover:bg-dashboard-purple/5 text-gray-700'
          }`}
        >
          <GraduationCap className={`h-4 w-4 mr-1.5 ${pathname === '/topics/vorsorge' ? 'text-dashboard-purple' : ''}`} />
          <span className="whitespace-nowrap font-medium">Vorsorge</span>
        </a>
      </nav>
    </ScrollArea>
  );
};

export default TopicSelector;
