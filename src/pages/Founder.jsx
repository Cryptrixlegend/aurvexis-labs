import { motion } from "framer-motion";
import founderImg from "../FOUNDER.png";

export default function Founder() {
  return (
    <div style={styles.page}>

      {/* BACKGROUND GRADIENTS */}
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={styles.heading}
      >
        Founder
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={styles.subheading}
      >
        Engineering systems, products, and infrastructure designed
        for the next generation of digital companies.
      </motion.p>

      {/* MAIN LAYOUT */}
      <div style={styles.container}>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          style={styles.imageWrap}
        >

          <div style={styles.imageBorder} />

          <img
            src={founderImg}
            alt="Founder"
            style={styles.image}
          />

          <div style={styles.imageGlow} />
        </motion.div>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={styles.card}
        >

          <div style={styles.badge}>AURVEXIS LABS</div>

          <h2 style={styles.name}>Tanishq Kumar</h2>

          <p style={styles.role}>
            Founder · Systems Architect · AI Infrastructure Builder
          </p>

          <p style={styles.text}>
            I started Aurvexis Labs with a simple belief:
            modern companies should not operate on fragmented systems,
            slow infrastructure, or outdated workflows.
          </p>

          <p style={styles.text}>
            Today, most startups move fast externally but break internally.
            Scaling becomes painful because the foundation was never engineered
            for long-term growth.
          </p>

          <p style={styles.text}>
            My focus is building AI-native platforms, high-performance systems,
            and production-grade digital infrastructure that scale intelligently
            from day one — not after failure.
          </p>

          <div style={styles.statsGrid}>

            <div style={styles.statBox}>
              <h3 style={styles.statNumber}>AI</h3>
              <p style={styles.statLabel}>Native Systems</p>
            </div>

            <div style={styles.statBox}>
              <h3 style={styles.statNumber}>24/7</h3>
              <p style={styles.statLabel}>Infrastructure Focus</p>
            </div>

            <div style={styles.statBox}>
              <h3 style={styles.statNumber}>∞</h3>
              <p style={styles.statLabel}>Scalability Vision</p>
            </div>

          </div>

          <div style={styles.divider} />

          {/* BUILD PHILOSOPHY */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Build Philosophy</h3>

            <ul style={styles.list}>
              <li style={styles.listItem}>
                Systems should scale automatically — not manually.
              </li>

              <li style={styles.listItem}>
                Design is not decoration. It is trust engineering.
              </li>

              <li style={styles.listItem}>
                Performance is a feature, not an optimization.
              </li>

              <li style={styles.listItem}>
                AI should enhance infrastructure, not replace thinking.
              </li>
            </ul>
          </div>

          <div style={styles.divider} />

          {/* VISION */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Long-Term Vision</h3>

            <p style={styles.text}>
              Aurvexis Labs is being built as a next-generation systems company
              focused on intelligent infrastructure, AI-powered products,
              and scalable digital ecosystems for global startups and modern enterprises.
            </p>
          </div>

          <div style={styles.quoteBox}>
            <p style={styles.vision}>
              “Systems should not scale manually —
              they should scale by design.”
            </p>
          </div>

        </motion.div>

      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {

  page: {
    minHeight: "100vh",
    padding: "120px 20px",
    color: "white",
    background: "#000",
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
  },

  bgGlow1: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(0, 153, 255, 0.12)",
    filter: "blur(120px)",
    top: "-120px",
    left: "-120px",
    borderRadius: "50%",
    zIndex: 0
  },

  bgGlow2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "rgba(140, 82, 255, 0.10)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
    borderRadius: "50%",
    zIndex: 0
  },

  heading: {
    fontSize: "clamp(42px, 6vw, 82px)",
    letterSpacing: "-3px",
    marginBottom: "18px",
    fontWeight: 700,
    position: "relative",
    zIndex: 2
  },

  subheading: {
    maxWidth: "720px",
    margin: "0 auto 90px auto",
    opacity: 0.7,
    fontSize: "17px",
    lineHeight: 1.8,
    position: "relative",
    zIndex: 2
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "80px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2
  },

  imageWrap: {
    position: "relative"
  },

  imageBorder: {
    position: "absolute",
    inset: "-12px",
    borderRadius: "32px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02))",
    zIndex: 1
  },

  image: {
    width: "320px",
    height: "380px",
    objectFit: "cover",
    borderRadius: "28px",
    position: "relative",
    zIndex: 2,
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
  },

  imageGlow: {
    position: "absolute",
    inset: "0",
    background:
      "radial-gradient(circle, rgba(79,209,255,0.35), transparent 70%)",
    filter: "blur(70px)",
    zIndex: 0,
    transform: "scale(1.2)"
  },

  card: {
    maxWidth: "620px",
    padding: "42px",
    borderRadius: "26px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    textAlign: "left",
    boxShadow: "0 20px 80px rgba(0,0,0,0.45)"
  },

  badge: {
    display: "inline-block",
    fontSize: "11px",
    opacity: 0.75,
    letterSpacing: "3px",
    marginBottom: "16px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  name: {
    fontSize: "38px",
    marginBottom: "8px",
    letterSpacing: "-1.5px",
    fontWeight: 700
  },

  role: {
    fontSize: "15px",
    opacity: 0.65,
    marginBottom: "26px",
    letterSpacing: "0.3px"
  },

  text: {
    lineHeight: 1.9,
    opacity: 0.82,
    fontSize: "15px",
    marginBottom: "18px"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "18px",
    marginTop: "35px",
    marginBottom: "35px"
  },

  statBox: {
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center"
  },

  statNumber: {
    fontSize: "28px",
    marginBottom: "8px",
    color: "#7dd3fc",
    fontWeight: 700
  },

  statLabel: {
    fontSize: "13px",
    opacity: 0.65
  },

  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.08)",
    margin: "28px 0"
  },

  section: {
    marginBottom: "10px"
  },

  sectionTitle: {
    fontSize: "18px",
    marginBottom: "18px",
    fontWeight: 600,
    letterSpacing: "-0.5px"
  },

  list: {
    paddingLeft: "18px",
    margin: 0
  },

  listItem: {
    marginBottom: "14px",
    opacity: 0.82,
    lineHeight: 1.7,
    fontSize: "15px"
  },

  quoteBox: {
    marginTop: "34px",
    padding: "24px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(0,153,255,0.08), rgba(140,82,255,0.06))",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  vision: {
    fontSize: "18px",
    fontStyle: "italic",
    opacity: 0.92,
    lineHeight: 1.8,
    textAlign: "center",
    letterSpacing: "-0.3px"
  }
};