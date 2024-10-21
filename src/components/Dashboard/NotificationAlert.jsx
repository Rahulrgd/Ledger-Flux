import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const NotificationAlert = ({ severity, title, message }) => {
  return (
    <Alert severity={severity} sx={{ marginBottom: 2 }}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

export default NotificationAlert;
