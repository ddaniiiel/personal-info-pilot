
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, FileText, Landmark, Lightbulb, Scale, Award } from 'lucide-react';
import { InterestTopic } from '@/contexts/UserContext';

interface TopicTab {
  id: InterestTopic;
  label: string;
  icon: React.ReactNode;
  path: string;
}

const TopicTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const topics: TopicTab[] = [
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
  ];
  
  const handleTabChange = (value: string) => {
    navigate(value);
  };
  
  const currentTab = topics.find(topic => topic.path === currentPath)?.path || '/topics/wohnen';
  
  return (
    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full overflow-x-auto">
      <TabsList className="inline-flex w-full bg-white border-b border-border p-0 h-auto">
        {topics.map((topic) => (
          <TabsTrigger
            key={topic.id}
            value={topic.path}
            className="flex items-center py-3 px-4 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-dashboard-purple data-[state=active]:text-dashboard-purple rounded-none"
          >
            {topic.icon}
            {topic.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TopicTabs;
