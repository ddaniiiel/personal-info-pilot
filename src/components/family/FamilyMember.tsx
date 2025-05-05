
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface FamilyMemberProps {
  name: string;
  role: string;
  photoUrl?: string;
  initials: string;
}

const FamilyMember: React.FC<FamilyMemberProps> = ({ name, role, photoUrl, initials }) => (
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

export default FamilyMember;
