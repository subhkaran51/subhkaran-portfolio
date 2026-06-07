import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaServer, FaMobileAlt, FaRobot, FaCloud, FaTools } from "react-icons/fa";
import { techStack } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const categories = [
  { id: "all", label: "All Skills", icon: null },
  { id: "frontend", label: "Frontend", icon: <FaLaptopCode /> },
  { id: "backend", label: "Backend", icon: <FaServer /> },
  { id: "mobile", label: "Mobile Development", icon: <FaMobileAlt /> },
  { id: "aiAndAutomation", label: "AI & Automation", icon: <FaRobot /> },
  { id: "cloudAndDb", label: "Cloud & Databases", icon: <FaCloud /> },
  { id: "devopsAndTools", label: "DevOps & Tools", icon: <FaTools /> },
];

const TechStack = () => {
  useDocumentMetadata("Technical Inventory", "Explore the language and database competencies of Subh Karan, covering React, Node.js, AWS, and AI agents.");
  const [activeTab, setActiveTab] = useState("all");

  // Get items matching active tab
  const getFilteredTech = () => {
    if (activeTab === "all") {
      // Flatten all categories into a single array
      return Object.values(techStack).flat();
    }
    return techStack[activeTab] || [];
  };

  const filteredTech = getFilteredTech();

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
            Technical Inventory
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Languages, frameworks, databases, and deployment platforms I leverage to construct digital solutions.
          </p>
        </motion.div>

        {/* Tab Controls Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.8rem",
            marginBottom: "4.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="clickable"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1.4rem",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: "600",
                backgroundColor: activeTab === cat.id ? "var(--accent-indigo)" : "var(--bg-tertiary)",
                color: activeTab === cat.id ? "#ffffff" : "var(--text-secondary)",
                border: "1px solid var(--border-color)",
                boxShadow: activeTab === cat.id ? "0 0 15px rgba(99, 102, 241, 0.3)" : "none",
                transition: "all var(--transition-fast)",
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.8rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={tech.name}
                className="glass-interactive"
                style={{
                  padding: "2rem",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                {/* Tech Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: "700" }}>
                    {tech.name}
                  </h3>
                  <span style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--accent-cyan)" }}>
                    {tech.level}
                  </span>
                </div>

                {/* Tech Description */}
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: "1.6", minHeight: "45px" }}>
                  {tech.desc}
                </p>

                {/* Progress bar container */}
                <div style={{ width: "100%", height: "4px", backgroundColor: "var(--bg-tertiary)", borderRadius: "2px", overflow: "hidden" }}>
                  <div
                    style={{
                      width: tech.level,
                      height: "100%",
                      background: "linear-gradient(90deg, var(--accent-indigo), var(--accent-cyan))",
                      boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
