import React from "react";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportTransactionsExcel = ({ transactions }) => {
  const handleExportExcel = () => {
    // Create a new worksheet from the transactions data
    const worksheet = XLSX.utils.json_to_sheet(transactions);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    // Generate Excel file buffer
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // Create a blob from the buffer and trigger file download
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "transactions.xlsx");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleExportExcel}>
      Export as Excel
    </Button>
  );
};

export default ExportTransactionsExcel;
