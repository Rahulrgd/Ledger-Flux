import React from 'react';
import Button from '@mui/material/Button';
import { jsPDF } from 'jspdf';

const DownloadPDFButton = ({ data }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Report', 10, 10);
    
    // Example: Add data to PDF
    data.forEach((item, index) => {
      doc.text(`${index + 1}. ${JSON.stringify(item)}`, 10, 20 + index * 10);
    });

    doc.save('report.pdf');
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={downloadPDF}
    >
      Download PDF
    </Button>
  );
};

export default DownloadPDFButton;
