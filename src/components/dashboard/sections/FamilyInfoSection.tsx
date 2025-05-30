
import React from 'react';
import ChartCard from '../ChartCard';
import FamilyEventsWidget from '../FamilyEventsWidget';
import TasksWidget from '../TasksWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FinanceAssistant from '@/components/finance/FinanceAssistant';

// Mock data for charts
const energyData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 380 },
  { name: 'Mar', value: 350 },
  { name: 'Apr', value: 300 },
  { name: 'Mai', value: 290 },
  { name: 'Jun', value: 270 }
];

const FamilyInfoSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Finance Assistant - New top component */}
      <FinanceAssistant />
      
      {/* Family Events and Calendar */}
      <Card className="border shadow-sm hover:shadow-md transition-shadow mt-6">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-lg font-semibold flex items-center text-dashboard-purple">
            <Calendar className="h-5 w-5 mr-2" />
            Familienkalender
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-dashboard-purple border-dashboard-purple hover:bg-dashboard-purple/10"
            onClick={() => navigate('/family')}
          >
            Alle anzeigen
          </Button>
        </CardHeader>
        <CardContent>
          <FamilyEventsWidget />
        </CardContent>
      </Card>

      {/* Tasks */}
      <Card className="border shadow-sm hover:shadow-md transition-shadow mt-6">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-lg font-semibold flex items-center text-dashboard-purple">
            <CheckSquare className="h-5 w-5 mr-2" />
            Aufgaben
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-dashboard-purple border-dashboard-purple hover:bg-dashboard-purple/10"
            onClick={() => navigate('/family')}
          >
            Alle anzeigen
          </Button>
        </CardHeader>
        <CardContent>
          <TasksWidget />
        </CardContent>
      </Card>
      
      {/* Energy Usage Chart */}
      <ChartCard
        title="Energieverbrauch der letzten 6 Monate"
        data={energyData}
        dataKey="value"
        height={250}
      />
    </>
  );
};

export default React.memo(FamilyInfoSection);
