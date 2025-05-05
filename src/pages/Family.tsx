
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, CheckSquare, Utensils, AlertTriangle, Phone, Plus, CalendarDays } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const FamilyMember = ({ name, role, photoUrl, initials }: { name: string; role: string; photoUrl?: string; initials: string }) => (
  <Card className="cursor-pointer hover:shadow-md transition-shadow">
    <CardContent className="p-6 flex flex-col items-center">
      <Avatar className="h-24 w-24 mb-4">
        {photoUrl ? <AvatarImage src={photoUrl} alt={name} /> : null}
        <AvatarFallback className="text-xl">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </CardContent>
  </Card>
);

const AddFamilyMemberDialog = ({ onClose }: { onClose: () => void }) => (
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Familienmitglied hinzufügen</DialogTitle>
    </DialogHeader>
    <form className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="name" className="text-right">Name</label>
        <input id="name" className="col-span-3 p-2 border rounded" placeholder="Vollständiger Name" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="role" className="text-right">Rolle</label>
        <select id="role" className="col-span-3 p-2 border rounded">
          <option value="parent">Elternteil</option>
          <option value="child">Kind</option>
          <option value="grandparent">Großeltern</option>
          <option value="other">Sonstige</option>
        </select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="birthdate" className="text-right">Geburtsdatum</label>
        <input id="birthdate" type="date" className="col-span-3 p-2 border rounded" />
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <Button type="button" variant="outline" onClick={onClose}>Abbrechen</Button>
        <Button type="submit">Hinzufügen</Button>
      </div>
    </form>
  </DialogContent>
);

// New task component
const AddTaskDialog = ({ onClose }: { onClose: () => void }) => (
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Neue Aufgabe hinzufügen</DialogTitle>
    </DialogHeader>
    <form className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="task-title" className="text-right">Aufgabe</label>
        <input id="task-title" className="col-span-3 p-2 border rounded" placeholder="Aufgabentitel" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="deadline" className="text-right">Fälligkeitsdatum</label>
        <input id="deadline" type="date" className="col-span-3 p-2 border rounded" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="priority" className="text-right">Priorität</label>
        <select id="priority" className="col-span-3 p-2 border rounded">
          <option value="high">Hoch</option>
          <option value="medium">Mittel</option>
          <option value="low">Niedrig</option>
        </select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="assignee" className="text-right">Zugewiesen an</label>
        <select id="assignee" className="col-span-3 p-2 border rounded">
          <option value="thomas">Thomas Müller</option>
          <option value="anna">Anna Müller</option>
          <option value="marie">Marie Müller</option>
          <option value="family">Ganze Familie</option>
        </select>
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <Button type="button" variant="outline" onClick={onClose}>Abbrechen</Button>
        <Button type="submit">Hinzufügen</Button>
      </div>
    </form>
  </DialogContent>
);

