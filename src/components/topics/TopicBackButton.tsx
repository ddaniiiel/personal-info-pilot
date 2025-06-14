
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopicBackButton: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={() => navigate('/')}
      className="mb-3 apple-button-secondary"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Zurück zum Dashboard
    </Button>
  );
};

export default TopicBackButton;
