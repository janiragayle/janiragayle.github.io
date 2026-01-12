import React from "react";
import Sidebar from "../components/Sidebar";

export default function SiteLayout({ children }) {
  return (
    <>
      <div id="top" />
      <div className="container">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
