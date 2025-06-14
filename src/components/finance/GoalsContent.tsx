
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, PlusCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { OptimizedImage } from '@/components/ui/optimized-image';

const goals = [
  { id: 1, name: 'Notgroschen', target: 5000, current: 3500, deadline: '31.12.2025' },
  { id: 2, name: 'Urlaub Thailand', target: 2500, current: 1800, deadline: '30.06.2026' },
  { id: 3, name: 'Neues Fahrrad', target: 800, current: 800, deadline: '15.08.2025' },
];

const GoalsContent: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-primary" />
            Finanzielle Ziele
          </CardTitle>
          <Button variant="outline" size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Neues Ziel
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Setzen und verfolgen Sie Ihre finanziellen Ziele. Visualisieren Sie Ihren Fortschritt und bleiben Sie motiviert.
        </p>
        <div className="mb-6">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Finanzielle Ziele Illustration"
            className="rounded-lg shadow-md w-full h-auto max-h-60 object-cover"
            width={1000}
            height={400}
          />
        </div>
        <div className="space-y-6">
          {goals.map((goal) => (
            <Card key={goal.id} className="apple-card apple-hover-lift p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold flex items-center">
                  <Target className="h-4 w-4 mr-2 text-primary" />
                  {goal.name}
                </h4>
                <span className="text-sm text-muted-foreground">Fällig: {goal.deadline}</span>
              </div>
              <Progress value={(goal.current / goal.target) * 100} className="h-3 mb-1" />
              <div className="flex justify-between text-sm">
                <span className="font-medium">{goal.current.toFixed(2)} € / {goal.target.toFixed(2)} €</span>
                <span className={`${(goal.current / goal.target) * 100 >= 100 ? 'text-green-600 font-bold' : 'text-muted-foreground'}`}>
                  {((goal.current / goal.target) * 100).toFixed(0)}% erreicht
                </span>
              </div>
            </Card>
          ))}
        </div>
         <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">Planen Sie hier detaillierte Schritte zur Zielerreichung.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalsContent;
