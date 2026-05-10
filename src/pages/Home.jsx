import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

import logo from "./AURVEXIS LABS.jpg";

export default function Home() {
  const ref = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30
  });

  // Fix scroll reset on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ FIXED CTA transforms (clean + stable)
  const ctaOpacity = useTransform(progress, [0.7, 1], [0, 1]);
  const ctaY = useTransform(progress, [0.7, 1], [40, 0]);

  return (
    <div ref={ref} style={styles.page}>

      {/* BACKGROUND */}
      <div style={styles.gridOverlay} />
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      {/* LOGO */}
      <div style={styles.logoWrap}>
        <img
          src={logo}
          style={styles.logo}
          alt="AURVEXIS LABS"
        />
        <span style={styles.logoText}>AURVEXIS LABS</span>
      </div>

      {/* HERO */}
      <Hero progress={progress} />

      {/* LAYERS */}
      <Layer
        progress={progress}
        index={1}
        eyebrow="AI INFRASTRUCTURE"
        title="Engineering intelligent systems for modern companies"
        desc="We build production-grade AI systems designed for real-world deployment — scalable, stable, and engineered for reliability."
      />

      <Layer
        progress={progress}
        index={2}
        eyebrow="SYSTEM ARCHITECTURE"
        title="Built for scale, not prototypes"
        desc="Backend systems, APIs, and workflows designed for production-level scalability and long-term reliability."
      />

      <Layer
        progress={progress}
        index={3}
        eyebrow="PRODUCT EXPERIENCE"
        title="Interfaces with precision and clarity"
        desc="Minimal, high-performance UI systems focused on speed, clarity, and structured user experience."
      />

      {/* CTA */}
      <section style={styles.cta}>
        <motion.div
          style={{
            opacity: ctaOpacity,
            y: ctaY
          }}
        >
          <div style={styles.ctaBadge}>AURVEXIS LABS</div>

          <h2 style={styles.ctaTitle}>Build systems that last.</h2>

          <p style={styles.ctaText}>
            From AI infrastructure to scalable product architecture —
            engineered for real production environments.
          </p>

          <button style={styles.button}>Enter Platform</button>
        </motion.div>
      </section>

    </div>
  );
}

/* HERO */
function Hero({ progress }) {
  const opacity = useTransform(progress, [0, 0.2], [1, 0]);
  const scale = useTransform(progress, [0, 0.2], [1, 1.05]);
  const y = useTransform(progress, [0, 0.2], [0, -40]);

  return (
    <section style={styles.section}>
      <motion.div style={{ opacity, scale, y }}>
        <div style={styles.heroBadge}>NEXT-GENERATION SYSTEMS COMPANY</div>
        <div style={styles.brand}>AURVEXIS</div>
        <div style={styles.subtitle}>
          AI systems engineering for scalable digital infrastructure
        </div>
        <div style={styles.meta}>Systems • AI • Architecture • Performance</div>
      </motion.div>
    </section>
  );
}

/* LAYERS */
function Layer({ progress, index, eyebrow, title, desc }) {
  const start = index * 0.22;
  const end = start + 0.2;

  const opacity = useTransform(
    progress,
    [start, start + 0.05, end],
    [0, 1, 0]
  );

  const y = useTransform(
    progress,
    [start, start + 0.05, end],
    [60, 0, -60]
  );

  return (
    <section style={styles.section}>
      <motion.div style={{ opacity, y }}>
        <div style={styles.eyebrow}>{eyebrow}</div>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.desc}>{desc}</p>
      </motion.div>
    </section>
  );
}

/* STYLES */
const styles = {
  page: {
    background: "#000",
    color: "#fff",
    fontFamily: "Inter, system-ui, sans-serif",
    overflowX: "hidden"
  },

  logoWrap: {
    position: "fixed",
    top: "20px",
    left: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    zIndex: 10
  },

  logo: {
    width: "30px",
    height: "30px",
    borderRadius: "6px",
    objectFit: "cover"
  },

  logoText: {
    fontSize: "12px",
    letterSpacing: "2px",
    opacity: 0.7
  },

  gridOverlay: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "80px 80px",
    opacity: 0.15
  },

  bgGlow1: {
    position: "fixed",
    width: "500px",
    height: "500px",
    background: "rgba(0,153,255,0.10)",
    filter: "blur(120px)",
    top: "-120px",
    left: "-120px",
    borderRadius: "50%"
  },

  bgGlow2: {
    position: "fixed",
    width: "420px",
    height: "420px",
    background: "rgba(120,80,255,0.10)",
    filter: "blur(120px)",
    bottom: "-120px",
    right: "-120px",
    borderRadius: "50%"
  },

  section: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 10vw"
  },

  heroBadge: {
    fontSize: "11px",
    opacity: 0.6,
    letterSpacing: "2px",
    marginBottom: "20px"
  },

  brand: {
    fontSize: "clamp(60px, 10vw, 120px)",
    letterSpacing: "-6px",
    fontWeight: 700
  },

  subtitle: {
    marginTop: "18px",
    opacity: 0.8,
    fontSize: "18px"
  },

  meta: {
    marginTop: "18px",
    opacity: 0.5,
    fontSize: "13px"
  },

  eyebrow: {
    fontSize: "12px",
    opacity: 0.5,
    marginBottom: "12px"
  },

  title: {
    fontSize: "42px",
    maxWidth: "900px"
  },

  desc: {
    marginTop: "16px",
    opacity: 0.7,
    maxWidth: "700px"
  },

  cta: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  ctaBadge: {
    fontSize: "11px",
    opacity: 0.6,
    marginBottom: "16px"
  },

  ctaTitle: {
    fontSize: "42px"
  },

  ctaText: {
    marginTop: "16px",
    opacity: 0.6,
    maxWidth: "700px"
  },

  button: {
    marginTop: "26px",
    padding: "14px 28px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.06)",
    color: "white"
  }
};