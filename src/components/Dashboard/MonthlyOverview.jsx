import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const overviewData = [
  { month: 'January', totalIncome: 3000, totalExpenses: 1500 },
  { month: 'February', totalIncome: 2500, totalExpenses: 2000 },
  { month: 'March', totalIncome: 4000, totalExpenses: 1700 },
  // ... Add more months
];

const MonthlyOverview = () => (
  <Grid container spacing={2}>
    {overviewData.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {item.month}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Income: ${item.totalIncome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Expenses: ${item.totalExpenses}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default MonthlyOverview;
