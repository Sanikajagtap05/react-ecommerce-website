import React from "react";
import Card1 from "./Card";

export default function Props() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        flexWrap: "wrap",
        padding: "40px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Card1
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        title="Nike Air Zoom"
        price="₹5,999"
        buttonText="Add to Cart"
      />

      <Card1
        image="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
        title="Adidas Runner"
        price="₹4,499"
        buttonText="Add to Cart"
      />

      <Card1
        image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
        title="Puma Sneakers"
        price="₹3,999"
        buttonText="Add to Cart"
      />

      <Card1
        image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
        title="Nike Revolution"
        price="₹6,499"
        buttonText="Buy Now"
      />
    </div>
  );
}