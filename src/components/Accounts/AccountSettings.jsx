import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const AccountSettings = ({ account, onSave }) => {
  const [name, setName] = useState(account.name);
  const [balance, setBalance] = useState(account.balance);
  const [type, setType] = useState(account.type);
  
  const handleSave = () => {
    // Create an updated account object
    const updatedAccount = { ...account, name, balance, type };
    onSave(updatedAccount); // Call the onSave function passed as a prop
  };

  return (
    <Box sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 1, maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>
        Account Settings
      </Typography>
      <TextField
        label="Account Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Account Balance"
        variant="outlined"
        type="number"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Account Type"
        variant="outlined"
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
        Save Changes
      </Button>
    </Box>
  );
};

export default AccountSettings;
