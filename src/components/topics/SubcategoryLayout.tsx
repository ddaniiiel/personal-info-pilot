
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface SubcategoryLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  isActive?: boolean;
  id: string; // This would match the href from subcategory (e.g., "#dokumente")
  isLoading?: boolean;
}

const SubcategoryLayout: React.FC<SubcategoryLayoutProps> = ({ 
  title, 
  description, 
  children,
  isActive = false,
  id,
  isLoading = false
}) => {
  return (
    <div 
      id={id.replace('#', '')} 
      className={cn(
        "scroll-mt-20 transition-all duration-300",
        isActive ? "opacity-100 animate-fade-in" : "opacity-0 hidden"
      )}
    >
      <Card className={cn(
        "mb-6 transition-all duration-200",
        isActive && "ring-2 ring-dashboard-purple ring-offset-2"
      )}>
        <CardHeader className="pb-2">
          <CardTitle className={cn(
            "text-lg font-medium",
            isActive && "text-dashboard-purple"
          )}>
            {title}
          </CardTitle>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-2/3" />
            </div>
          ) : children}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubcategoryLayout;
