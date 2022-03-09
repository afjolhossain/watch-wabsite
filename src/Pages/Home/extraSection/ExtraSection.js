import React from "react";
import { Container } from "react-bootstrap";
import extraSection from "../../../Images/Banner/extra-Section.webp";

const bg = {
  background: `url(${extraSection})`,
  height: "600px",
};

const ExtraSection = () => {
  return (
    <div style={bg}>
      <div>
        <Container>
          <br />
          <h5 style={{ color: "#a8741a", marginTop: "9rem" }}>
            Sale Off 20% All Products
          </h5>
          <h1 style={{ color: "#ffffff", fontSize: "4rem" }}>
            New Trending Collection
          </h1>
          <p style={{ color: "#566573" }}>
            We Believe That Good Design is Always in Season
          </p>
        </Container>
      </div>
    </div>
  );
};

export default ExtraSection;
