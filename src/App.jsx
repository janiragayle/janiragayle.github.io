import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// --- LANDING ---
import Landing from "./pages/Landing";

// --- PHOTOGRAPHY ---
import PhotographyLanding from "./pages/PhotographyLanding";
import Portraits from "./pages/Portraits";
import Nyfw from "./pages/Nyfw"; 
import Conceptual from "./pages/Conceptual";

// // --- FINE ARTS ---
import FineArtsLanding from "./pages/FineArtsLanding";
import Paintings from "./pages/Paintings";
import WorksOnPaper from "./pages/WorksOnPaper";
import Studies from "./pages/Studies";
import MixedMedia from "./pages/MixedMedia";
import Collage from "./pages/Collage";

// --- GLOBAL ---
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";

export default function App() {
  return (
    <Routes>
      {/* Home / Router */}
      <Route path="/" element={<Landing />} />

      {/* ================= PHOTOGRAPHY ================= */}
      <Route path="/photography" element={<PhotographyLanding />} />
      <Route path="/photography/portraits" element={<Portraits />} />
      <Route path="/photography/nyfw" element={<Nyfw />} />
      <Route path="/photography/conceptual" element={<Conceptual />} />

      {/* ================= FINE ARTS ================= */}
      <Route path="/fine-arts" element={<FineArtsLanding />} />
      <Route path="/fine-arts/paintings" element={<Paintings />} />
      <Route path="/fine-arts/works-on-paper" element={<WorksOnPaper />} />
      <Route path="/fine-arts/studies" element={<Studies />} />
      <Route path="/fine-arts/mixed-media" element={<MixedMedia />} />
      <Route path="/fine-arts/collage" element={<Collage />} />

      {/* ================= GLOBAL ================= */}
      <Route path="/about" element={<About />} />
      <Route path="/newsletter" element={<Newsletter />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
