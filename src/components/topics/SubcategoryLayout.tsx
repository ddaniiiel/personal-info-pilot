
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SubcategoryLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const SubcategoryLayout: React.FC<SubcategoryLayoutProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
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
