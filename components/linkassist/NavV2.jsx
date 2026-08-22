"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { V2 } from "./Tokens";

export default function NavV2() {
  const router = useRouter();
  const pathname = usePathname();
  const items = [
    { href: "features", label: "Features" },
    { href: "how-it-works", label: "How it works" },
    { href: "pricing", label: "Pricing" },
    { href: "tools", label: "Free tools" },
    { href: "blog", label: "Blog" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const showNavRef = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkAndScroll = () => {
      const section = sessionStorage.getItem("scrollToSection") || (window.location.hash ? window.location.hash.replace("#", "") : null);
      if (section) {
        sessionStorage.removeItem("scrollToSection");
        let attempts = 0;
        const tryScroll = () => {
          const el = document.getElementById(section);
          if (el) {
            const offset = window.innerWidth < 768 ? 64 : 84;
            const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
          } else if (attempts < 15) {
            attempts++;
            setTimeout(tryScroll, 100);
          }
        };
        setTimeout(tryScroll, 100);
      }
    };

    checkAndScroll();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (typeof window !== "undefined" && window.__isNavScrolling) {
        if (!showNavRef.current) {
          showNavRef.current = true;
          setShowNav(true);
        }
        lastScrollY.current = currentY;
        return;
      }

      // Always show at top of page
      if (currentY <= 80) {
        if (!showNavRef.current) {
          showNavRef.current = true;
          setShowNav(true);
        }
      } else {
        // Show while scrolling UP, hide while scrolling DOWN
        if (currentY < lastScrollY.current) {
          if (!showNavRef.current) {
            showNavRef.current = true;
            setShowNav(true);
          }
        } else if (currentY > lastScrollY.current) {
          if (showNavRef.current) {
            showNavRef.current = false;
            setShowNav(false);
          }
        }
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/pricing") {
      setActive("pricing");
      return;
    }
    if (pathname === "/tools") {
      setActive("tools");
      return;
    }
    if (pathname === "/blog") {
      setActive("blog");
      return;
    }

    const ids = ["features", "how-it-works"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const intersectingMap = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectingMap[entry.target.id] = entry.isIntersecting;
        });

        const activeId = ids.find((id) => intersectingMap[id]);
        setActive(activeId || "");
      },
      {
        rootMargin: "-140px 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const PAGES = { tools: "/tools", blog: "/blog", about: "/about", pricing: "/pricing" };

  const go = (href) => {
    if (href === "pricing") {
      router.push("/pricing");
      return;
    }
    if (PAGES[href] && href !== "features" && href !== "how-it-works") {
      router.push(PAGES[href]);
      return;
    }
    const el = document.getElementById(href);
    if (el && typeof window !== "undefined" && window.location.pathname === "/") {
      window.__isNavScrolling = true;
      if (window.__navScrollTimeout) clearTimeout(window.__navScrollTimeout);
      window.__navScrollTimeout = setTimeout(() => {
        window.__isNavScrolling = false;
      }, 1000);
      if (window.location.hash) {
        window.history.replaceState("", document.title, window.location.pathname + window.location.search);
      }
      const offset = window.innerWidth < 768 ? 64 : 84;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      return;
    }

    if (typeof window !== "undefined") {
      sessionStorage.removeItem("scrollToSection");
    }
    router.push("/");
  };

  return (
    <nav
      className="fixed left-0 right-0 z-50 px-4 md:px-8 pointer-events-none"
      style={{
        top: 8,
        transform: `translateY(${showNav ? 0 : -120}px)`,
        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="max-w-[1180px] mx-auto pointer-events-auto relative overflow-hidden"
        style={{
          // Near-clear fill — blur/saturation do the work, like real iOS 26 glass
          background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
          backdropFilter: "blur(28px) saturate(190%) brightness(1.06) contrast(1.03)",
          WebkitBackdropFilter: "blur(28px) saturate(190%) brightness(1.06) contrast(1.03)",
          borderRadius: isOpen ? "24px" : "9999px",
          border: "1px solid rgba(255, 255, 255, 0.28)",
          boxShadow: `
            0 20px 50px -18px rgba(0, 40, 100, 0.22),
            0 8px 16px -6px rgba(0, 0, 0, 0.08),
            inset 0 1px 1px rgba(255, 255, 255, 0.45),
            inset 0 -5px 8px -4px rgba(0, 40, 90, 0.05)
          `,
          padding: isOpen ? "8px 20px 16px 20px" : "6px 20px",
          transition: "background .2s, box-shadow .2s, padding .2s",
        }}
      >
        {/* Liquid Top Edge Refraction Sheen */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="flex items-center justify-between" style={{ height: 48 }}>
          {/* Logo */}
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.removeItem("scrollToSection");
                if (window.location.hash) {
                  window.history.replaceState("", document.title, window.location.pathname);
                }
              }
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
            className="flex items-center gap-2 border-0 bg-transparent cursor-pointer group"
          >
            <img
              src="/assets/logo-icon.png"
              alt="LinkAssist"
              width={36}
              height={36}
              decoding="async"
              style={{ width: 36, height: 36, borderRadius: 9 }}
            />
            <span
              style={{ font: "700 20px/1 Geist", color: V2.ink, letterSpacing: "-0.015em" }}
            >
              LinkAssist
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {items.map((item) => {
              const on = active === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  style={{
                    font: "600 13.5px/1 Geist",
                    color: on ? V2.coral : "#4B5563",
                    padding: "8px 14px",
                    border: 0,
                    borderRadius: "9999px",
                    background: on ? "rgba(0,102,178,0.1)" : "transparent",
                    cursor: "pointer",
                    transition: "all .18s ease",
                    textShadow: "0 1px 2px rgba(255,255,255,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    if (!on) {
                      e.currentTarget.style.color = V2.ink;
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!on) {
                      e.currentTarget.style.color = "#4B5563";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              style={{
                font: "600 13.5px/1 Geist",
                color: "#4B5563",
                padding: "8px 12px",
                border: 0,
                background: "transparent",
                cursor: "pointer",
                transition: "color .15s",
                textShadow: "0 1px 2px rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = V2.ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
            >
              Sign in
            </button>
            <button
              style={{
                font: "600 13px/1 Geist",
                color: "#fff",
                padding: "9px 18px",
                borderRadius: 9999,
                border: "1px solid rgba(255, 255, 255, 0.4)",
                cursor: "pointer",
                background: `linear-gradient(135deg, ${V2.coral} 0%, #1c83d3 100%)`,
                letterSpacing: "-0.005em",
                boxShadow: `
                  0 6px 16px -2px rgba(0, 102, 178, 0.35),
                  inset 0 1px 1px rgba(255, 255, 255, 0.6)
                `,
                transition: "transform .15s, box-shadow .15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 10px 22px -2px rgba(0, 102, 178, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 16px -2px rgba(0, 102, 178, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.6)";
              }}
            >
              Start your free trial
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: "rgba(255,255,255,0.12)",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
                padding: "6px",
                color: V2.ink,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-2 border-t border-[rgba(255,255,255,0.2)] flex flex-col gap-1 pt-3 pb-1"
              style={{ overflow: "hidden" }}
            >
            {items.map((item) => {
              const on = active === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    go(item.href);
                  }}
                  style={{
                    font: "600 14.5px Geist",
                    color: on ? V2.coral : "#374151",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    border: 0,
                    background: on ? "rgba(0,102,178,0.1)" : "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all .15s ease",
                    textShadow: "0 1px 2px rgba(255,255,255,0.4)",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
            <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.2)", margin: "6px 0" }} />
            <div className="flex flex-col gap-2 pt-1 pb-1">
              <button
                style={{
                  font: "600 14.5px Geist",
                  color: "#374151",
                  padding: "10px 14px",
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  textShadow: "0 1px 2px rgba(255,255,255,0.4)",
                }}
              >
                Sign in
              </button>
              <button
                style={{
                  font: "600 14px/1 Geist",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: 9999,
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  cursor: "pointer",
                  background: `linear-gradient(135deg, ${V2.coral} 0%, #1c83d3 100%)`,
                  textAlign: "center",
                  boxShadow: "0 4px 14px rgba(0, 102, 178, 0.35)",
                }}
              >
                Start your free trial
              </button>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}