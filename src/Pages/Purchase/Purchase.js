import React, { useEffect, useState } from "react";
import { Typography, Grid, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import Footer from "../Shared/Footer/Footer";
import { Button, Col, Row } from "react-bootstrap";

const Purchase = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <Col sm={6} xs={12}>
            <img
              xs={12}
              style={{ width: "400px" }}
              src={service.image}
              alt=""
            />
          </Col>
          <Col sm={6}>
            <Typography
              sx={{
                fontWeight: "700px",
                color: "#F25A12",
                textAlign: "center",
              }}
              variant="h4"
            >
              {service.name}
            </Typography>
            <Typography
              sx={{
                color: "#F0F3F4 ",
                fontSize: "20px",
                padding: "2rem",
                textAlign: "statr",
              }}
              variant="subtitle2"
            >
              Description: {service.description}
            </Typography>
            <Typography variant="h6" style={{ color: "#ABB2B9  " }}>
              Price: ${service.price}
            </Typography>
            <Link to="/ordernow">
              <Button
                className="button "
                style={{
                  marginTop: "2rem",
                  width: "23rem",
                  color: "white",
                  fontSize: "20px",
                  height: "3rem",
                  backgroundColor: "#6A3B54 ",
                }}
              >
                Order Now
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
