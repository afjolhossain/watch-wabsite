import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "#eeeaa5", fontSize: "30px" }}
        >
          MODERN <span style={{ color: "#8cc2dc" }}>WATCH</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <NavLink className="hover-btn" to="/home">
            Home
          </NavLink>
          <NavLink className="hover-btn" to="/products">
            Products
          </NavLink>
          <NavLink
            style={{ marginRight: "10px" }}
            className="hover-btn"
            to="/deshboard"
          >
            DeshBoard
          </NavLink>

          <Navbar.Text>
            {user?.email ? (
              <Button onClick={logOut} variant="secondary">
                LogOut
              </Button>
            ) : (
              <NavLink
                style={{
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "#a8741a",
                }}
                to="/login"
              >
                <FontAwesomeIcon
                  className="IconLogin"
                  style={{ color: "#eeeaa5" }}
                  icon={faUser}
                >
                  Login
                </FontAwesomeIcon>
              </NavLink>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
