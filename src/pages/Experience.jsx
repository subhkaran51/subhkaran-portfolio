import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaCode, FaLightbulb, FaChartLine, FaUsers, FaCogs, FaCheckCircle } from "react-icons/fa";
import { experienceTimeline } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const detailTabs = [
  { id: "technicalContributions", label: "Tech Work", icon: <FaCode /> },
  { id: "architectureDecisions", label: "Architecture", icon: <FaCogs /> },
  { id: "problemSolving", label: "Problem Solving", icon: <FaLightbulb /> },
  { id: "businessValue", label: "Business Impact", icon: <FaChartLine /> },
  { id: "teamCollaboration", label: "Collaboration", icon: <FaUsers /> },
];

const Experience = () => {
  useDocumentMetadata("Professional Timeline", "Chronological history of senior engineering contributions, key achievements, and modern technologies utilized by Subh Karan.");
  const [activeDetailTab, setActiveDetailTab] = useState({});

  const getDetailTab = (index) => activeDetailTab[index] || "technicalContributions";
  const setDetailTab = (index, tabId) => {
    setActiveDetailTab((prev) => ({ ...prev, [index]: tabId }));
  };

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
          <h1 className="font-display text-gradient" style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem" }}>
            Professional Timeline
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            A chronological timeline of my senior engineering roles, architectural designs, and core business contributions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "2rem 0",
          }}
        >
          {/* Vertical Center Track Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, var(--accent-indigo) 0%, var(--accent-cyan) 50%, var(--bg-tertiary) 100%)",
              transform: "translateX(-50%)",
            }}
            className="timeline-line"
          />

          {experienceTimeline.map((exp, index) => {
            const isEven = index % 2 === 0;
            const currentTab = getDetailTab(index);

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: isEven ? "flex-start" : "flex-end",
                  alignItems: "flex-start",
                  width: "100%",
                  marginBottom: "5rem",
                  position: "relative",
                }}
                className="timeline-item"
              >
                {/* Timeline node marker circle */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "2rem",
                    transform: "translateX(-50%)",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-primary)",
                    border: "3px solid var(--accent-cyan)",
                    boxShadow: "0 0 10px var(--accent-cyan)",
                    zIndex: 2,
                  }}
                  className="timeline-marker"
                />

                {/* Content Panel Box */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="glass"
                  style={{
                    width: "45%",
                    padding: "2.5rem",
                    border: "1px solid var(--border-color)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {/* Period tag */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.85rem",
                      color: "var(--accent-indigo)",
                      fontWeight: "600",
                    }}
                  >
                    <FaCalendarAlt /> {exp.period}
                  </div>

                  {/* Title and Company */}
                  <div>
                    <h3
                      className="font-display"
                      style={{ fontSize: "1.35rem", fontWeight: "700", marginBottom: "0.4rem" }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontWeight: "500", color: "var(--text-primary)" }}>
                        <FaBriefcase /> {exp.company}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul
                    style={{
                      listStyleType: "none",
                      paddingLeft: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.8rem",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                    }}
                  >
                    {exp.responsibilities.map((bullet, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <FaCheckCircle style={{ color: "var(--accent-cyan)", marginTop: "0.2rem", flexShrink: 0, fontSize: "0.75rem" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tabbed Detail Section */}
                  <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                    {/* Tab nav pills */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        marginBottom: "1.2rem",
                      }}
                    >
                      {detailTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setDetailTab(index, tab.id)}
                          className="clickable"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            padding: "0.3rem 0.75rem",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            backgroundColor: currentTab === tab.id ? "var(--accent-indigo)" : "var(--bg-tertiary)",
                            color: currentTab === tab.id ? "#fff" : "var(--text-secondary)",
                            border: "1px solid var(--border-color)",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {tab.icon} {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Active tab content */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: "1.7",
                          padding: "1rem",
                          backgroundColor: "rgba(99, 102, 241, 0.04)",
                          borderRadius: "6px",
                          borderLeft: "2px solid var(--accent-indigo)",
                        }}
                      >
                        {exp[currentTab]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Technologies tags row */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: "500",
                          color: "var(--text-primary)",
                          padding: "0.25rem 0.7rem",
                          borderRadius: "4px",
                          backgroundColor: "var(--bg-tertiary)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Media styling overrides to force a straight timeline stack on mobile screens */}
      <style>{`
        @media (max-width: 900px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 50px !important;
            margin-bottom: 3rem !important;
          }
          .timeline-marker {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-item > div:nth-child(2) {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
