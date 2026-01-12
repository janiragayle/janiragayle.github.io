import React from "react";
import SiteLayout from "../layouts/SiteLayout";
import Gallery from "../components/Gallery";
import { conceptual } from "../data/conceptual";

export default function Conceptual() {
  return (
    <SiteLayout>
      <Gallery images={conceptual} wrapperClassName="content-four-grid" />

      <div className="back-to-top">
        <a href="#top">TOP</a>
      </div>
    </SiteLayout>
  );
}
