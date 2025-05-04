
import React from 'react';
import ChartCard from '../ChartCard';
import FamilyEventsWidget from '../FamilyEventsWidget';
import TasksWidget from '../TasksWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      {/* Family Events and Calendar */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-dashboard-purple" />
            Familienkalender
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-dashboard-purple"
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
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <CheckSquare className="h-5 w-5 mr-2 text-dashboard-purple" />
            Aufgaben
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-dashboard-purple"
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
