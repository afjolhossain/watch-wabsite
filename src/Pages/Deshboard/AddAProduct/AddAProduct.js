import React, { useRef } from "react";

const AddAProduct = () => {
  const nameref = useRef();
  const imageref = useRef();
  const descriptionref = useRef();
  const priceref = useRef();

  const handleAddService = (e) => {
    const name = nameref.current.value;
    const image = imageref.current.value;
    const description = descriptionref.current.value;
    const price = priceref.current.value;

    const newService = { name, description, price, image };

    fetch("https://protected-plains-81115.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully Added service");
          e.target.reset();
        }
      });
    e.eventDefault();
  };
  return (
    <div
      style={{
        backgroundColor: "#273746",
        margin: -32,
        height: "560px",
      }}
    >
      <br />
      <h3 style={{ color: "white" }}>ADD A SERVICE</h3>
      <form
        onSubmit={handleAddService}
        style={{
          width: "400px",
          height: "350px",
          margin: "auto",
          border: "1px solid white",
          backgroundColor: "#839192",
        }}
      >
        <input
          type="text"
          style={{
            width: "300px",
            height: 50,
            marginTop: 15,
            borderRadius: "10px",
          }}
          placeholder="Service Name"
          ref={nameref}
        />
        <br />
        <input
          type="text"
          style={{
            width: "300px",
            height: 50,
            borderRadius: "10px",
            marginTop: 10,
          }}
          placeholder="Image-Url"
          ref={imageref}
        />
        <br />

        <input
          type="text"
          style={{
            width: "300px",
            height: 50,
            borderRadius: "10px",
            marginTop: 10,
          }}
          placeholder="Description"
          ref={descriptionref}
        />
        <br />
        <input
          type="number"
          style={{
            width: "300px",
            height: 50,
            marginTop: 10,
            borderRadius: "10px",
          }}
          placeholder="Price"
          ref={priceref}
        />
        <br />

        <input
          type="submit"
          style={{
            width: "310px",
            height: 50,
            marginTop: 10,
            backgroundColor: "#B03A2E",
            borderRadius: "10px",
          }}
          value="SUBMIT"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
