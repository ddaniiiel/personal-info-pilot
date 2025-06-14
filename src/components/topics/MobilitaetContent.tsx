import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Car, Train, Calendar, AlertTriangle, PlusCircle } from 'lucide-react';
import SubcategoryLayout from './SubcategoryLayout';
import { Progress } from '@/components/ui/progress';
import AddVehicleDialog from './mobilitaet/AddVehicleDialog';
import { useToast } from '@/components/ui/use-toast';

interface MobilitaetContentProps {
  activeSubcategory: string | null;
}

const MobilitaetContent: React.FC<MobilitaetContentProps> = ({ activeSubcategory }) => {
  const { toast } = useToast();
  const [isAddVehicleDialogOpen, setIsAddVehicleDialogOpen] = useState(false);

  const vehicles = [
    { 
      id: 1, 
      name: 'VW Golf', 
      type: 'Auto', 
      licensePlate: 'ZH 123456',
      insuranceExpiry: '31.12.2025',
      serviceDue: '10.07.2025',
      fuelLevel: 75
    },
    { 
      id: 2, 
      name: 'Honda Civic', 
      type: 'Auto', 
      licensePlate: 'ZH 654321',
      insuranceExpiry: '15.09.2025',
      serviceDue: '22.08.2025',
      fuelLevel: 45
    }
  ];

  const publicTransport = [
    { id: 1, type: 'SBB GA', expiry: '31.12.2025', person: 'Thomas Müller' },
    { id: 2, type: 'ZVV Halbtax', expiry: '15.10.2025', person: 'Anna Müller' },
  ];

  const upcomingTrips = [
    { id: 1, destination: 'Bern', date: '28.05.2025', transport: 'SBB' },
    { id: 2, destination: 'Luzern', date: '12.06.2025', transport: 'Auto (VW Golf)' },
  ];

  const showNotImplementedToast = (featureName: string) => {
    toast({
      title: "Funktion in Arbeit",
      description: `${featureName} wird bald verfügbar sein.`,
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <SubcategoryLayout 
        title="Fahrzeuge" 
        description="Verwaltung und Überwachung Ihrer Fahrzeuge"
        isActive={activeSubcategory === '#fahrzeuge'}
        id="#fahrzeuge"
        category="mobilitaet"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg">Fahrzeugübersicht</h3>
            <Button variant="outline" size="sm" className="apple-button-secondary" onClick={() => setIsAddVehicleDialogOpen(true)}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Fahrzeug hinzufügen
            </Button>
          </div>
          
          {vehicles.map(vehicle => (
            <Card key={vehicle.id} className="mb-4 apple-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Car className="h-5 w-5 mr-2 text-primary" />
                    {vehicle.name}
                  </CardTitle>
                  <Badge variant="outline" className="apple-badge">{vehicle.licensePlate}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Versicherung gültig bis</p>
                    <p>{vehicle.insuranceExpiry}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Service fällig am</p>
                    <p className="flex items-center">
                      {vehicle.serviceDue}
                      {new Date(vehicle.serviceDue.split('.').reverse().join('-')) < new Date(Date.now() + 30*24*60*60*1000) && (
                        <AlertTriangle className="h-4 w-4 text-amber-500 ml-2" />
                      )}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground mb-1">Tankstand</p>
                    <div className="flex items-center">
                      <Progress value={vehicle.fuelLevel} className="h-2 flex-1" />
                      <span className="ml-2 text-sm font-medium">{vehicle.fuelLevel}%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" className="apple-button-secondary" onClick={() => showNotImplementedToast('Serviceplanung')}>Service planen</Button>
                  <Button size="sm" variant="outline" className="apple-button-secondary" onClick={() => showNotImplementedToast('Tankstellensuche')}>Tankstellen</Button>
                  <Button size="sm" variant="outline" className="apple-button-secondary" onClick={() => showNotImplementedToast('Kostenübersicht')}>Kostenübersicht</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout 
        title="Öffentlicher Nahverkehr" 
        description="Verwaltung von Abonnements und Tickets"
        isActive={activeSubcategory === '#oeffentlicher-verkehr'}
        id="#oeffentlicher-verkehr"
        category="mobilitaet"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg">Abonnements</h3>
            <Button variant="outline" size="sm" className="apple-button-secondary" onClick={() => showNotImplementedToast('Abo hinzufügen')}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Abo hinzufügen
            </Button>
          </div>
          <div className="apple-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="font-medium">Typ</TableHead>
                  <TableHead className="font-medium">Gültig bis</TableHead>
                  <TableHead className="font-medium">Person</TableHead>
                  <TableHead className="font-medium">Aktionen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {publicTransport.map(item => (
                  <TableRow key={item.id} className="border-border/30 hover:bg-surface-secondary/50">
                    <TableCell className="font-medium">{item.type}</TableCell>
                    <TableCell>{item.expiry}</TableCell>
                    <TableCell>{item.person}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => showNotImplementedToast('Abo verlängern')}>Verlängern</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout 
        title="Reiseplanung" 
        description="Geplante und vergangene Reisen"
        isActive={activeSubcategory === '#reiseplanung'}
        id="#reiseplanung"
        category="mobilitaet"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg">Kommende Reisen</h3>
            <Button variant="outline" size="sm" className="apple-button-secondary" onClick={() => showNotImplementedToast('Reise planen')}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Reise planen
            </Button>
          </div>
          <div className="apple-grid grid-cols-1 md:grid-cols-2">
            {upcomingTrips.map(trip => (
              <Card key={trip.id} className="apple-card apple-hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{trip.destination}</h4>
                      <p className="text-sm text-muted-foreground">{trip.date}</p>
                      <p className="text-sm">Transport: {trip.transport}</p>
                    </div>
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline" className="apple-button-secondary" onClick={() => showNotImplementedToast('Reisedetails anzeigen')}>Details</Button>
                    <Button size="sm" variant="outline" className="apple-button-secondary" onClick={() => showNotImplementedToast('Reise bearbeiten')}>Bearbeiten</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SubcategoryLayout>
      <AddVehicleDialog isOpen={isAddVehicleDialogOpen} onOpenChange={setIsAddVehicleDialogOpen} />
    </div>
  );
};

export default MobilitaetContent;
