
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CalendarPlus } from 'lucide-react';

interface AddAppointmentDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const AddAppointmentDialog: React.FC<AddAppointmentDialogProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] apple-card">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <CalendarPlus className="h-5 w-5 mr-2 text-primary" />
            Neuen Termin hinzufügen
            </DialogTitle>
          <DialogDescription>
            Füllen Sie die Details für den neuen Tierarzttermin aus.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="petName" className="text-right">
              Haustier
            </Label>
            <Input id="petName" defaultValue="Luna" className="col-span-3 apple-input" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="appointmentType" className="text-right">
              Terminart
            </Label>
            <Input id="appointmentType" defaultValue="Jährliche Kontrolle" className="col-span-3 apple-input" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Datum
            </Label>
            <Input id="date" type="date" className="col-span-3 apple-input" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reason" className="text-right">
              Grund
            </Label>
            <Input id="reason" placeholder="z.B. Impfung, Check-up" className="col-span-3 apple-input" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="apple-button-secondary">Abbrechen</Button>
          <Button type="submit" className="apple-button-primary">Termin speichern</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAppointmentDialog;
