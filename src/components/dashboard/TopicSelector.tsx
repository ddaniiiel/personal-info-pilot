
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser, InterestTopic } from '@/contexts/UserContext';
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
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type MainCategory = 'dashboard' | 'familie' | 'wohnen' | 'energie' | 'finanzen' | 'steuern' | 'kinder' | 'mobilitaet' | 'haustiere' | 'recht' | 'foerderungen';

interface TopicOption {
  id: MainCategory;
  label: string;
  icon: React.ReactNode;
  path: string;
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
      path: '/'
    },
    { 
      id: 'familie', 
      label: 'Familie & Gesundheit', 
      icon: <Users className="h-4 w-4" />,
      path: '/family'
    },
    { 
      id: 'wohnen', 
      label: 'Wohnen & Eigentum', 
      icon: <Home className="h-4 w-4" />,
      path: '/topics/wohnen'
    },
    { 
      id: 'energie', 
      label: 'Energie & Nachhaltigkeit', 
      icon: <Lightbulb className="h-4 w-4" />,
      path: '/topics/energie'
    },
    { 
      id: 'finanzen', 
      label: 'Finanzen & Versicherungen', 
      icon: <Landmark className="h-4 w-4" />,
      path: '/topics/finanzen'
    },
    { 
      id: 'steuern', 
      label: 'Steuern & Recht', 
      icon: <Scale className="h-4 w-4" />,
      path: '/topics/steuern'
    },
    { 
      id: 'kinder', 
      label: 'Kinder & Bildung', 
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
      label: 'Recht & Compliance', 
      icon: <Scale className="h-4 w-4" />,
      path: '/topics/recht'
    },
    { 
      id: 'foerderungen', 
      label: 'Förderprogramme', 
      icon: <Award className="h-4 w-4" />,
      path: '/topics/foerderungen'
    },
  ];
  
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
    <nav className="w-full border-b border-gray-200 bg-white py-2 sticky top-0 z-10">
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max space-x-1 px-2">
          {topics.map((topic) => {
            const isActive = topic.path === (activeTopic?.path || '/');
            return (
              <button
                key={topic.id}
                onClick={() => handleClick(topic.path)}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all",
                  isActive 
                    ? "bg-dashboard-purple text-white shadow-sm" 
                    : "text-gray-700 hover:bg-dashboard-purple/10"
                )}
              >
                <span className={cn("mr-2", isActive ? "text-white" : "text-dashboard-purple")}>
                  {topic.icon}
                </span>
                {topic.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TopicSelector;
