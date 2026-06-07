import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaBriefcase, FaAward, FaGitlab, FaStackOverflow, FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { SiUpwork, SiWellfound, SiFiverr } from "react-icons/si";
import { profiles } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

// Icon resolver for profile cards
const getProfileIcon = (iconName) => {
  switch (iconName) {
    case "FaLinkedin": return <FaLinkedin />;
    case "FaGithub": return <FaGithub />;
    case "SiUpwork": return <SiUpwork />;
    case "FaBriefcase": return <FaBriefcase />;
    case "SiWellfound": return <SiWellfound />;
    case "FaAward": return <FaAward />;
    case "FaGitlab": return <FaGitlab />;
    case "FaStackOverflow": return <FaStackOverflow />;
    case "SiFiverr": return <SiFiverr />;
    default: return <FaAward />;
  }
};

const Profiles = () => {
  useDocumentMetadata("Talent Channels", "Verified external developer profiles, repositories, and marketplace accounts for Subh Karan.");

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
            Talent Channels
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.75" }}>
            Connect with me on verified professional networks, code repositories, and freelance marketplaces.
            Each profile represents a different dimension of my professional presence.
          </p>
        </motion.div>

        {/* Trust Markers Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass"
          style={{
            padding: "2rem 3rem",
            marginBottom: "3.5rem",
            border: "1px solid rgba(16, 185, 129, 0.15)",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem 3rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            { icon: <FaCheckCircle />, text: "Verified Developer Identity", color: "var(--accent-emerald)" },
            { icon: <FaStar />,         text: "Active on International Platforms",  color: "var(--accent-cyan)" },
            { icon: <FaAward />,        text: "5+ Years Professional History",   color: "var(--accent-indigo)" },
            { icon: <FaArrowRight />,   text: "Open to Remote & Global Projects", color: "var(--accent-violet)" },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.88rem",
                fontWeight: "600",
                color: "var(--text-secondary)",
              }}
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>

        {/* Profile Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                y: -6,
                borderColor: profile.color,
                boxShadow: `0 12px 30px rgba(0,0,0,0.6), 0 0 20px ${profile.color}20`,
              }}
              className="glass clickable"
              style={{
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                border: "1px solid var(--border-color)",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Radial brand-color background highlight on hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  right: "-50px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: profile.color,
                  filter: "blur(50px)",
                  opacity: 0.15,
                  pointerEvents: "none",
                }}
              />

              {/* Header: Icon & Social Handle */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    color: profile.color || "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {getProfileIcon(profile.icon)}
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                    {profile.name}
                  </h3>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {profile.username}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", zIndex: 1 }}>
                {profile.description}
              </p>

              {/* Stats badge */}
              {profile.stats && (
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: profile.color,
                    padding: "0.25rem 0.7rem",
                    borderRadius: "20px",
                    backgroundColor: `${profile.color}12`,
                    border: `1px solid ${profile.color}25`,
                    alignSelf: "flex-start",
                  }}
                >
                  {profile.stats}
                </div>
              )}

              {/* Click Indicator */}
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: profile.color,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginTop: "auto",
                }}
              >
                Visit Profile &rarr;
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
