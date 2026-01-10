import { SiMinutemailer } from "react-icons/si";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { MdOpenInNew, MdSend } from "react-icons/md";
import contactImg from "@assets/contact.png";
import { useProfiles } from "@hooks/useProfiles";

const Contact = () => {
  const { data: profiles = [], isLoading } = useProfiles();
  if (isLoading) return <Box sx={{ color: "#fff", p: 4 }}>Loading...</Box>;
  const profile = profiles[0];
  if (!profile) return <Box sx={{ color: "#fff", p: 4 }}>尚未有聯繫資訊</Box>;

  const myInfo = [
    {
      label: "Email",
      value: profile.email,
      isLink: true,
      href: `mailto:${profile.email}`,
      actionLabel: "傳送郵件",
      icon: <MdSend />,
    },
    {
      label: "Github",
      value: profile.github_url,
      isLink: true,
      href: profile.github_url,
      actionLabel: "前往造訪",
      icon: <MdOpenInNew />,
    },
    {
      label: "Linkedin",
      value: profile.linkedin_url,
      isLink: true,
      href: profile.linkedin_url,
      actionLabel: "查看檔案",
      icon: <MdOpenInNew />,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 800,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Let's Connect
        </Typography>
        <SiMinutemailer size={32} color="#D4B483" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 10 },
        }}
      >
        {/* 左側資訊卡片區 */}
        <Stack spacing={2} sx={{ width: { xs: "100%", md: "450px" } }}>
          {myInfo.map((item) => (
            <Card
              key={item.label}
              sx={{
                bgcolor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: "20px !important",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#D4B483",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>

                {item.isLink && (
                  <Button
                    variant="outlined"
                    component="a"
                    href={item.href || "#"}
                    target={item.label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    startIcon={item.icon}
                    sx={{
                      color: "#D4B483",
                      borderColor: "rgba(212, 180, 131, 0.5)",
                      borderRadius: "8px",
                      px: 2,
                      fontSize: "0.8rem",
                      "&:hover": {
                        borderColor: "#D4B483",
                        bgcolor: "rgba(212, 180, 131, 0.1)",
                      },
                    }}
                  >
                    {item.actionLabel || "瀏覽"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* 右側圖片 */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: "400px" },
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* 裝飾性背景光芒 */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "120%",
              height: "120%",
              background:
                "radial-gradient(circle, rgba(212, 180, 131, 0.15) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />
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
