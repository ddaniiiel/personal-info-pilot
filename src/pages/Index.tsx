
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import InsightCard from '@/components/dashboard/InsightCard';
import RecommendationCard from '@/components/dashboard/RecommendationCard';
import ChartCard from '@/components/dashboard/ChartCard';
import NewsWidget from '@/components/dashboard/NewsWidget';
import DocumentUploader from '@/components/dashboard/DocumentUploader';
import FamilyEventsWidget from '@/components/dashboard/FamilyEventsWidget';
import TasksWidget from '@/components/dashboard/TasksWidget';
import TimeWeatherWidget from '@/components/dashboard/TimeWeatherWidget';
import FinanceOverviewWidget from '@/components/dashboard/FinanceOverviewWidget';
import { useToast } from '@/hooks/use-toast';
import { Home, BarChart, FileText, AlertCircle, Calendar, CheckSquare, Utensils, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

const Dashboard: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleAction = (actionType: string) => {
    toast({
      title: "Aktion ausgeführt",
      description: `Die Aktion "${actionType}" wurde gestartet.`,
    });
  };

  return (
    <DashboardLayout>
      {/* Time/Weather, Finance and News Section - 3 equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="h-[220px]">
          <TimeWeatherWidget />
        </div>
        <div className="h-[220px]">
          <FinanceOverviewWidget />
        </div>
        <div className="h-[220px]">
          <NewsWidget />
        </div>
      </div>

      {/* Main Dashboard Row - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Left Column - Family Information */}
        <div className="lg:col-span-2 space-y-4">
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
        </div>

        {/* Right Column - Stats and Document Upload */}
        <div className="space-y-4">
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
        </div>
      </div>

      {/* Insights and Recommendations */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Wichtige Informationen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
          <InsightCard
            title="Neues Energieeffizienzgesetz"
            description="Ab 01.06.2025 müssen alle Wohngebäude neue Energiestandards erfüllen."
            category="Gesetzesänderung"
            date="15.04.2025"
            isPriority={true}
            action={{
              label: "Details ansehen",
              onClick: () => handleAction("Gesetzesdetails anzeigen")
            }}
          />
          <InsightCard
            title="Steuerliche Absetzbarkeit"
            description="Energetische Sanierungsmaßnahmen können bis zu 20% von der Steuer abgesetzt werden."
            category="Steuertipp"
            date="10.04.2025"
            action={{
              label: "Mehr erfahren",
              onClick: () => handleAction("Steuerinfos anzeigen")
            }}
          />
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Handlungsempfehlungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <RecommendationCard
            title="Fördermittel für Solaranlage"
            description="Sie können für Ihre Immobilie Fördermittel für eine neue Solaranlage beantragen."
            actionLabel="Förderantrag starten"
            onAction={() => handleAction("Förderantrag")}
            saving="€4,500"
            deadline="30.06.2025"
          />
          <RecommendationCard
            title="Stromanbieterwechsel"
            description="Durch einen Wechsel zu einem günstigeren Ökostromanbieter können Sie jährlich sparen."
            actionLabel="Anbieter vergleichen"
            onAction={() => handleAction("Anbietervergleich")}
            saving="€320 pro Jahr"
          />
          <RecommendationCard
            title="Steuererklärung einreichen"
            description="Die Frist für die Steuererklärung 2024 endet bald. Mit unserer Hilfe können Sie sie schnell fertigstellen."
            actionLabel="Steuererklärung starten"
            onAction={() => handleAction("Steuererklärung")}
            deadline="31.05.2025"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

const Index: React.FC = () => {
  return <Dashboard />;
};

export default Index;
