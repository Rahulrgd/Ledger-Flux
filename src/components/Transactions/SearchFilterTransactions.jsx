import React, { useState } from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl, Box } from "@mui/material";

const SearchFilterTransactions = ({ transactions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  
  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Function to handle filter category change
  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  // Filter and search the transactions
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearchQuery = transaction.description.toLowerCase().includes(searchQuery);
    const matchesCategory = filterCategory ? transaction.category === filterCategory : true;
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
      {/* Search Field */}
      <TextField
        label="Search Transactions"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Filter by Category */}
      <FormControl variant="outlined">
        <InputLabel>Category</InputLabel>
        <Select
          value={filterCategory}
          onChange={handleFilterChange}
          label="Category"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expenses">Expenses</MenuItem>
          {/* Add more categories as needed */}
        </Select>
      </FormControl>

      {/* Display filtered transactions */}
      <ul>
        {filteredTransactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date}: {transaction.description} - {transaction.category} - ${transaction.income || transaction.expenses}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SearchFilterTransactions;
