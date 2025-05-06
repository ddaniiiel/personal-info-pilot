
import React, { memo } from 'react';
import SubcategoryLayout from '../SubcategoryLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bolt, Wifi, Thermometer, Lightbulb, LampFloor, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface SmartHomeSectionProps {
  isActive: boolean;
}

const devices = [
  {
    id: 1,
    name: 'Wohnzimmer Thermostat',
    icon: Thermometer,
    iconColor: 'text-orange-500',
    status: 'Online',
    statusColor: 'bg-green-500',
    value: '21.5°C',
    battery: 78,
    category: 'Heizung',
    connected: true
  },
  {
    id: 2,
    name: 'Schlafzimmer Licht',
    icon: Lightbulb,
    iconColor: 'text-yellow-500',
    status: 'Offline',
    statusColor: 'bg-red-500',
    value: 'Aus',
    battery: 42,
    category: 'Beleuchtung',
    connected: false
  },
  {
    id: 3,
    name: 'Steckdose Küche',
    icon: Bolt,
    iconColor: 'text-blue-500',
    status: 'Online',
    statusColor: 'bg-green-500',
    value: '0.2 kW',
    battery: null,
    category: 'Strom',
    connected: true
  },
  {
    id: 4,
    name: 'Stehlampe Büro',
    icon: LampFloor,
    iconColor: 'text-purple-500',
    status: 'Online',
    statusColor: 'bg-green-500',
    value: 'Ein (35%)',
    battery: 86,
    category: 'Beleuchtung',
    connected: true
  }
];

const automations = [
  {
    id: 1,
    title: 'Nachtmodus',
    description: 'Alle Lichter dimmen und Heizung reduzieren um 22:00',
    active: true
  },
  {
    id: 2,
    title: 'Stromsparmodus',
    description: 'Standby-Geräte bei Abwesenheit automatisch ausschalten',
    active: true
  },
  {
    id: 3,
    title: 'Lichtautomatik',
    description: 'Beleuchtung je nach Sonneneinstrahlung steuern',
    active: false
  },
  {
    id: 4,
    title: 'Heizsaisonprogramm',
    description: 'Heizung basierend auf Aussentemperatur regulieren',
    active: true
  }
];

const SmartHomeSection: React.FC<SmartHomeSectionProps> = ({ isActive }) => {
  return (
    <SubcategoryLayout 
      title="Smart Home (Energie)" 
      description="Integrieren Sie Energieeffizienz in Ihr Smart Home und steuern Sie Ihren Verbrauch intelligent."
      isActive={isActive}
      id="#smart-home"
    >
      <div className="space-y-6">
        <Card className="overflow-hidden border-blue-100">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055858a13d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Smart Home Ecosystem" 
                className="max-h-48 object-contain"
                loading="lazy"
              />
            </div>
            <div className="sm:w-2/3 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Bolt className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Smart-Home Geräte</h3>
                  <p className="text-sm text-muted-foreground">Steuern Sie Ihren Energieverbrauch durch intelligente Vernetzung</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-sm">
                  Mit vernetzten Geräten können Sie bis zu <span className="font-semibold">30% Energie einsparen</span>. 
                  Durch intelligente Steuerung passen sich die Geräte automatisch an Ihren Tagesablauf an und 
                  vermeiden unnötigen Verbrauch.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Vernetzte Geräte</p>
                    <p className="text-xl font-bold">4 <span className="text-sm font-normal text-muted-foreground">von 12</span></p>
                  </div>
                  <div>
                    <p className="font-medium">Einsparung</p>
                    <p className="text-xl font-bold">15% <span className="text-sm font-normal text-green-600">+3%</span></p>
                  </div>
                </div>
              </div>
              <Button>
                Geräte verwalten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Vernetzte Geräte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {devices.map(device => (
            <Card key={device.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="pb-2 pt-4">
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{device.category}</Badge>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full ${device.statusColor} mr-1.5`}></div>
                    <span className="text-xs">{device.status}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 bg-gray-100 rounded-full ${device.connected ? 'ring-1 ring-blue-400 ring-offset-1' : ''}`}>
                    <device.icon className={`h-6 w-6 ${device.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-medium leading-tight">{device.name}</h4>
                    <p className="text-xl font-semibold">{device.value}</p>
                  </div>
                </div>
                
                {device.battery !== null && (
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-0.5">
                      <span>Batterie</span>
                      <span>{device.battery}%</span>
                    </div>
                    <Progress value={device.battery} className="h-1.5" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" size="sm" className="w-full">Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Automatisierungen</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {automations.map((automation) => (
                <div key={automation.id} className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${automation.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <Bolt className={`h-4 w-4 ${automation.active ? 'text-green-600' : 'text-gray-600'}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium leading-none">{automation.title}</p>
                      <Badge variant={automation.active ? "default" : "outline"} className={automation.active ? "bg-green-500" : ""}>
                        {automation.active ? "Aktiv" : "Inaktiv"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{automation.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button size="sm">Neue Automatisierung erstellen</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Integration mit erneuerbaren Energien</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Solar Integration" 
                  className="h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Verbinden Sie Ihre Solaranlage mit Ihrem Smart Home, um den selbst produzierten Strom optimal zu nutzen.
                Geräte können automatisch eingeschaltet werden, wenn viel Solarstrom zur Verfügung steht.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">FAQ durchsuchen</Button>
              <Button>Verbinden</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </SubcategoryLayout>
  );
};

export default memo(SmartHomeSection);
