import React from "react";
import ArtLayout from "../layouts/ArtLayout";
import Gallery from "../components/Gallery";
import { mixedMedia } from "../data/mixedMedia";

export default function MixedMedia() {
  return (
    <ArtLayout>
      <Gallery images={mixedMedia} wrapperClassName="content-masonry" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </ArtLayout>
  );
}