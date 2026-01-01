import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { BsCodeSlash } from "react-icons/bs";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(218, 204, 183, 0.7)", // 半透明背景
        backdropFilter: "blur(12px)", // 毛玻璃
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", py: 0.5 }}
        >
          {/* 左側logo、標題 */}
          <Box className="flex items-center gap-2 group cursor-pointer">
            <BsCodeSlash className="text-[#3C474F] text-3xl transition-transform group-hover:rotate-12" />
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 800,
                fontFamily: "monospace",
                color: "#3C474F",
                letterSpacing: "-0.05em",
                display: "flex",
                alignItems: "center",
              }}
            >
              Ryan<span className="text-amber-700">.</span>Dev
            </Typography>
          </Box>

          <Box className="flex items-center gap-3">
            {[
              { label: "關於我", id: "about" },
              { label: "作品集", id: "projects" },
              { label: "聯絡我", id: "contact" },
              { label: "後臺管理", id: "admin" },
            ].map((item) => (
              <Button
                key={item.id}
                sx={{
                  backgroundColor: "#fdfcfb",
                  color: "#55534a",
                  borderRadius: "8px",
                  px: 2.5,
                  py: 0.8,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                  "&:hover": {
                    backgroundColor: "#fff",
                    transform: "translateY(-1px)",
                    boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                    color: "#333",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
