import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const accounts = [
  { id: 1, name: 'Savings Account', balance: 5000 },
  { id: 2, name: 'Checking Account', balance: 1500 },
  { id: 3, name: 'Investment Account', balance: 8000 },
];

const AccountBalancesSummary = () => {
  return (
    <div className="row">
      {accounts.map((account) => (
        <div className="col-md-4" key={account.id}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{account.name}</h5>
              <p className="card-text">Balance: ${account.balance.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountBalancesSummary;
