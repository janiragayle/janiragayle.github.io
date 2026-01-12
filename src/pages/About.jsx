import React from "react";
import SiteLayout from "../layouts/SiteLayout";

export default function About() {
  return (
    <SiteLayout>
      <div className="about-content">
        <div className="gallery-item">
          <img
            src="/Imgs/Photography/Portraits/080A4654-Enhanced-NR.jpg"
            alt=""
          />
        </div>

        <div className="about-text">
          <h1>About Janira</h1>
          <br />
          <br />

          <h3>
            Janira is a 22-year-old photographer, fine artist, and web developer based in Brooklyn, New
            York.
            <br />
            <br />
            She recently graduated from Columbia University with a Bachelors in Computer Science and Visual Arts.
            <br />
            <br />
            Janira&apos;s passion for art is deeply rooted in an exploration of
            cultural boundaries, heritage, and identity. She enjoys experiementing with different meduims
            to express these themes, particularly through photography and fine arts.
            She creates deeply personal works that serve as both a means of
            healing and a way to process the complexities of generational curses
            and blessings. Her art becomes a bridge between the past and
            present, transforming personal storytelling into a powerful tool
            for connection and self-discovery.
          
          </h3>
        </div>
      </div>

      <div className="back-to-top">
        <a href="#top">TOP</a>
      </div>
    </SiteLayout>
  );
}
