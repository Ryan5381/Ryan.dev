import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const IntroPage = lazy(() => import("@views/IntroPage"));
const Homepage = lazy(() => import("@views/Homepage"));
const AboutPage = lazy(() => import("@views/AboutPage"));
const ContactPage = lazy(() => import("@views/ContactPage"));
const ProjectPage = lazy(() => import("@views/ProjectPage"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback="Loading...">
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
