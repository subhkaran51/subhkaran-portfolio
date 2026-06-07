import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight, FaDownload, FaCalendarAlt, FaQuoteLeft,
  FaRocket, FaTerminal, FaShieldAlt, FaRobot, FaCloud,
  FaDatabase, FaMobileAlt, FaCogs, FaBuilding, FaCodeBranch,
  FaLightbulb, FaChartLine, FaExchangeAlt, FaCheckCircle
} from "react-icons/fa";
import {
  personalInfo, rotatingTexts, statistics, testimonials,
  availabilityOptions, whatIBuild, technologyLeadership
} from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

// Icon resolver for whatIBuild cards
const getBuildIcon = (iconName) => {
  switch (iconName) {
    case "FaRobot": return <FaRobot />;
    case "FaCloud": return <FaCloud />;
    case "FaDatabase": return <FaDatabase />;
    case "FaMobileAlt": return <FaMobileAlt />;
    case "FaCogs": return <FaCogs />;
    case "FaBuilding": return <FaBuilding />;
    default: return <FaRocket />;
  }
};

// Icon resolver for technologyLeadership cards
const getLeadershipIcon = (iconName) => {
  switch (iconName) {
    case "FaCodeBranch": return <FaCodeBranch />;
    case "FaLightbulb": return <FaLightbulb />;
    case "FaChartLine": return <FaChartLine />;
    case "FaCloud": return <FaCloud />;
    case "FaExchangeAlt": return <FaExchangeAlt />;
    case "FaCogs": return <FaCogs />;
    default: return <FaRocket />;
  }
};

// Accent colour cycle for cards
const ACCENTS = [
  "var(--accent-indigo)",
  "var(--accent-cyan)",
  "var(--accent-violet)",
  "var(--accent-emerald)",
  "var(--accent-indigo)",
  "var(--accent-cyan)",
];

