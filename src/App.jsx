import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Services from "./pages/Services";
import TechStack from "./pages/TechStack";
import Profiles from "./pages/Profiles";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

// Page transitions wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ minHeight: "80vh" }}
    >
      {children}
    </motion.div>
  );
};

// Animated Route Switcher
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/experience"
          element={
            <PageWrapper>
              <Experience />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PageWrapper>
              <ProjectDetails />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <Services />
            </PageWrapper>
          }
        />
        <Route
          path="/tech-stack"
          element={
            <PageWrapper>
              <TechStack />
            </PageWrapper>
          }
        />
        <Route
          path="/profiles"
          element={
            <PageWrapper>
              <Profiles />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply theme attribute to document root
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handler to toggle light/dark theme states
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Dynamic particles layer */}
      <ThreeBackground />

      {/* Intro Preloader screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Header */}
          <Navbar />

          {/* Main page content area */}
          <main style={{ flex: 1 }}>
            <AnimatedRoutes />
          </main>

          {/* Light / Dark Mode floating speed toggle (in addition to standard Navbar link) */}
          <button
            onClick={toggleTheme}
            className="clickable"
            style={{
              position: "fixed",
              bottom: "2rem",
              left: "2rem",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "rgba(16, 16, 16, 0.8)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              zIndex: 9999,
              boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
            }}
            aria-label="Toggle visual theme"
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
