import React from "react";
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";

// Sample account details (you will fetch or pass real data in practice)
const account = {
  name: "Savings Account",
  type: "Bank",
  balance: 5000,
  currency: "USD",
  recentTransactions: [
    { id: 1, date: "2024-10-15", description: "Grocery Store", amount: -50 },
    { id: 2, date: "2024-10-14", description: "Salary", amount: 1500 },
    { id: 3, date: "2024-10-10", description: "Electricity Bill", amount: -100 },
  ],
};

const AccountDetails = () => {
  return (
    <Card sx={{ margin: "20px" }}>
      <CardContent>
        {/* Account Overview */}
        <Typography variant="h5" gutterBottom>
          {account.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Account Type</Typography>
            <Typography variant="body1">{account.type}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Current Balance</Typography>
            <Typography variant="body1">
              {account.currency} {account.balance.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        {/* Recent Transactions */}
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Recent Transactions
        </Typography>
        <List>
          {account.recentTransactions.map((transaction) => (
            <React.Fragment key={transaction.id}>
              <ListItem>
                <ListItemText
                  primary={transaction.description}
                  secondary={`${transaction.date} — ${account.currency} ${transaction.amount.toFixed(2)}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AccountDetails;
