
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HelpTooltipProps {
  content: string;
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const HelpTooltip: React.FC<HelpTooltipProps> = ({ 
  content, 
  className,
  side = 'top' 
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className={cn("h-4 w-4 text-muted-foreground hover:text-dashboard-purple cursor-help", className)} />
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-xs">
          <p className="text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HelpTooltip;
