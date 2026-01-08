import { SiMinutemailer } from "react-icons/si";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import contactImg from "../../assets/contact.png";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          mb: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 800,
          }}
        >
          歡迎與我聯繫!
        </Typography>
        <SiMinutemailer size={30} color="rgba(255,255,255,0.7)" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Box sx={{ color: "#fff" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.3)" }}>
              <CardContent sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontWeight: 800 }}
                >
                  Email：
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  test@example.com
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.3)" }}>
              <CardContent sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontWeight: 800 }}
                >
                  GitHub：
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  https://github.com/username
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: "400px" },
            textAlign: "center",
          }}
        >
          <img
            src={contactImg}
            alt="Contact"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
