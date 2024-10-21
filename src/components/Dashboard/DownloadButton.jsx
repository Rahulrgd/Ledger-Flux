import React from 'react';
import Button from '@mui/material/Button';

const DownloadButton = ({ onDownload }) => {
  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={onDownload}
    >
      Download Report
    </Button>
  );
};

export default DownloadButton;
