import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useScrollReveal(ref) {
  useLayoutEffect(() => {
    if (!ref?.current) return;

    const elements = ref.current.querySelectorAll(".reveal");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 70, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out"
      }
    );
  }, [ref]);
}