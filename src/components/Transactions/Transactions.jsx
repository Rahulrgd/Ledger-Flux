import React from "react";
import PaginatedTransactions from "./PaginationComponent";
import SearchFilterTransactions from "./SearchFilterTransactions";
import SummaryComponent from "./SummaryComponent";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import TransactionDetails from "./TransactionDetails";
// import TransactionButtons from "./TransactionButtons";

function Transactions() {
  const transactions = [
    {
      date: "2024-10-01",
      description: "Office Rent",
      income: 0,
      expenses: 2000,
    },
    {
      date: "2024-10-05",
      description: "Client Payment",
      income: 3000,
      expenses: 0,
    },
    { date: "2024-10-10", description: "Utilities", income: 0, expenses: 150 },
    // Add more transactions here...
  ];

  const transaction = {
    date: "2024-10-15",
    description: "Office Supplies Purchase",
    income: 0,
    expenses: 500,
    category: "Office Expenses",
  };

  return (
    <div>
      {/* <TransactionList/> */}
      {/* <TransactionForm/> */}
      <PaginatedTransactions
        transactionsPerPage={5}
        transactions={transactions}
      />
      <SearchFilterTransactions transactions={transactions} />
      <SummaryComponent
        totalIncome={10000}
        totalExpenses={7000}
        netProfit={3000}
        accountBalance={5000}
      />
      {/* <SummaryComponent/> */}
      {/* <TransactionButtons/> */}
      <TransactionDetails transaction={transaction} />
    </div>
  );
}

export default Transactions;
