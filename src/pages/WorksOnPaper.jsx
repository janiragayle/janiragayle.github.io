import React from "react";
import ArtLayout from "../layouts/ArtLayout";
import Gallery from "../components/Gallery";
import { worksOnPaper } from "../data/worksOnPaper";

export default function WorksOnPaper() {
  return (
    <ArtLayout>
      <Gallery images={worksOnPaper} wrapperClassName="content" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </ArtLayout>
  );
}