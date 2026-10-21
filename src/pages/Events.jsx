import React from "react";
import SiteLayout from "../layouts/SiteLayout";
import Gallery from "../components/Gallery";
import { events } from "../data/events";

export default function Events() {
  return (
    <SiteLayout>
      <Gallery images={events} wrapperClassName="content" />

      <div className="back-to-top">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>TOP</a>
      </div>
    </SiteLayout>
  );
}
