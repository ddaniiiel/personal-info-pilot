
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

interface InsightCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  isPriority?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const InsightCard: React.FC<InsightCardProps> = ({ 
  title, 
  description, 
  category, 
  date, 
  isPriority = false,
  action
}) => {
  return (
    <Card className={`border-l-4 ${isPriority ? 'border-l-red-500' : 'border-l-dashboard-purple'}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={isPriority ? "destructive" : "outline"} className="mb-2">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm mt-1">
          {description}
        </CardDescription>
      </CardHeader>
      {action && (
        <CardFooter className="pt-0">
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-dashboard-purple hover:text-dashboard-purple-dark"
            onClick={action.onClick}
          >
            {action.label} <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default InsightCard;
