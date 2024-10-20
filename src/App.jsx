import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import Sidenav from "./components/Sidenav/Sidenav";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import Accounts from "./components/Accounts/Accounts";
import Categories from "./components/Categories/Categories";
import Reports from "./components/Reports/Reports";
import Budgets from "./components/Budgets/Budgets";
import Invoices from "./components/Invoices/Invoices";
import ClientAndVendor from "./components/ClientAndVendor/ClientAndVendor";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import HelpAndSupport from "./components/HelpAndSupport/HelpAndSupport";
import Logout from "./components/Logout/Logout";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Box sx={{ display: "flex" }}>
          <Sidenav/>
          <Box sx={{mt:"80px", ml:"20px"}}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/transaction" exact element={<Transactions />} />
              <Route path="/account" exact element={<Accounts />} />
              <Route path="/category" exact element={<Categories />} />
              <Route path="/report" exact element={<Reports />} />
              <Route path="/budget" exact element={<Budgets />} />
              <Route path="/invoice" exact element={<Invoices />} />
              <Route
                path="/clientAndVendor"
                exact
                element={<ClientAndVendor />}
              />
              <Route path="/setting" exact element={<Settings />} />
              <Route path="/user" exact element={<Users />} />
              <Route
                path="/helpAndSupport"
                exact
                element={<HelpAndSupport />}
              />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/logout" exact element={<Logout />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
