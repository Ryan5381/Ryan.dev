import { Box } from "@mui/material";
import { motion } from "framer-motion";
import hero from "@assets/www.jpg";

/**
 * 背景發光特效、具備玻璃擬態感的主圖容器。
 */
const HeroImage = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: { xs: "350px", md: "500px" },
        width: "100%",
      }}
    >
      {/* 第一層背景 */}
      <Box
        component={motion.div}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20, // 每20秒順時鐘轉一圈
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          width: { xs: "300px", md: "460px" },
          height: { xs: "300px", md: "460px" },
          background: "rgba(85, 83, 74, 0.3)",
          borderRadius: "40% 60% 55% 45% / 45% 45% 55% 55%",
          zIndex: 0,
        }}
      />

      {/* 第二層背景 */}
      <Box
        component={motion.div}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15, // 每15秒逆時鐘轉一圈
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          width: { xs: "280px", md: "420px" },
          height: { xs: "280px", md: "420px" },
          background: "rgba(161, 157, 143, 0.2)",
          borderRadius: "55% 45% 40% 60% / 55% 55% 45% 45%",
          zIndex: 0,
        }}
      />

      {/* 背景發光特效
        使用 radial-gradient（放射狀漸層）產生一個白色的柔光中心。
        帶有 blur(50px) 的模糊效果，並會規律地閃爍（不透明度在 0.3 到 0.6 之間跳動）
      */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", // 放射狀漸層
          filter: "blur(50px)",
          zIndex: -1,
        }}
      />

      {/* Image Container */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "260px", md: "380px" },
          height: { xs: "260px", md: "380px" },
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
          border: "2px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(5px)",
        }}
      >
        <img
          src={hero}
          alt="Ryan"
          onContextMenu={(e) => e.preventDefault()} // 禁止右鍵選單
          draggable={false} // 禁止拖動圖片
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            userSelect: "none", // 禁止選取
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroImage;
