import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImage1 from "../../../Images/Banner/banner-4.webp";
import bannerImage2 from "../../../Images/Banner/banner-2.jpg";
import bannerImage3 from "../../../Images/Banner/banner-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src={bannerImage1}
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            textAlign: "start",
            margin: "11rem 0",
          }}
          xs={12}
        >
          <h1 style={{ color: "#8cc2dc", fontSize: "3rem" }}>SMART WATCHES</h1>
          <h5 style={{ color: "#CACFD2 " }}>
            Raymond Weil’s Emblematic Collection, Nabucco, Makes A Strong
            Comeback This Year.
          </h5>
          <p>
            Starting At
            <span style={{ color: "#eeeaa5", fontSize: "30px" }}>
              $2.199.00
            </span>
            <br />
            Consequat, Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src={bannerImage2}
          alt="Second slide"
        />
        <Carousel.Caption
          style={{
            textAlign: "start",
            margin: "11rem 0",
          }}
          xs={12}
        >
          <h1 style={{ color: "white", fontSize: "3rem" }}>Breguet Watches</h1>
          <h5 style={{ color: "#CACFD2 " }}>
            Breguet, “Souscription No. 34/300”. Made In A Limited Edition Of 300
            Sets In The Early 1990’S.
          </h5>
          <p>
            Starting At
            <span style={{ color: "#eeeaa5", fontSize: "30px" }}>
              $2.199.00
            </span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src={bannerImage3}
          alt="Third slide"
        />

        <Carousel.Caption
          style={{
            textAlign: "start",
            margin: "11rem 0",
          }}
          xs={12}
        >
          <h1 style={{ color: "white", fontSize: "3rem" }}>U-Boat Classico</h1>
          <h5 style={{ color: "#0DE3F5" }}>
            Breguet, “Souscription No. 34/300”. Made In A Limited Edition Of 300
            Sets In The Early 1990’S.
          </h5>
          <p>
            Starting At
            <span style={{ color: "#eeeaa5", fontSize: "30px" }}>
              $2.199.00
            </span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
