import React from "react";
import SiteLayout from "../layouts/SiteLayout";

export default function About() {
  return (
    <SiteLayout>
      <div className="about-content">
        <div className="gallery-item">
          <img
            src="/Imgs/about/904fe9da99a0d6c29655cfc49b7fbeec.jpeg"
            alt=""
          />
        </div>

        <div className="about-text">
          <h1>About Janira</h1>
          <br />
          <br />

          <h3>
            Janira is a 21-year-old fine artist and software developer from New
            York City.
            <br />
            <br />
            She is currently studying Computer Science and Visual Arts at
            Columbia University, where she merges her technical expertise with
            her creative practice.
            <br />
            <br />
            Janira&apos;s passion for art is deeply rooted in an exploration of
            cultural boundaries, heritage, and identity. Through her innovative
            use of oil painting on unconventional surfaces like yarn and canvas,
            she creates deeply personal works that serve as both a means of
            healing and a way to process the complexities of generational curses
            and blessings. Her art becomes a bridge between the past and
            present, transforming personal storytelling into a powerful medium
            for connection and self-discovery.
            <br />
            <br />
            Born and raised in Brooklyn, New York, Janira is the child of a
            Costa Rican father and a Puerto Rican mother. Although both of her
            parents speak Spanish and maintain strong cultural ties to their
            home countries, growing up in the United States presented her with a
            unique challenge—straddling two worlds while never feeling entirely
            rooted in either. This experience of cultural duality has shaped her
            artistic practice, compelling her to examine the nuances of
            identity, belonging, and the inherited histories that influence her
            sense of self.
            <br />
            <br />
            Growing up in poverty, in NYCHA housing, Janira experienced
            firsthand the resilience and struggles that come with financial
            hardship. Her upbringing instilled in her a deep understanding of
            scarcity, resourcefulness, and the weight of unspoken sacrifices. It
            wasn’t until she transitioned to Columbia University’s campus that
            she fully grasped what privilege and gratitude truly meant. The
            stark contrast between her early environment and the elite academic
            space forced her to confront issues of access, opportunity, and
            systemic inequity in a way that reshaped her perspective. This
            journey—moving between vastly different worlds—further deepened her
            artistic exploration, as she seeks to not only tell her own story
            but to give voice to the often-overlooked narratives of those who
            navigate similar realities.
            <br />
            <br />
            Janira’s journey into coding began with a simple desire—to build fun
            and creative websites. Over time, this curiosity evolved into an
            insatiable need to problem-solve, pushing her to explore the
            intersection of logic and creativity in software development.
            Whether she’s debugging code or experimenting with new artistic
            techniques, she thrives on finding innovative solutions and pushing
            boundaries in both disciplines.
          </h3>
        </div>
      </div>

      <div className="back-to-top">
        <a href="#top">TOP</a>
      </div>
    </SiteLayout>
  );
}
