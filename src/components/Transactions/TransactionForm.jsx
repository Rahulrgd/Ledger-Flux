import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const TransactionForm = ({ onSubmit, transaction }) => {
  const [description, setDescription] = useState(transaction ? transaction.description : '');
  const [date, setDate] = useState(transaction ? transaction.date : null);
  const [category, setCategory] = useState(transaction ? transaction.category : '');
  const [amount, setAmount] = useState(transaction ? transaction.amount : '');

  const handleSubmit = () => {
    onSubmit({ description, date, category, amount });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          label="Transaction Date"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
      <Grid item xs={12}>
        <Select
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default TransactionForm;
