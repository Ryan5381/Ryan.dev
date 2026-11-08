import { Box, Skeleton } from "@mui/material";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { useProfiles } from "@hooks/useProfiles";

const AvatarLoading = () => {
  const reducedMotion = useReducedMotion();
  return (
    <Box role="status" aria-label="頭像載入中" sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
      <Skeleton variant="rectangular" animation={reducedMotion ? false : "wave"} width="100%" height="100%" sx={{ position: "absolute", inset: 0, bgcolor: "rgba(212,180,131,0.08)" }} />
      <motion.div
        animate={reducedMotion ? undefined : { opacity: [0.45, 1, 0.45], y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ display: "flex", color: "#D4B483", fontSize: 36 }}
      ><FiUser aria-hidden="true" /></motion.div>
    </Box>
  );
};

// A new URL mounts a fresh image and resets its loading/error state.
const AvatarImage = ({ src, alt }: { src: string; alt: string }) => {
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");
  const reducedMotion = useReducedMotion();
  return (
    <>
      {status === "loading" && <AvatarLoading />}
      {status === "failed" && <Box role="status" sx={{ color: "#D4B483", p: 2 }}>頭像載入失敗，請稍後重新整理。</Box>}
      <motion.img
        src={src}
        alt={alt}
        decoding="async"
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("failed")}
        aria-hidden={status !== "ready"}
        initial={false}
        animate={{ opacity: status === "ready" ? 1 : 0, scale: status === "ready" || reducedMotion ? 1 : 1.04 }}
        transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
    </>
  );
};

const Avatar = () => {
  const { data: profiles = [], isLoading, isError } = useProfiles();
  const profile = profiles[0];

  return (
    <Box
      sx={{
        width: "350px",
        height: "350px",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {isLoading ? (
        <AvatarLoading />
      ) : profile?.avatar_url ? (
        <AvatarImage
          key={profile.avatar_url}
          src={profile.avatar_url}
          alt={profile.full_name || "Avatar"}
        />
      ) : (
        <Box
          sx={{
            color: "rgba(255,255,255,0.2)",
            fontSize: "0.9rem",
            textAlign: "center",
            p: 2,
          }}
        >
          {isError ? "頭像資料載入失敗" : "尚未上傳頭像"}
        </Box>
      )}
    </Box>
  );
};

export default Avatar;
