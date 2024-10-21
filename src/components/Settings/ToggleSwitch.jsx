import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

const ToggleSwitch = () => {
  const [notifications, setNotifications] = useState(true);

  const handleToggle = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={notifications} onChange={handleToggle} />}
      label="Enable Notifications"
    />
  );
};

export default ToggleSwitch;
