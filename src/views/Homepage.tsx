import { Box, Container, Divider } from "@mui/material";
import Navbar from "@components/Navbar";
import HeroSection from "@components/Home/HeroSection";
import TimelineSection from "@components/Home/TimelineSection";

const Homepage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #878274 0%, #24221a 100%)",
        pt: "80px",
      }}
    >
      <Navbar />
      <HeroSection />

      {/* Spacing & Divider */}
      <Container maxWidth="lg">
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 4 }} />
      </Container>

      <TimelineSection />
    </Box>
  );
};

export default Homepage;
