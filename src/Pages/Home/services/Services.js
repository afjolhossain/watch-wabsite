import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services").then((res) =>
      res.json().then((data) => setServices(data))
    );
  }, []);
  return (
    <div style={{ backgroundColor: "#17202A " }}>
      <Container>
        <br />
        <h1
          style={{
            fontSize: "3rem",
            marginTop: "3rem",
            color: "#F0F3F4",
          }}
        >
          Our <span style={{ color: "#A51E15 " }}>Services</span>
        </h1>
        <br />
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

        <Row xs={1} sm={2} md={3} className="row gy-3 mt-5 ">
          {services.slice(0, 6).map((service) => (
            <Service service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
