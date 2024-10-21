import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const NotificationsSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleEmailChange = (event) => {
    setEmailNotifications(event.target.checked);
  };

  const handleSmsChange = (event) => {
    setSmsNotifications(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={emailNotifications} onChange={handleEmailChange} />}
        label="Email Notifications"
      />
      <FormControlLabel
        control={<Checkbox checked={smsNotifications} onChange={handleSmsChange} />}
        label="SMS Notifications"
      />
    </FormGroup>
  );
};

export default NotificationsSettings;
