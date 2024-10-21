import React from 'react';
import { List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const upcomingTransactions = [
  { id: 1, date: '2024-10-25', description: 'Rent Payment', amount: '-$1200' },
  { id: 2, date: '2024-10-30', description: 'Salary', amount: '$3000' },
  { id: 3, date: '2024-11-05', description: 'Utility Bill', amount: '-$150' },
];

const UpcomingPaymentsReceivables = () => (
  <Paper>
    <List>
      {upcomingTransactions.map((transaction) => (
        <div key={transaction.id}>
          <ListItem>
            <ListItemText
              primary={`${transaction.description} (${transaction.amount})`}
              secondary={transaction.date}
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  </Paper>
);

export default UpcomingPaymentsReceivables;
