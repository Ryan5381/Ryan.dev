import { Box } from "@mui/material";
import Navbar from "@components/Navbar";
import ProjectContent from "@components/Projects/ProjectContent";

const ProjectPage = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(170deg, #878274 0%, #24221a 100%)",
        minHeight: "100vh",
        pt: { xs: 10, md: 15 },
      }}
    >
      <Navbar />
      <ProjectContent />
    </Box>
  );
};

export default ProjectPage;
