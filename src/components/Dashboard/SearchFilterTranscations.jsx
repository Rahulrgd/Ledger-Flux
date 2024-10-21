import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const SearchFilterTransactions = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleSearch = () => {
    onSearch({ searchQuery, filterCategory });
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Search Transactions"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id="filter-label">Filter by Category</InputLabel>
          <Select
            labelId="filter-label"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
            {/* Add more categories as needed */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchFilterTransactions;
