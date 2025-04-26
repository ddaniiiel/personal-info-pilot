
import React, { useState } from 'react';
import { useUser, InterestTopic } from '@/contexts/UserContext';

interface TopicOption {
  id: InterestTopic;
  label: string;
}

const TopicSelector: React.FC = () => {
  const { user, addInterest, removeInterest } = useUser();
  const [selectedTopic, setSelectedTopic] = useState<InterestTopic>('wohnen');
  
  const topics: TopicOption[] = [
    { id: 'wohnen', label: 'Wohnen & Eigentum' },
    { id: 'steuern', label: 'Steuern' },
    { id: 'versicherungen', label: 'Versicherungen' },
    { id: 'energie', label: 'Energie' },
    { id: 'recht', label: 'Recht & Compliance' },
    { id: 'foerderungen', label: 'Förderprogramme' }
  ];
  
  const toggleTopic = (topic: InterestTopic) => {
    if (user.interests.includes(topic)) {
      removeInterest(topic);
    } else {
      addInterest(topic);
    }
  };
  
  const handleTopicSelect = (topic: InterestTopic) => {
    setSelectedTopic(topic);
  };
  
  return (
    <div className="mt-6 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleTopicSelect(topic.id)}
            className={`topic-pill whitespace-nowrap ${
              selectedTopic === topic.id 
                ? 'topic-pill-active' 
                : 'topic-pill-inactive'
            }`}
          >
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;
