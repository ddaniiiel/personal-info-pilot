
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

interface Subcategory {
  title: string;
  href: string;
}

interface SubcategoryNavigationProps {
  subcategories: Subcategory[];
  activeSubcategory: string | null;
  onSubcategoryChange: (href: string) => void;
}

const SubcategoryNavigation: React.FC<SubcategoryNavigationProps> = ({
  subcategories,
  activeSubcategory,
  onSubcategoryChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  if (!subcategories || subcategories.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium mb-2">Unterkategorien</h2>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="mt-1">
          <div className="overflow-x-auto">
            <div className="flex space-x-2 p-2 bg-white rounded-lg border shadow-sm">
              {subcategories.map((subcategory, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={cn(
                    "whitespace-nowrap",
                    activeSubcategory === subcategory.href
                      ? "bg-dashboard-purple text-white hover:bg-dashboard-purple/90"
                      : "hover:bg-gray-100"
                  )}
                  onClick={() => onSubcategoryChange(subcategory.href)}
                >
                  {subcategory.title}
                </Button>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SubcategoryNavigation;
