
import React from 'react';
import InsightCard from '../InsightCard';
import RecommendationCard from '../RecommendationCard';
import { useToast } from '@/hooks/use-toast';

const InsightsRecommendationsSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleAction = (actionType: string) => {
    toast({
      title: "Aktion ausgeführt",
      description: `Die Aktion "${actionType}" wurde gestartet.`,
    });
  };

  return (
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
  );
};

export default React.memo(InsightsRecommendationsSection);
