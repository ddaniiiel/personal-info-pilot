import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, Edit3, Shield } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";


const Profile: React.FC = () => {
  // Placeholder data
  const userProfile = {
    name: 'Max Mustermann',
    email: 'max.mustermann@example.com',
    phone: '+41 79 123 45 67',
    avatarUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Begeisterter Technologie-Enthusiast und Familienmensch. Immer auf der Suche nach neuen Wegen, den Alltag zu optimieren.',
    coverImageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80'
  };

  return (
    <DashboardLayout>
       <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-3.5 w-3.5 mr-1" />
                <span className="sr-only">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profil</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-[-4rem] md:mb-[-6rem] shadow-lg">
        <OptimizedImage
          src={userProfile.coverImageUrl}
          alt="Profil Cover Bild"
          className="w-full h-full object-cover"
          width={1600}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <Card className="apple-card relative z-10 max-w-4xl mx-auto mb-8">
        <CardContent className="pt-8 text-center">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 border-4 border-white shadow-xl">
            <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} />
            <AvatarFallback>{userProfile.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">{userProfile.name}</h1>
          <p className="text-muted-foreground mb-4">{userProfile.bio}</p>
          <Button variant="outline" size="sm" className="apple-button-secondary">
            <Edit3 className="h-4 w-4 mr-2" />
            Profil bearbeiten
          </Button>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="apple-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <User className="h-5 w-5 mr-2 text-primary" />
              Persönliche Informationen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{userProfile.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{userProfile.phone}</span>
            </div>
            <Button variant="link" className="p-0 h-auto text-primary hover:underline">Kontaktdaten ändern</Button>
          </CardContent>
        </Card>

        <Card className="apple-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Sicherheit & Datenschutz
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">Verwalten Sie Ihre Sicherheitseinstellungen und Datenschutzeinstellungen.</p>
            <Button variant="outline" className="w-full apple-button-secondary">Passwort ändern</Button>
            <Button variant="outline" className="w-full apple-button-secondary">Datenschutzeinstellungen</Button>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-8">
         <p className="text-sm text-muted-foreground">Weitere Profileinstellungen wie Benachrichtigungen, verbundene Konten etc. folgen hier.</p>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
