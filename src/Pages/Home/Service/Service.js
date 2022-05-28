import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, image, Description, price } = service;
  return (
    <div>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card
            className="shadow-sm bg-body rounded"
            style={{
              width: "22rem",
              margin: "auto",
            }}
          >
            <Card.Img
              className="image-service"
              variant="top"
              style={{ height: "250px" }}
              src={image}
            />
            <Card.Body style={{ textAlign: "start" }}>
              <Card.Title style={{ color: "#AD4D27" }}>{name}</Card.Title>
              <Card.Text>{Description}</Card.Text>
              <Card.Text style={{ color: "#D51A1F" }}>
                Price: $ {price}
              </Card.Text>
            </Card.Body>
            <Link to={`/purchase/${_id}`}>
              <button
                className="button"
                style={{
                  width: "21rem",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              >
                Booking Now
              </button>
            </Link>
          </Card>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default Service;
