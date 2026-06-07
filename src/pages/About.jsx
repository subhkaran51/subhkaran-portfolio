import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookmark, FaCodeBranch, FaCogs, FaBrain, FaBuilding,
  FaCar, FaFilm, FaShoppingBag, FaHome, FaCompass,
  FaCheck, FaFolder, FaDatabase, FaBullseye, FaCode,
  FaLightbulb, FaChartLine, FaRocket, FaGlobeAmericas
} from "react-icons/fa";
import { personalInfo, industriesServed, whyClientsHireMe, personalBrand } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

// Icon mapping for industries
const getIndustryIcon = (iconName) => {
  switch (iconName) {
    case "FaBrain":      return <FaBrain />;
    case "FaCloud":      return <FaCogs />;
    case "FaDatabase":   return <FaCodeBranch />;
    case "FaCogs":       return <FaCogs />;
    case "FaHome":       return <FaHome />;
    case "FaCar":        return <FaCar />;
    case "FaCompass":    return <FaCompass />;
    case "FaShoppingBag": return <FaShoppingBag />;
    case "FaFilm":       return <FaFilm />;
    case "FaBuilding":   return <FaBuilding />;
    default:             return <FaBookmark />;
  }
};

// 11-part story chapter definitions
const storyChapters = [
  { id: "whoAmI",                 label: "Who I Am",       title: "Executive Summary" },
  { id: "journey",                label: "Origins",         title: "My Programming Journey" },
  { id: "evolution",              label: "Full-Stack",      title: "Client to Server Integration" },
  { id: "saasMasters",            label: "SaaS",            title: "SaaS Platforms & Multi-Tenancy" },
  { id: "crmMastery",             label: "CRM",             title: "CRM Systems & Relational Data" },
  { id: "aiAutomation",           label: "AI & Automation", title: "Large Language Models & Workflows" },
  { id: "architecturePhilosophy", label: "Architecture",    title: "System Decoupling & Microservices" },
  { id: "UXFocus",                label: "User Experience", title: "Frictionless Product Interfaces" },
  { id: "performanceOptimization",label: "Performance",     title: "Query Tuning & Web Vitals" },
  { id: "cloudInfrastructure",    label: "Cloud Native",    title: "AWS Compute & Security Boundaries" },
  { id: "futureVision",           label: "AI Future",       title: "Future Vision: Autonomous Agents" },
];

// Personal brand pillar definitions
const brandPillars = [
  {
    id: "mission",
    label: "My Mission",
    icon: <FaBullseye />,
    color: "var(--accent-indigo)",
    title: "What Drives My Work",
  },
  {
    id: "developmentPhilosophy",
    label: "Development Philosophy",
    icon: <FaCode />,
    color: "var(--accent-cyan)",
    title: "How I Approach Engineering",
  },
  {
    id: "productThinking",
    label: "Product Thinking",
    icon: <FaLightbulb />,
    color: "var(--accent-violet)",
    title: "Engineering Meets Business Strategy",
  },
  {
    id: "engineeringPrinciples",
    label: "Engineering Principles",
    icon: <FaChartLine />,
    color: "var(--accent-emerald)",
    title: "The Four Principles I Never Compromise",
  },
  {
    id: "longTermVision",
    label: "Long-Term Vision",
    icon: <FaGlobeAmericas />,
    color: "var(--accent-indigo)",
    title: "Where I Am Heading",
  },
];

