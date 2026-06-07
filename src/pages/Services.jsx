import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot, FaCloud, FaDatabase, FaMobileAlt, FaCode,
  FaServer, FaCogs, FaUsers, FaLightbulb, FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { services } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

// Icon mapping for service cards
const getServiceIcon = (iconName) => {
  switch (iconName) {
    case "FaRobot":    return <FaRobot />;
    case "FaCloud":    return <FaCloud />;
    case "FaDatabase": return <FaDatabase />;
    case "FaMobileAlt": return <FaMobileAlt />;
    case "FaCode":     return <FaCode />;
    case "FaServer":   return <FaServer />;
    default:           return <FaCogs />;
  }
};

const ACCENTS = [
  "var(--accent-indigo)",
  "var(--accent-cyan)",
  "var(--accent-violet)",
  "var(--accent-emerald)",
  "var(--accent-indigo)",
  "var(--accent-cyan)",
  "var(--accent-violet)",
  "var(--accent-emerald)",
  "var(--accent-indigo)",
  "var(--accent-cyan)",
  "var(--accent-violet)",
  "var(--accent-emerald)",
];

// Expandable service card
const ServiceCard = ({ svc, idx }) => {
  const [expanded, setExpanded] = useState(false);
  const accent = ACCENTS[idx % ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.04 }}
      className="glass-interactive"
      style={{
        border: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={() => setExpanded((prev) => !prev)}
    >
      {/* Corner glow */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          backgroundColor: accent,
          filter: "blur(40px)",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      {/* Always-visible header */}
      <div style={{ padding: "2.5rem 2.5rem 2rem" }}>
        {/* Icon */}
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            backgroundColor: `${accent}14`,
            border: `1px solid ${accent}28`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            color: accent,
            marginBottom: "1.5rem",
          }}
        >
          {getServiceIcon(svc.icon)}
        </div>

        {/* Title + description */}
        <h3 className="font-display" style={{ fontSize: "1.35rem", fontWeight: "700", marginBottom: "0.7rem" }}>
          {svc.title}
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.65" }}>
          {svc.description}
        </p>

        {/* Checklist */}
        <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {svc.details.map((detail) => (
            <div key={detail} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.88rem" }}>
              <FaCheckCircle style={{ color: accent, flexShrink: 0, marginTop: "0.15rem", fontSize: "0.8rem" }} />
              <span style={{ color: "var(--text-secondary)" }}>{detail}</span>
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1.8rem",
            fontSize: "0.82rem",
            fontWeight: "700",
            color: accent,
            letterSpacing: "0.04em",
          }}
        >
          {expanded ? "Hide Details" : "View Full Details"}
          <motion.span
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex" }}
          >
            <FaArrowRight style={{ fontSize: "0.75rem" }} />
          </motion.span>
        </div>
      </div>

      {/* Expandable deep-dive content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 2.5rem 2.5rem",
                borderTop: "1px solid var(--border-color)",
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                paddingTop: "2rem",
              }}
            >
              {/* Who it's for */}
              {svc.whoItFor && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <FaUsers style={{ color: accent, fontSize: "0.85rem" }} />
                    <span className="font-display" style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: accent }}>
                      Who This Is For
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: "1.65" }}>
                    {svc.whoItFor}
                  </p>
                </div>
              )}

              {/* Business benefits */}
              {svc.benefits && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <FaLightbulb style={{ color: "var(--accent-emerald)", fontSize: "0.85rem" }} />
                    <span className="font-display" style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-emerald)" }}>
                      Business Benefits
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: "1.65" }}>
                    {svc.benefits}
                  </p>
                </div>
              )}

              {/* Use case */}
              {svc.useCase && (
                <div
                  style={{
                    padding: "1.2rem",
                    borderRadius: "8px",
                    backgroundColor: `${accent}08`,
                    border: `1px solid ${accent}20`,
                  }}
                >
                  <span className="font-display" style={{ fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: accent, display: "block", marginBottom: "0.5rem" }}>
                    Real-World Use Case
                  </span>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: "1.65", fontStyle: "italic" }}>
                    {svc.useCase}
                  </p>
                </div>
              )}

              {/* Tech stack */}
              {svc.techUsed && (
                <div>
                  <span className="font-display" style={{ fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.6rem" }}>
                    Technologies Used
                  </span>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                    {svc.techUsed}
                  </p>
                </div>
              )}

              {/* Outcomes */}
              {svc.outcomes && (
                <div
                  style={{
                    padding: "1.2rem",
                    borderRadius: "8px",
                    backgroundColor: "rgba(16, 185, 129, 0.05)",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                  }}
                >
                  <span className="font-display" style={{ fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-emerald)", display: "block", marginBottom: "0.5rem" }}>
                    What You Receive
                  </span>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: "1.65" }}>
                    {svc.outcomes}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  useDocumentMetadata(
    "Services & Solutions",
    "Premium web, mobile, SaaS, custom CRM, enterprise integration, AI automation, and consulting services by Subh Karan."
  );

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "8rem 0 4rem 0" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "5rem", textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              borderRadius: "20px",
              fontSize: "0.78rem",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              backgroundColor: "rgba(99,102,241,0.07)",
              border: "1px solid rgba(99,102,241,0.18)",
              color: "var(--accent-indigo)",
              marginBottom: "1.5rem",
            }}
          >
            What I Deliver
          </div>
          <h1
            className="font-display text-gradient"
            style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem" }}
          >
            Services & Solutions
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.75" }}>
            End-to-end engineering solutions built with modern technology stacks and tailored directly
            to business outcomes. Click any service card to explore the full scope.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
            gap: "2rem",
          }}
          className="services-grid"
        >
          {services.map((svc, idx) => (
            <ServiceCard key={svc.title} svc={svc} idx={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: "5rem",
            padding: "3.5rem",
            textAlign: "center",
            border: "1px solid var(--border-color)",
            borderRadius: "16px",
            background: "rgba(99,102,241,0.04)",
          }}
          className="glass"
        >
          <h2 className="font-display" style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "1rem" }}>
            Need a Custom Solution?
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: "1.75" }}>
            Every project has unique requirements. Submit your scope and I will outline a precise technical
            plan, database architecture, and development timeline tailored to your goals.
          </p>
          <Link to="/contact" className="btn btn-primary clickable" style={{ fontSize: "1rem" }}>
            Start a Project <FaArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
