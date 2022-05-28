import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`http://localhost:5000/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = manageProducts.filter(
              (booking) => booking._id !== id
            );
            setManageProducts(remaining);
          }
        });
    }
  };
  return (
    <div xs={12} md={6} style={{ backgroundColor: "#273746", margin: -32 }}>
      <br />
      <h1 style={{ color: "white" }}>Manage All Orders</h1>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {manageProducts.map((manageOrder) => (
            <tr>
              <td>{manageOrder.name}</td>
              <td>{manageOrder.description}</td>
              <td>{manageOrder.price}</td>
              <td>
                <img
                  style={{ width: "200px" }}
                  src={manageOrder.image}
                  alt=""
                />
              </td>
              <td>
                <button onClick={() => handleDelete(manageOrder._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
