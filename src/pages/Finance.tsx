import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, PiggyBank, LineChart, CreditCard, TrendingUp } from "lucide-react";
import FinanceAssistant from '@/components/finance/FinanceAssistant';
import FinanceCharts from '@/components/finance/FinanceCharts';
import TransactionsContent from '@/components/finance/TransactionsContent';
import BudgetsContent from '@/components/finance/BudgetsContent';
import GoalsContent from '@/components/finance/GoalsContent';

const Finance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout>
      {/* Breadcrumb navigation */}
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
              <BreadcrumbPage>Finanzen</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-primary">Finanzübersicht</h1>
        <p className="text-muted-foreground">
          Analysiere und verwalte deine persönlichen Finanzen mit KI-gestützten Einsichten und detaillierten Übersichten.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 p-1 bg-surface-secondary rounded-xl">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <LineChart className="h-4 w-4 mr-2" /> Übersicht
          </TabsTrigger>
          <TabsTrigger value="transactions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <CreditCard className="h-4 w-4 mr-2" /> Transaktionen
          </TabsTrigger>
          <TabsTrigger value="budgets" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <PiggyBank className="h-4 w-4 mr-2" /> Budgets
          </TabsTrigger>
          <TabsTrigger value="goals" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">
            <TrendingUp className="h-4 w-4 mr-2" /> Ziele
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8 animate-fade-in">
          <FinanceCharts activeTab={activeTab} />
          <FinanceAssistant />
        </TabsContent>
        
        <TabsContent value="transactions" className="animate-fade-in">
          <TransactionsContent />
        </TabsContent>
        
        <TabsContent value="budgets" className="animate-fade-in">
          <BudgetsContent />
        </TabsContent>
        
        <TabsContent value="goals" className="animate-fade-in">
          <GoalsContent />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Finance;
