import React from "react";

export default function Guest({ setUser }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>😊 Guest User</h1>

      <h2>Welcome to the Guest Page</h2>

      <p>You can access only basic features.</p>

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Continue
      </button>

      <button
        onClick={() => setUser("prime")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Switch to Prime
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