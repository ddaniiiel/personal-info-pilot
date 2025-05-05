
import React, { useState } from 'react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import AddTaskDialog from './AddTaskDialog';

const TaskList: React.FC = () => {
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

export default TaskList;