const FamilyCalendar = () => {
  const [showSyncDialog, setShowSyncDialog] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-md shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-lg">Kommende Termine</h3>
          <Dialog open={showSyncDialog} onOpenChange={setShowSyncDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-2" /> 
                Kalender synchronisieren
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Kalender synchronisieren</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="google-cal" className="rounded" />
                    <label htmlFor="google-cal">Google Kalender</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="outlook-cal" className="rounded" />
                    <label htmlFor="outlook-cal">Outlook Kalender</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="apple-cal" className="rounded" />
                    <label htmlFor="apple-cal">Apple Kalender</label>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => setShowSyncDialog(false)}>Synchronisieren</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center p-2 border-l-4 border-blue-500 bg-blue-50 rounded">
            <div className="ml-2">
              <p className="font-medium">Arzttermin - Marie</p>
              <p className="text-sm text-muted-foreground">Morgen, 14:30 - 15:30</p>
            </div>
          </div>
          <div className="flex items-center p-2 border-l-4 border-green-500 bg-green-50 rounded">
            <div className="ml-2">
              <p className="font-medium">Fussballtraining - Thomas</p>
              <p className="text-sm text-muted-foreground">Donnerstag, 17:00 - 18:30</p>
            </div>
          </div>
          <div className="flex items-center p-2 border-l-4 border-purple-500 bg-purple-50 rounded">
            <div className="ml-2">
              <p className="font-medium">Elternabend Schule</p>
              <p className="text-sm text-muted-foreground">Nächsten Dienstag, 19:00 - 21:00</p>
            </div>
          </div>
        </div>
        
        {/* Calendar View */}
        <div className="mt-4 bg-gray-100 rounded-md p-2">
          <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-medium">
            <div>Mo</div>
            <div>Di</div>
            <div>Mi</div>
            <div>Do</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>So</div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: 31 }, (_, i) => (
              <div 
                key={i} 
                className={`aspect-square p-1 text-xs rounded-sm ${
                  i === 14 ? 'bg-blue-200 font-medium' : 
                  i === 21 ? 'bg-green-200 font-medium' : 
                  i === 25 ? 'bg-purple-200 font-medium' : 
                  'bg-white'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        
        <Button className="mt-4 w-full" variant="outline">Alle Termine ansehen</Button>
      </div>
    </div>
  );
};

const TaskList = () => {
  const [showAddTaskDialog, setShowAddTaskDialog] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-md shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-lg">Aufgaben</h3>
          <Dialog open={showAddTaskDialog} onOpenChange={setShowAddTaskDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" /> 
                Aufgabe hinzufügen
              </Button>
            </DialogTrigger>
            <AddTaskDialog onClose={() => setShowAddTaskDialog(false)} />
          </Dialog>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Einkaufsliste erstellen</span>
            </div>
            <span className="text-sm text-muted-foreground">Heute</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Geschenk für Omas Geburtstag kaufen</span>
            </div>
            <span className="text-sm text-muted-foreground">Diese Woche</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Steuerformulare einreichen</span>
            </div>
            <span className="text-sm text-rose-500">Überfällig</span>
          </div>
        </div>
        <Button className="mt-4 w-full" variant="outline">Alle Aufgaben ansehen</Button>
      </div>
    </div>
  );
};

const MealPlanner = () => (
  <div className="space-y-4">
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h3 className="font-medium text-lg mb-2">Essensplan für diese Woche</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-medium">Montag</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
            <div className="w-24 h-24 mb-2 sm:mb-0 sm:mr-4 rounded-md bg-gray-200 overflow-hidden">
              <img src="/placeholder.svg" alt="Pasta" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">Pasta mit Tomatensauce</p>
              <p className="text-sm text-muted-foreground mb-2">Einfach und schnell zubereitet</p>
              <Button variant="link" className="p-0 h-auto text-dashboard-purple">
                Rezept anzeigen
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-medium">Dienstag</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
            <div className="w-24 h-24 mb-2 sm:mb-0 sm:mr-4 rounded-md bg-gray-200 overflow-hidden">
              <img src="/placeholder.svg" alt="Hähnchen" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">Hähnchen mit Gemüse</p>
              <p className="text-sm text-muted-foreground mb-2">Proteinreich und gesund</p>
              <Button variant="link" className="p-0 h-auto text-dashboard-purple">
                Rezept anzeigen
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-medium">Mittwoch</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
            <div className="w-24 h-24 mb-2 sm:mb-0 sm:mr-4 rounded-md bg-gray-200 overflow-hidden">
              <img src="/placeholder.svg" alt="Gemüseauflauf" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">Gemüseauflauf</p>
              <p className="text-sm text-muted-foreground mb-2">Vegetarisch und vollwertig</p>
              <Button variant="link" className="p-0 h-auto text-dashboard-purple">
                Rezept anzeigen
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button className="mt-4 w-full" variant="outline">Zum Essensplaner</Button>
    </div>
  </div>
);

const EmergencyInfo = () => (
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

const Family: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);

  return (
    <DashboardLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6">Familienverwaltung</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Übersicht</TabsTrigger>
            <TabsTrigger value="members">Familienmitglieder</TabsTrigger>
            <TabsTrigger value="calendar">Kalender</TabsTrigger>
            <TabsTrigger value="tasks">Aufgaben</TabsTrigger>
            <TabsTrigger value="meals">Essensplanung</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="md:col-span-2 lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Meine Familie
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <FamilyMember 
                    name="Thomas Müller" 
                    role="Vater" 
                    photoUrl="/placeholder.svg" 
                    initials="TM" 
                  />
                  <FamilyMember 
                    name="Anna Müller" 
                    role="Mutter" 
                    photoUrl="/placeholder.svg" 
                    initials="AM" 
                  />
                  <FamilyMember 
                    name="Marie Müller" 
                    role="Tochter" 
                    photoUrl="/placeholder.svg" 
                    initials="MM" 
                  />
                  <div className="flex justify-center items-center">
                    <Dialog open={showAddMemberDialog} onOpenChange={setShowAddMemberDialog}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="h-full w-full flex flex-col items-center justify-center border-dashed">
                          <span className="text-2xl mb-2">+</span>
                          <span>Mitglied hinzufügen</span>
                        </Button>
                      </DialogTrigger>
                      <AddFamilyMemberDialog onClose={() => setShowAddMemberDialog(false)} />
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Familienkalender
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FamilyCalendar />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckSquare className="h-5 w-5 mr-2" />
                    Aufgaben
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TaskList />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Utensils className="h-5 w-5 mr-2" />
                    Essensplanung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MealPlanner />
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <EmergencyInfo />
            </div>
          </TabsContent>
          
          <TabsContent value="members" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FamilyMember 
                name="Thomas Müller" 
                role="Vater" 
                photoUrl="/placeholder.svg" 
                initials="TM" 
              />
              <FamilyMember 
                name="Anna Müller" 
                role="Mutter" 
                photoUrl="/placeholder.svg" 
                initials="AM" 
              />
              <FamilyMember 
                name="Marie Müller" 
                role="Tochter" 
                photoUrl="/placeholder.svg" 
                initials="MM" 
              />
              <div className="flex justify-center items-center">
                <Dialog open={showAddMemberDialog} onOpenChange={setShowAddMemberDialog}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="h-full w-full flex flex-col items-center justify-center border-dashed">
                      <span className="text-2xl mb-2">+</span>
                      <span>Mitglied hinzufügen</span>
                    </Button>
                  </DialogTrigger>
                  <AddFamilyMemberDialog onClose={() => setShowAddMemberDialog(false)} />
                </Dialog>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Familienkalender</h2>
              <p className="text-muted-foreground">Verwalten Sie hier alle Termine und Ereignisse Ihrer Familie.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="text-center p-12 border-2 border-dashed rounded-md">
                <h3 className="text-lg font-medium mb-2">Kalender wird geladen...</h3>
                <p className="text-muted-foreground">Hier wird der vollständige Kalender angezeigt.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tasks" className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Aufgabenverwaltung</h2>
              <p className="text-muted-foreground">Organisieren und verteilen Sie Aufgaben innerhalb der Familie.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <TaskList />
            </div>
          </TabsContent>
          
          <TabsContent value="meals" className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Essensplanung</h2>
              <p className="text-muted-foreground">Planen Sie Mahlzeiten und generieren Sie automatisch Einkaufslisten.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <MealPlanner />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Family;
