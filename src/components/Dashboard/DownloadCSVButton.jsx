import React from 'react';
import Button from '@mui/material/Button';

const DownloadCSVButton = ({ data }) => {
  const downloadCSV = () => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
      csvRows.push(headers.map(header => JSON.stringify(row[header], (key, value) => 
        value === null ? '' : value)).join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'report.csv');
    a.click();
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={downloadCSV}
    >
      Download CSV
    </Button>
  );
};

export default DownloadCSVButton;
