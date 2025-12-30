// components/Navbar/Navbar.js
"use client";

import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          ShivShakti Tourist
        </div>

        {/* Desktop Menu */}
        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          {/* <a href="#">About</a> */}
          <a href="/services">Services</a>
          <a href="/fleet">Fleet</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
