import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const SearchAccount = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm); // Trigger the search callback with the search term
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Allow searching by pressing Enter
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <TextField
        variant="outlined"
        label="Search Accounts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ marginRight: "10px" }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchAccount;
