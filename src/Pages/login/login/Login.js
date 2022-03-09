import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("done");
  };

  return (
    <div>
      <Navigation></Navigation>
      <h1 className="text-light"> login</h1>
      <Form
        onSubmit={handleOnSubmit}
        style={{
          width: "400px",
          height: "350px",
          margin: "auto",
          border: "1px solid white",
          marginTop: "2rem",
          backgroundColor: "#2C3E50 ",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="text-white">
          --------------------OR-----------------------
        </div>
        <Button variant="primary" type="submit">
          Sign-IN-Google
        </Button>
        <NavLink className="text-decoration-none text-white" to="/register">
          <p>New User? Please Register</p>
        </NavLink>
      </Form>
      <Footer></Footer>
    </div>
  );
};

export default Login;
