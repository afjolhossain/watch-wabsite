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
    fetch("http://localhost:5000/orders", {
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "solid white 2px",

          height: "400px",
          width: "450px",
          margin: "auto",
          marginTop: "3rem",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "white" }}>Order Your Product</h1>
        <input
          style={{
            width: "70%",
            height: "50px",
            borderRadius: "10px",
            marginTop: "8px",
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
          }}
          placeholder="Phone Number"
          defaultValue=""
          {...register("phoneNumber")}
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          style={{
            width: "72%",
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
