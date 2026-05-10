import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={styles.nav}
    >
      <h2 style={styles.logo}>AURVEXIS LABS</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/founder" style={styles.link}>Founder</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/company" style={styles.link}>Company</Link>
      </div>
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 60px",
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    zIndex: 999
  },
  logo: {
    color: "white",
    fontSize: "16px",
    letterSpacing: "2px"
  },
  links: {
    display: "flex",
    gap: "24px"
  },
  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "14px"
  }
};