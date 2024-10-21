import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const recentTransactions = [
  { id: 1, date: '2024-10-18', description: 'Rent Payment', amount: '-$1200', category: 'Housing' },
  { id: 2, date: '2024-10-17', description: 'Salary', amount: '$3000', category: 'Income' },
  { id: 3, date: '2024-10-16', description: 'Groceries', amount: '-$150', category: 'Food' },
  // Add more transactions here
];

const RecentTransactions = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentTransactions;
