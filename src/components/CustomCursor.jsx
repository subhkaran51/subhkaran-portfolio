import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Track mouse positioning
    const mouse = { x: 0, y: 0 };
    
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Instantly position the inner dot
      gsap.set(dot, { x: mouse.x, y: mouse.y });

      // Animate outer ring with a slight latency for high-end feel
      gsap.to(ring, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hover elements selectors
    const handleMouseOver = (e) => {
      // Find closest interactive element
      const target = e.target.closest("a, button, .clickable, input, textarea, .swiper-button-next, .swiper-button-prev");
      if (target) {
        gsap.to(dot, { scale: 0, duration: 0.2 });
        gsap.to(ring, {
          scale: 2.2,
          backgroundColor: "rgba(99, 102, 241, 0.1)",
          borderColor: "var(--accent-indigo)",
          borderWidth: "1.5px",
          duration: 0.3,
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, .clickable, input, textarea, .swiper-button-next, .swiper-button-prev");
      if (target) {
        gsap.to(dot, { scale: 1, duration: 0.2 });
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "var(--text-primary)",
          borderWidth: "1px",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Inner small point cursor */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        style={{
          position: "fixed",
          top: -3,
          left: -3,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "var(--accent-cyan)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Outer lagging ring cursor */}
      <div
        ref={cursorRingRef}
        className="custom-cursor-ring"
        style={{
          position: "fixed",
          top: -16,
          left: -16,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid var(--text-primary)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "background-color 0.2s, border-color 0.2s, transform 0.1s",
        }}
      />
    </>
  );
};

export default CustomCursor;
