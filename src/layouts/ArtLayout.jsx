import React from "react";
import Sidebar from "../components/Sidebar";

export default function ArtLayout({ children }) {
  return (
    <>
      {/* matches <a name="top"></a> behavior */}
      <div id="top" />

      <div className="container">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
