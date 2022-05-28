import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [registerData, setReisterData] = useState({});
  const { registerUser, user, isLoading, authError, signInGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setReisterData(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      navigate
    );
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInGoogle(location, navigate);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Navigation></Navigation>
      <h1 style={{ color: "white" }}> Register</h1>
      {!isLoading && (
        <Form
          onSubmit={handleRegisterSubmit}
          style={{
            width: "400px",
            height: "400px",
            margin: "auto",
            border: "1px solid white",
            marginTop: "2rem",
            borderRadius: "10px",
            backgroundColor: "#34495E",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Your Name</Form.Label>
            <Form.Control
              style={{ width: "80%", margin: "auto" }}
              type="text"
              name="name"
              onBlur={handleOnBlur}
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control
              style={{ width: "80%", margin: "auto" }}
              type="email"
              onBlur={handleOnBlur}
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              style={{ width: "80%", margin: "auto" }}
              type="password"
              name="password"
              onBlur={handleOnBlur}
              placeholder="Password"
            />
          </Form.Group>
          <Button
            style={{ width: "80%", margin: "auto", backgroundColor: "#7B241C" }}
            type="submit"
          >
            Register
          </Button>
          <div className="text-white">
            --------------------OR-----------------------
          </div>
          <Button
            onClick={handleGoogleSignIn}
            style={{ width: "80%", margin: "auto", backgroundColor: "#7B241C" }}
          >
            Sign-IN-Google
          </Button>
          <NavLink className="text-decoration-none text-white" to="/login">
            <p style={{ color: "#F74444", marginTop: "10px" }}>
              New User? Please Register
            </p>
          </NavLink>
        </Form>
      )}
      {isLoading && <Spinner animation="border" variant="primary" />}
      {user?.email && (
        <Alert
          style={{ width: "400px", margin: "auto", backgroundColor: "#58D68D" }}
        >
          user created successfully
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

export default Register;
