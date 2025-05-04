
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { 
  Home, 
  FileText, 
  Landmark, 
  Lightbulb, 
  Scale, 
  Users,
  GraduationCap,
  Car,
  PawPrint,
  Award,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export type MainCategory = 'dashboard' | 'familie' | 'wohnen' | 'energie' | 'finanzen' | 'steuern' | 'kinder' | 'mobilitaet' | 'haustiere' | 'recht' | 'foerderungen';

interface TopicOption {
  id: MainCategory;
  label: string;
  icon: React.ReactNode;
  path: string;
  priority?: number; // Higher number = higher priority (shown in main menu)
}

const TopicSelector: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  
  const topics: TopicOption[] = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: <Home className="h-4 w-4" />,
      path: '/',
      priority: 100
    },
    { 
      id: 'familie', 
      label: 'Familie', 
      icon: <Users className="h-4 w-4" />,
      path: '/family',
      priority: 90
    },
    { 
      id: 'wohnen', 
      label: 'Wohnen', 
      icon: <Home className="h-4 w-4" />,
      path: '/topics/wohnen',
      priority: 80
    },
    { 
      id: 'energie', 
      label: 'Energie', 
      icon: <Lightbulb className="h-4 w-4" />,
      path: '/topics/energie',
      priority: 70
    },
    { 
      id: 'finanzen', 
      label: 'Finanzen', 
      icon: <Landmark className="h-4 w-4" />,
      path: '/topics/finanzen',
      priority: 60
    },
    { 
      id: 'steuern', 
      label: 'Steuern', 
      icon: <Scale className="h-4 w-4" />,
      path: '/topics/steuern',
      priority: 50
    },
    { 
      id: 'kinder', 
      label: 'Bildung', 
      icon: <GraduationCap className="h-4 w-4" />,
      path: '/topics/kinder'
    },
    { 
      id: 'mobilitaet', 
      label: 'Mobilität', 
      icon: <Car className="h-4 w-4" />,
      path: '/topics/mobilitaet'
    },
    { 
      id: 'haustiere', 
      label: 'Haustiere', 
      icon: <PawPrint className="h-4 w-4" />,
      path: '/topics/haustiere'
    },
    { 
      id: 'recht', 
      label: 'Recht', 
      icon: <Scale className="h-4 w-4" />,
      path: '/topics/recht'
    },
    { 
      id: 'foerderungen', 
      label: 'Förderungen', 
      icon: <Award className="h-4 w-4" />,
      path: '/topics/foerderungen'
    },
  ];

  // Sort topics by priority (higher priority first)
  const sortedTopics = [...topics].sort((a, b) => 
    (b.priority || 0) - (a.priority || 0)
  );

  // Split into main navigation and dropdown items
  const mainNavItems = sortedTopics.slice(0, 7); // Show 7 main items
  const dropdownItems = sortedTopics.slice(7);
  
  const currentPath = location.pathname;
  const activeTopic = topics.find(topic => 
    currentPath === topic.path || 
    (currentPath.startsWith('/topics/') && topic.path.includes(currentPath.split('/').pop() || '')) ||
    (currentPath === '/family' && topic.path === '/family')
  );
  
  const handleClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <nav className="w-full py-1 sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex items-center gap-1">
          {mainNavItems.map((topic) => {
            const isActive = topic.path === (activeTopic?.path || '/');
            return (
              <button
                key={topic.id}
                onClick={() => handleClick(topic.path)}
                className={cn(
                  "flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium transition-all",
                  isActive 
                    ? "bg-dashboard-purple text-white shadow-sm" 
                    : "text-gray-700 hover:bg-dashboard-purple/10"
                )}
              >
                <span className={cn("mr-1.5", isActive ? "text-white" : "text-dashboard-purple")}>
                  {topic.icon}
                </span>
                {topic.label}
              </button>
            );
          })}
          
          {/* Dropdown for additional items */}
          {dropdownItems.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium transition-all text-gray-700 hover:bg-dashboard-purple/10">
                  <MoreHorizontal className="h-4 w-4 text-dashboard-purple mr-1" />
                  Mehr
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {dropdownItems.map((topic) => {
                  const isActive = topic.path === (activeTopic?.path || '/');
                  return (
                    <DropdownMenuItem 
                      key={topic.id}
                      onClick={() => handleClick(topic.path)}
                      className={cn(
                        "flex items-center py-1.5",
                        isActive ? "bg-dashboard-purple/10" : ""
                      )}
                    >
                      <span className="mr-2 text-dashboard-purple">
                        {topic.icon}
                      </span>
                      {topic.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(TopicSelector);
