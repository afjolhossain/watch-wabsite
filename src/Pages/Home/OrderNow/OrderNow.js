import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation";

const OrderNow = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://protected-plains-81115.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Ordered Successfully");
        }
        data.reset();
      });
  };

  return (
    <div xs={12} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Navigation></Navigation>
      <h1 style={{ color: "black", marginTop: "2rem" }}>Order Your Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "solid black 2px",
          height: "350px",
          width: "400px",
          margin: "auto",
          marginTop: "1rem",
          borderRadius: "10px",
          marginBottom: "2rem",
          backgroundColor: "#3B1121 ",
        }}
      >
        <input
          style={{
            width: "70%",
            height: "50px",
            borderRadius: "10px",
            marginTop: "25px",
            backgroundColor: "#D5DBDB ",
          }}
          defaultValue={user.displayName}
          placeholder="Your Name"
          {...register("your name", { required: true })}
        />

        <input
          style={{
            width: "70%",
            height: "50px",
            borderRadius: "10px",
            marginTop: "8px",
            backgroundColor: "#D5DBDB ",
          }}
          defaultValue={user.email}
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <input
          style={{
            width: "70%",
            height: "50px",
            borderRadius: "10px",
            marginTop: "8px",
            backgroundColor: "#D5DBDB ",
          }}
          placeholder="Address"
          defaultValue=""
          {...register("address")}
        />
        <input
          style={{
            width: "70%",
            height: "50px",
            borderRadius: "10px",
            marginTop: "8px",
            backgroundColor: "#D5DBDB ",
          }}
          placeholder="Phone Number"
          defaultValue=""
          {...register("phoneNumber")}
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          style={{
            width: "70%",
            height: "50px",
            marginTop: "8px",
            borderRadius: "10px",
            backgroundColor: "#DD6821",
            fontWeight: "700px",
          }}
          type="submit"
        />
      </form>
      <Footer></Footer>
    </div>
  );
};

export default OrderNow;
