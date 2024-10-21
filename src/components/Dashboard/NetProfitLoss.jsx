import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const NetProfitLoss = ({ netProfitLoss = 0 }) => { // Default value is 0
    const isPositive = netProfitLoss >= 0;
  
    return (
      <Card style={{ backgroundColor: isPositive ? '#c8e6c9' : '#ffccbc' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Net Profit/Loss
          </Typography>
          <Typography variant="h4" style={{ color: isPositive ? '#2e7d32' : '#c62828' }}>
          ₹{netProfitLoss.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isPositive ? 'You are in profit!' : 'You are in loss!'}
          </Typography>
        </CardContent>
      </Card>
    );
  };

export default NetProfitLoss;
