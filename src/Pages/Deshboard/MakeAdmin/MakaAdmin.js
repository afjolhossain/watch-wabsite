import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakaAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div style={{ backgroundColor: "#273746", margin: -32, height: "500px" }}>
      <br />
      <h2>Make an Admin</h2>
      <br />
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%", backgroundColor: "white", borderRadius: "5px" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakaAdmin;
