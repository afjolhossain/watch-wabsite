import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

const CountClients = () => {
  return (
    <div
      style={{
        backgroundColor: "#010A0C",
        height: "400px",
        margin: "auto",
      }}
    >
      <br />
      <Container>
        <Row style={{ marginTop: "3rem" }}>
          <Col
            sm={4}
            style={{
              backgroundColor: "#BDC3C7",
              height: "200px",
              alignItems: "center",
            }}
          >
            <CountUp
              style={{
                fontSize: "4rem",
                color: "#370C04  ",
                marginTop: "4rem",
              }}
              duration={8}
              end={65}
            />
            <span style={{ fontSize: "3rem", color: "#89171A " }}>+</span>

            <h1 style={{ color: "#A53A52" }}>Years</h1>
          </Col>
          <Col sm={4} style={{ backgroundColor: "white" }}>
            <CountUp
              style={{ fontSize: "4rem", color: "#370C04 " }}
              duration={8}
              end={2000}
            />
            <span style={{ fontSize: "3rem", color: "#89171A  " }}>+</span>
            <h1 style={{ color: "#A53A52 " }}>
              Happy <span style={{ color: "#180208 " }}>Clients</span>
            </h1>
          </Col>
          <Col sm={4} style={{ backgroundColor: "#BDC3C7" }}>
            <CountUp
              style={{ fontSize: "4rem", color: "#370C04 " }}
              duration={8}
              end={1000}
            />
            <span style={{ fontSize: "3rem", color: "#89171A " }}>+</span>
            <h1 style={{ color: "#A53A52" }}>Staffs</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountClients;
