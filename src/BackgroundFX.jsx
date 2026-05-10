import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundFX() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "70%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);

  return (
    <motion.div
      style={{
        position: "fixed",
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,150,255,0.35), transparent 60%)",
        filter: "blur(120px)",
        left: x,
        top: y,
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
}