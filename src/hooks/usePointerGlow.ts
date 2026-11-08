import { useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent } from "react";

export const usePointerGlow = (strength = 6) => {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const light = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 180, damping: 24 });
  const opacity = useSpring(light, { stiffness: 160, damping: 24 });
  const background = useMotionTemplate`radial-gradient(circle at ${x}% ${y}%, rgba(255,224,170,0.4), transparent 65%)`;

  const reset = () => {
    tiltX.set(0);
    tiltY.set(0);
    light.set(0);
  };

  return {
    style: { rotateX, rotateY, transformPerspective: 1000 },
    glow: { background, opacity },
    onPointerMove: (event: PointerEvent<HTMLDivElement>) => {
      if (reducedMotion || event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      const px = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const py = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      x.set(px * 100);
      y.set(py * 100);
      tiltX.set((0.5 - py) * strength * 2);
      tiltY.set((px - 0.5) * strength * 2);
      light.set(1);
    },
    onPointerLeave: reset,
    onPointerCancel: reset,
  };
};
