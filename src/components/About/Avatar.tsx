import { Box } from "@mui/material";

const Avatar = () => {
  return (
    <Box
      sx={{
        width: { xs: "260px", md: "350px" },
        height: { xs: "260px", md: "350px" },
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
      <Box
        sx={{
          color: "rgba(255,255,255,0.2)",
          fontSize: "0.9rem",
          textAlign: "center",
          p: 2,
        }}
      >
        Avatar Image
      </Box>
    </Box>
  );
};

export default Avatar;
