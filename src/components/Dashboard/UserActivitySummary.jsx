import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const UserActivitySummary = ({ activities }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity.action} secondary={activity.timestamp} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserActivitySummary;
