import { motion } from "framer-motion";

export default function Products() {
  return (
    <div style={styles.page}>

      {/* BACKGROUND */}
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.header}
      >

        <div style={styles.badge}>AURVEXIS ECOSYSTEM</div>

        <h1 style={styles.title}>Shipped Systems</h1>

        <p style={styles.subtitle}>
          Real products, platforms, and AI systems built and deployed — not concepts.
        </p>

      </motion.div>

      {/* PRODUCTS GRID */}
      <div style={styles.grid}>

        <ProductCard
          title="Aurvexis AI Platform"
          desc="AI-powered system for intelligent workflows, automation, and model-driven interactions."
          link="https://aurvexis-ai-f2rvtdrhi58gpqs9zuxuxs.streamlit.app/"
          tag="AI SYSTEM"
        />

        <ProductCard
          title="Advanced Academy Website"
          desc="Full-scale educational platform with modern UI, structured learning flow, and responsive architecture."
          link="https://cryptrixlegend.github.io/advanced-academy-website/"
          tag="EDTECH SYSTEM"
        />

        <ProductCard
          title="CryptrixLegend Portfolio"
          desc="High-performance personal brand website engineered with modern frontend architecture."
          link="https://cryptrixlegend.github.io/cryptrixlegend/"
          tag="PORTFOLIO SYSTEM"
        />

      </div>

      {/* SYSTEM MODULES (YOUR ORIGINAL IDEA, UPGRADED) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.modulesSection}
      >

        <h2 style={styles.sectionTitle}>Core System Modules</h2>

        <div style={styles.modulesGrid}>

          <Module
            title="AI Engine Core"
            desc="Orchestration layer for intelligent workflows and automation systems."
          />

          <Module
            title="Backend Architecture"
            desc="Scalable APIs, authentication systems, and modular service design."
          />

          <Module
            title="Deployment Engine"
            desc="CI/CD workflows and automated production deployment pipelines."
          />

          <Module
            title="UI System Kit"
            desc="Reusable interface components optimized for performance and clarity."
          />

          <Module
            title="Analytics Layer"
            desc="Real-time insights, usage tracking, and system observability."
          />

          <Module
            title="Security Layer"
            desc="Authentication, encryption, and access control infrastructure."
          />

        </div>

      </motion.div>

      {/* CLOSING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.closing}
      >

        <h2 style={styles.closingTitle}>
          We don’t showcase ideas.<br />
          We ship systems.
        </h2>

        <p style={styles.closingText}>
          Every product in the Aurvexis ecosystem is built with production-level architecture,
          scalability-first engineering, and AI-native design principles.
        </p>

      </motion.div>

    </div>
  );
}

/* PRODUCT CARD */
function ProductCard({ title, desc, link, tag }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -6, scale: 1.01 }}
      style={styles.card}
    >

      <div style={styles.tag}>{tag}</div>

      <h3 style={styles.cardTitle}>{title}</h3>

      <p style={styles.cardDesc}>{desc}</p>

      <div style={styles.link}>
        View Project →
      </div>

    </motion.a>
  );
}

/* MODULE CARD */
function Module({ title, desc }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      style={styles.module}
    >
      <h3 style={styles.moduleTitle}>{title}</h3>
      <p style={styles.moduleDesc}>{desc}</p>
    </motion.div>
  );
}

/* STYLES */
const styles = {

  page: {
    padding: "120px 10vw",
    background: "#000",
    color: "white",
    fontFamily: "Inter, system-ui, sans-serif",
    position: "relative",
    overflow: "hidden"
  },

  bgGlow1: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(0,153,255,0.10)",
    filter: "blur(120px)",
    top: "-150px",
    left: "-150px",
    borderRadius: "50%",
    zIndex: 0
  },

  bgGlow2: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "rgba(140,90,255,0.10)",
    filter: "blur(120px)",
    bottom: "-150px",
    right: "-150px",
    borderRadius: "50%",
    zIndex: 0
  },

  header: {
    marginBottom: "70px",
    position: "relative",
    zIndex: 2
  },

  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: "11px",
    letterSpacing: "2px",
    opacity: 0.7,
    marginBottom: "18px"
  },

  title: {
    fontSize: "clamp(42px, 5vw, 64px)",
    letterSpacing: "-2px",
    marginBottom: "12px"
  },

  subtitle: {
    maxWidth: "750px",
    opacity: 0.65,
    lineHeight: 1.7,
    fontSize: "16px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginBottom: "100px",
    position: "relative",
    zIndex: 2
  },

  card: {
    padding: "22px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    textDecoration: "none",
    color: "white",
    backdropFilter: "blur(10px)",
    display: "block"
  },

  tag: {
    fontSize: "10px",
    opacity: 0.6,
    letterSpacing: "2px",
    marginBottom: "10px"
  },

  cardTitle: {
    fontSize: "18px",
    marginBottom: "8px"
  },

  cardDesc: {
    fontSize: "14px",
    opacity: 0.6,
    lineHeight: 1.6,
    marginBottom: "14px"
  },

  link: {
    fontSize: "13px",
    opacity: 0.8
  },

  modulesSection: {
    marginTop: "40px",
    position: "relative",
    zIndex: 2
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "24px"
  },

  modulesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px"
  },

  module: {
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  moduleTitle: {
    fontSize: "16px",
    marginBottom: "6px"
  },

  moduleDesc: {
    fontSize: "13px",
    opacity: 0.6,
    lineHeight: 1.5
  },

  closing: {
    marginTop: "100px",
    textAlign: "center",
    position: "relative",
    zIndex: 2
  },

  closingTitle: {
    fontSize: "clamp(30px, 4vw, 52px)",
    letterSpacing: "-1px",
    lineHeight: 1.2
  },

  closingText: {
    marginTop: "20px",
    opacity: 0.6,
    maxWidth: "700px",
    marginInline: "auto",
    lineHeight: 1.7
  }
};