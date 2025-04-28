
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PawPrint, Calendar, Pill, Scale, HeartPulse } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SubcategoryLayout from './SubcategoryLayout';

const HaustiereContent: React.FC = () => {
  const pets = [
    { 
      id: 1, 
      name: 'Luna', 
      type: 'Hund', 
      breed: 'Golden Retriever',
      age: '3 Jahre',
      weight: '28 kg',
      chipNumber: '756098100123456',
      image: '/placeholder.svg'
    },
    { 
      id: 2, 
      name: 'Felix', 
      type: 'Katze', 
      breed: 'Europäische Kurzhaar',
      age: '5 Jahre',
      weight: '4,8 kg',
      chipNumber: '756098100654321',
      image: '/placeholder.svg'
    }
  ];

  const appointments = [
    { id: 1, type: 'Tierarzt', date: '12.06.2025', time: '14:30', pet: 'Luna', reason: 'Jährliche Kontrolle' },
    { id: 2, type: 'Impfung', date: '22.07.2025', time: '10:00', pet: 'Felix', reason: 'Auffrischung' },
    { id: 3, type: 'Pflege', date: '05.06.2025', time: '16:00', pet: 'Luna', reason: 'Fellpflege' },
  ];

  const medications = [
    { id: 1, name: 'Zeckenschutz', schedule: 'Monatlich', nextDue: '10.06.2025', pet: 'Luna' },
    { id: 2, name: 'Wurmkur', schedule: 'Vierteljährlich', nextDue: '15.07.2025', pet: 'Luna' },
    { id: 3, name: 'Flohschutz', schedule: 'Monatlich', nextDue: '05.06.2025', pet: 'Felix' },
  ];

  return (
    <div className="space-y-6">
      <SubcategoryLayout title="Haustierprofile" description="Übersicht Ihrer Haustiere">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pets.map(pet => (
            <Card key={pet.id}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={pet.image} alt={pet.name} />
                    <AvatarFallback className="bg-dashboard-purple text-white text-xl">
                      {pet.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{pet.name}</h3>
                    <p className="text-muted-foreground">{pet.type} - {pet.breed}</p>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Alter</p>
                    <p>{pet.age}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gewicht</p>
                    <p>{pet.weight}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">Chipnummer</p>
                    <p className="font-mono text-sm">{pet.chipNumber}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">Profil bearbeiten</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="flex items-center justify-center h-full">
            <CardContent className="p-6 text-center">
              <PawPrint className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Neues Haustier hinzufügen</h3>
              <p className="text-sm text-muted-foreground mb-4">Fügen Sie ein weiteres Haustier zu Ihrer Familie hinzu.</p>
              <Button>Haustier hinzufügen</Button>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout title="Gesundheit" description="Termine und Medikamente">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Kommende Termine</h3>
            <Button variant="outline" size="sm">Termin hinzufügen</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Typ</TableHead>
                <TableHead>Datum</TableHead>
                <TableHead>Zeit</TableHead>
                <TableHead>Haustier</TableHead>
                <TableHead>Grund</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map(appointment => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-medium">{appointment.type}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{appointment.pet}</Badge>
                  </TableCell>
                  <TableCell>{appointment.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Medikamentenplan</h3>
              <Button variant="outline" size="sm">Medikament hinzufügen</Button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {medications.map(medication => (
                <Card key={medication.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium flex items-center">
                          <Pill className="h-4 w-4 mr-2 text-dashboard-purple" />
                          {medication.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{medication.schedule}</p>
                        <p className="text-sm">Nächste Gabe: {medication.nextDue}</p>
                      </div>
                      <Badge variant="outline">{medication.pet}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SubcategoryLayout>

      <SubcategoryLayout title="Gewichtsverlauf" description="Entwicklung und Ernährung">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Scale className="h-5 w-5 mr-2 text-dashboard-purple" />
                  Gewichtsverlauf - Luna
                </CardTitle>
                <Badge variant="outline">Hund</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Gewichtsverlauf-Diagramm wird hier angezeigt</p>
              </div>
              <div className="flex justify-end mt-4">
                <Button size="sm" variant="outline">Gewicht eintragen</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <HeartPulse className="h-5 w-5 mr-2 text-dashboard-purple" />
                  Gesundheitswerte - Luna
                </CardTitle>
                <Badge variant="outline">Hund</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Letzte Kontrolle</p>
                  <p className="font-medium">15.04.2025</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium text-green-600">Gesund</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nächste Impfung</p>
                  <p className="font-medium">22.09.2025</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Allergie</p>
                  <p className="font-medium">Keine</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button size="sm" variant="outline">Details</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SubcategoryLayout>
    </div>
  );
};

export default HaustiereContent;
