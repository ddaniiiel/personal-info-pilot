
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SubcategoryLayout from '../SubcategoryLayout';

interface HaustiereProfilSectionProps {
  isActive: boolean;
}

const HaustiereProfilSection: React.FC<HaustiereProfilSectionProps> = ({ isActive }) => {
  const pets = [
    { 
      id: 1, 
      name: 'Luna', 
      type: 'Hund', 
      breed: 'Golden Retriever',
      age: '3 Jahre',
      weight: '28 kg',
      chipNumber: '756098100123456',
      image: '/placeholder.svg'
    },
    { 
      id: 2, 
      name: 'Felix', 
      type: 'Katze', 
      breed: 'Europäische Kurzhaar',
      age: '5 Jahre',
      weight: '4,8 kg',
      chipNumber: '756098100654321',
      image: '/placeholder.svg'
    }
  ];
  
  return (
    <SubcategoryLayout 
      title="Haustierprofile" 
      description="Übersicht Ihrer Haustiere"
      isActive={isActive}
      id="#profile"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pets.map(pet => (
          <Card key={pet.id}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={pet.image} alt={pet.name} />
                  <AvatarFallback className="bg-dashboard-purple text-white text-xl">
                    {pet.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{pet.name}</h3>
                  <p className="text-muted-foreground">{pet.type} - {pet.breed}</p>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Alter</p>
                  <p>{pet.age}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gewicht</p>
                  <p>{pet.weight}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Chipnummer</p>
                  <p className="font-mono text-sm">{pet.chipNumber}</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm">Profil bearbeiten</Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Card className="flex items-center justify-center h-full">
          <CardContent className="p-6 text-center">
            <PawPrint className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Neues Haustier hinzufügen</h3>
            <p className="text-sm text-muted-foreground mb-4">Fügen Sie ein weiteres Haustier zu Ihrer Familie hinzu.</p>
            <Button>Haustier hinzufügen</Button>
          </CardContent>
        </Card>
      </div>
    </SubcategoryLayout>
  );
};

export default HaustiereProfilSection;
