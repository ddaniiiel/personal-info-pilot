
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
import { Home, PiggyBank, LineChart, CreditCard, TrendingUp, Calendar } from "lucide-react";
import FinanceAssistant from '@/components/finance/FinanceAssistant';

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
        <h1 className="text-2xl font-bold mb-2">Finanzübersicht</h1>
        <p className="text-muted-foreground">
          Analysiere und verwalte deine persönlichen Finanzen mit KI-gestützten Einsichten
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="transactions">Transaktionen</TabsTrigger>
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
          <TabsTrigger value="goals">Ziele</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-dashboard-purple" />
                  Finanztrends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-gray-50 rounded-md border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Transaktionen der letzten 30 Tage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-dashboard-purple" />
                  Anstehende Zahlungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-md border border-gray-100 flex justify-between">
                    <div>
                      <p className="text-sm font-medium">Versicherung</p>
                      <p className="text-xs text-muted-foreground">15.05.2025</p>
                    </div>
                    <p className="font-medium">€245,00</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md border border-gray-100 flex justify-between">
                    <div>
                      <p className="text-sm font-medium">Stromrechnung</p>
                      <p className="text-xs text-muted-foreground">18.05.2025</p>
                    </div>
                    <p className="font-medium">€87,50</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md border border-gray-100 flex justify-between">
                    <div>
                      <p className="text-sm font-medium">Internet & Telefon</p>
                      <p className="text-xs text-muted-foreground">22.05.2025</p>
                    </div>
                    <p className="font-medium">€64,90</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <FinanceAssistant />
        </TabsContent>
        
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-dashboard-purple" />
                Transaktionen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                <p>Detaillierte Transaktionsübersicht wird hier angezeigt</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="budgets">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PiggyBank className="h-5 w-5 mr-2 text-dashboard-purple" />
                Budgetplanung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                <p>Budget-Planung und -Verfolgung wird hier angezeigt</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-dashboard-purple" />
                Finanzielle Ziele
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                <p>Zielverfolgung und -fortschritt wird hier angezeigt</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Finance;
