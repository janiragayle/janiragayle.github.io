import React from "react";
import SiteLayout from "../layouts/SiteLayout";
import Gallery from "../components/Gallery";
import { nyfw } from "../data/nyfw";

export default function Nyfw() {
  return (
    <SiteLayout>
      <Gallery images={nyfw} wrapperClassName="content-four-grid" />

      <div className="back-to-top">
        <a href="#top">TOP</a>
      </div>
    </SiteLayout>
  );
}
