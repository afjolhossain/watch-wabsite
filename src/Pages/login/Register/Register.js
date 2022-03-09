import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation";
import {} from "react-icons/bs";

const Register = () => {
  const [registerData, setReisterData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setReisterData(newRegisterData);
    console.log(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("done");
  };
  return (
    <div>
      <Navigation></Navigation>
      <h1 className="text-light"> Register</h1>
      <Form
        onSubmit={handleRegisterSubmit}
        style={{
          width: "400px",
          height: "400px",
          margin: "auto",
          border: "1px solid white",
          marginTop: "2rem",
          backgroundColor: "#2C3E50 ",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Your Name</Form.Label>
          <Form.Control
            type="text"
            name="yourName"
            onBlur={handleOnBlur}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            type="email"
            onBlur={handleOnBlur}
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onBlur={handleOnBlur}
            placeholder="Password"
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
        <NavLink className="text-decoration-none text-white" to="/login">
          <p>New User? Please Register</p>
        </NavLink>
      </Form>
      <Footer></Footer>
    </div>
  );
};

export default Register;
