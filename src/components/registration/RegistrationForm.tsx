
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useUser, UserType, InterestTopic } from '@/contexts/UserContext';

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const { registerUser } = useUser();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userType: 'private' as UserType,
    location: '',
    interests: ['wohnen', 'steuern'] as InterestTopic[]
  });

  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<InterestTopic[]>([
    'wohnen', 'steuern'
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (value: string) => {
    setFormData({ ...formData, userType: value as UserType });
  };

  const toggleInterest = (interest: InterestTopic) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast({
          title: "Alle Felder sind erforderlich",
          description: "Bitte füllen Sie alle Pflichtfelder aus.",
          variant: "destructive"
        });
        return;
      }
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.location) {
      toast({
        title: "Bitte wählen Sie einen Standort",
        description: "Der Standort wird benötigt, um Inhalte zu personalisieren.",
        variant: "destructive"
      });
      return;
    }
    
    registerUser({
      ...formData,
      interests: selectedInterests,
      isRegistered: true
    });
    
    toast({
      title: "Registrierung erfolgreich!",
      description: "Ihr Dashboard wurde personalisiert.",
    });
  };

  const interestOptions: { id: InterestTopic; label: string }[] = [
    { id: 'wohnen', label: 'Wohnen & Eigentum' },
    { id: 'steuern', label: 'Steuern' },
    { id: 'versicherungen', label: 'Versicherungen' },
    { id: 'energie', label: 'Energie' },
    { id: 'recht', label: 'Recht & Compliance' },
    { id: 'foerderungen', label: 'Förderprogramme' }
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-dashboard-purple">
          {step === 1 ? 'Personalisieren Sie Ihr Dashboard' : 'Themen & Interessen'}
        </CardTitle>
        <CardDescription>
          {step === 1 
            ? 'Geben Sie Ihre Daten ein, um ein personalisiertes Erlebnis zu erhalten' 
            : 'Wählen Sie die Themen, über die Sie informiert werden möchten'}
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {step === 1 ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Art des Nutzers</Label>
                <RadioGroup
                  defaultValue={formData.userType}
                  onValueChange={handleUserTypeChange}
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
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="location">Standort</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => handleSelectChange('location', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Wählen Sie Ihren Standort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zuerich">Zürich</SelectItem>
                    <SelectItem value="bern">Bern</SelectItem>
                    <SelectItem value="basel">Basel</SelectItem>
                    <SelectItem value="genf">Genf</SelectItem>
                    <SelectItem value="lausanne">Lausanne</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Interessenbereiche</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {interestOptions.map((interest) => (
                    <button
                      type="button"
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      className={`topic-pill ${
                        selectedInterests.includes(interest.id) 
                          ? 'topic-pill-active' 
                          : 'topic-pill-inactive'
                      }`}
                    >
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>

        <CardFooter>
          {step === 1 ? (
            <Button 
              type="button" 
              onClick={handleNextStep}
              className="w-full bg-dashboard-purple hover:bg-dashboard-purple-dark"
            >
              Weiter
            </Button>
          ) : (
            <div className="flex w-full space-x-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep(1)}
                className="flex-1"
              >
                Zurück
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-dashboard-purple hover:bg-dashboard-purple-dark"
              >
                Dashboard starten
              </Button>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default RegistrationForm;
