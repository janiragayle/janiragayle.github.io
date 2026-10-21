
import React from "react";
import ArtLayout from "../layouts/ArtLayout";
import Gallery from "../components/Gallery";
import { fineArtsLanding } from "../data/fineArtsLanding";

export default function FineArtsLanding() {
  return (
    <ArtLayout>
      <Gallery images={fineArtsLanding} wrapperClassName="content-masonry" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </ArtLayout>
  );
}