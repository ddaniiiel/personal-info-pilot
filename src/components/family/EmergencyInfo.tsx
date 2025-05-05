
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Phone } from 'lucide-react';

const EmergencyInfo: React.FC = () => (
  <Card className="border-l-4 border-red-500">
    <CardHeader>
      <CardTitle className="flex items-center">
        <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
        Notfallinformationen
      </CardTitle>
      <CardDescription>Wichtige Kontakte und Informationen für Notfälle</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Notfallkontakte</h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <p>Hausarzt: Dr. Müller - 030 12345678</p>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <p>Nächstes Krankenhaus: St. Elisabeth - 030 87654321</p>
            </div>
          </div>
        </div>
        <Button variant="outline" className="w-full">Alle Notfallinformationen anzeigen</Button>
      </div>
    </CardContent>
  </Card>
);

export default EmergencyInfo;
