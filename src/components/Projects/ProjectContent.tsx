import { Box, Typography, Container, Divider, Button } from "@mui/material";
import { motion } from "framer-motion";
import ProjectImg from "./ProjectImg";

const ProjectContent = () => {
  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          gap: { xs: 4, md: 4 },
          py: 0,
          px: { xs: 2, md: 0 },
          minHeight: "250px", // 限制高度為 250px
          height: "100%",
        }}
      >
        {/* Project Image Section */}
        <Box
          sx={{ flex: { md: "0 0 250px" }, display: "flex", height: "100%" }}
        >
          <ProjectImg />
        </Box>

        {/* Project Details Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 4,
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            overflowY: "auto", // 內容過長時可捲動
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(212, 180, 131, 0.3)",
              borderRadius: "4px",
            },
          }}
        >
          {/* Label & Title Block */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#D4B483",
                letterSpacing: "0.4em",
                fontWeight: 600,
                fontSize: "0.7rem",
                display: "block",
                mb: 0.5,
              }}
            >
              PROJECT NAME
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              Demo Project
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "rgba(212, 180, 131, 0.15)", mb: 2 }} />

          {/* Label & Description Block */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "#D4B483",
                letterSpacing: "0.4em",
                fontWeight: 600,
                fontSize: "0.7rem",
                display: "block",
                mb: 1,
              }}
            >
              DESCRIPTION
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "flex-end" },
                gap: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                  flex: 1,
                  maxWidth: "600px",
                }}
              >
                這是一個展示用的專案描述。使用了React, MUI, Framer
                Motion，打造使用者體驗。
              </Typography>

              <Box
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    height: "32px",
                    bgcolor: "#D4B483",
                    color: "#3C474F",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    borderRadius: "8px",
                    px: 2,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      bgcolor: "#C4A473",
                    },
                  }}
                >
                  查看更多...
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectContent;
