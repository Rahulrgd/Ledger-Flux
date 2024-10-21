import React, { useState } from "react";
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

const AddAccountForm = ({ onAddAccount }) => {
  // State to hold form inputs
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [startingBalance, setStartingBalance] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and process the form data
    if (accountName && accountType && startingBalance) {
      const newAccount = {
        name: accountName,
        type: accountType,
        balance: parseFloat(startingBalance),
      };
      onAddAccount(newAccount); // Call the parent function to add the account
      // Clear the form after submission
      setAccountName("");
      setAccountType("");
      setStartingBalance("");
    }
  };

  return (
    <Box
      sx={{ padding: "20px", marginTop: "20px", maxWidth: "500px", mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Add New Account
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

          {/* Starting Balance */}
          <Grid item xs={12}>
            <TextField
              label="Starting Balance"
              fullWidth
              type="number"
              value={startingBalance}
              onChange={(e) => setStartingBalance(e.target.value)}
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
              Add Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddAccountForm;
