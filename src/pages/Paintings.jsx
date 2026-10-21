import React from "react";
import ArtLayout from "../layouts/ArtLayout";
import Gallery from "../components/Gallery";
import { paintings } from "../data/paintings";

export default function Paintings() {
  return (
    <ArtLayout>
      <Gallery images={paintings} wrapperClassName="content" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </ArtLayout>
  );
}
