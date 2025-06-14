
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Pill } from 'lucide-react';
import SubcategoryLayout from '../SubcategoryLayout';

interface GesundheitSectionProps {
  isActive: boolean;
}

const GesundheitSection: React.FC<GesundheitSectionProps> = ({ isActive }) => {
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
    <SubcategoryLayout 
      title="Gesundheit" 
      description="Termine und Medikamente"
      isActive={isActive}
      id="#gesundheit"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-foreground">Kommende Termine</h3>
          <Button variant="outline" size="sm" className="apple-button-secondary">
            Termin hinzufügen
          </Button>
        </div>
        
        <div className="apple-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30">
                <TableHead className="font-medium">Typ</TableHead>
                <TableHead className="font-medium">Datum</TableHead>
                <TableHead className="font-medium">Zeit</TableHead>
                <TableHead className="font-medium">Haustier</TableHead>
                <TableHead className="font-medium">Grund</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map(appointment => (
                <TableRow key={appointment.id} className="border-border/30 hover:bg-surface-secondary/50">
                  <TableCell className="font-medium">{appointment.type}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="apple-badge">{appointment.pet}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{appointment.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg text-foreground">Medikamentenplan</h3>
            <Button variant="outline" size="sm" className="apple-button-secondary">
              Medikament hinzufügen
            </Button>
          </div>
          
          <div className="apple-grid grid-cols-1 md:grid-cols-3">
            {medications.map(medication => (
              <Card key={medication.id} className="apple-card apple-hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center text-foreground">
                        <Pill className="h-4 w-4 mr-2 text-primary" />
                        {medication.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{medication.schedule}</p>
                      <p className="text-sm font-medium">Nächste Gabe: {medication.nextDue}</p>
                    </div>
                    <Badge variant="outline" className="apple-badge-success">{medication.pet}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SubcategoryLayout>
  );
};

export default GesundheitSection;
