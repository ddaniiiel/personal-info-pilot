
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, CheckSquare, Utensils } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import FamilyMember from '@/components/family/FamilyMember';
import AddFamilyMemberDialog from '@/components/family/AddFamilyMemberDialog';
import FamilyCalendar from '@/components/family/FamilyCalendar';
import TaskList from '@/components/family/TaskList';
import MealPlanner from '@/components/family/MealPlanner';
import EmergencyInfo from '@/components/family/EmergencyInfo';

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
              <FamilyCalendar />
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
