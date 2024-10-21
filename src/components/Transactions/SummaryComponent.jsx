import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const SummaryComponent = ({ totalIncome, totalExpenses, netProfit, accountBalance }) => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Grid container spacing={3}>
        {/* Total Income */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Income
              </Typography>
              <Typography variant="h4" color="primary">
                ${totalIncome.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Expenses */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Expenses
              </Typography>
              <Typography variant="h4" color="error">
                ${totalExpenses.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Net Profit */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Net Profit
              </Typography>
              <Typography variant="h4" color={netProfit >= 0 ? "primary" : "error"}>
                ${netProfit.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Account Balance */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Account Balance
              </Typography>
              <Typography variant="h4" color="primary">
                ${accountBalance.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SummaryComponent;
