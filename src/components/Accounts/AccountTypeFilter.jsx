import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AccountTypeFilter = ({ accountTypes, selectedType, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ margin: "20px 0" }}>
      <InputLabel id="account-type-label">Account Type</InputLabel>
      <Select
        labelId="account-type-label"
        value={selectedType}
        onChange={onChange}
        label="Account Type"
      >
        {accountTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AccountTypeFilter;
