
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PiggyBank, PlusCircle } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

const budgets = [
  { id: 1, name: 'Lebensmittel', allocated: 400, spent: 250, remaining: 150 },
  { id: 2, name: 'Freizeit & Unterhaltung', allocated: 200, spent: 120, remaining: 80 },
  { id: 3, name: 'Transport', allocated: 150, spent: 90, remaining: 60 },
  { id: 4, name: 'Kleidung', allocated: 100, spent: 110, remaining: -10 },
];

const BudgetsContent: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <PiggyBank className="h-5 w-5 mr-2 text-primary" />
            Budgetplanung
          </CardTitle>
          <Button variant="outline" size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Neues Budget
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Verwalten Sie Ihre Budgets, um Ihre Ausgaben im Griff zu behalten. Setzen Sie Limits für verschiedene Kategorien und verfolgen Sie Ihren Fortschritt.
        </p>
         <div className="mb-6">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Budget Planung Visualisierung"
            className="rounded-lg shadow-md w-full h-auto max-h-60 object-cover"
            width={1000}
            height={400}
          />
        </div>
        <div className="space-y-6">
          {budgets.map((budget) => (
            <div key={budget.id} className="p-4 border rounded-lg bg-surface-secondary/50">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{budget.name}</span>
                <span className={`text-sm font-semibold ${budget.remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {budget.remaining >= 0 ? `${budget.remaining.toFixed(2)} € übrig` : `${Math.abs(budget.remaining).toFixed(2)} € überschritten`}
                </span>
              </div>
              <Progress value={(budget.spent / budget.allocated) * 100} className="h-3 mb-1" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{budget.spent.toFixed(2)} € von {budget.allocated.toFixed(2)} €</span>
                <span>{((budget.spent / budget.allocated) * 100).toFixed(0)}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">Hier könnten detailliertere Analysen und Budget-Anpassungsoptionen folgen.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetsContent;
