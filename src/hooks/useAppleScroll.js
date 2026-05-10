import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useAppleScroll(ref) {
  useLayoutEffect(() => {
    if (!ref?.current) return;

    const sections = ref.current.querySelectorAll(".panel");

    const ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out"
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}