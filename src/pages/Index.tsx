
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import InsightCard from '@/components/dashboard/InsightCard';
import RecommendationCard from '@/components/dashboard/RecommendationCard';
import ChartCard from '@/components/dashboard/ChartCard';
import WeatherWidget from '@/components/dashboard/WeatherWidget';
import TimeWidget from '@/components/dashboard/TimeWidget';
import DocumentUploader from '@/components/dashboard/DocumentUploader';
import { useToast } from '@/hooks/use-toast';
import { Home, BarChart, FileText, AlertCircle } from 'lucide-react';

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
  
  // Entfernung der Authentifizierungsprüfung und Weiterleitung
  
  const handleAction = (actionType: string) => {
    toast({
      title: "Aktion ausgeführt",
      description: `Die Aktion "${actionType}" wurde gestartet.`,
    });
  };

  return (
    <DashboardLayout>
      {/* Time and Weather Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-1">
          <TimeWidget />
        </div>
        <div className="lg:col-span-1">
          <WeatherWidget />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Wichtige Dokumente" 
          value="8"
          icon={<FileText className="h-5 w-5 text-dashboard-purple" />}
        />
        <StatCard 
          title="Laufende Fristen" 
          value="3"
          change={{ value: 1, isPositive: false }}
          icon={<AlertCircle className="h-5 w-5 text-dashboard-purple" />}
        />
        <StatCard 
          title="Energieverbrauch" 
          value="-12%"
          change={{ value: 12, isPositive: true }}
          icon={<BarChart className="h-5 w-5 text-dashboard-purple" />}
        />
        <StatCard 
          title="Einsparungen 2023" 
          value="€3,240"
          change={{ value: 18, isPositive: true }}
          icon={<Home className="h-5 w-5 text-dashboard-purple" />}
        />
      </div>

      {/* Document Uploader and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <DocumentUploader />
        </div>
        <div className="space-y-6">
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
      </div>

      {/* Charts */}
      <div className="mb-8">
        <ChartCard
          title="Energieverbrauch der letzten 6 Monate"
          data={energyData}
          dataKey="value"
        />
      </div>

      {/* Recommendations */}
      <h2 className="text-xl font-semibold mb-4">Handlungsempfehlungen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </DashboardLayout>
  );
};

const Index: React.FC = () => {
  return <Dashboard />;
};

export default Index;