const About = () => {
  useDocumentMetadata(
    "About Journey",
    "Explore the personal brand, engineering philosophy, career history, and technical thinking of Subh Karan — Senior Full Stack Engineer & AI Solutions Builder."
  );

  const [activeBrandPillar, setActiveBrandPillar] = useState("mission");
  const [activeStoryChapter, setActiveStoryChapter] = useState("whoAmI");

  const currentBrandPillar = brandPillars.find((p) => p.id === activeBrandPillar);

  return (
    <div style={{ position: "relative", zIndex: 1, padding: "8rem 0 4rem 0" }}>
      <div className="container">

        {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
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
            The Engineer Behind the Work
          </div>
          <h1
            className="font-display text-gradient"
            style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem" }}
          >
            About Subh Karan
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto", lineHeight: "1.75" }}>
            A Senior Full Stack Engineer, AI Solutions Builder, SaaS Architect, CRM Specialist, and
            Mobile App Developer — focused on building products that convert complexity into commercial value.
          </p>
        </motion.div>

        {/* ── SECTION 1: PERSONAL BRAND ──────────────────────────────── */}
        <div style={{ marginBottom: "7rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.3rem", fontWeight: "800", marginBottom: "0.8rem" }}
            >
              Personal Brand
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              The philosophy, principles, and long-term vision that define how I approach engineering and client work.
            </p>
          </div>

          {/* Brand Pillar Grid + Reader */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "3rem",
              alignItems: "stretch",
            }}
            className="brand-grid"
          >
            {/* Pillar Selectors */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {brandPillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveBrandPillar(pillar.id)}
                  className="clickable"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    textAlign: "left",
                    padding: "1.1rem 1.3rem",
                    borderRadius: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    backgroundColor: activeBrandPillar === pillar.id
                      ? `${pillar.color}12`
                      : "transparent",
                    color: activeBrandPillar === pillar.id
                      ? pillar.color
                      : "var(--text-secondary)",
                    border: `1px solid ${activeBrandPillar === pillar.id ? pillar.color + "35" : "transparent"}`,
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{pillar.icon}</span>
                  {pillar.label}
                </button>
              ))}
            </div>

            {/* Active Pillar Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrandPillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass"
                style={{
                  padding: "3rem 3.5rem",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ fontSize: "1.4rem", color: currentBrandPillar?.color }}>
                    {currentBrandPillar?.icon}
                  </span>
                  <span
                    className="font-display"
                    style={{
                      fontWeight: "700",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: currentBrandPillar?.color,
                    }}
                  >
                    {currentBrandPillar?.label}
                  </span>
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-primary)", lineHeight: "1.2" }}
                >
                  {currentBrandPillar?.title}
                </h3>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: `linear-gradient(90deg, ${currentBrandPillar?.color}, transparent)`,
                  }}
                />
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.85" }}>
                  {personalBrand[activeBrandPillar]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── SECTION 2: 11-PART STORY READER ────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.35fr 0.65fr",
            gap: "3.5rem",
            marginBottom: "7rem",
            alignItems: "stretch",
          }}
          className="story-container about-grid"
        >
          {/* Chapter Selector */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              borderRight: "1px solid var(--border-color)",
              paddingRight: "1.5rem",
            }}
            className="story-selector"
          >
            <h4
              className="font-display"
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              Story Chapters
            </h4>
            {storyChapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setActiveStoryChapter(ch.id)}
                className="clickable"
                style={{
                  textAlign: "left",
                  padding: "0.7rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.88rem",
                  fontWeight: "600",
                  backgroundColor: activeStoryChapter === ch.id
                    ? "rgba(99, 102, 241, 0.08)"
                    : "transparent",
                  color: activeStoryChapter === ch.id
                    ? "var(--accent-cyan)"
                    : "var(--text-secondary)",
                  borderLeft: activeStoryChapter === ch.id
                    ? "2px solid var(--accent-cyan)"
                    : "2px solid transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {ch.label}
              </button>
            ))}
          </div>

          {/* Chapter Content */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStoryChapter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass"
                style={{
                  padding: "3.5rem",
                  minHeight: "350px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--accent-indigo)" }}>
                  <FaFolder />
                  <span
                    className="font-display"
                    style={{ fontWeight: "700", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    CHAPTER RECORD
                  </span>
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.9rem", fontWeight: "800", color: "var(--text-primary)" }}
                >
                  {storyChapters.find((c) => c.id === activeStoryChapter)?.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.85" }}>
                  {personalInfo.aboutText[activeStoryChapter]}
                </p>
                {activeStoryChapter === "whoAmI" && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1.5rem",
                      marginTop: "0.5rem",
                      borderTop: "1px solid var(--border-color)",
                      paddingTop: "1.5rem",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "block" }}>Location</span>
                      <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>Chamba, H.P., India · Remote Setup</span>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "block" }}>Primary Stack</span>
                      <span style={{ fontWeight: "600", fontSize: "0.95rem", color: "var(--accent-cyan)" }}>
                        React · Node.js · AWS · AI
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── SECTION 3: WHY CLIENTS HIRE ME ────────────────────────── */}
        <div style={{ marginBottom: "7rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.3rem", fontWeight: "800", marginBottom: "1rem" }}
            >
              Why Clients Hire Me
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto" }}>
              A technical partner committed to clean architectures, business goals, and long-term product viability.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {whyClientsHireMe.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4, borderColor: "var(--accent-cyan)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="glass-interactive"
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                      border: "1px solid rgba(6, 182, 212, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)",
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    <FaCheck />
                  </div>
                  <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.65" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: INDUSTRIES SERVED ──────────────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.3rem", fontWeight: "800", marginBottom: "1rem" }}
            >
              Industries Served
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              Proven systems engineering across diverse global business verticals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {industriesServed.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, borderColor: "var(--accent-indigo)" }}
                className="glass-interactive"
                style={{
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--accent-cyan)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {getIndustryIcon(ind.icon)}
                </div>
                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: "700" }}>
                  {ind.name}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.7" }}>
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .brand-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .story-container {
            grid-template-columns: 1fr !important;
          }
          .story-selector {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border-color) !important;
            padding-right: 0 !important;
            padding-bottom: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          .story-selector button {
            padding: 0.5rem 0.9rem !important;
            font-size: 0.8rem !important;
            border-left: none !important;
            border-bottom: 2px solid transparent !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
