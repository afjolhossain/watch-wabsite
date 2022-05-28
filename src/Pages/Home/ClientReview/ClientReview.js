import React from "react";
import { Carousel, Container } from "react-bootstrap";
import clientReview from "../../../Images/Banner/bill-gates.jpg";
import clientReview1 from "../../../Images/Banner/Shakib-Al-Hasan-1.gif";
import clientReview2 from "../../../Images/Banner/sabbir.png";

const ClientReview = () => {
  return (
    <div style={{ backgroundColor: "#17202A " }}>
      <Container>
        <br />
        <h1 style={{ color: "white", marginTop: "30px" }}>TESTIMONIALS</h1>
        <Carousel fade>
          <Carousel.Item style={{ marginTop: "3rem", height: "400px" }}>
            <p style={{ margin: "auto", color: "#ABB2B9 " }}>
              I have fallen in love with my watch completely and so has my wife.
              She was even wearing it around the house yesterday. It is a true
              object of beauty and I am thoroughly enjoying exploring all its
              discoverable wonders!
            </p>

            <img
              className="d-block  rounded-circle"
              style={{
                width: "130px",
                height: "130px",
                margin: "auto",
                marginTop: "3rem",
              }}
              src={clientReview}
              alt="First slide"
            />
            <h3 style={{ marginTop: "3rem", color: "#2E86C1" }}>Bill Geats</h3>
            <h6 style={{ color: "#ABB2B9 " }}>MicroSoft </h6>
          </Carousel.Item>
          <Carousel.Item
            style={{ margin: "auto", marginTop: "3rem", height: "400px" }}
          >
            <p style={{ margin: "auto", color: "#ABB2B9 " }}>
              I have fallen in love with my watch completely and so has my wife.
              She was even wearing it around the house yesterday. It is a true
              object of beauty and I am thoroughly enjoying exploring all it’s
              discoverable wonders!
            </p>
            <img
              className="d-block  rounded-circle"
              style={{
                width: "130px",
                height: "130px",
                margin: "auto",
                marginTop: "3rem",
              }}
              src={clientReview1}
              alt="Second slide"
            />
            <h3 style={{ marginTop: "3rem", color: "#2E86C1" }}>
              Shakib Al Hasan
            </h3>
            <h6 style={{ color: "#ABB2B9 " }}>Bangladesh,Cricketer </h6>
          </Carousel.Item>
          <Carousel.Item
            style={{ margin: "auto", marginTop: "3rem", height: "400px" }}
          >
            <p style={{ margin: "auto", color: "#ABB2B9 " }}>
              I have fallen in love with my watch completely and so has my wife.
              She was even wearing it around the house yesterday. It is a true
              object of beauty and I am thoroughly enjoying exploring all it’s
              discoverable wonders!
            </p>
            <img
              className="d-block  rounded-circle"
              style={{
                width: "130px",
                height: "130px",
                margin: "auto",
                marginTop: "3rem",
              }}
              src={clientReview2}
              alt="First slide"
            />
            <h3 style={{ marginTop: "3rem", color: "#2E86C1" }}>
              Shakib Al Hasan
            </h3>
            <h6 style={{ color: "#ABB2B9 " }}>Bangladesh,Cricketer </h6>
          </Carousel.Item>
        </Carousel>
      </Container>
      <br />
    </div>
  );
};

export default ClientReview;
