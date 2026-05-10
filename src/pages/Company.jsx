import { motion } from "framer-motion";

export default function Company() {
  return (
    <div style={styles.page}>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.header}
      >
        <h1 style={styles.title}>Company</h1>

        <p style={styles.subtitle}>
          Aurvexis Labs builds AI-native software infrastructure designed for
          scale, performance, and modern digital products.
        </p>
      </motion.div>

      {/* CORE IDENTITY GRID */}
      <div style={styles.grid}>

        <Card
          title="Global Vision"
          desc="Engineering systems that operate beyond local markets — built for global scale from day one."
        />

        <Card
          title="Scalable Architecture"
          desc="Modular backend systems designed to evolve from MVP to enterprise infrastructure."
        />

        <Card
          title="AI-Native Stack"
          desc="Intelligence embedded directly into workflows, not added as an afterthought."
        />

        <Card
          title="Product-First Engineering"
          desc="Every system is designed as a product experience, not just technical infrastructure."
        />

      </div>

      {/* BOTTOM STRATEGIC LINE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={styles.footer}
      >
        <div style={styles.line} />
        <p style={styles.footerText}>
          Built with a focus on long-term systems, not short-term interfaces.
        </p>
      </motion.div>

    </div>
  );
}

/* ================= CARD ================= */

function Card({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={styles.card}
    >
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
    </motion.div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    padding: "120px 10vw",
    background: "#000",
    color: "white"
  },

  header: {
    marginBottom: "70px",
    maxWidth: "800px"
  },

  title: {
    fontSize: "56px",
    letterSpacing: "-2px"
  },

  subtitle: {
    marginTop: "14px",
    fontSize: "16px",
    opacity: 0.65,
    lineHeight: 1.6
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px"
  },

  card: {
    padding: "22px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    transition: "0.3s"
  },

  cardTitle: {
    fontSize: "18px"
  },

  cardDesc: {
    marginTop: "10px",
    fontSize: "14px",
    opacity: 0.6,
    lineHeight: 1.5
  },

  footer: {
    marginTop: "80px",
    textAlign: "center"
  },

  line: {
    width: "60px",
    height: "1px",
    background: "rgba(255,255,255,0.2)",
    margin: "0 auto 20px"
  },

  footerText: {
    fontSize: "13px",
    opacity: 0.5
  }
};