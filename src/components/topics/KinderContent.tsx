import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Book, Award, Calendar, PenTool } from 'lucide-react';
import SubcategoryLayout from './SubcategoryLayout';

const KinderContent: React.FC = () => {
  const location = useLocation();
  const currentHash = location.hash;

  const schoolEvents = [
    { id: 1, title: 'Elternabend', date: '28.05.2025', location: 'Primarschule Musterstadt', child: 'Marie' },
    { id: 2, title: 'Sportfest', date: '15.06.2025', location: 'Sportplatz', child: 'Thomas' },
    { id: 3, title: 'Schultheater', date: '22.06.2025', location: 'Aula', child: 'Marie' },
  ];

  const courses = [
    { id: 1, title: 'Klavierunterricht', day: 'Montag', time: '16:00 - 17:00', location: 'Musikschule', child: 'Marie' },
    { id: 2, title: 'Fussballtraining', day: 'Mittwoch & Freitag', time: '17:00 - 18:30', location: 'Sportverein', child: 'Thomas' },
    { id: 3, title: 'Schwimmunterricht', day: 'Samstag', time: '10:00 - 11:00', location: 'Hallenbad', child: 'Marie' },
  ];

  const achievements = [
    { id: 1, title: 'Schulzeugnis', date: '12.04.2025', description: 'Halbjahreszeugnis', child: 'Marie' },
    { id: 2, title: 'Schwimmabzeichen', date: '22.03.2025', description: 'Bronze', child: 'Thomas' },
    { id: 3, title: 'Musikwettbewerb', date: '15.02.2025', description: '2. Platz', child: 'Marie' },
  ];

  return (
    <div className="space-y-6">
      <div id="schule" className={cn("scroll-mt-20", currentHash === '#schule' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Schule/Kita" 
          description="Termine und Veranstaltungen"
          isActive={currentHash === '#schule'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Kommende Schulveranstaltungen</h3>
              <Button variant="outline" size="sm">Termin hinzufügen</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Veranstaltung</TableHead>
                  <TableHead>Datum</TableHead>
                  <TableHead>Ort</TableHead>
                  <TableHead>Kind</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schoolEvents.map(event => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.title}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{event.child}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="kurse" className={cn("scroll-mt-20", currentHash === '#kurse' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Kurse & Hobbys" 
          description="Übersicht über Aktivitäten"
          isActive={currentHash === '#kurse'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Laufende Kurse</h3>
              <Button variant="outline" size="sm">Kurs hinzufügen</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map(course => (
                <Card key={course.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.day}, {course.time}</p>
                        <p className="text-sm">{course.location}</p>
                      </div>
                      <Badge variant="outline">{course.child}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SubcategoryLayout>
      </div>

      <div id="entwicklung" className={cn("scroll-mt-20", currentHash === '#entwicklung' ? 'animate-fade-in' : '')}>
        <SubcategoryLayout 
          title="Entwicklung" 
          description="Fortschritte und Erfolge"
          isActive={currentHash === '#entwicklung'}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Leistungen & Errungenschaften</h3>
              <Button variant="outline" size="sm">Hinzufügen</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map(achievement => (
                <Card key={achievement.id}>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Award className="h-10 w-10 text-dashboard-purple mb-2" />
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    <p className="text-sm">{achievement.description}</p>
                    <Badge className="mt-2" variant="outline">{achievement.child}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SubcategoryLayout>
      </div>
    </div>
  );
};

export default KinderContent;
