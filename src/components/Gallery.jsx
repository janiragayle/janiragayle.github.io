import React, { useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery({ images, wrapperClassName = "content" }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  function openAt(i) {
    setLightboxIndex(i);
  }

  function close() {
    setLightboxIndex(null);
  }

  function prev() {
    setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className={wrapperClassName}>
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className={`gallery-item ${img.className || ""}`.trim()}
          onClick={() => openAt(i)}
          style={{ cursor: "pointer" }}
        >
          <img src={img.src} alt={img.alt || ""} />
        </div>
      ))}

      <Lightbox
        isOpen={lightboxIndex !== null}
        src={lightboxIndex !== null ? images[lightboxIndex].src : ""}
        alt={lightboxIndex !== null ? images[lightboxIndex].alt || "" : ""}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}
