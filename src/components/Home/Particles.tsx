import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

// Generate a repeatable layout once, outside React's render cycle.
const particles = Array.from({ length: 30 }, (_, i) => {
  const value = (salt: number) => {
    const n = Math.sin((i + 1) * 127.1 + salt * 311.7) * 43758.5453;
    return n - Math.floor(n);
  };

  return {
    startX: value(1) * 100,
    startY: value(2) * 100,
    driftX: (value(3) - 0.5) * 40,
    driftY: -(value(4) * 40 + 20),
    duration: value(5) * 8 + 7,
    delay: value(6),
    size: value(7) * 2 + 2,
  };
});

/**
 * 此元件負責在背景中產生緩慢飄動且閃爍的金色微粒（螢火蟲特效）
 * 主要作用是增加畫面的質感、層次感與動態氛圍
 */
const Particles = () => {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {particles.map(({ startX, startY, driftX, driftY, duration, delay, size }, i) => {

        return (
          <Box
            key={i}
            component={motion.div}
            initial={{
              opacity: 0,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0.8, 0.6, 0],
              x: [0, driftX],
              y: [0, driftY],
              scale: [0.8, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              background: "#FFF9C4",
              borderRadius: "50%",
              boxShadow: "0 0 10px 2px rgba(255, 235, 59, 0.3)",
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </Box>
  );
};

export default Particles;
