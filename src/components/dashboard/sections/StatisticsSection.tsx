
import React from 'react';
import StatCard from '../StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { FileText, AlertCircle, BarChart, Home, Utensils, Users } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleAction = (actionType: string) => {
    toast({
      title: "Aktion ausgeführt",
      description: `Die Aktion "${actionType}" wurde gestartet.`,
    });
  };

  return (
    <>
      {/* Document Upload - More Compact */}
      <Card className="border shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium flex items-center text-dashboard-purple">
            <FileText className="h-5 w-5 mr-2" />
            Dokumente
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Button 
            className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark"
            onClick={() => handleAction("Dokument hochladen")}
          >
            Neues Dokument hochladen
          </Button>
        </CardContent>
      </Card>

      {/* Stats Overview with consistent spacing */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <StatCard 
          title="Dokumente" 
          value="8"
          icon={<FileText className="h-5 w-5 text-dashboard-purple" />}
        />
        <StatCard 
          title="Fristen" 
          value="3"
          change={{ value: 1, isPositive: false }}
          icon={<AlertCircle className="h-5 w-5 text-dashboard-purple" />}
        />
        <StatCard 
          title="Energie" 
          value="-12%"
          change={{ value: 12, isPositive: true }}
          icon={<BarChart className="h-5 w-5 text-dashboard-purple" />}
        />
        <StatCard 
          title="Einsparungen" 
          value="€3,240"
          change={{ value: 18, isPositive: true }}
          icon={<Home className="h-5 w-5 text-dashboard-purple" />}
        />
      </div>
      
      {/* Meal Planner Widget */}
      <Card className="mt-6 border shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium flex items-center text-dashboard-purple">
            <Utensils className="h-5 w-5 mr-2" />
            Essensplan heute
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
            <p className="font-medium">Pasta mit Tomatensauce</p>
            <div className="mt-3 flex justify-end">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-dashboard-purple border-dashboard-purple hover:bg-dashboard-purple/10"
                onClick={() => navigate('/family')}
              >
                Wochenplan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Family Quick Access */}
      <Card className="mt-6 border shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium flex items-center text-dashboard-purple">
            <Users className="h-5 w-5 mr-2" />
            Familie
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Button 
            className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark"
            onClick={() => navigate('/family')}
          >
            Familienübersicht
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default React.memo(StatisticsSection);
