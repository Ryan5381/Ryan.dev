import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import LoadingGif from "@assets/loading.gif";

// const IntroPage = lazy(() => import("@views/IntroPage"));
const IntroPage = lazy(
  () =>
    new Promise((resolve) => {
      // 強制延遲 3 秒才載入組件
      setTimeout(() => resolve(import("@views/IntroPage") as any), 3000);
    })
);
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
            <img
              src={LoadingGif}
              alt="Loading"
              style={{ width: "400px", height: "auto" }}
            />
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
