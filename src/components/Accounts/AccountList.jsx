import React from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from "@mui/material";

// Sample account data (you would replace this with real data)
const accountData = [
  { name: "Savings Account", type: "Bank", balance: 5000 },
  { name: "Cash in Hand", type: "Cash", balance: 1500 },
  { name: "Credit Card", type: "Credit", balance: -1200 },
];

const AccountList = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Account List
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Account Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell align="right">Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountData.map((account, index) => (
                <TableRow key={index}>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.type}</TableCell>
                  <TableCell align="right">
                    {account.balance >= 0 ? `$${account.balance}` : `-$${Math.abs(account.balance)}`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AccountList;
