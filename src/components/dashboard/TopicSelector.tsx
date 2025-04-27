
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
  Users
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TopicOption {
  id: InterestTopic | 'dashboard' | 'family';
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
      id: 'steuern', 
      label: 'Steuern', 
      icon: <FileText className="h-4 w-4 mr-2" />,
      path: '/topics/steuern'
    },
    { 
      id: 'versicherungen', 
      label: 'Versicherungen', 
      icon: <Landmark className="h-4 w-4 mr-2" />,
      path: '/topics/versicherungen'
    },
    { 
      id: 'energie', 
      label: 'Energie', 
      icon: <Lightbulb className="h-4 w-4 mr-2" />,
      path: '/topics/energie'
    },
    { 
      id: 'recht', 
      label: 'Recht & Compliance', 
      icon: <Scale className="h-4 w-4 mr-2" />,
      path: '/topics/recht'
    },
    { 
      id: 'foerderungen', 
      label: 'Förderprogramme', 
      icon: <Award className="h-4 w-4 mr-2" />,
      path: '/topics/foerderungen'
    },
    { 
      id: 'family', 
      label: 'Familie', 
      icon: <Users className="h-4 w-4 mr-2" />,
      path: '/family'
    },
  ];
  
  const currentPath = location.pathname;
  const activePath = topics.find(topic => 
    currentPath === topic.path || 
    (currentPath.startsWith('/topics/') && topic.path.includes(currentPath.split('/').pop() || ''))
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
