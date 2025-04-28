
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SubcategoryLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  isActive?: boolean;
}

const SubcategoryLayout: React.FC<SubcategoryLayoutProps> = ({ 
  title, 
  description, 
  children,
  isActive = false
}) => {
  return (
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
        {children}
      </CardContent>
    </Card>
  );
};

export default SubcategoryLayout;
