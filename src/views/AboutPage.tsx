import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "@components/Navbar";
import AboutMe from "@components/About/AboutMe";
import Avatar from "@components/About/Avatar";

const AboutPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(170deg, #878274 0%, #24221a 100%)",
      }}
    >
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 15 }, pb: 8 }}>
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: "#D4B483",
              fontWeight: 400,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            About Me
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 4, md: 8 },
            mt: 4,
          }}
        >
          {/* 左側：大頭貼區塊 */}
          <Box sx={{ flexShrink: 0 }}>
            <Avatar />
          </Box>

          {/* 右側：文字內容與 Divider */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <Box
              component={motion.div}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{
                originX: 0,
                width: "100%",
              }}
            >
              <Divider
                sx={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#96a29f",
                  mb: "2rem",
                  border: "none",
                  borderRadius: "2px",
                  opacity: 0.5,
                }}
              />
            </Box>

            <AboutMe />

            <Box
              component={motion.div}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              style={{ originX: 0, width: "100%" }}
            >
              <Divider
                sx={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#96a29f",
                  mt: "2rem",
                  border: "none",
                  borderRadius: "2px",
                  opacity: 0.5,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
