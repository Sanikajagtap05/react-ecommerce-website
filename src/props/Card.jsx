import React from "react";

export default function Card(props) {
  return (
    <div
      className="card shadow-lg border-0"
      style={{
        width: "18rem",
        borderRadius: "18px",
        overflow: "hidden",
        transition: "0.3s",
      }}
    >
      <img
        src={props.image}
        className="card-img-top"
        alt={props.title}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body text-center">
        <h5 className="fw-bold">{props.title}</h5>

        <p
          style={{
            color: "#ff4d4f",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {props.price}
        </p>

        <button
          className="btn btn-dark w-100"
          style={{
            borderRadius: "25px",
          }}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}