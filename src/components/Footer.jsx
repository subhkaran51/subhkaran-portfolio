import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaStackOverflow, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid var(--border-color)",
        backgroundColor: "rgba(3, 3, 3, 0.8)",
        backdropFilter: "blur(10px)",
        padding: "4rem 0 2rem 0",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Logo & Brief Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <Link
              to="/"
              className="font-display clickable"
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffffff 40%, var(--accent-indigo) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SUBH KARAN
            </Link>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              Senior Full Stack Mobile, Web & AI Developer building high-end digital products and enterprise automations.
            </p>
          </div>

          {/* Quick Site Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 className="font-display" style={{ fontSize: "1rem", fontWeight: "600" }}>
              Explore
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
              <Link to="/about" className="clickable" style={{ color: "var(--text-secondary)" }}>About Journey</Link>
              <Link to="/experience" className="clickable" style={{ color: "var(--text-secondary)" }}>Timeline</Link>
              <Link to="/projects" className="clickable" style={{ color: "var(--text-secondary)" }}>Case Studies</Link>
              <Link to="/services" className="clickable" style={{ color: "var(--text-secondary)" }}>Service Suite</Link>
            </div>
          </div>

          {/* Tech and Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 className="font-display" style={{ fontSize: "1rem", fontWeight: "600" }}>
              Resources
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
              <Link to="/tech-stack" className="clickable" style={{ color: "var(--text-secondary)" }}>Tech Inventory</Link>
              <Link to="/profiles" className="clickable" style={{ color: "var(--text-secondary)" }}>Talent Portals</Link>
              <Link to="/contact" className="clickable" style={{ color: "var(--text-secondary)" }}>Book Consultation</Link>
            </div>
          </div>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 className="font-display" style={{ fontSize: "1rem", fontWeight: "600" }}>
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <p>Email: subhkaran370@gmail.com</p>
              <p>Phone: +91-8988347987</p>
              <p>Availability: Contract Remote</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Portals */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            gap: "1.5rem",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            &copy; {currentYear} Subh Karan. All rights reserved. Built with React & GSAP.
          </p>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://linkedin.com/in/subh-thakur-43065a371"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
              style={{ fontSize: "1.2rem", color: "var(--text-secondary)", transition: "color var(--transition-fast)" }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/subhkaran51"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
              style={{ fontSize: "1.2rem", color: "var(--text-secondary)", transition: "color var(--transition-fast)" }}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://stackoverflow.com/users/32350090/subh-karan"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
              style={{ fontSize: "1.2rem", color: "var(--text-secondary)", transition: "color var(--transition-fast)" }}
              aria-label="Stack Overflow Profile"
            >
              <FaStackOverflow />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01a895db3252ffbb6c?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
              style={{ fontSize: "1.2rem", color: "var(--text-secondary)", transition: "color var(--transition-fast)" }}
              aria-label="Upwork Profile"
            >
              <FaBriefcase />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
