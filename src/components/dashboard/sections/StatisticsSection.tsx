
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
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <FileText className="h-5 w-5 mr-2 text-dashboard-purple" />
            Dokumente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark"
            onClick={() => handleAction("Dokument hochladen")}
          >
            Neues Dokument hochladen
          </Button>
        </CardContent>
      </Card>

      {/* Stats Overview - Now in right column */}
      <div className="grid grid-cols-2 gap-3">
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
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <Utensils className="h-5 w-5 mr-2 text-dashboard-purple" />
            Essensplan heute
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-2 bg-gray-50 rounded">
            <p className="font-medium">Pasta mit Tomatensauce</p>
            <div className="mt-2 flex justify-end">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-dashboard-purple"
                onClick={() => navigate('/family')}
              >
                Wochenplan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Family Quick Access */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <Users className="h-5 w-5 mr-2 text-dashboard-purple" />
            Familie
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark mb-2"
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
