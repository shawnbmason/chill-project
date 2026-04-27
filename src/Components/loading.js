import React from "react";
import "../Styles/main.css";

export default function Loading() {
  return (
    <div style={{ color: "cornflowerblue" }}>
      <i className="fa fa-dot-circle animate-ping">Loading...</i>
    </div>
  );
}
