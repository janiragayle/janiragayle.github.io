import React from "react";
import SiteLayout from "../layouts/SiteLayout";
import Gallery from "../components/Gallery";
import { photographyLanding } from "../data/photographyLanding";

export default function PhotographyLanding() {
  return (
    <SiteLayout>
      <Gallery images={photographyLanding} wrapperClassName="content-photography-landing" />

      <div className="back-to-top">
        <a href="#top">TOP</a>
      </div>
    </SiteLayout>
  );
}
