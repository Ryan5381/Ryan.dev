import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { useProfiles } from "@hooks/useProfiles";

const AboutMe = () => {
  const { data: profiles = [], isLoading } = useProfiles();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
        }}
      >
        <CircularProgress
          sx={{
            color: "#D4B483",
            filter: "drop-shadow(0 0 8px rgba(212, 180, 131, 0.4))", // 增加淡淡的金光
          }}
          size={50}
          thickness={4}
        />
      </Box>
    );
  }

  const profile = profiles[0];
  if (!profile) return <Box>尚未設定個人檔案資料</Box>;

  console.log("profile", profile.full_name);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      sx={{
        padding: "1.5rem",
        whiteSpace: "pre-line", // 顯示資料庫內的換行
        lineHeight: 1.8,
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: "1.05rem",
      }}
    >
      {profile.bio || "尚未填寫自我介紹"}
    </Box>
  );
};

export default AboutMe;
