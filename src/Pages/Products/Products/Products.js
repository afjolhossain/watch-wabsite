import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://protected-plains-81115.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <h1>All Products is available Here</h1>
        <Row xs={1} sm={3} md={4} className="row gy-4 mt-5 mb-5">
          {products.map((product) => (
            <Product product={product}></Product>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Products;
