
import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Moon, Sun, Monitor, Palette, Check } from 'lucide-react';
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

  const themes = [
    { key: 'light', label: 'Hell', icon: Sun },
    { key: 'dark', label: 'Dunkel', icon: Moon },
    { key: 'system', label: 'System', icon: Monitor }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="apple-button-ghost h-10 w-10 rounded-xl apple-hover-scale">
          <div className="apple-scale-in">
            {getThemeIcon()}
          </div>
          <span className="sr-only">Theme wechseln</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 glass border-border/30 shadow-apple-lg rounded-xl"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border/30">
          <Palette className="h-4 w-4 text-primary" />
          <span className="font-medium text-foreground">Erscheinungsbild</span>
        </div>
        
        <div className="p-2 space-y-1">
          {themes.map(({ key, label, icon: Icon }) => (
            <DropdownMenuItem 
              key={key}
              onClick={() => setTheme(key as 'light' | 'dark' | 'system')} 
              className="apple-focus rounded-lg cursor-pointer flex items-center justify-between p-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </div>
              {theme === key && (
                <Check className="h-4 w-4 text-primary apple-scale-in" />
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
