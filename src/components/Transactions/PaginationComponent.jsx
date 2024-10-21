import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";

const PaginatedTransactions = ({ transactionsPerPage, transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  // Function to handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Get current transactions based on the page
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <div>
      {/* Render the current transactions */}
      <ul>
        {currentTransactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date}: {transaction.description} - ${transaction.income || transaction.expenses}
          </li>
        ))}
      </ul>

      {/* Pagination control */}
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default PaginatedTransactions;
