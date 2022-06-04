import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";

const ManageAllOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("https://protected-plains-81115.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure delete this item ?");
    if (confirm) {
      fetch(`https://protected-plains-81115.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = manageOrders.filter(
              (booking) => booking._id !== id
            );
            setManageOrders(remaining);
          }
        });
    }
  };
  return (
    <div style={{ backgroundColor: "#273746", margin: -32 }}>
      <br />
      <h2 style={{ margin: "auto", color: "white" }}>Manage All Orders</h2>
      <Container style={{ margin: "auto", height: "550px" }}>
        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th> Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {manageOrders.map((manageOrder) => (
              <tr>
                <td>{manageOrder.name}</td>

                <td>{manageOrder.email}</td>

                <td>{manageOrder.address}</td>
                <td>
                  <Button onClick={handleDelete}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageAllOrder;
