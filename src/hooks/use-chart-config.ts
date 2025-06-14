import type { ChartConfig } from "@/components/ui/chart"
import { ArrowUp, ArrowDown, Circle, Home, ShoppingCart, Car, Shield, Smile, HelpCircle } from "lucide-react"; // Added icons

export function useChartConfig() {
  // TODO: Diese Farben sollten idealerweise aus den CSS-Variablen des Themes gelesen werden
  const colors = {
    primary: 'hsl(var(--chart-primary))',
    secondary: 'hsl(var(--chart-secondary))',
    accent: 'hsl(var(--chart-accent))',
    muted: 'hsl(var(--chart-muted))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    border: 'hsl(var(--border))',
    income: 'hsl(var(--chart-income))',
    expense: 'hsl(var(--chart-expense))',
    savings: 'hsl(var(--chart-savings))',

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
  };

  const financeChartConfig = {
    einnahmen: { label: "Einnahmen", color: colors.income, icon: ArrowUp },
    ausgaben: { label: "Ausgaben", color: colors.expense, icon: ArrowDown },
    Wohnen: { label: "Wohnen", color: colors.wohnen, icon: Home },
    Lebensmittel: { label: "Lebensmittel", color: colors.lebensmittel, icon: ShoppingCart },
    Transport: { label: "Transport", color: colors.transport, icon: Car },
    Versicherungen: { label: "Versicherungen", color: colors.versicherungen, icon: Shield },
    Freizeit: { label: "Freizeit", color: colors.freizeit, icon: Smile },
    Sonstiges: { label: "Sonstiges", color: colors.sonstiges, icon: HelpCircle },
    aktuell: { label: "Aktueller Stand", color: colors.primary, icon: Circle }, // Added generic icon
    ziel: { label: "Sparziel", color: colors.muted, icon: Circle }, // Added generic icon
    value: { label: "Wert" } 
  } satisfies ChartConfig;


  return { colors, areaChartConfig, financeChartConfig };
}
