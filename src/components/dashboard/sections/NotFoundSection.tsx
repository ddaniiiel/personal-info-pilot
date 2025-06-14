
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NotFoundSectionProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
}

const NotFoundSection: React.FC<NotFoundSectionProps> = ({
  title = "Seite nicht gefunden",
  description = "Die gewünschte Seite oder das Thema ist derzeit nicht verfügbar.",
  showBackButton = true
}) => {
  const navigate = useNavigate();

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
          <Search className="h-8 w-8 text-gray-400" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button 
          onClick={() => navigate('/')}
          className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark"
        >
          <Home className="h-4 w-4 mr-2" />
          Zurück zum Dashboard
        </Button>
        {showBackButton && (
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="w-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur vorherigen Seite
          </Button>
        )}
        <div className="text-sm text-muted-foreground text-center pt-2">
          <p>Verfügbare Themenbereiche:</p>
          <div className="flex flex-wrap gap-1 justify-center mt-2">
            {[
              { label: 'Wohnen', path: '/topics/wohnen' },
              { label: 'Energie', path: '/topics/energie' },
              { label: 'Familie', path: '/family' },
              { label: 'Finanzen', path: '/finance' }
            ].map((topic) => (
              <Button
                key={topic.path}
                variant="link"
                size="sm"
                onClick={() => navigate(topic.path)}
                className="h-auto p-1 text-xs"
              >
                {topic.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotFoundSection;
