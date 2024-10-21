import React from 'react';
import { TextField } from '@mui/material';

const UsernameSetting = () => {
  return (
    <TextField
      fullWidth
      label="Username"
      variant="outlined"
      defaultValue="User123"
    />
  );
};

export default UsernameSetting;
