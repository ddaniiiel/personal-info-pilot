
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Car, Train, Calendar, AlertTriangle } from 'lucide-react';
import SubcategoryLayout from './SubcategoryLayout';
import { Progress } from '@/components/ui/progress';

const MobilitaetContent: React.FC = () => {
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

  return (
    <div className="space-y-6">
      <SubcategoryLayout title="Fahrzeuge" description="Verwaltung und Überwachung Ihrer Fahrzeuge">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Fahrzeugübersicht</h3>
            <Button variant="outline" size="sm">Fahrzeug hinzufügen</Button>
          </div>
          
          {vehicles.map(vehicle => (
            <Card key={vehicle.id} className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Car className="h-5 w-5 mr-2 text-dashboard-purple" />
                    {vehicle.name}
                  </CardTitle>
                  <Badge>{vehicle.licensePlate}</Badge>
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
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">Service planen</Button>
                  <Button size="sm" variant="outline">Tankstellen</Button>
                  <Button size="sm" variant="outline">Kostenübersicht</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout title="Öffentlicher Nahverkehr" description="Verwaltung von Abonnements und Tickets">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Abonnements</h3>
            <Button variant="outline" size="sm">Abo hinzufügen</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Typ</TableHead>
                <TableHead>Gültig bis</TableHead>
                <TableHead>Person</TableHead>
                <TableHead>Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {publicTransport.map(item => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.type}</TableCell>
                  <TableCell>{item.expiry}</TableCell>
                  <TableCell>{item.person}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Verlängern</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout title="Reiseplanung" description="Geplante und vergangene Reisen">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Kommende Reisen</h3>
            <Button variant="outline" size="sm">Reise planen</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingTrips.map(trip => (
              <Card key={trip.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{trip.destination}</h4>
                      <p className="text-sm text-muted-foreground">{trip.date}</p>
                      <p className="text-sm">Transport: {trip.transport}</p>
                    </div>
                    <Calendar className="h-5 w-5 text-dashboard-purple" />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline">Details</Button>
                    <Button size="sm" variant="outline">Bearbeiten</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default MobilitaetContent;
