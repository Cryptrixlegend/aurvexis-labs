import Navbar from "./Navbar";
import BackgroundFX from "./BackgroundFX";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function OSLayout({ children }) {
  const location = useLocation();

  // 🧲 GLOBAL CURSOR MAGNET SYSTEM
  useEffect(() => {
    const move = (e) => {
      const cursor = document.getElementById("os-cursor");
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* BACKGROUND SYSTEM */}
      <BackgroundFX />

      {/* MAGNET CURSOR */}
      <div id="os-cursor" style={styles.cursor} />

      {/* NAVBAR (ALWAYS ON TOP) */}
      <Navbar />

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          style={styles.page}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

const styles = {
  page: {
    position: "relative",
    zIndex: 1
  },

  cursor: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    background: "rgba(79,209,255,0.7)",
    boxShadow: "0 0 20px rgba(79,209,255,0.6)",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.05s linear",
    zIndex: 9999
  }
};