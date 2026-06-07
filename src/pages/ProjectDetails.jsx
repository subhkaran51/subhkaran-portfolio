import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaGooglePlay, FaExternalLinkAlt, FaChevronLeft, FaArrowLeft, FaQuestionCircle, FaBullseye, FaLockOpen, FaCog, FaChartLine, FaCheckCircle, FaLaptop, FaServer, FaDatabase, FaMobileAlt, FaKey, FaCloud, FaLightbulb, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

// Resolve icon for responsibilities breakdown
const getRespIcon = (key) => {
  switch (key) {
    case "frontend": return <FaLaptop />;
    case "backend": return <FaServer />;
    case "mobile": return <FaMobileAlt />;
    case "database": return <FaDatabase />;
    case "apis": return <FaExchangeAlt />;
    case "auth": return <FaKey />;
    case "cloud": return <FaCloud />;
    default: return <FaCog />;
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useDocumentMetadata(
    project ? `${project.title} Case Study` : "Case Study Not Found",
    project ? project.overview : "Detailed developer project case study."
  );

  if (!project) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
        <h2 className="font-display" style={{ fontSize: "2rem" }}>Case Study Not Found</h2>
        <p style={{ color: "var(--text-secondary)" }}>The requested project details could not be resolved.</p>
        <Link to="/projects" className="btn btn-primary">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* 1. HERO HEADER BANNER */}
      <section
        style={{
          height: "60vh",
          minHeight: "450px",
          position: "relative",
          backgroundImage: `linear-gradient(to bottom, rgba(3,3,3,0.3) 0%, rgba(3,3,3,0.95) 100%), url(${project.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "3.5rem",
        }}
      >
        <div className="container" style={{ width: "100%" }}>
          <Link
            to="/projects"
            className="clickable"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9rem",
              color: "var(--accent-cyan)",
              marginBottom: "1.5rem",
              fontWeight: "600",
            }}
          >
            <FaChevronLeft /> Back to Projects
          </Link>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.8rem" }}>
            <span>{project.industry}</span>
            <span>•</span>
            <span>{project.platform}</span>
          </div>

          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", lineHeight: "1.1", color: "var(--text-primary)" }}>
            {project.title}
          </h1>
          <p className="font-display" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* 2. CASE STUDY CONTENT BODY */}
      <section className="section" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.30fr 0.70fr",
              gap: "4rem",
            }}
            className="details-grid"
          >
            {/* Left Column: Full-Scale Agency Narrative */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
              {/* Project Overview */}
              <div>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.2rem" }}>
                  Project Overview
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {project.overview}
                </p>
              </div>

              {/* Business Challenge vs Goal */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="sub-grid-block">
                <div className="glass" style={{ padding: "2rem", borderLeft: "4px solid #ef4444" }}>
                  <h3 className="font-display" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "1.1rem", fontWeight: "700", color: "#ef4444", marginBottom: "0.8rem" }}>
                    <FaQuestionCircle /> Business Challenge
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {project.clientProblem}
                  </p>
                </div>

                <div className="glass" style={{ padding: "2rem", borderLeft: "4px solid var(--accent-cyan)" }}>
                  <h3 className="font-display" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "1.1rem", fontWeight: "700", color: "var(--accent-cyan)", marginBottom: "0.8rem" }}>
                    <FaBullseye /> Business Goal
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {project.businessGoal}
                  </p>
                </div>
              </div>

              {/* My Responsibilities Breakdown */}
              {project.responsibilitiesDetail && (
                <div>
                  <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.5rem" }}>
                    My Engineering Responsibilities
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="sub-grid-block">
                    {Object.entries(project.responsibilitiesDetail).map(([key, desc]) => (
                      <div
                        key={key}
                        className="glass"
                        style={{
                          padding: "1.8rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.8rem",
                          border: "1px solid var(--border-color)"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--accent-indigo)" }}>
                          <span style={{ fontSize: "1.1rem", display: "flex" }}>
                            {getRespIcon(key)}
                          </span>
                          <span className="font-display" style={{ fontSize: "0.95rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            {key}
                          </span>
                        </div>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Solution Implementation */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: "700" }}>
                  Engineering Implementation
                </h2>
                <div className="glass" style={{ padding: "2.5rem", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div>
                    <h4 className="font-display" style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
                      Technical Bottleneck
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                      {project.challenges}
                    </p>
                  </div>
                  <div style={{ height: "1px", backgroundColor: "var(--border-color)", width: "100%" }} />
                  <div>
                    <h4 className="font-display" style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--accent-cyan)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--accent-cyan)" }} />
                      Architected Solution
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Architecture & System Design */}
              <div>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.2rem" }}>
                  Technical Architecture & Data Flows
                </h2>
                <div
                  className="glass"
                  style={{
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.7" }}>
                    {project.architecture}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--accent-indigo)", fontWeight: "600" }}>
                    <FaCog /> Decoupled data models with static route configurations and CDNs.
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.2rem" }}>
                  Key Features & Capabilities
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.2rem",
                  }}
                >
                  {project.features.map((feat, index) => (
                    <div
                      key={index}
                      className="glass"
                      style={{
                        padding: "1.5rem",
                        borderLeft: "2px solid var(--accent-indigo)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.8rem",
                      }}
                    >
                      <FaCheckCircle style={{ color: "var(--accent-indigo)", marginTop: "0.2rem", flexShrink: 0 }} />
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Learned & Scalability */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="sub-grid-block">
                <div className="glass" style={{ padding: "2rem", borderLeft: "2px solid var(--accent-cyan)" }}>
                  <h3 className="font-display" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "1.15rem", fontWeight: "700", color: "var(--accent-cyan)", marginBottom: "0.8rem" }}>
                    <FaLightbulb /> Lessons Learned
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {project.lessonsLearned}
                  </p>
                </div>
                <div className="glass" style={{ padding: "2rem", borderLeft: "2px solid var(--accent-indigo)" }}>
                  <h3 className="font-display" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "1.15rem", fontWeight: "700", color: "var(--accent-indigo)", marginBottom: "0.8rem" }}>
                    <FaCloud /> Future Scalability
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {project.scalability}
                  </p>
                </div>
              </div>

              {/* Project Gallery Placeholder */}
              <div>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.2rem" }}>
                  Project Gallery
                </h2>
                <div
                  className="glass"
                  style={{
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1.5px dashed var(--border-color)",
                    color: "var(--text-secondary)",
                    borderRadius: "12px",
                    flexDirection: "column",
                    gap: "0.5rem"
                  }}
                >
                  <FaLaptop style={{ fontSize: "2rem", color: "var(--text-muted)" }} />
                  <span style={{ fontSize: "0.9rem" }}>Project Interface Screenshots Placeholder</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Images will be updated upon assets upload</span>
                </div>
              </div>
            </div>

            {/* Right Column: Spec Metrics Sidebar Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div
                className="glass"
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid var(--border-color)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.8rem" }}>
                  Case Specifications
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {/* Role */}
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Role Involved</span>
                    <span style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "0.95rem" }}>{project.metrics.role}</span>
                  </div>

                  {/* Industry */}
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Industry</span>
                    <span style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "0.95rem" }}>{project.metrics.industry}</span>
                  </div>

                  {/* Platform */}
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Platform Type</span>
                    <span style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "0.95rem" }}>{project.metrics.platform}</span>
                  </div>

                  {/* Complexity */}
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Architecture Complexity</span>
                    <span style={{ fontWeight: "600", color: "var(--accent-indigo)", fontSize: "0.95rem" }}>{project.metrics.complexity}</span>
                  </div>

                  {/* Tech stack tags */}
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block", marginBottom: "0.5rem" }}>Tech Stack</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: "500",
                            color: "var(--text-primary)",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "4px",
                            backgroundColor: "var(--bg-tertiary)",
                            border: "1px solid var(--border-color)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact Metric */}
                  <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.2rem" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Commercial Business Value</span>
                    <span style={{ fontWeight: "700", color: "var(--accent-emerald)", fontSize: "1.05rem", display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.3rem" }}>
                      <FaChartLine /> {project.metrics.value}
                    </span>
                  </div>

                  {/* Action links */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginTop: "1rem" }}>
                    {project.links.website && project.links.website !== "#" && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary clickable"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        <FaExternalLinkAlt /> Visit Website
                      </a>
                    )}
                    {project.links.playStore && project.links.playStore !== "#" && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary clickable"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        <FaGooglePlay /> Google Play Store
                      </a>
                    )}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary clickable"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      <FaGithub /> View Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid media queries for details page responsive compiling */}
      <style>{`
        @media (max-width: 950px) {
          .details-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .sub-grid-block {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
