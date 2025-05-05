
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

const FamilyCalendar: React.FC = () => {
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

export default FamilyCalendar;
