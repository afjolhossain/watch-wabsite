import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo1 from "../../../Images/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <Card
        className="text-center"
        style={{ marginTop: "4rem", backgroundColor: "black" }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Row>
            <Col
              sm
              style={{ textAlign: "start", color: "#ABB2B9 " }}
              xs={6}
              md={3}
            >
              <img style={{ width: "180px" }} src={logo1} alt="" />
              <br />
              <br />
              <p>
                Pellentesque congue non augue vitae pellentesque. Morbi
                sollicitudin eleifend rhoncus. Mauris
              </p>
            </Col>
            <Col
              sm
              style={{ textAlign: "start", color: "#ABB2B9 " }}
              xs={6}
              md={3}
            >
              <h3>QUICK LINKS</h3>
              <p>Search</p>
              <p>Help</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Shipping Details </p>
            </Col>
            <Col
              sm
              style={{ textAlign: "start", color: "#ABB2B9 " }}
              xs={6}
              md={3}
            >
              <h3>CUSTOMER SERVICE</h3>
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>Refunds & Returns</p>
              <p>Deliveries </p>
            </Col>
            <Col
              sm
              style={{ textAlign: "start", color: "#ABB2B9 " }}
              xs={6}
              md={3}
            >
              <h3>CUSTOMER US</h3>
              <p>No: 58 A, East Madison Street, Baltimore,MD, USA 4508</p>

              <p>
                <FontAwesomeIcon icon={faPhone} /> +91 12345678
              </p>

              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                support@mail.com
              </p>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted">
          Copyright © 2022, Marley - Watch Shop Powered by Shopify
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;
