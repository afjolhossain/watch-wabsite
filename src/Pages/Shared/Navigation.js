import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
      <Container style={{ justifyContent: "between" }}>
        <div>
          <Navbar.Brand
            href="#home"
            style={{ color: "#eeeaa5", fontSize: "30px" }}
          >
            MODERN <span style={{ color: "#8cc2dc" }}>WATCH</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavLink className="hover-btn" to="/home">
              Home
            </NavLink>
            <NavLink className="hover-btn" to="/products">
              Products
            </NavLink>

            <NavLink
              style={{
                fontSize: "20px",
                textDecoration: "none",
                color: "#a8741a",
              }}
              to="/login"
            >
              <FontAwesomeIcon style={{ color: "#eeeaa5" }} icon={faUser}>
                Login
              </FontAwesomeIcon>
            </NavLink>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
