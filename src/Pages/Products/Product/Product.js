import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  const { name, image, Description, price } = product;
  return (
    <Col xs={12} md={6} lg={3}>
      <Card
        className="shadow-sm p-1 bg-body rounded"
        style={{
          width: "17rem",
          margin: "auto",
        }}
      >
        <Card.Img
          className="image-service"
          variant="top"
          style={{ height: "210px" }}
          src={image}
        />
        <Card.Body style={{ textAlign: "start" }}>
          <Card.Title style={{ color: "#AD4D27" }}>{name}</Card.Title>
          <Card.Text>{Description}</Card.Text>
          <Card.Text style={{ color: "#D51A1F" }}>Price: $ {price}</Card.Text>
        </Card.Body>
        <button className="button">Buy Now</button>
      </Card>
    </Col>
  );
};

export default Product;
