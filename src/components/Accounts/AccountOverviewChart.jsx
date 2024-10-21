import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AccountOverviewChart = ({ accounts }) => {
  // Prepare data for the chart
  const chartData = accounts.map(account => ({
    name: account.name,
    balance: account.balance,
  }));

  return (
    <BarChart
      width={600}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="balance" fill="#8884d8" />
    </BarChart>
  );
};

export default AccountOverviewChart;
