import React from "react";
import Dashboard from "./Dashboard";
import "./styles.css"; // Import global styles

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "1000px",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;




