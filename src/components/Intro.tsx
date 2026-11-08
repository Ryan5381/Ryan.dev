import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const Intro = () => {
  const reducedMotion = useReducedMotion();
  const compact = useMediaQuery("(max-width: 767px)");
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const followPointer = finePointer && !compact && !reducedMotion;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 使用彈簧動畫讓過渡更平滑
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!followPointer) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, followPointer]);

  // 定義動畫顏色配置
  const auroraBands = [
    {
      id: "amber-bright",
      color: "bg-amber-400/50",
      top: "-20%",
      left: "-10%",
      size: "w-[130vw] h-[70vh]",
      animate: {
        rotate: [0, 20, -15, 0],
        x: [0, 50, -30, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.2, 0.9, 1],
      },
      duration: 12, // 加快速度
    },
    {
      id: "deep-shadow",
      color: "bg-stone-900/40", // 增加深色陰影以提升對比
      top: "20%",
      right: "-15%",
      size: "w-[140vw] h-[90vh]",
      animate: {
        rotate: [0, -15, 20, 0],
        x: [0, -60, 40, 0],
        y: [0, 50, -20, 0],
        scale: [1, 1.1, 1.3, 1],
      },
      duration: 18,
    },
    {
      id: "stone-bright",
      color: "bg-teal-200/20", // 冷色高光讓暖色極光更有層次
      bottom: "5%",
      left: "-5%",
      size: "w-[110vw] h-[65vh]",
      animate: {
        rotate: [10, -10, 5, 10],
        x: [-30, 40, -10, -30],
        y: [20, -30, 10, 20],
        scale: [0.9, 1.2, 1, 0.9],
      },
      duration: 15,
    },
    {
      id: "warm-accent",
      color: "bg-orange-500/40", // 增加橘色
      bottom: "-20%",
      right: "5%",
      size: "w-[120vw] h-[60vh]",
      animate: {
        rotate: [-5, 15, -5, -5],
        x: [40, -30, 20, 40],
        y: [-20, 40, -10, -20],
        scale: [1.1, 0.9, 1.2, 1.1],
      },
      duration: 22,
    },
    {
      id: "orange-wash",
      color: "bg-orange-900/10", // 底色加強
      top: "10%",
      left: "10%",
      size: "w-[150vw] h-[100vh]",
      animate: {
        opacity: [0.1, 0.3, 0.2, 0.1],
      },
      duration: 35,
    },
  ];

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-[#5d584d]">
      {/* 背景動畫 */}
      {(compact ? auroraBands.slice(0, 2) : auroraBands).map((band) => (
        <motion.div
          key={band.id}
          className={`absolute blur-[80px] mix-blend-screen pointer-events-none rounded-[100%] ${band.color} ${band.size}`}
          style={{
            top: band.top,
            left: band.left,
            right: band.right,
            bottom: band.bottom,
            willChange: reducedMotion ? "auto" : "transform, opacity",
          }}
          animate={reducedMotion ? { opacity: 0.5 } : {
            ...band.animate,
            opacity: band.animate?.opacity || [0.5, 0.9, 0.6, 0.5],
          }}
          transition={{
            duration: band.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 滑鼠跟隨的光影效果 */}
      {followPointer && <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-white/10 blur-3xl mix-blend-overlay pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          left: "calc(50% - 100px)",
          top: "calc(50% - 100px)",
          willChange: "transform",
        }}
      />}

      {/* 防止色彩斷層 */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 畫出水平橫線。 */}
      <div className="absolute inset-0 pointer-events-none bg-size-[100%_3px,3px_100%] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.03)_50%)]" />
    </div>
  );
};

export default Intro;