const Home = () => {
  useDocumentMetadata(
    "Home",
    "Subh Karan — Senior Full Stack Engineer, AI Solutions Builder, SaaS Architect, CRM Specialist & Mobile App Developer. Available for international projects."
  );

  // Rotating text state
  const [rotatorIndex, setRotatorIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotatorIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem 0 4rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              alignItems: "center",
              gap: "4rem",
            }}
            className="hero-grid"
          >
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* Availability badge */}
              <div
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  color: "var(--accent-emerald)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-emerald)",
                    display: "inline-block",
                    boxShadow: "0 0 10px var(--accent-emerald)",
                  }}
                />
                {personalInfo.availability}
              </div>

              {/* Headline */}
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="text-gradient">I AM </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {personalInfo.name.toUpperCase()}
                </span>
              </h1>

              {/* Rotating Specialty */}
              <div
                style={{
                  height: "45px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "var(--accent-cyan)",
                }}
              >
                <motion.div
                  key={rotatorIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ position: "absolute" }}
                >
                  {rotatingTexts[rotatorIndex]}
                </motion.div>
              </div>

              {/* 5 Specialization Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {[
                  "Full Stack Engineer",
                  "AI Solutions Builder",
                  "SaaS Architect",
                  "CRM Specialist",
                  "Mobile App Developer",
                ].map((spec, i) => (
                  <span
                    key={spec}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.35rem 0.9rem",
                      borderRadius: "20px",
                      fontSize: "0.78rem",
                      fontWeight: "600",
                      backgroundColor: "rgba(99,102,241,0.07)",
                      border: "1px solid rgba(99,102,241,0.18)",
                      color: ACCENTS[i] || "var(--accent-indigo)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <FaCheckCircle style={{ fontSize: "0.65rem" }} />
                    {spec}
                  </span>
                ))}
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: "580px",
                  lineHeight: "1.75",
                }}
              >
                {personalInfo.tagline}
              </p>

              {/* CTA Row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.2rem",
                  marginTop: "0.5rem",
                }}
              >
                <Link to="/contact" className="btn btn-primary clickable">
                  Start a Project <FaArrowRight className="btn-icon" />
                </Link>
                <Link to="/projects" className="btn btn-secondary clickable">
                  View Case Studies
                </Link>
                {/* <a
                  href="/Subh_Karan_Developer_Resume.pdf"
                  download
                  className="btn btn-secondary clickable"
                  style={{ display: "inline-flex", gap: "0.5rem" }}
                >
                  <FaDownload /> Resume
                </a> */}
                <Link
                  to="/contact"
                  className="btn btn-secondary clickable"
                  style={{ borderColor: "var(--accent-indigo)", color: "var(--accent-indigo)" }}
                >
                  <FaCalendarAlt /> Book Consultation
                </Link>
              </div>
            </motion.div>

            {/* Right: Terminal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
              className="hero-visual"
            >
              <div
                className="glass"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(99,102,241,0.15)",
                }}
              >
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#eab308" }} />
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--accent-indigo)" }}>
                    <FaTerminal />
                    <span className="font-display" style={{ fontWeight: "600", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                      DEVELOPER CONSOLE
                    </span>
                  </div>
                  <pre
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.78rem",
                      color: "var(--text-secondary)",
                      lineHeight: "1.7",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {`$ whoami
Name: Subh Karan
Stack: Full Stack + AI + Mobile
Specialization: [
  "SaaS Architecture",
  "AI Agent Systems",
  "CRM Development",
  "Mobile Applications"
]
Status: Remote · Available`}
                  </pre>
                </div>
                <div style={{ height: "1px", width: "100%", backgroundColor: "var(--border-color)" }} />
                {[
                  { label: "Backend", value: "Node.js · .NET Core", color: "var(--accent-indigo)" },
                  { label: "AI Stack", value: "LangChain · pgvector · RAG", color: "var(--accent-cyan)" },
                  { label: "Cloud", value: "AWS · Supabase · Docker", color: "var(--accent-emerald)" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>{row.label}</span>
                    <span style={{ color: row.color, fontWeight: "600" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. PREMIUM AVAILABILITY BANNER ─────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
          padding: "1.8rem 0",
          background: "rgba(6, 182, 212, 0.02)",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem 3rem",
            }}
          >
            {[
              { label: "Freelance Projects", color: "var(--accent-emerald)" },
              { label: "Long-Term Contracts", color: "var(--accent-indigo)" },
              { label: "Technical Consulting", color: "var(--accent-cyan)" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    boxShadow: `0 0 8px ${item.color}`,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span style={{ color: "var(--text-primary)" }}>Available for</span>
                <span style={{ color: item.color }}>{item.label}</span>
              </div>
            ))}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 1rem",
                borderRadius: "20px",
                border: "1px solid rgba(99,102,241,0.25)",
                backgroundColor: "rgba(99,102,241,0.06)",
                fontSize: "0.82rem",
                fontWeight: "600",
                color: "var(--accent-indigo)",
              }}
            >
              Remote · International · Any Timezone
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS SECTION ──────────────────────────────────────────────*/}
      <section
        style={{
          borderBottom: "1px solid var(--border-color)",
          backgroundColor: "rgba(10, 10, 10, 0.5)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2.5rem",
              textAlign: "center",
            }}
          >
            {statistics.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #ffffff, #6366f1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: "1.1",
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: "500" }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT I BUILD ──────────────────────────────────────────────── */}
      <section className="section" style={{ borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
              Engineering Domains
            </div>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}
            >
              What I Build
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
              From AI-powered systems and SaaS platforms to mobile apps and enterprise tooling — complete
              end-to-end engineering across the full product stack.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {whatIBuild.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -5, borderColor: ACCENTS[i] }}
                className="glass-interactive"
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.4rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "-15px",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: ACCENTS[i],
                    filter: "blur(40px)",
                    opacity: 0.18,
                    pointerEvents: "none",
                  }}
                />
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: ACCENTS[i],
                    backgroundColor: `${ACCENTS[i]}12`,
                    border: `1px solid ${ACCENTS[i]}25`,
                  }}
                >
                  {getBuildIcon(item.icon)}
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.7rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.7" }}>
                    {item.description}
                  </p>
                </div>
                {/* Tech tag */}
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: "600",
                    color: ACCENTS[i],
                    padding: "0.4rem 0.8rem",
                    borderRadius: "6px",
                    backgroundColor: `${ACCENTS[i]}10`,
                    border: `1px solid ${ACCENTS[i]}20`,
                    alignSelf: "flex-start",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.techHighlight}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link to="/services" className="btn btn-secondary clickable">
              View All Services <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. TECHNOLOGY LEADERSHIP ────────────────────────────────────── */}
      <section className="section" style={{ borderBottom: "1px solid var(--border-color)", backgroundColor: "rgba(5,5,5,0.4)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
                backgroundColor: "rgba(6,182,212,0.07)",
                border: "1px solid rgba(6,182,212,0.18)",
                color: "var(--accent-cyan)",
                marginBottom: "1.5rem",
              }}
            >
              Technical Depth
            </div>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}
            >
              Technology Leadership
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
              Senior engineering decisions that go beyond implementation — spanning system design,
              product strategy, and infrastructure ownership.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "2rem",
            }}
          >
            {technologyLeadership.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass"
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    color: ACCENTS[i],
                    fontSize: "1.3rem",
                  }}
                >
                  {getLeadershipIcon(item.icon)}
                  <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                </div>
                <div style={{ width: "32px", height: "2px", background: `linear-gradient(90deg, ${ACCENTS[i]}, transparent)` }} />
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.75" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BUSINESS PHILOSOPHY ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}
            >
              Enterprise Quality. Startup Speed.
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              I combine strict architectural discipline with deep product thinking to build software
              that drives real company growth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              {
                icon: <FaRocket />,
                color: "var(--accent-indigo)",
                title: "Product Development Mindset",
                desc: "I don't implement specifications blindly. I understand your users, your business goals, and help structure MVP iterations that generate value from day one — with a technical foundation built to last.",
              },
              {
                icon: <FaTerminal />,
                color: "var(--accent-cyan)",
                title: "Clean Architectural Infrastructure",
                desc: "Solid engineering standards throughout. I use modular code layout patterns, consistent typed interfaces where appropriate, automated test setups, and clean database structures that hold under scaling pressure.",
              },
              {
                icon: <FaShieldAlt />,
                color: "var(--accent-emerald)",
                title: "Security & Optimization First",
                desc: "From database sharding and serverless scaling to strict API rate-limiting and distributed cache policies — I ensure your software performs reliably while keeping operational costs controlled.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                className="glass"
                style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}25`,
                    color: card.color,
                    fontSize: "1.5rem",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: "700" }}>
                  {card.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.65" }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. AVAILABILITY HUB ─────────────────────────────────────────── */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", backgroundColor: "rgba(5,5,5,0.5)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: "600",
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                color: "var(--accent-emerald)",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-emerald)",
                  display: "inline-block",
                  boxShadow: "0 0 8px var(--accent-emerald)",
                }}
              />
              Live Availability Status
            </div>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}
            >
              Work With Me
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto" }}>
              Currently accepting international client contracts across these engagement models.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.8rem" }}>
            {availabilityOptions.map((opt, i) => (
              <motion.div
                key={opt.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass"
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: opt.badgeColor,
                    filter: "blur(40px)",
                    opacity: 0.2,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                    {opt.type}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: "700",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      backgroundColor: `${opt.badgeColor}15`,
                      border: `1px solid ${opt.badgeColor}40`,
                      color: opt.badgeColor,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {opt.status}
                  </span>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.7" }}>
                  {opt.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ──────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          borderTop: "1px solid var(--border-color)",
          backgroundColor: "rgba(5, 5, 5, 0.6)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              className="font-display text-gradient"
              style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}
            >
              Client Testimonials
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              Feedback from international founders and product owners I have worked with.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              width: "100%",
            }}
          >
              {testimonials.map((t, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="glass"
                    style={{
                      padding: "3rem 2.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                      position: "relative",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <FaQuoteLeft
                      style={{
                        fontSize: "2.5rem",
                        color: "rgba(99, 102, 241, 0.15)",
                        position: "absolute",
                        top: "2rem",
                        left: "2rem",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.75",
                        color: "var(--text-primary)",
                        fontStyle: "italic",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      "{t.quote}"
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                      <span className="font-display" style={{ fontWeight: "700", fontSize: "1rem", color: "var(--accent-cyan)" }}>
                        {t.author}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        {t.company}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {styleAdjusters}
    </div>
  );
};

// Responsive overrides
const styleAdjusters = (
  <style>{`
    @media (max-width: 900px) {
      .hero-grid {
        grid-template-columns: 1fr !important;
        text-align: center;
        gap: 3rem !important;
      }
      .hero-grid > div:first-child {
        align-items: center !important;
      }
      .hero-visual {
        order: -1;
      }
    }
  `}</style>
);

export default Home;
