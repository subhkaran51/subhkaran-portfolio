import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const percentRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // 1. Progress Counter Animation
    const duration = 1.8; // seconds
    const counterObj = { value: 0 };

    gsap.to(counterObj, {
      value: 100,
      duration: duration,
      ease: "power1.out",
      onUpdate: () => {
        setProgress(Math.floor(counterObj.value));
      },
      onComplete: () => {
        // 2. Exit Animation Wipes once 100% is reached
        const tl = gsap.timeline({
          onComplete: onComplete,
        });

        tl.to(logoRef.current, {
          scale: 0.85,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        })
          .to(
            percentRef.current,
            {
              opacity: 0,
              y: -20,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.2"
          )
          .to(
            containerRef.current,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Top wipe exit
              duration: 0.8,
              ease: "power4.inOut",
            },
            "-=0.1"
          );
      },
    });

    // Subtitle reveal
    gsap.fromTo(
      ".loading-sub",
      { opacity: 0, y: 10 },
      { opacity: 0.5, y: 0, duration: 0.8, delay: 0.2 }
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#030303",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Glow Logo */}
        <div
          ref={logoRef}
          className="font-display"
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            letterSpacing: "0.1em",
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))",
          }}
        >
          SUBH KARAN
        </div>

        {/* Technical Subtitle */}
        <div
          className="loading-sub"
          style={{
            fontSize: "0.8rem",
            fontWeight: "400",
            letterSpacing: "0.2em",
            color: "var(--text-secondary)",
            textTransform: "uppercase",
            opacity: 0,
          }}
        >
          Senior Developer Portfolio
        </div>

        {/* Counter */}
        <div
          ref={percentRef}
          style={{
            position: "absolute",
            bottom: "4rem",
            right: "4rem",
            fontSize: "6rem",
            fontWeight: "700",
            color: "rgba(255, 255, 255, 0.03)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
