
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
  saving?: string;
  deadline?: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ 
  title, 
  description, 
  actionLabel,
  onAction,
  saving,
  deadline
}) => {
  return (
    <Card className="dashboard-card hover:border-dashboard-purple transition-colors">
      <CardHeader className="pb-2 space-y-1">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        {saving && (
          <div className="flex items-center text-green-600 font-medium mb-2">
            <Check className="h-4 w-4 mr-1" />
            <span>Potenzielle Einsparung: {saving}</span>
          </div>
        )}
        
        {deadline && (
          <p className="text-sm text-muted-foreground">
            Frist: <span className="font-medium">{deadline}</span>
          </p>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendationCard;
