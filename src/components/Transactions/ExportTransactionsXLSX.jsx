import React from "react";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportTransactionsXLSX = ({ transactions }) => {
  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "transactions.xlsx");
  };

  return (
    <Button variant="contained" onClick={handleExportExcel}>
      Export as Excel
    </Button>
  );
};

export default ExportTransactionsXLSX;
