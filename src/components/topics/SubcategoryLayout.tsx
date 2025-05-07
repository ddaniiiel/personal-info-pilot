
import React, { ReactNode, memo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

interface SubcategoryLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  isActive?: boolean;
  id: string; // This would match the href from subcategory (e.g., "#dokumente")
  isLoading?: boolean;
  category?: string; // Um farbliche Unterscheidung je nach Kategorie zu ermöglichen
  actionText?: string; // Text für die Haupt-Action (falls vorhanden)
  onAction?: () => void; // Handler für die Haupt-Action
}

const getCategoryColor = (category?: string): string => {
  switch(category) {
    case 'energie': return 'from-green-50 to-green-100 border-green-200';
    case 'steuern': return 'from-blue-50 to-blue-100 border-blue-200';
    case 'finanzen': return 'from-amber-50 to-amber-100 border-amber-200';
    case 'wohnen': return 'from-orange-50 to-orange-100 border-orange-200';
    case 'bildung': return 'from-indigo-50 to-indigo-100 border-indigo-200';
    case 'gesundheit': return 'from-rose-50 to-rose-100 border-rose-200';
    case 'vorsorge': return 'from-purple-50 to-purple-100 border-purple-200';
    case 'arbeit': return 'from-cyan-50 to-cyan-100 border-cyan-200';
    default: return 'from-white to-slate-50 border-slate-200';
  }
};

const SubcategoryLayout: React.FC<SubcategoryLayoutProps> = ({ 
  title, 
  description, 
  children,
  isActive = false,
  id,
  isLoading = false,
  category,
  actionText,
  onAction
}) => {
  // Animierte Anzeige aktivieren
  useEffect(() => {
    if (isActive) {
      const container = document.getElementById(id.replace('#', ''));
      if (container) {
        container.classList.add('animate-fade-in');
      }
    }
  }, [isActive, id]);

  const headerGradient = getCategoryColor(category);

  return (
    <div 
      id={id.replace('#', '')} 
      className={cn(
        "scroll-mt-24 transition-all duration-300",
        isActive ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <Card className={cn(
        "mb-8 transition-all duration-300 border-2 shadow-sm hover:shadow-md",
        isActive && "ring-2 ring-dashboard-purple ring-offset-1"
      )}>
        <CardHeader className={cn(`pb-4 bg-gradient-to-r ${headerGradient}`)}>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className={cn(
                "text-xl font-semibold text-slate-800",
                isActive && "text-dashboard-purple"
              )}>
                {title}
              </CardTitle>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {description}
                </p>
              )}
            </div>
            {category && (
              <Badge variant="outline" className="ml-2">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            )}
          </div>
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
