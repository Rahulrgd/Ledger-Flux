import React from "react";

import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import { useState } from "react";
import Login from "../Login/Login";
import Signup from "../../Signup/Signup";
// import Login from "./formControl/login";
// import Signup from "./formControl/signup";

function Profile() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
      <div className="content-center Profile ml-auto" >
        <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
          <div align="center">
            {checked ? (
              <Chip
                icon={<LockIcon />}
                label="Log In"
                variant="outlined"
                color="info"
              />
            ) : (
              <Chip
                icon={<FaceIcon />}
                label="Sign Up"
                variant="outlined"
                color="info"
              />
            )}
            <br />

            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          {checked ? <Login /> : <Signup />}
        </Paper>
      </div>
  );
}

export default Profile;
