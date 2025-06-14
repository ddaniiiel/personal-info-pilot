
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NotFoundSection from "@/components/dashboard/sections/NotFoundSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Check if it's a topic-related 404
  const isTopicRoute = location.pathname.startsWith('/topics/');
  const topicName = isTopicRoute ? location.pathname.split('/topics/')[1] : '';

  return (
    <div className="min-h-screen flex items-center justify-center bg-dashboard-background p-4">
      {isTopicRoute ? (
        <NotFoundSection
          title={`Thema "${topicName}" nicht gefunden`}
          description="Dieses Thema ist derzeit nicht verfügbar oder wurde möglicherweise verschoben."
          showBackButton={true}
        />
      ) : (
        <NotFoundSection
          title="Seite nicht gefunden"
          description="Die angeforderte Seite existiert nicht oder wurde verschoben."
          showBackButton={true}
        />
      )}
    </div>
  );
};

export default NotFound;
