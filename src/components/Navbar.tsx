import React from "react";
import { Link } from "react-router-dom";

export default React.memo(function Navbar({ title }: { title: string }) {
  return (
    <nav style={{ padding: 20, background: "#222", color: "white" }}>
      <h2>{title}</h2>
      <div style={{ marginTop: 10 }}>
        <Link to="/" style={{ color: "white", marginRight: 20 }}>
          Home
        </Link>

        <Link to="/dashboard" style={{ color: "white", marginRight: 20 }}>
          Dashboard
        </Link>

        <Link to="/admin" style={{ color: "white" }}>
          Admin Panel
        </Link>
      </div>
    </nav>
  );
});
