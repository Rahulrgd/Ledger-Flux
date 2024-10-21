import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid,
} from "@mui/material";

const EditAccountForm = ({ account, onUpdateAccount }) => {
  // State to hold form inputs
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [balance, setBalance] = useState("");

  // Populate form with current account data
  useEffect(() => {
    if (account) {
      setAccountName(account.name);
      setAccountType(account.type);
      setBalance(account.balance);
    }
  }, [account]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and process the form data
    if (accountName && accountType && balance) {
      const updatedAccount = {
        ...account,
        name: accountName,
        type: accountType,
        balance: parseFloat(balance),
      };
      onUpdateAccount(updatedAccount); // Call the parent function to update the account
    }
  };

  return (
    <Box
      sx={{ padding: "20px", marginTop: "20px", maxWidth: "500px", mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Edit Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Account Name */}
          <Grid item xs={12}>
            <TextField
              label="Account Name"
              fullWidth
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              required
            />
          </Grid>

          {/* Account Type */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Account Type</InputLabel>
              <Select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                required
              >
                <MenuItem value="Bank">Bank</MenuItem>
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="Credit">Credit</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Balance */}
          <Grid item xs={12}>
            <TextField
              label="Balance"
              fullWidth
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Update Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditAccountForm;
