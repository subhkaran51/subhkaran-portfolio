import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/tech-stack", label: "Tech" },
  { path: "/profiles", label: "Profiles" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Scroll progress & background opacity triggers
    const handleScroll = () => {
      // Background opacity change
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculation of scroll percent
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolledPercent = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolledPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation menu on route shift
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "3px",
          background: "linear-gradient(90deg, var(--accent-indigo), var(--accent-cyan))",
          zIndex: 10001,
          transition: "width 0.1s ease-out",
        }}
      />

      {/* Floating Navbar Container */}
      <header
        style={{
          position: "fixed",
          top: scrolled ? "1rem" : "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: scrolled ? "92%" : "90%",
          maxWidth: "1200px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          zIndex: 10000,
          borderRadius: scrolled ? "35px" : "16px",
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          className="font-display clickable"
          style={{
            fontSize: "1.4rem",
            fontWeight: "800",
            letterSpacing: "0.05em",
            background: "linear-gradient(135deg, #ffffff 40%, var(--accent-indigo) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SK.
        </Link>

        {/* Desktop Links List */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.2rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-display clickable ${isActive ? "nav-link-active" : ""}`
              }
              style={({ isActive }) => ({
                fontSize: "0.9rem",
                fontWeight: "500",
                letterSpacing: "0.02em",
                color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                position: "relative",
                padding: "0.3rem 0",
              })}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "var(--accent-cyan)",
                        borderRadius: "1px",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Action Button Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            fontSize: "1.4rem",
            color: "var(--text-primary)",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="mobile-nav-toggle clickable"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* CSS overrides to show/hide menus based on screens */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>

      {/* Mobile Nav Slide-in Drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: "90px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
              maxWidth: "600px",
              backgroundColor: "rgba(10, 10, 10, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid var(--border-color)",
              borderRadius: "16px",
              padding: "2rem",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: isActive ? "var(--accent-cyan)" : "var(--text-primary)",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.03)",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
