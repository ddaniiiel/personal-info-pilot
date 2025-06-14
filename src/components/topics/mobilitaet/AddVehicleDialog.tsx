
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
import { Car } from 'lucide-react';

interface AddVehicleDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const AddVehicleDialog: React.FC<AddVehicleDialogProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] apple-card">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Car className="h-5 w-5 mr-2 text-primary" />
            Neues Fahrzeug hinzufügen
          </DialogTitle>
          <DialogDescription>
            Geben Sie die Informationen zu Ihrem neuen Fahrzeug ein.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="vehicleName" className="text-right">
              Name
            </Label>
            <Input id="vehicleName" placeholder="z.B. VW Golf" className="col-span-3 apple-input" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="licensePlate" className="text-right">
              Kennzeichen
            </Label>
            <Input id="licensePlate" placeholder="z.B. ZH 12345" className="col-span-3 apple-input" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="insuranceExpiry" className="text-right">
              Vers. gültig bis
            </Label>
            <Input id="insuranceExpiry" type="date" className="col-span-3 apple-input" />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="serviceDue" className="text-right">
              Service fällig
            </Label>
            <Input id="serviceDue" type="date" className="col-span-3 apple-input" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="apple-button-secondary">Abbrechen</Button>
          <Button type="submit" className="apple-button-primary">Fahrzeug speichern</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddVehicleDialog;
