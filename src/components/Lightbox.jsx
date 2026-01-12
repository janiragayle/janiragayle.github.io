import React, { useEffect } from "react";

export default function Lightbox({ isOpen, src, alt, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className={`lightbox ${isOpen ? "toggle-open2" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <span className="close" onClick={onClose}>
        x
      </span>

      <span
        className="prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        &#10094;
      </span>

      <img
        className="lightbox-img"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />

      <span
        className="next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        &#10095;
      </span>
    </div>
  );
}
