
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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

  // Find the active subcategory title for breadcrumbs
  const activeSubcategoryTitle = 
    subcategories.find(sub => sub.href === activeSubcategory)?.title || 'Übersicht';

  return (
    <div className="mb-6 space-y-4">
      {/* Breadcrumbs for better navigation context */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics/kinder">Kinder & Bildung</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={activeSubcategory || '#'}>{activeSubcategoryTitle}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex items-center justify-between border-b pb-2 mb-3">
          <h2 className="text-lg font-medium">Unterkategorien</h2>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="mt-1 transition-all duration-300">
          <div className="overflow-x-auto">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2 p-2 bg-white rounded-lg shadow-sm border">
                {subcategories.map((subcategory, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "transition-all duration-200",
                        activeSubcategory === subcategory.href
                          ? "bg-dashboard-purple text-white hover:bg-dashboard-purple/90 font-medium"
                          : "hover:bg-gray-100"
                      )}
                      onClick={() => onSubcategoryChange(subcategory.href)}
                    >
                      {subcategory.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SubcategoryNavigation;
