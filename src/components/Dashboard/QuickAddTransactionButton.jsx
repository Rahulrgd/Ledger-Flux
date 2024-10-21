import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const QuickAddTransactionButton = () => {
  const [open, setOpen] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState({ amount: '', description: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Handle transaction submission logic here
    console.log('Transaction Details:', transactionDetails);
    setOpen(false);
    // Reset the form after submission if necessary
    setTransactionDetails({ amount: '', description: '' });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Quick Add Transaction
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
            variant="outlined"
            value={transactionDetails.amount}
            onChange={(e) => setTransactionDetails({ ...transactionDetails, amount: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={transactionDetails.description}
            onChange={(e) => setTransactionDetails({ ...transactionDetails, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QuickAddTransactionButton;
