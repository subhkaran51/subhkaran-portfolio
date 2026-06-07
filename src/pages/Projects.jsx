import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCode, FaLaptopCode, FaMobileAlt, FaRobot } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const categories = [
  { id: "all", label: "All Cases", icon: <FaLaptopCode /> },
  { id: "web", label: "Web Applications", icon: <FaCode /> },
  { id: "mobile", label: "Mobile Apps", icon: <FaMobileAlt /> },
  { id: "ai", label: "AI & Automation", icon: <FaRobot /> },
];

const Projects = () => {
  useDocumentMetadata("Case Studies", "Review commercial software developments, backend system designs, and business impact metrics across several projects.");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects by matching tags or platform descriptions
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "web") {
      return (
        project.platform.toLowerCase().includes("web") ||
        project.techStack.some((t) => ["react", "node js", "aws"].includes(t.toLowerCase()))
      );
    }
    if (activeCategory === "mobile") {
      return (
        project.platform.toLowerCase().includes("mobile") ||
        project.techStack.some((t) => ["react native", "flutter", "swift", "kotlin"].includes(t.toLowerCase()))
      );
    }
    if (activeCategory === "ai") {
      return (
        project.industry.toLowerCase().includes("intelligence") ||
        project.techStack.some((t) => ["ai agents", "automation", "workflows"].includes(t.toLowerCase())) ||
        project.title.toLowerCase() === "cinevist" // has Supabase / AI automation elements, but let's make sure it filters nicely
      );
    }
    return true;
  });

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "8rem 0 4rem 0" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h1 className="font-display text-gradient" style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem" }}>
            Case Studies
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            A deep dive into real-world applications, client problems, backend architecture decisions, and business impact.
          </p>
        </motion.div>

        {/* Filter Navigation Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="clickable"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.7rem 1.5rem",
                borderRadius: "30px",
                fontSize: "0.9rem",
                fontWeight: "600",
                backgroundColor: activeCategory === cat.id ? "var(--text-primary)" : "var(--bg-tertiary)",
                color: activeCategory === cat.id ? "var(--bg-primary)" : "var(--text-secondary)",
                border: "1px solid var(--border-color)",
                transition: "all var(--transition-fast)",
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid List of Projects */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                key={proj.id}
                className="glass clickable"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.9fr",
                  overflow: "hidden",
                  border: "1px solid var(--border-color)",
                }}
                className="project-row glass clickable"
              >
                {/* Visual Image Banner Section */}
                <div
                  style={{
                    position: "relative",
                    minHeight: "350px",
                    backgroundImage: `linear-gradient(to right, rgba(3,3,3,0) 60%, rgba(3,3,3,0.9) 100%), url(${proj.banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="project-banner-box"
                />

                {/* Case Specifications Panel */}
                <div
                  style={{
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1.5rem",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    <span style={{ color: "var(--accent-cyan)", fontWeight: "700" }}>{proj.industry}</span>
                    <span style={{ color: "var(--text-muted)" }}>|</span>
                    <span style={{ color: "var(--text-secondary)" }}>{proj.platform}</span>
                  </div>

                  <h3 className="font-display" style={{ fontSize: "2rem", fontWeight: "800", lineHeight: "1.2" }}>
                    {proj.title}
                  </h3>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                    {proj.overview}
                  </p>

                  {/* Core specifications parameters */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.85rem", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "1rem 0" }}>
                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block" }}>Role</span>
                      <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>{proj.role}</span>
                    </div>
                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block" }}>Metrics Impact</span>
                      <span style={{ fontWeight: "600", color: "var(--accent-emerald)" }}>{proj.businessImpact.split(",")[0]}</span>
                    </div>
                  </div>

                  {/* Action Route Trigger */}
                  <Link
                    to={`/projects/${proj.id}`}
                    className="btn btn-primary"
                    style={{ alignSelf: "flex-start" }}
                  >
                    View Case Study <FaArrowRight className="btn-icon" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Grid layouts overrides */}
      <style>{`
        @media (max-width: 950px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
          .project-banner-box {
            min-height: 250px !important;
            background-image: linear-gradient(to bottom, rgba(3,3,3,0) 60%, rgba(3,3,3,0.9) 100%), url(${filteredProjects[0]?.banner}) !important;
          }
          /* Fix layout dynamic background binding on mobile compile */
          ${filteredProjects.map((p, idx) => `
            .project-row:nth-child(${idx+1}) .project-banner-box {
              background-image: linear-gradient(to bottom, rgba(3,3,3,0) 50%, rgba(3,3,3,0.95) 100%), url(${p.banner}) !important;
            }
          `).join('\n')}
        }
      `}</style>
    </div>
  );
};

export default Projects;
