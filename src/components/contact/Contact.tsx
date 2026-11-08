import QueryError from "@components/QueryError";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { MdOpenInNew, MdSend } from "react-icons/md";
import contactImg from "@assets/contact-v2.png";
import originalContactImg from "@assets/contact.png";
import { useProfiles } from "@hooks/useProfiles";

const Contact = () => {
  const reducedMotion = useReducedMotion();
  const [imageState, setImageState] = useState<"loading" | "ready" | "failed">("loading");
  const { data: profiles = [], isLoading, isError, isFetching, refetch } = useProfiles();
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
            filter: "drop-shadow(0 0 8px rgba(212, 180, 131, 0.4))",
          }}
          size={50}
          thickness={4}
        />
      </Box>
    );
  }
  if (isError) {
    return <QueryError message="無法載入個人資訊，請稍後重試。" retrying={isFetching} onRetry={() => { void refetch(); }} />;
  }

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
      labelIcon: <FiMail aria-hidden="true" />,
    },
    {
      label: "GitHub",
      value: profile.github_url,
      labelIcon: <FiGithub aria-hidden="true" />,
      isLink: true,
      href: profile.github_url,
      actionLabel: "前往造訪",
      icon: <MdOpenInNew />,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin_url,
      labelIcon: <FiLinkedin aria-hidden="true" />,
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
            color: "#D4B483",
            fontWeight: 800,
            fontFamily: "'Playfair Display', serif",
            paddingTop: "1.5rem",
          }}
        >
          Let's Connect
        </Typography>
        <SiMinutemailer size={32} color="#fff" />
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
        <Stack
          spacing={2}
          sx={{
            width: { xs: "90%", sm: "85%", md: "450px" },
            maxWidth: "450px",
          }}
        >
          {myInfo.map((item, index) => (
            <Card
              component={motion.div}
              className="group/contact"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : index * 0.1 }}
              key={item.label}
              sx={{
                bgcolor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: reducedMotion ? "none" : "translateY(-2px)",
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
                  px: { xs: 2.5, sm: 3, md: 4 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <span className="flex text-2xl text-[#D4B483] motion-safe:[@media(hover:hover)]:group-hover/contact:animate-contact-icon-pop motion-safe:[@media(hover:hover)]:group-focus-within/contact:animate-contact-icon-pop">
                    {item.labelIcon}
                  </span>
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
            aspectRatio: "1",
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
          {imageState === "loading" && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[linear-gradient(110deg,transparent_25%,#d4b4830c_45%,transparent_65%)] [background-size:220%_100%] text-[#D4B483] motion-safe:animate-contact-image-shimmer"
              role="status"
              aria-label="插圖載入中"
            >
              <motion.div
                animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiMail className="block size-[38px]" aria-hidden="true" />
              </motion.div>
              <span className="text-xs tracking-[0.1em]">載入中</span>
            </div>
          )}
          {imageState === "failed" && <Box role="status" sx={{ py: 8, color: "#D4B483" }}>插圖暫時無法載入</Box>}
          <motion.div
            initial={false}
            animate={{ opacity: imageState === "ready" ? 1 : 0, scale: imageState === "ready" || reducedMotion ? 1 : 0.94 }}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
          >
          <img
            className="h-auto w-full rounded-2xl object-cover md:motion-safe:animate-contact-image-float"
            width={1280}
            height={1280}
            decoding="async"
            src={contactImg}
            alt="Contact"
            onLoad={() => setImageState("ready")}
            onError={(event) => {
              if (event.currentTarget.getAttribute("src") !== originalContactImg) {
                event.currentTarget.src = originalContactImg;
              } else {
                setImageState("failed");
              }
            }}
            aria-hidden={imageState !== "ready"}
          />
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
