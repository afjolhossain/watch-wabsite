import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation";
import useAuth from "../../../Hooks/useAuth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, authError, loginUser, signInGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInGoogle(location, navigate);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Navigation></Navigation>
      <br />
      <h1 style={{ color: "white" }}>Login</h1>
      {!isLoading && (
        <Form
          onSubmit={handleRegisterSubmit}
          style={{
            width: "400px",
            height: "300px",
            margin: "auto",
            border: "1px solid white",
            marginTop: "2rem",
            borderRadius: "10px",
            backgroundColor: "#2C3E50 ",
          }}
        >
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "80%", margin: "auto" }}
              type="email"
              name="email"
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              style={{ width: "80%", margin: "auto" }}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button
            style={{ width: "80%", margin: "auto", backgroundColor: "#7B241C" }}
            type="submit"
          >
            Login
          </Button>
          <div className="text-white">
            --------------------OR-----------------------
          </div>
          <FontAwesomeIcon style={{ color: "#eeeaa5" }}></FontAwesomeIcon>
          <Button
            style={{ width: "80%", margin: "auto", backgroundColor: "#7B241C" }}
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon icon="check-square" />
            Sign-IN-Google
          </Button>

          <NavLink className="text-decoration-none text-white" to="/register">
            <p style={{ color: "white", marginTop: "20px" }}>
              New User? Please Register
            </p>
          </NavLink>
        </Form>
      )}
      {isLoading && <Spinner animation="border" variant="primary" />}
      {user?.email && (
        <Alert
          style={{ width: "400px", margin: "auto", backgroundColor: "#EBB63D" }}
        >
          User loged in successfully
        </Alert>
      )}
      {authError && (
        <Alert
          style={{ width: "400px", margin: "auto", backgroundColor: "#EBB63D" }}
        >
          {authError}
        </Alert>
      )}
      <br />
      <Footer></Footer>
    </div>
  );
};

export default Login;
