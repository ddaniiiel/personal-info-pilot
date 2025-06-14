
import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Moon, Sun, Monitor, Palette } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative group transition-all duration-200 hover:bg-primary/10">
          <div className="transition-transform duration-200 group-hover:scale-110">
            {getThemeIcon()}
          </div>
          <span className="sr-only">Theme wechseln</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="z-50 bg-card border border-border shadow-lg backdrop-blur-md min-w-[160px]"
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
          <Palette className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Erscheinungsbild</span>
        </div>
        <DropdownMenuItem 
          onClick={() => setTheme('light')} 
          className="cursor-pointer transition-colors duration-200 hover:bg-primary/10"
        >
          <Sun className="h-4 w-4 mr-2" />
          <span>Hell</span>
          {theme === 'light' && <div className="ml-auto h-2 w-2 bg-primary rounded-full" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')} 
          className="cursor-pointer transition-colors duration-200 hover:bg-primary/10"
        >
          <Moon className="h-4 w-4 mr-2" />
          <span>Dunkel</span>
          {theme === 'dark' && <div className="ml-auto h-2 w-2 bg-primary rounded-full" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')} 
          className="cursor-pointer transition-colors duration-200 hover:bg-primary/10"
        >
          <Monitor className="h-4 w-4 mr-2" />
          <span>System</span>
          {theme === 'system' && <div className="ml-auto h-2 w-2 bg-primary rounded-full" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
