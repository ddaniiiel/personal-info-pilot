
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface AddTaskDialogProps {
  onClose: () => void;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({ onClose }) => (
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

export default AddTaskDialog;
