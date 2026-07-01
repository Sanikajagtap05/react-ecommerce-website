import React from "react";
import Card1 from "./Card1"; // Import Card1

export default function Props1() {
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
        title="Motivation"
        quote="Success comes from consistency."
        author="John Doe"
      />

      <Card1
        title="Inspiration"
        quote="Never stop learning."
        author="Steve Jobs"
      />
    </div>
  );
}