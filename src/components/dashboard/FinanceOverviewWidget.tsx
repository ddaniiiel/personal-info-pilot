
import React from 'react';
import { PiggyBank, ArrowUp, ArrowDown, Info, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

const FinanceOverviewWidget: React.FC = () => {
  const { toast } = useToast();
  
  // Mock financial data
  const financialData = {
    savings: '€3,240',
    change: { value: 18, isPositive: true },
    lastUpdated: 'Heute, 08:30',
    upcomingPayments: [
      { title: 'Steuervorauszahlung', date: '20.06', amount: '€650' },
      { title: 'Versicherungsbeitrag', date: '01.07', amount: '€230' }
    ]
  };

  const handleViewDetails = () => {
    toast({
      title: "Finanzdetails",
      description: "Detaillierte Finanzübersicht wird geladen...",
    });
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 transition-all hover:shadow-md animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <PiggyBank className="h-4 w-4 text-dashboard-purple mr-1.5" />
          <h3 className="text-sm font-semibold text-dashboard-purple">Finanzübersicht</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Info className="h-3.5 w-3.5 text-muted-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Finanzübersicht basierend auf Ihren verknüpften Konten</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {/* Savings Overview */}
        <div className="bg-white p-3 rounded-md shadow-sm">
          <p className="text-xs font-medium text-muted-foreground mb-1">Gesamtvermögen</p>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-dashboard-purple leading-tight">{financialData.savings}</span>
            <div className="flex items-center mb-0.5">
              {financialData.change.isPositive ? (
                <ArrowUp className="h-3 w-3 text-green-500" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-500" />
              )}
              <span className={`text-xs font-medium ${
                financialData.change.isPositive ? 'text-green-500' : 'text-red-500'
              }`}>
                {financialData.change.value}%
              </span>
            </div>
          </div>
        </div>
        
        {/* Upcoming Payments */}
        <div className="bg-white p-3 rounded-md shadow-sm">
          <p className="text-xs font-medium text-muted-foreground mb-2">Anstehende Zahlungen</p>
          <div className="space-y-2">
            {financialData.upcomingPayments.map((payment, index) => (
              <div key={index} className="flex justify-between items-center text-xs bg-gray-50 p-2 rounded">
                <div>
                  <p className="font-medium line-clamp-1">{payment.title}</p>
                  <p className="text-muted-foreground text-[10px]">{payment.date}</p>
                </div>
                <span className="font-semibold text-dashboard-purple">{payment.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-right">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs text-dashboard-purple hover:text-dashboard-purple-dark"
          onClick={handleViewDetails}
        >
          <span className="mr-1">Detaillierte Übersicht</span>
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="mt-1 text-right">
        <p className="text-[10px] text-muted-foreground">
          Stand: {financialData.lastUpdated}
          <span className="text-[9px] ml-1">(Datenquelle: Haushaltsbudget)</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(FinanceOverviewWidget);
