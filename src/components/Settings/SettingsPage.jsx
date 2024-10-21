import React from 'react';
import { Container, Typography, Divider } from '@mui/material';
import PreferenceSelect from './PreferenceSelect';
import ToggleSwitch from './ToggleSwitch';
import VolumeSlider from './VolumeSlider';
import UsernameSetting from './UsernameSetting';
import NotificationsSettings from './NotificationsSettings';
import AdvancedSettings from './AdvancedSettings';

const SettingsPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Divider />

      <UsernameSetting />

      <PreferenceSelect />

      <ToggleSwitch />

      <VolumeSlider />

      <NotificationsSettings />

      <AdvancedSettings />
    </Container>
  );
};

export default SettingsPage;
