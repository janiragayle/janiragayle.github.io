import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ padding: "48px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 16 }}>JANIRA GAYLE</h1>
      <p style={{ marginBottom: 32 }}>Photographer & Visual Artist</p>

      <div style={{ display: "grid", gap: 16 }}>
        <Link className="hover" to="/photography" style={{ fontSize: 18 }}>
          → Photography
        </Link>

        <Link className="hover" to="/fine-arts" style={{ fontSize: 18 }}>
          → Fine Arts
        </Link>
      </div>
    </div>
  );
}
