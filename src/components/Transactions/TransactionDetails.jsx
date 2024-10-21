import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const TransactionDetails = ({ transaction }) => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Transaction Details
          </Typography>
          <Grid container spacing={2}>
            {/* Transaction Date */}
            <Grid item xs={12} sm={6}>
              <Typography color="textSecondary">Date</Typography>
              <Typography variant="body1">{transaction.date}</Typography>
            </Grid>

            {/* Transaction Description */}
            <Grid item xs={12} sm={6}>
              <Typography color="textSecondary">Description</Typography>
              <Typography variant="body1">{transaction.description}</Typography>
            </Grid>

            {/* Transaction Amount */}
            <Grid item xs={12} sm={6}>
              <Typography color="textSecondary">Amount</Typography>
              <Typography variant="body1" color={transaction.income ? "primary" : "error"}>
                {transaction.income ? `+ $${transaction.income}` : `- $${transaction.expenses}`}
              </Typography>
            </Grid>

            {/* Transaction Category */}
            <Grid item xs={12} sm={6}>
              <Typography color="textSecondary">Category</Typography>
              <Typography variant="body1">{transaction.category}</Typography>
            </Grid>

            {/* Transaction Type */}
            <Grid item xs={12} sm={6}>
              <Typography color="textSecondary">Type</Typography>
              <Typography variant="body1">
                {transaction.income ? "Income" : "Expense"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TransactionDetails;
