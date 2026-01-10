import { Box } from "@mui/material";
import Navbar from "@components/Navbar";
import Contact from "@components/contact/Contact";

const ContactPage = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(170deg, #878274 0%, #24221a 100%)",
        minHeight: "100vh",
        pt: { xs: 10, md: 15 }, // 防止被 Navbar 遮住
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Contact />
    </Box>
  );
};

export default ContactPage;
