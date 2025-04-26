
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Auth = () => {
  return (
    <div className="min-h-screen bg-dashboard-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Willkommen im KI-Dashboard</CardTitle>
          <CardDescription>
            Melden Sie sich an oder erstellen Sie ein neues Konto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
