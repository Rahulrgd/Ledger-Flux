import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Home() {
  return (
    <>
      <div>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div>Recent Transactions</div>
        <div>Income vs Expense Chart</div>
        <div>Account Balances Summary</div>
        <div>Upcoming Payments/Receivables</div>
        <div>Monthly/Yearly Overview</div>
        <div>Net Profit/Loss</div>
        <div>Custom Data Range Filters</div>
        <div>Search and Filter Transcations</div>
        <div>Download/Export Report Buttons</div>
        <div>Quick Add Transaction Button</div>
        <div>Account Performance Graphs</div>
        <div>User Activity Summary</div>
        <div>Allerts and Notificaitons</div>
        <div>Settings and preference</div>
      </div>
    </>
  );
}

export default Home;
