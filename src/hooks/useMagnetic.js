import { useEffect } from "react";

export default function useMagnetic(ref, strength = 20) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    };

    const reset = () => {
      el.style.transform = `translate(0px, 0px)`;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, [ref, strength]);
}