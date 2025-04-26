
import React, { useState } from 'react';
import { useUser, UserType } from '@/contexts/UserContext';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const ProfileSettings: React.FC = () => {
  const { user, updateUser, logout } = useUser();
  const { toast } = useToast();
  
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [userType, setUserType] = useState<UserType>(user.userType);
  const [location, setLocation] = useState(user.location);
  const [loading, setLoading] = useState(false);
  
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      updateUser({
        firstName,
        lastName,
        userType,
        location
      });
      
      toast({
        title: "Profil aktualisiert",
        description: "Ihre Änderungen wurden gespeichert."
      });
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: "Ihre Änderungen konnten nicht gespeichert werden.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Abgemeldet",
        description: "Sie wurden erfolgreich abgemeldet."
      });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Abmelden.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Profileinstellungen</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Vorname</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nachname</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              value={user.email}
              disabled
              className="bg-muted"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Art des Nutzers</Label>
            <RadioGroup
              value={userType}
              onValueChange={(value) => setUserType(value as UserType)}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private">Privatperson</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Unternehmen</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Kanton</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Wählen Sie Ihren Kanton" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zurich">Zürich</SelectItem>
                <SelectItem value="bern">Bern</SelectItem>
                <SelectItem value="luzern">Luzern</SelectItem>
                <SelectItem value="uri">Uri</SelectItem>
                <SelectItem value="schwyz">Schwyz</SelectItem>
                <SelectItem value="obwalden">Obwalden</SelectItem>
                <SelectItem value="nidwalden">Nidwalden</SelectItem>
                <SelectItem value="glarus">Glarus</SelectItem>
                <SelectItem value="zug">Zug</SelectItem>
                <SelectItem value="freiburg">Freiburg</SelectItem>
                <SelectItem value="solothurn">Solothurn</SelectItem>
                <SelectItem value="basel_stadt">Basel-Stadt</SelectItem>
                <SelectItem value="basel_landschaft">Basel-Landschaft</SelectItem>
                <SelectItem value="schaffhausen">Schaffhausen</SelectItem>
                <SelectItem value="appenzell_ausserrhoden">Appenzell Ausserrhoden</SelectItem>
                <SelectItem value="appenzell_innerrhoden">Appenzell Innerrhoden</SelectItem>
                <SelectItem value="st_gallen">St. Gallen</SelectItem>
                <SelectItem value="graubunden">Graubünden</SelectItem>
                <SelectItem value="aargau">Aargau</SelectItem>
                <SelectItem value="thurgau">Thurgau</SelectItem>
                <SelectItem value="tessin">Tessin</SelectItem>
                <SelectItem value="waadt">Waadt</SelectItem>
                <SelectItem value="wallis">Wallis</SelectItem>
                <SelectItem value="neuenburg">Neuenburg</SelectItem>
                <SelectItem value="genf">Genf</SelectItem>
                <SelectItem value="jura">Jura</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading ? 'Wird gespeichert...' : 'Änderungen speichern'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button variant="outline" className="w-full" onClick={handleLogout}>
          Abmelden
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileSettings;
