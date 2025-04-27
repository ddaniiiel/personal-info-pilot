
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser, InterestTopic } from '@/contexts/UserContext';
import { 
  Home, 
  FileText, 
  Landmark, 
  Lightbulb, 
  Scale, 
  Award,
  Users,
  GraduationCap,
  Car,
  PawPrint
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type MainCategory = 'dashboard' | 'wohnen' | 'energie' | 'finanzen' | 'steuern' | 'familie' | 'kinder' | 'mobilitaet' | 'haustiere';

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
      icon: <Home className="h-4 w-4 mr-2" />,
      path: '/'
    },
    { 
      id: 'wohnen', 
      label: 'Wohnen & Eigentum', 
      icon: <Home className="h-4 w-4 mr-2" />,
      path: '/topics/wohnen'
    },
    { 
      id: 'energie', 
      label: 'Energie & Nachhaltigkeit', 
      icon: <Lightbulb className="h-4 w-4 mr-2" />,
      path: '/topics/energie'
    },
    { 
      id: 'finanzen', 
      label: 'Finanzen & Versicherungen', 
      icon: <Landmark className="h-4 w-4 mr-2" />,
      path: '/topics/finanzen'
    },
    { 
      id: 'steuern', 
      label: 'Steuern & Recht', 
      icon: <Scale className="h-4 w-4 mr-2" />,
      path: '/topics/steuern'
    },
    { 
      id: 'familie', 
      label: 'Familie & Gesundheit', 
      icon: <Users className="h-4 w-4 mr-2" />,
      path: '/family'
    },
    { 
      id: 'kinder', 
      label: 'Kinder & Bildung', 
      icon: <GraduationCap className="h-4 w-4 mr-2" />,
      path: '/topics/kinder'
    },
    { 
      id: 'mobilitaet', 
      label: 'Mobilität', 
      icon: <Car className="h-4 w-4 mr-2" />,
      path: '/topics/mobilitaet'
    },
    { 
      id: 'haustiere', 
      label: 'Haustiere', 
      icon: <PawPrint className="h-4 w-4 mr-2" />,
      path: '/topics/haustiere'
    },
  ];
  
  const currentPath = location.pathname;
  const activePath = topics.find(topic => 
    currentPath === topic.path || 
    (currentPath.startsWith('/topics/') && topic.path.includes(currentPath.split('/').pop() || '')) ||
    (currentPath === '/family' && topic.path === '/family')
  )?.path || '/';
  
  const handleTabChange = (value: string) => {
    navigate(value);
  };
  
  return (
    <div className="w-full overflow-x-auto">
      <Tabs value={activePath} onValueChange={handleTabChange} className="w-full">
        <TabsList className="inline-flex w-full bg-white border-b border-border p-0 h-auto">
          {topics.map((topic) => (
            <TabsTrigger
              key={topic.id}
              value={topic.path}
              className="flex items-center py-3 px-4 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-dashboard-purple data-[state=active]:text-dashboard-purple rounded-none whitespace-nowrap"
            >
              {topic.icon}
              {topic.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TopicSelector;
