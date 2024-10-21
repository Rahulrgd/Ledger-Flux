import React, { useState } from 'react';
import { LocalizationProvider, DateRange } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CustomDateRangeFilter = ({ onFilter }) => {
  const [value, setValue] = useState([null, null]);

  const handleFilter = () => {
    const [startDate, endDate] = value;
    onFilter(startDate, endDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRange
        startText="Start"
        endText="End"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} variant="outlined" />
            <TextField {...endProps} variant="outlined" />
          </>
        )}
      />
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Filter
      </Button>
    </LocalizationProvider>
  );
};

export default CustomDateRangeFilter;
