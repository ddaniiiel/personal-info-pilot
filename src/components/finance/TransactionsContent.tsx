
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowDownCircle, ArrowUpCircle, CreditCard } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

const transactions = [
  { id: 1, date: '12.06.2025', description: 'Miete Juni', category: 'Wohnen', amount: -1200.00, type: 'Ausgabe' },
  { id: 2, date: '10.06.2025', description: 'Gehalt Mai', category: 'Einkommen', amount: 3500.00, type: 'Einnahme' },
  { id: 3, date: '08.06.2025', description: 'Supermarkt Einkauf', category: 'Lebensmittel', amount: -75.50, type: 'Ausgabe' },
  { id: 4, date: '05.06.2025', description: 'Restaurantbesuch', category: 'Freizeit', amount: -45.00, type: 'Ausgabe' },
  { id: 5, date: '02.06.2025', description: 'Stromabrechnung', category: 'Nebenkosten', amount: -60.00, type: 'Ausgabe' },
];

const TransactionsContent: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary" />
          Letzte Transaktionen
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Hier sehen Sie eine Übersicht Ihrer letzten Einnahmen und Ausgaben. Fügen Sie neue Transaktionen hinzu oder bearbeiten Sie bestehende.
        </p>
        <div className="mb-6">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Finanzübersicht Grafik"
            className="rounded-lg shadow-md w-full h-auto max-h-60 object-cover"
            width={1000}
            height={400}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Datum</TableHead>
              <TableHead>Beschreibung</TableHead>
              <TableHead>Kategorie</TableHead>
              <TableHead className="text-right">Betrag</TableHead>
              <TableHead>Typ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell className="font-medium">{transaction.description}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="apple-badge">{transaction.category}</Badge>
                </TableCell>
                <TableCell className={`text-right font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount.toFixed(2)} €
                </TableCell>
                <TableCell className="flex items-center">
                  {transaction.type === 'Einnahme' ? 
                    <ArrowUpCircle className="h-4 w-4 mr-1 text-green-500" /> : 
                    <ArrowDownCircle className="h-4 w-4 mr-1 text-red-500" />
                  }
                  {transaction.type}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">Weitere Transaktionsdetails und Filteroptionen werden hier verfügbar sein.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsContent;
