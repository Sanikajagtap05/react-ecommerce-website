import React from "react";

export default function Prime({ setUser }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>⭐ Prime User</h1>

      <h2>Welcome to the Prime Page</h2>

      <p>You have access to all premium features.</p>

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Explore Premium
      </button>

      <button
        onClick={() => setUser("guest")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Switch to Guest
      </button>

      <button
        onClick={() => setUser("")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}