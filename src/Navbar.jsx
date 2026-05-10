import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import logo from "./AURVEXIS LABS.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🧲 global magnetic effect
  useEffect(() => {
    const links = document.querySelectorAll(".magnetic");

    const handleMove = (e) => {
      links.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        const dist = Math.sqrt(dx * dx + dy * dy);
        const strength = Math.max(0, 1 - dist / 200);

        el.style.transform = `translate(${dx * 0.08 * strength}px, ${
          dy * 0.08 * strength
        }px)`;
      });
    };

    const reset = () => {
      links.forEach((el) => {
        el.style.transform = "translate(0px,0px)";
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        ...styles.nav,
        transform: scrolled ? "scale(0.96)" : "scale(1)",
        background: scrolled
          ? "rgba(0,0,0,0.55)"
          : "rgba(0,0,0,0.2)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(14px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(255,255,255,0.06)"
      }}
    >
      {/* LEFT LOGO */}
      <div style={styles.left}>
        <img src={logo} alt="logo" style={styles.logo} />
      </div>

      {/* CENTER NAV */}
      <nav style={styles.center}>
        <NavItem to="/" label="Home" />
        <NavItem to="/products" label="Products" />
        <NavItem to="/about" label="About" />
        <NavItem to="/founder" label="Founder" />
        <NavItem to="/company" label="Company" />
      </nav>

      {/* RIGHT CTA */}
      <div style={styles.right}>
        <button style={styles.button}>Get Started</button>
      </div>

      {/* LIGHT SWEEP */}
      <div style={styles.lightSweep} />
    </header>
  );
}

/* ================= NAV ITEM ================= */

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className="magnetic"
      style={({ isActive }) => ({
        ...styles.link,
        opacity: isActive ? 1 : 0.6,
        transform: "translateZ(0)",
        textShadow: isActive
          ? "0 0 20px rgba(79,209,255,0.6)"
          : "none"
      })}
    >
      {label}
      <span style={styles.dot} />
    </NavLink>
  );
}

/* ================= STYLES ================= */

const styles = {
  nav: {
    position: "fixed",
    top: "14px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "92%",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 26px",
    borderRadius: "18px",
    zIndex: 1000,
    transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
    overflow: "hidden"
  },

  left: {
    display: "flex",
    alignItems: "center"
  },

  logo: {
    height: "28px",
    filter: "drop-shadow(0 0 10px rgba(79,209,255,0.2))",
    transition: "0.3s ease"
  },

  center: {
    display: "flex",
    gap: "24px",
    alignItems: "center"
  },

  link: {
    position: "relative",
    color: "white",
    textDecoration: "none",
    fontSize: "13px",
    letterSpacing: "0.5px",
    transition: "0.3s ease"
  },

  dot: {
    position: "absolute",
    bottom: "-6px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "#4fd1ff",
    opacity: 0.9,
    boxShadow: "0 0 10px rgba(79,209,255,0.6)"
  },

  right: {
    display: "flex",
    alignItems: "center"
  },

  button: {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.15)",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    color: "white",
    fontSize: "13px",
    cursor: "pointer",
    backdropFilter: "blur(12px)",
    transition: "0.3s ease"
  },

  lightSweep: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(120deg, transparent, rgba(79,209,255,0.08), transparent)",
    animation: "sweep 6s linear infinite",
    pointerEvents: "none"
  }
};