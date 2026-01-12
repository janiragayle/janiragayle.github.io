import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenuKey, setOpenMenuKey] = useState(null); // only used for Contact now

  const navMenuClass = useMemo(() => {
    // keep "toggle-open" as the 2nd class (your old scripts.js style)
    return mobileOpen ? "nav-menu toggle-open" : "nav-menu";
  }, [mobileOpen]);

  const toggleSubmenu = (key) => {
    setOpenMenuKey((prev) => (prev === key ? null : key));
  };

  const subMenuClass = (key) => {
    // matches your CSS pattern: .sub-menu ... + toggle-open
    return openMenuKey === key ? `sub-menu ${key} toggle-open` : `sub-menu ${key}`;
  };

  return (
    <div className="sidebar">
      <header className="site-header">
        {/* name routes to photography landing by default */}
        <Link className="name hover" to="/  ">
          JANIRA GAYLE
        </Link>

        <button
          className="menu-toggle hover"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          ≡
        </button>
      </header>

      <div className="nav-menu-container">
        <ul className={navMenuClass}>
          {/* Photography (always visible) */}
          <li className="photography no-toggle">
            {/* Header label (not a dropdown) */}
            <Link className="hover" to="/photography">
              Photography
            </Link>

            {/* Indented links (always visible) */}
            <ul className="sub-menu photography-menu toggle-open">
              <li className="sub-menu-option">
                <Link className="hover" to="/photography/portraits">
                  Portraits
                </Link>
              </li>
              {/* <li className="sub-menu-option">
                <Link className="hover" to="/photography/events">
                  Events
                </Link>
              </li> */}
              <li className="sub-menu-option">
                <Link className="hover" to="/photography/conceptual">
                  Conceptual
                </Link>
              </li>
            </ul>
          </li>

          {/* Fine Arts (single link for now) */}
          <li className="work no-toggle">
            <Link className="hover" to="/fine-arts">
              Fine Arts
            </Link>
          </li>

          {/* About / CV */}
          <li className="about-cv no-toggle">
            <Link className="hover" to="/about">
              About / CV
            </Link>
          </li>

          {/* Contact dropdown (only dropdown left) */}
          <li className="contact">
            <div className="toggle-right">
              <a className="hover" href="#" onClick={(e) => e.preventDefault()}>
                Contact
              </a>
              <button
                className="dropdown-toggle contact-menu hover"
                type="button"
                aria-label="Toggle Contact menu"
                onClick={() => toggleSubmenu("contact-menu")}
              >
                ⌄
              </button>
            </div>

            <ul className={subMenuClass("contact-menu")}>
              {/* fixed your old HTML bug: combine classes */}
              <li className="hover email">gayle.janira@gmail.com</li>
              <li className="instagram">
                <a
                  href="https://instagram.com/niraesper.visuals"
                  className="fa-brands fa-instagram hover"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                />
              </li>
            </ul>
          </li>

          {/* Mailing List */}
          <li className="swe no-toggle">
            <Link className="hover" to="/newsletter">
              Join My Mailing List!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
