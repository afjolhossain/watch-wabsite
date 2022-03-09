import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("fakeData.json").then((res) =>
      res.json().then((data) => setServices(data))
    );
  }, []);
  return (
    <Container>
      <h1 style={{ color: "white", marginTop: "3rem", fontSize: "3rem" }}>
        Products
      </h1>
      <p
        style={{
          color: "#CCD1D1 ",
          margin: "auto",
          fontWeight: "700px",
        }}
        xs={12}
        md={6}
      >
        Very Nest Cam plugs into power so it won't miss a second, can send
        helpful notifications to your phone, and is designed with an all-glass
        lens and premium materials.
      </p>

      <Row xs={1} sm={2} md={3} className="row gy-4 mt-5 mb-5">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
