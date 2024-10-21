import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AdvancedSettings = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Advanced Settings</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Here you can find advanced settings options such as API configurations and debugging tools.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AdvancedSettings;
