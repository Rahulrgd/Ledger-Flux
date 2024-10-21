import React from "react";
import TotalAccountBalances from "./TotalAccountBalances";
import RecentTransactions from "./RecentTransactions";
import IncomeVsExpencesChart from "./IncomeVsExpensesChart";
import AccountBalancesSummary from "./AccountBalancesSummary";
import UpcomingPaymentsReceivables from "./UpcomingPaymentsReceivables";
import MonthlyOverview from "./MonthlyOverview";
import NetProfitLoss from "./NetProfitLoss";
// import CustomDateRangeFilter from "./CustomDataRangeFilters";
import SearchFilterTransactions from "./SearchFilterTranscations";
import DownloadButton from "./DownloadButton";
import DownloadCSVButton from "./DownloadCSVButton";
import DownloadPDFButton from "./DownloadPDFButton";
import QuickAddTransactionButton from "./QuickAddTransactionButton";
import AccountPerformanceGraph from "./AccountPerformanceGraph";
import NotificationAlert from "./NotificationAlert";
// import UserActivitySummary from "./UserActivitySummary";

function Dashboard() {
  const handleFilter = (startDate, endDate) => {
    console.log("Filtering data from:", startDate, "to:", endDate);
    // Implement your filtering logic here
  };

  const sampleSummary = {
    lastLogin: "2024-10-20",
    totalActions: 120,
    newMessages: 5,
    projectsCompleted: 10,
  };

  const activityLog = [
    { action: "Logged in", timestamp: "2024-10-19 10:45 AM" },
    // { action: "Viewed dashboard", timestamp: "2024-10-19 10:50 AM" },
    // { action: "Updated project status", timestamp: "2024-10-19 11:10 AM" },
  ];

  const activityData = [
    { date: "2024-10-01", actions: 5 },
    { date: "2024-10-02", actions: 8 },
    { date: "2024-10-03", actions: 12 },
    { date: "2024-10-04", actions: 7 },
  ];
  return (
    <>
      <div>
        <div>Total Account Balances</div>
        <TotalAccountBalances />
        <div>Recent Transactions</div>
        <RecentTransactions />
        <div>Income vs Expense Chart</div>
        <IncomeVsExpencesChart />
        <div>Account Balances Summary</div>
        <AccountBalancesSummary />
        <div>Upcoming Payments/Receivables</div>
        <UpcomingPaymentsReceivables />
        <div>Monthly/Yearly Overview</div>
        <MonthlyOverview />
        <div>Net Profit/Loss</div>
        <NetProfitLoss />
        <div>Custom Data Range Filters</div>
        {/* <CustomDateRangeFilter onFilter={handleFilter} /> */}
        <div>Search and Filter Transcations</div>
        <SearchFilterTransactions />
        <div>Download/Export Report Buttons</div>
        <DownloadButton />
        <DownloadCSVButton />
        <DownloadPDFButton />
        <div>Quick Add Transaction Button</div>
        <QuickAddTransactionButton />
        <div>Account Performance Graphs</div>
        <AccountPerformanceGraph />
        <div>User Activity Summary</div>
        {/* <UserActivitySummary summary={sampleSummary} />
        <UserActivitySummary activities={activityLog} />
        <UserActivitySummary activityData={activityData} /> */}
        <div>Allerts and Notificaitons</div>
        <NotificationAlert
          severity="error"
          title="Error"
          message="An error occurred while processing your request."
        />
        <div>Settings and preference</div>
      </div>
    </>
  );
}

export default Dashboard;
