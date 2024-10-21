import React, { useState } from "react";
import AccountList from "./AccountList";
import AccountDetails from "./AccountDetails";
import AddAccountForm from "./AddAccountForm";
import EditAccountForm from "./EditAccountForm";
import AccountBalanceSummary from "./AccountBalanceSummary";
import TransactionHistory from "./TransactionHistory";
import AccountTypeFilter from "./AccountTypeFilter";
import DeleteAccountModal from "./DeleteAccountModal";
import AccountOverviewChart from "./AccountOverviewChart";
import { Button } from "@mui/material";
import SearchAccount from "./SearchAccount";

function Accounts() {
  // const [accounts, setAccounts] = useState([]);

  const handleAddAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  // const [accounts, setAccounts] = useState([
  //   { id: 1, name: "Savings Account", type: "Bank", balance: 5000 },
  //   { id: 2, name: "Cash Account", type: "Cash", balance: 200 },
  // ]);
  // const [selectedAccount, setSelectedAccount] = useState(null);

  const handleUpdateAccount = (updatedAccount) => {
    const updatedAccounts = accounts.map((account) =>
      account.id === updatedAccount.id ? updatedAccount : account
    );
    setAccounts(updatedAccounts);
    setSelectedAccount(null); // Reset selected account after updating
  };

  const [transactions, setTransactions] = useState([
    { date: "2024-10-01", description: "Salary", amount: 3000, type: "Income" },
    {
      date: "2024-10-02",
      description: "Groceries",
      amount: -150,
      type: "Expense",
    },
    { date: "2024-10-03", description: "Rent", amount: -1000, type: "Expense" },
    // Add more transactions as needed
  ]);

  // Account Type Filter
  const accountTypes = ["All", "Bank", "Cash", "Credit"];
  const [selectedType, setSelectedType] = useState("All");

  const [accounts, setAccounts] = useState([
    { id: 1, name: "Savings Account", type: "Bank", balance: 5000 },
    { id: 2, name: "Cash Account", type: "Cash", balance: 200 },
    { id: 3, name: "Credit Card", type: "Credit", balance: -1500 },
    // Add more accounts as needed
  ]);

  // const accountTypes = ["All", "Bank", "Cash", "Credit"];

  const handleAccountTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const [selectedAccount, setSelectedAccount] = useState(null);

  const filteredAccounts =
    selectedType === "All"
      ? accounts
      : accounts.filter((account) => account.type === selectedType);

  // Delete Account Model
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleDeleteAccount = () => {
    // Logic to delete the account (e.g., make an API call)
    console.log("Deleting account:", selectedAccount);
    // Remove the account from the list or update the state as needed
    setSelectedAccount(null); // Reset the selected account
  };

  // Account Settings
  const handleSaveAccount = (updatedAccount) => {
    console.log("Updated Account:", updatedAccount);
    // Logic to update the account in your state or database can go here
    setSelectedAccount(updatedAccount); // Update selected account after saving
  };

  // const handleDeleteAccount = () => {
  //   console.log("Deleting account:", selectedAccount);
  //   setSelectedAccount(null); // Reset the selected account
  // };
  return (
    <div>
      <div>AccountList</div>
      <AccountList />
      <div>AccountDetails</div>
      <AccountDetails />
      <div>AddAccountForm</div>
      <AddAccountForm onAddAccount={handleAddAccount} />
      <div>EditAccountForm</div>
      {selectedAccount ? (
        <EditAccountForm
          account={selectedAccount}
          onUpdateAccount={handleUpdateAccount}
        />
      ) : (
        <AccountList accounts={accounts} onEditAccount={setSelectedAccount} />
      )}
      <div>AccountBalanceSummary</div>
      <AccountBalanceSummary accounts={accounts} />
      {selectedAccount ? (
        <EditAccountForm
          account={selectedAccount}
          onUpdateAccount={handleUpdateAccount}
        />
      ) : (
        <AccountList accounts={accounts} onEditAccount={setSelectedAccount} />
      )}
      <div>TransactionHistory</div>

      <TransactionHistory transactions={transactions} />
      <div>AccountTypeFilter</div>
      <AccountTypeFilter
        accountTypes={accountTypes}
        selectedType={selectedType}
        onChange={handleAccountTypeChange}
      />
      <div>DeleteAccountModal</div>
      {/* Pass props to the DeleteAccountModal */}
      <DeleteAccountModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onDelete={handleDeleteAccount}
        accountName={selectedAccount ? selectedAccount.name : ""}
      />
      {selectedAccount && (
        <div>
          <h2>Selected Account: {selectedAccount.name}</h2>
          {/* Display more details about the selected account */}
        </div>
      )}
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - {account.balance} USD
            <Button onClick={() => onSelect(account)}>Select</Button>
            <Button onClick={() => onDeleteClick(account)}>Delete</Button>{" "}
            {/* Call the delete click handler */}
          </li>
        ))}
      </ul>
      <div>AccountOverviewChart</div>
      <AccountOverviewChart accounts={filteredAccounts} />
      <div>SearchAccount</div>
      <SearchAccount onSearch={(term) => setSearchTerm(term)} />
      <div>AccountSettings</div>
      {selectedAccount && (
        <div>
          <AccountSettings
            account={selectedAccount}
            onSave={handleSaveAccount}
          />
        </div>
      )}
    </div>
  );
}

export default Accounts;
