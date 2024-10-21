import React from "react";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const ExportTransactionsCSV = ({ transactions }) => {
  const handleExportCSV = () => {
    const csvData = Papa.unparse(transactions);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "transactions.csv");
  };

  return (
    <Button variant="contained" onClick={handleExportCSV}>
      Export as CSV
    </Button>
  );
};

export default ExportTransactionsCSV;
