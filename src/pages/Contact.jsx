import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaExclamationTriangle, FaShieldAlt, FaClock, FaHandshake, FaFileContract } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolioData";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

// EmailJS Keys Configuration (Placeholders to be configured by the user)
const EMAILJS_SERVICE_ID = "service_portfolio";
const EMAILJS_TEMPLATE_ID = "template_portfolio";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your real public key

const Contact = () => {
  useDocumentMetadata("Start a Project", "Submit your project parameters, budget constraints, and details to schedule a software architecture consultation with Subh Karan.");
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$5,000 - $10,000",
    timeline: "1 - 3 Months",
    projectType: "SaaS Platform",
    description: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: "" });

    // Validate email layout briefly
    if (!formData.name || !formData.email || !formData.description) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill out all required fields (*).",
      });
      return;
    }

    // Double check if keys are configured
    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      // Graceful fallback mode for development/testing
      console.log("=== Contact Form Submission ===");
      console.log("Form Data:", formData);
      console.log("===============================");

      setTimeout(() => {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Form submitted successfully! (Development Mode: logged details to console. Configure EmailJS keys for API deployment).",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "$5,000 - $10,000",
          timeline: "1 - 3 Months",
          projectType: "SaaS Platform",
          description: "",
        });
      }, 1500);
      return;
    }

    // Call EmailJS API
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus({
            submitting: false,
            success: true,
            error: false,
            message: "Thank you for reaching out! I will review your project parameters and respond within 24 hours.",
          });
          setFormData({
            name: "",
            email: "",
            company: "",
            budget: "$5,000 - $10,000",
            timeline: "1 - 3 Months",
            projectType: "SaaS Platform",
            description: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus({
            submitting: false,
            success: false,
            error: true,
            message: "There was an error transmission. Please email me directly at subhkaran370@gmail.com.",
          });
        }
      );
  };

  // Quick WhatsApp trigger helper
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Subh, I would like to schedule a development consultation for my project.");
    window.open(`https://wa.me/918988347987?text=${message}`, "_blank");
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
            Start a Project
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Submit your product parameters or schedule a consultation call to map out your software architecture.
          </p>
        </motion.div>

        {/* Outer Split Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "4rem",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Left Panel: Business Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Status indicator card */}
            <div
              className="glass"
              style={{
                padding: "2rem",
                border: "1px solid rgba(16, 185, 129, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--accent-emerald)" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--accent-emerald)", display: "inline-block", boxShadow: "0 0 10px var(--accent-emerald)" }} />
                <span className="font-display" style={{ fontWeight: "700", fontSize: "0.85rem", letterSpacing: "0.1em" }}>ACTIVE PIPELINE</span>
              </div>
              <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: "700" }}>Currently Accepting Work</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Available for senior engineering contracts, SaaS product builds, and AI automation setups.
                Typically responding within 24 hours.
              </p>
            </div>

            {/* Consultation Guarantees */}
            <div
              className="glass"
              style={{
                padding: "2rem",
                border: "1px solid var(--border-color)",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <h3 className="font-display" style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.3rem" }}>
                What to Expect
              </h3>
              {[
                {
                  icon: <FaClock />,
                  color: "var(--accent-cyan)",
                  label: "24-Hour Response",
                  desc: "I review all project submissions within one business day.",
                },
                {
                  icon: <FaShieldAlt />,
                  color: "var(--accent-indigo)",
                  label: "NDA Available",
                  desc: "Happy to sign a mutual NDA before discussing your idea.",
                },
                {
                  icon: <FaHandshake />,
                  color: "var(--accent-emerald)",
                  label: "Direct Communication",
                  desc: "You work directly with me — no account managers or middlemen.",
                },
                {
                  icon: <FaFileContract />,
                  color: "var(--accent-violet)",
                  label: "Clear Scope & Process",
                  desc: "Every project starts with a written scope, timeline, and milestone plan.",
                },
              ].map((guarantee) => (
                <div key={guarantee.label} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: guarantee.color,
                      marginTop: "0.15rem",
                      flexShrink: 0,
                    }}
                  >
                    {guarantee.icon}
                  </span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "0.9rem", marginBottom: "0.2rem" }}>
                      {guarantee.label}
                    </div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: "1.5" }}>
                      {guarantee.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General details lists */}
            <div className="glass" style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.8rem" }}>
              <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: "700", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.8rem" }}>
                Contact Info
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Email */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.2rem", color: "var(--accent-indigo)" }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="clickable" style={{ fontWeight: "600", color: "var(--text-primary)" }}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.2rem", color: "var(--accent-cyan)" }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Phone / Signal</span>
                    <a href={`tel:${personalInfo.phone}`} className="clickable" style={{ fontWeight: "600", color: "var(--text-primary)" }}>
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.2rem", color: "var(--accent-indigo)" }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Primary Hub</span>
                    <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant Social Integrations */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                <button
                  onClick={openWhatsApp}
                  className="btn btn-secondary clickable"
                  style={{ width: "100%", justifyContent: "center", gap: "0.6rem", borderColor: "#25d366", color: "#25d366" }}
                >
                  <FaWhatsapp /> WhatsApp Instant Chat
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Project Parameter Form */}
          <div className="glass" style={{ padding: "3rem", border: "1px solid var(--border-color)" }}>
            <h2 className="font-display" style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "2rem" }}>
              Project Intake Parameters
            </h2>

            <form ref={formRef} onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
              {/* Form Input fields split row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-row">
                <div>
                  <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.5rem" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    style={{ width: "100%", height: "45px", backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0 1rem", fontSize: "0.9rem", color: "var(--text-primary)" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.5rem" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. name@company.com"
                    style={{ width: "100%", height: "45px", backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0 1rem", fontSize: "0.9rem", color: "var(--text-primary)" }}
                  />
                </div>
              </div>

              {/* Company Input */}
              <div>
                <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.5rem" }}>
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Acma Inc."
                  style={{ width: "100%", height: "45px", backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0 1rem", fontSize: "0.9rem", color: "var(--text-primary)" }}
                />
              </div>

              {/* Intake Dropdowns Split Row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
                {/* Project Type */}
                <div>
                  <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.5rem" }}>
                    Project Domain
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "45px", backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0 1rem", fontSize: "0.9rem", color: "var(--text-primary)", cursor: "pointer" }}
                  >
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="AI / Automation">AI / Automation</option>
                    <option value="Custom CRM">Custom CRM</option>
                    <option value="Mobile App (iOS/Android)">Mobile App</option>
                    <option value="Enterprise Architecture">Enterprise Solutions</option>
                    <option value="Other Scope">Other Scope</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.5rem" }}>
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "45px", backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0 1rem", fontSize: "0.9rem", color: "var(--text-primary)", cursor: "pointer" }}
                  >
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.5rem" }}>
                    Timeline Scope
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "45px", backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "0 1rem", fontSize: "0.9rem", color: "var(--text-primary)", cursor: "pointer" }}
                  >
                    <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                    <option value="1 - 3 Months">1 - 3 Months</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="Flexible Schedule">Flexible Schedule</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.5rem" }}>
                  Project Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows="5"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Outline the core objective, targeted business goals, and user journeys..."
                  style={{ width: "100%", backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "6px", padding: "1rem", fontSize: "0.9rem", color: "var(--text-primary)", lineHeight: "1.5", resize: "vertical" }}
                />
              </div>

              {/* Status Message Notification displays */}
              {status.message && (
                <div
                  className="glass"
                  style={{
                    padding: "1rem 1.5rem",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    fontSize: "0.9rem",
                    backgroundColor: status.success ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                    border: status.success ? "1px solid rgba(16, 185, 129, 0.2)" : "1px solid rgba(239, 68, 68, 0.2)",
                    color: status.success ? "var(--accent-emerald)" : "#ef4444",
                  }}
                >
                  {status.success ? <FaCheckCircle /> : <FaExclamationTriangle />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit triggers */}
              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary clickable"
                style={{ width: "100%", height: "50px", justifyContent: "center" }}
              >
                {status.submitting ? "Initiating Project Pipeline..." : "Submit Project Intake Parameters"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Responsiveness overrides */}
      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
