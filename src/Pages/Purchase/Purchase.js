import React, { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import Footer from "../Shared/Footer/Footer";
import { Button, Col, Row } from "react-bootstrap";

const Purchase = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://protected-plains-81115.herokuapp.com/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col sm={6} xs={12}>
            <img
              xs={12}
              style={{ width: "350px", marginBottom: "3rem" }}
              src={service.image}
              alt=""
            />
          </Col>
          <Col
            sm={6}
            style={{
              textAlign: "start",
              width: "400px",
              marginBottom: "3rem",
              lineHeight: "1rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700px",
                color: "#20030E",
              }}
              variant="h4"
            >
              {service.name}
            </Typography>
            <Typography
              sx={{
                color: "#632835 ",
                fontSize: "20px",
                marginTop: "1rem",
              }}
              variant="subtitle2"
            >
              Description: {service.description}
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "#953513", marginTop: "1rem" }}
            >
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
