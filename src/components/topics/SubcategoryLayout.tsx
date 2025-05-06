
import React, { ReactNode, memo } from 'react';
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
        "scroll-mt-24 transition-all duration-500",
        isActive ? "opacity-100 animate-fade-in" : "opacity-0 hidden"
      )}
    >
      <Card className={cn(
        "mb-8 transition-all duration-300 border-2 shadow-sm",
        isActive && "ring-2 ring-dashboard-purple ring-offset-1"
      )}>
        <CardHeader className="pb-4 bg-gradient-to-r from-white to-slate-50">
          <CardTitle className={cn(
            "text-xl font-semibold text-slate-800",
            isActive && "text-dashboard-purple"
          )}>
            {title}
          </CardTitle>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </CardHeader>
        <CardContent className="pt-6">
          {isLoading ? (
            <div className="space-y-6 animate-pulse">
              <div className="flex space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-64 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          ) : children}
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(SubcategoryLayout);
