import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, image, Description, price } = service;
  return (
    <Col xs={12} md={6} lg={4}>
      <Card
        className="shadow-sm p-1 bg-body rounded"
        style={{
          width: "22rem",
          margin: "auto",
        }}
      >
        <Card.Img variant="top" style={{ height: "250px" }} src={image} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{name}</Card.Title>
          <Card.Text>{Description}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
        </Card.Body>
        <Button style={{ backgroundColor: "#326298" }}>Buy Now</Button>
      </Card>
    </Col>
  );
};

export default Service;
