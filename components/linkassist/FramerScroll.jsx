"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FramerScroll({
  children,
  animation = "fade-up", // "fade-up" | "scale-in" | "reveal-card" | "fade-in"
  delay = 0,
  className = "",
  style = {},
  once = true,   // true  → animate once on first entry only (recommended for sections)
                 // false → replay every time the element enters the viewport

}) {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: "var(--fs-y, 30px)" },
      visible: { opacity: 1, y: 0 },
    },
    "scale-in": {
      hidden: { opacity: 0, scale: "var(--fs-scale, 0.95)", y: "var(--fs-y, 16px)" },
      visible: { opacity: 1, scale: 1, y: 0 },
    },
    "reveal-card": {
      hidden: { opacity: 0, y: "var(--fs-y, 40px)", scale: "var(--fs-scale, 0.97)" },
      visible: { opacity: 1, y: 0, scale: 1 },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  const defaultY = animation === "reveal-card" ? "40px" : (animation === "scale-in" ? "16px" : "30px");
  const defaultScale = animation === "reveal-card" ? 0.97 : 0.95;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: 0.52,
        delay,
        ease: [0.16, 1, 0.3, 1], // Premium Apple/Linear spring easing
      }}
      variants={variants[animation] || variants["fade-up"]}
      className={`framer-scroll-container ${className}`}
      style={{
        "--fs-y": defaultY,
        "--fs-scale": defaultScale,
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}
