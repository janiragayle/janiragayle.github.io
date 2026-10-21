import React from "react";
import SiteLayout from "../layouts/SiteLayout";
import Gallery from "../components/Gallery";
import { portraits } from "../data/portraits";

export default function Portraits() {
  return (
    <SiteLayout>
      <Gallery images={portraits} wrapperClassName="content-four-grid" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </SiteLayout>
  );
}
