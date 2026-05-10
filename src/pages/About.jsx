import { motion } from "framer-motion";

export default function About() {
  return (
    <div style={styles.page}>

      {/* BACKGROUND GLOW */}
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.header}
      >
        <div style={styles.badge}>AURVEXIS LABS</div>

        <h1 style={styles.title}>Engineering Philosophy</h1>

        <p style={styles.subtitle}>
          We build systems, not websites — infrastructure that scales,
          evolves, and behaves like production-grade engineering from day one.
        </p>
      </motion.div>

      {/* CORE STACK */}
      <div style={styles.stack}>

        <Block
          title="Systems over screens"
          desc="Every product is designed as a modular system with clear architecture, not isolated UI pages."
        />

        <Block
          title="Performance is a core feature"
          desc="Speed, latency, reliability, and scalability are treated as primary product requirements — not optimizations."
        />

       <Block
  title="Infrastructure-first thinking"
  desc="We prioritize backend architecture, deployment pipelines, and scalability before frontend polish."
/>

<Block
  title="Design as engineering clarity"
  desc="UI is not decoration — it is structured communication between system and user."
/>

<Block
  title="AI-native architecture"
  desc="We design workflows where intelligence is embedded directly into system design, not layered on top."
/>

        <Block
          title="Infrastructure-first thinking"
          desc="We prioritize backend architecture, deployment pipelines, and scalability before frontend polish."
        />

        <Block
          title="Design as engineering clarity"
          desc="UI is not decoration — it is structured communication between system and user."
        />

      </div>

      {/* PRINCIPLES SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.principles}
      >

        <h2 style={styles.sectionTitle}>Core Principles</h2>

        <div style={styles.principleGrid}>

          <div style={styles.card}>
            <h3>Scalability by design</h3>
            <p>
              Systems must scale structurally, not through patches or manual fixes.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Zero-friction architecture</h3>
            <p>
              Every layer of the system should reduce complexity, not add it.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Production mindset</h3>
            <p>
              Everything is built as if it will serve real users at scale immediately.
            </p>
          </div>

        </div>

      </motion.div>

      {/* CLOSING STATEMENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.closing}
      >

        <h2 style={styles.closingTitle}>
          We don’t build features.<br />
          We build systems that generate them.
        </h2>

        <p style={styles.closingText}>
          Aurvexis Labs exists to engineer infrastructure for the next generation of digital companies —
          where AI, automation, and scalable systems are the foundation, not additions.
        </p>

      </motion.div>

    </div>
  );
}

/* COMPONENT */
function Block({ title, desc }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      style={styles.block}
    >
      <h3 style={styles.blockTitle}>{title}</h3>
      <p style={styles.blockDesc}>{desc}</p>
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
    marginBottom: "20px"
  },

  title: {
    fontSize: "clamp(42px, 5vw, 64px)",
    letterSpacing: "-2px",
    marginBottom: "14px"
  },

  subtitle: {
    maxWidth: "750px",
    opacity: 0.65,
    lineHeight: 1.7,
    fontSize: "16px"
  },

  stack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "80px",
    position: "relative",
    zIndex: 2
  },

  block: {
    padding: "22px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)"
  },

  blockTitle: {
    fontSize: "18px",
    marginBottom: "6px"
  },

  blockDesc: {
    fontSize: "14px",
    opacity: 0.6,
    lineHeight: 1.6
  },

  principles: {
    marginTop: "40px",
    marginBottom: "100px",
    position: "relative",
    zIndex: 2
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "24px"
  },

  principleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px"
  },

  card: {
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  closing: {
    textAlign: "center",
    marginTop: "80px",
    position: "relative",
    zIndex: 2
  },

  closingTitle: {
    fontSize: "clamp(28px, 4vw, 48px)",
    letterSpacing: "-1px",
    lineHeight: 1.2
  },

  closingText: {
    marginTop: "20px",
    opacity: 0.65,
    maxWidth: "700px",
    marginInline: "auto",
    lineHeight: 1.7
  }
};