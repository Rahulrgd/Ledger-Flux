import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const AccountBalanceSummary = ({ accounts }) => {
  // Calculate total balance
  const totalBalance = accounts.reduce((acc, account) => acc + account.balance, 0);

  // Calculate balances by account type
  const balanceByType = accounts.reduce((acc, account) => {
    acc[account.type] = (acc[account.type] || 0) + account.balance;
    return acc;
  }, {});

  return (
    <Card sx={{ margin: "20px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Account Balance Summary
        </Typography>
        <Typography variant="h6">Total Balance: ${totalBalance.toFixed(2)}</Typography>
        
        <Grid container spacing={2} marginTop={2}>
          {Object.entries(balanceByType).map(([type, balance]) => (
            <Grid item xs={12} sm={6} key={type}>
              <Typography variant="body1">
                {type}: ${balance.toFixed(2)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AccountBalanceSummary;
