import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom"; // 新增 useLocation
import LogoIcon from "@assets/logo.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // 獲取當前路徑

  // 導覽清單
  const navItems = [
    { label: "關於我", id: "about", path: "/about" },
    { label: "作品集", id: "projects", path: "/projects" },
    { label: "聯絡我", id: "contact", path: "/contact" },
    { label: "後臺管理", id: "admin", path: "/admin" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // 手機版抽屜內容
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        bgcolor: "#666",
        color: "#ececec",
        pt: 4,
      }}
    >
      <Box className="flex flex-col items-center gap-2 mb-6">
        <img src={LogoIcon} alt="Logo" className="w-12 h-12" />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            fontFamily: "monospace",
            color: "#ececec",
            letterSpacing: "-0.05em",
          }}
        >
          Ryan<span className="text-amber-700">.</span>Dev
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  textAlign: "center",
                  py: 2,
                  bgcolor: active ? "rgba(255, 255, 255, 0.1)" : "transparent", // 啟用中背景
                  borderLeft: active
                    ? "4px solid #D4B483"
                    : "4px solid transparent", // 左側導引條
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontWeight: active ? 800 : 600, // 啟用中加粗
                      fontSize: "1.1rem",
                      color: active ? "#D4B483" : "inherit", // 啟用中顏色
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

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
          <Link to="/">
            <Box className="flex items-center gap-2 group cursor-pointer">
              <img
                src={LogoIcon}
                alt="Logo"
                className="w-10 h-10 text-[#3C474F] text-3xl transition-transform group-hover:rotate-18"
              />
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
                  fontSize: { xs: "1.5rem", md: "2.125rem" },
                }}
              >
                Ryan<span className="text-amber-700">.</span>Dev
              </Typography>
            </Box>
          </Link>

          {/* 手機版漢堡按鈕 */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "#3C474F" }}
          >
            <HiMenuAlt3 size={32} />
          </IconButton>

          {/* 電腦版選單 */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.id} to={item.path}>
                  <Button
                    sx={{
                      backgroundColor: active ? "#55534a" : "#fdfcfb", // 啟用中深色背景
                      color: active ? "#fff" : "#55534a", // 啟用中文字反白
                      borderRadius: "8px",
                      px: 2.5,
                      py: 0.8,
                      fontSize: "0.85rem",
                      fontWeight: active ? 800 : 600,
                      transition: "all 0.2s ease",
                      boxShadow: active
                        ? "inset 2px 2px 5px rgba(0,0,0,0.3)" // 啟用中內陰影
                        : "3px 3px 4px rgba(0,0,0,0.6)",
                      border: active ? "1px solid #D4B483" : "none", // 啟用中邊框
                      "&:hover": {
                        backgroundColor: active ? "#444" : "#fff",
                        transform: "translateY(-1px)",
                        boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                        color: active ? "#fff" : "#333",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </Container>

      {/* 手機版 Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
