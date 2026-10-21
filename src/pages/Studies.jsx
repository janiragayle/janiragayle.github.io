import React from "react";
import ArtLayout from "../layouts/ArtLayout";
import Gallery from "../components/Gallery";
import { studies } from "../data/studies";

export default function Studies() {
  return (
    <ArtLayout>
      <Gallery images={studies} wrapperClassName="content-masonry-3" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </ArtLayout>
  );
}