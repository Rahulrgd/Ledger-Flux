import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PreferenceSelect = () => {
  const [theme, setTheme] = useState('light');

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="theme-select-label">Theme</InputLabel>
      <Select
        labelId="theme-select-label"
        value={theme}
        onChange={handleChange}
        label="Theme"
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PreferenceSelect;
