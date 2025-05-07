
import { useEffect, useState } from 'react';

// Gemeinsame Konfigurationen für Recharts
export const useChartConfig = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Überprüfung des Farbmodus für Konsistenz mit System/Benutzereinstellungen
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Farben für Diagramme basierend auf Farbschema
  const colors = {
    primary: '#7E69AB', // dashboard-purple
    secondary: '#0EA5E9', // blue
    tertiary: '#10b981', // green
    quaternary: '#F97316', // orange
    accent: '#F59E0B', // amber
    expense: '#ea384c', // red für Ausgaben
    income: '#16a34a', // green für Einnahmen
    muted: isDarkMode ? '#6b7280' : '#9ca3af',
    background: isDarkMode ? '#1f2937' : '#ffffff',
    border: isDarkMode ? '#374151' : '#e5e7eb',
  };
  
  // Gemeinsame Konfiguration für AreaCharts
  const areaChartConfig = {
    margin: { top: 10, right: 10, left: 0, bottom: 5 },
    style: {
      fontSize: '12px',
    },
    gradientConfig: (id: string, color: string) => ({
      id: id,
      x1: "0",
      y1: "0", 
      x2: "0", 
      y2: "1",
      stops: [
        { offset: "5%", stopColor: color, stopOpacity: 0.8 },
        { offset: "95%", stopColor: color, stopOpacity: 0 },
      ]
    }),
    tooltipStyle: {
      backgroundColor: colors.background,
      border: `1px solid ${colors.border}`,
      borderRadius: '6px',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
      padding: '8px 12px',
      fontSize: '12px',
    },
  };
  
  return {
    colors,
    areaChartConfig,
    isDarkMode,
  };
};
