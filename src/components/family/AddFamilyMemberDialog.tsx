
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface AddFamilyMemberDialogProps {
  onClose: () => void;
}

const AddFamilyMemberDialog: React.FC<AddFamilyMemberDialogProps> = ({ onClose }) => (
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

export default AddFamilyMemberDialog;
