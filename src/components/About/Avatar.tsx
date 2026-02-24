import { Box, CircularProgress } from "@mui/material";
import { useProfiles } from "@hooks/useProfiles";

const Avatar = () => {
  const { data: profiles = [], isLoading } = useProfiles();
  const profile = profiles[0];

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
      {isLoading ? (
        <CircularProgress size={30} sx={{ color: "#D4B483" }} />
      ) : profile?.avatar_url ? (
        <Box
          component="img"
          src={profile.avatar_url}
          alt={profile.full_name || "Avatar"}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
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
          尚未上傳頭像
        </Box>
      )}
    </Box>
  );
};

export default Avatar;
