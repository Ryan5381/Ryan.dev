import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

const IntroPage = lazy(() => import("@views/IntroPage"));
const Homepage = lazy(() => import("@views/Homepage"));
const AboutPage = lazy(() => import("@views/AboutPage"));
const ContactPage = lazy(() => import("@views/ContactPage"));
const ProjectPage = lazy(() => import("@views/ProjectPage"));

function App() {
  return (
    <HashRouter>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              bgcolor: "#5d584d",
            }}
          >
            <CircularProgress aria-label="頁面載入中" sx={{ color: "#D4B483" }} />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
