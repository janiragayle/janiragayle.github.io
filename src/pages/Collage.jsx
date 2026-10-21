import React from "react";
import ArtLayout from "../layouts/ArtLayout";
import Gallery from "../components/Gallery";
import { collage } from "../data/collage";

export default function Collage() {
  return (
    <ArtLayout>
      <Gallery images={collage} wrapperClassName="content-masonry" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </ArtLayout>
  );
}