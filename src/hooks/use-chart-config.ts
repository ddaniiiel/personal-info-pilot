
import type { ChartConfig } from "@/components/ui/chart"

export function useChartConfig() {
  // TODO: Diese Farben sollten idealerweise aus den CSS-Variablen des Themes gelesen werden
  const colors = {
    primary: 'hsl(var(--chart-primary))', // Beispiel: Helleres Lila für primäre Aktionen
    secondary: 'hsl(var(--chart-secondary))', // Beispiel: Neutrales Grau für sekundäre Elemente
    accent: 'hsl(var(--chart-accent))',   // Beispiel: Lebhaftes Blau für Akzente
    muted: 'hsl(var(--chart-muted))',     // Beispiel: Helles Grau für Hintergründe oder inaktive Elemente
    background: 'hsl(var(--background))', // Hintergrundfarbe aus dem Theme
    foreground: 'hsl(var(--foreground))', // Vordergrundfarbe (Text) aus dem Theme
    border: 'hsl(var(--border))',         // Rahmenfarbe aus dem Theme
    income: 'hsl(var(--chart-income))', // z.B. Grün für Einnahmen
    expense: 'hsl(var(--chart-expense))', // z.B. Rot für Ausgaben
    savings: 'hsl(var(--chart-savings))', // z.B. Blau für Ersparnisse

    // Farben für Ausgabenkategorien (Beispiele, können angepasst werden)
    wohnen: 'hsl(var(--chart-cat-wohnen))',
    lebensmittel: 'hsl(var(--chart-cat-lebensmittel))',
    transport: 'hsl(var(--chart-cat-transport))',
    versicherungen: 'hsl(var(--chart-cat-versicherungen))',
    freizeit: 'hsl(var(--chart-cat-freizeit))',
    sonstiges: 'hsl(var(--chart-cat-sonstiges))',
  };

  const areaChartConfig = {
    tooltipStyle: {
      backgroundColor: colors.background,
      borderColor: colors.border,
      color: colors.foreground,
      borderRadius: '0.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '8px 12px',
    },
    // Weitere spezifische Konfigurationen für AreaCharts können hier hinzugefügt werden
  };

  // Gemeinsame Konfiguration für alle Finanz-Charts auf der Seite
  const financeChartConfig = {
    einnahmen: { label: "Einnahmen", color: colors.income },
    ausgaben: { label: "Ausgaben", color: colors.expense },
    // Für Pie Chart - Farben aus expenseBreakdownData in FinanceCharts.tsx
    // Diese werden hier als Referenz aufgeführt, die eigentlichen Farben kommen von den Daten
    Wohnen: { label: "Wohnen", color: colors.wohnen },
    Lebensmittel: { label: "Lebensmittel", color: colors.lebensmittel },
    Transport: { label: "Transport", color: colors.transport },
    Versicherungen: { label: "Versicherungen", color: colors.versicherungen },
    Freizeit: { label: "Freizeit", color: colors.freizeit },
    Sonstiges: { label: "Sonstiges", color: colors.sonstiges },
    // Für Sparziele
    aktuell: { label: "Aktueller Stand", color: colors.primary },
    ziel: { label: "Sparziel", color: colors.muted },
    // Dummy für PieChart dataKey, da wir 'name' als Key verwenden
    value: { label: "Wert" } 
  } satisfies ChartConfig;


  return { colors, areaChartConfig, financeChartConfig };
}
