
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  LineChart, 
  PiggyBank, 
  Calendar, 
  ArrowRight, 
  Lightbulb,
  DollarSign
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FinanceAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  // Mock financial data
  const mockTransactions = [
    { id: 1, date: '05.05.2025', description: 'Supermarkt Einkauf', amount: -87.45, category: 'Lebensmittel' },
    { id: 2, date: '04.05.2025', description: 'Tankstelle', amount: -65.20, category: 'Transport' },
    { id: 3, date: '03.05.2025', description: 'Online Shopping', amount: -49.99, category: 'Freizeit' },
    { id: 4, date: '01.05.2025', description: 'Monatsgehalt', amount: 2800.00, category: 'Einkommen' },
  ];

  const mockInsights = [
    { id: 1, text: "Deine Lebensmittelausgaben waren im April 12% höher als im Vormonat", impact: "negativ" },
    { id: 2, text: "Du könntest €24/Monat sparen durch einen günstigeren Stromanbieter", impact: "positiv" },
    { id: 3, text: "Dein Sparplan für die Urlaubskasse ist auf Kurs (+€450)", impact: "positiv" }
  ];

  const handleGenerateInsights = () => {
    toast({
      title: "KI-Analyse gestartet",
      description: "Deine Finanzdaten werden analysiert. Die Ergebnisse werden in Kürze angezeigt.",
    });
  };

  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold flex items-center text-dashboard-purple">
          <PiggyBank className="h-5 w-5 mr-2" />
          Intelligenter Finanz-Assistent
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="overview">Übersicht</TabsTrigger>
            <TabsTrigger value="insights">KI-Einsichten</TabsTrigger>
            <TabsTrigger value="forecast">Prognose</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-blue-50 p-3 rounded-md flex flex-col">
                <span className="text-xs text-muted-foreground">Ausgaben (Mai)</span>
                <span className="text-lg font-semibold">€1.245,30</span>
                <span className="text-xs text-red-500 mt-1">+8,3% zum Vormonat</span>
              </div>
              <div className="bg-green-50 p-3 rounded-md flex flex-col">
                <span className="text-xs text-muted-foreground">Einnahmen (Mai)</span>
                <span className="text-lg font-semibold">€2.800,00</span>
                <span className="text-xs text-green-500 mt-1">+0% zum Vormonat</span>
              </div>
              <div className="bg-purple-50 p-3 rounded-md flex flex-col">
                <span className="text-xs text-muted-foreground">Sparquote</span>
                <span className="text-lg font-semibold">22,3%</span>
                <span className="text-xs text-amber-500 mt-1">-2,4% zum Vormonat</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Letzte Transaktionen</h3>
                <Button variant="link" size="sm" className="h-auto p-0">
                  Alle anzeigen <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-2 max-h-[200px] overflow-y-auto">
                {mockTransactions.map(transaction => (
                  <div key={transaction.id} className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{transaction.description}</span>
                      <span className="text-xs text-muted-foreground">{transaction.date} • {transaction.category}</span>
                    </div>
                    <span className={`text-sm ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}€
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark mt-2"
              onClick={handleGenerateInsights}
            >
              <LineChart className="h-4 w-4 mr-2" />
              Finanz-Analyse starten
            </Button>
          </TabsContent>
          
          <TabsContent value="insights" className="space-y-4">
            <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 text-dashboard-purple mr-2 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium mb-1">KI-generierte Finanz-Einsichten</h3>
                  <p className="text-xs text-muted-foreground">
                    Basierend auf der Analyse deiner Ausgaben und Einnahmen der letzten 3 Monate.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {mockInsights.map(insight => (
                <div 
                  key={insight.id} 
                  className={`p-3 rounded-md border flex items-start ${
                    insight.impact === "positiv" ? "bg-green-50 border-green-100" :
                    insight.impact === "negativ" ? "bg-amber-50 border-amber-100" :
                    "bg-gray-50 border-gray-100"
                  }`}
                >
                  {insight.impact === "positiv" && <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5" />}
                  {insight.impact === "negativ" && <TrendingUp className="h-4 w-4 text-amber-500 transform rotate-180 mr-2 mt-0.5" />}
                  <span className="text-sm">{insight.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-2">
              <Button variant="outline" className="w-full">
                <DollarSign className="h-4 w-4 mr-2" />
                Optimierungsvorschläge anzeigen
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="forecast" className="space-y-4">
            <div className="bg-purple-50 border border-purple-100 rounded-md p-4">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-dashboard-purple mr-2 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Finanzprognose</h3>
                  <p className="text-xs text-muted-foreground">
                    KI-basierte Vorhersage deiner Finanzsituation für die nächsten 3 Monate.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-[180px] bg-gray-50 rounded-md border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <LineChart className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Prognose-Diagramm wird geladen...</p>
                <Button variant="link" className="mt-1" size="sm">Prognose generieren</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-3 rounded-md border border-gray-100 flex flex-col">
                <span className="text-xs text-muted-foreground">Juni 2025</span>
                <span className="text-sm font-medium">+€1.480</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md border border-gray-100 flex flex-col">
                <span className="text-xs text-muted-foreground">Juli 2025</span>
                <span className="text-sm font-medium">+€1.320</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md border border-gray-100 flex flex-col">
                <span className="text-xs text-muted-foreground">August 2025</span>
                <span className="text-sm font-medium">+€1.550</span>
              </div>
            </div>
            
            <Button className="w-full mt-2" variant="outline">
              Detaillierte Prognose anzeigen
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FinanceAssistant;
