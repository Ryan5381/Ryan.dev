import {
  Box,
  Typography,
  Container,
  Divider,
  Button,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import { useProjects } from "@hooks/useProjects";
import ProjectImg from "./ProjectImg";

const ProjectContent = () => {
  const { data: projects } = useProjects();
  console.log("projects", projects);
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {projects?.map((project) => (
        <Box
          // key={project.id}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            gap: { xs: 4, md: 4 },
            mb: 8,
            minHeight: "300px",
          }}
        >
          {/* Project Image Section */}
          <Box
            sx={{
              flex: { md: "0 0 400px" },
              display: "flex", // 確保子元件填滿
              minHeight: { xs: "250px", md: "auto" },
            }}
          >
            <ProjectImg src={project.image_url} alt={project.title} />
          </Box>

          {/* Project Details Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: 4,
              py: 2,
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            {/* Label & Title Block */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#D4B483",
                  letterSpacing: "0.4em",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  display: "block",
                  mb: 0.5,
                }}
              >
                PROJECT NAME
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                {project.title}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: "rgba(212, 180, 131, 0.15)", mb: 2 }} />

            {/* Label & Description Block */}
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "#D4B483",
                  letterSpacing: "0.4em",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  display: "block",
                  mb: 1,
                }}
              >
                DESCRIPTION
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 3,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </Typography>

                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ alignSelf: "flex-end" }}
                >
                  <Link
                    href={project.github_url}
                    target="_blank"
                    rel="noopener"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        height: "32px",
                        bgcolor: "#D4B483",
                        color: "#3C474F",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        borderRadius: "8px",
                        px: 2,
                        textTransform: "none",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          bgcolor: "#C4A473",
                        },
                      }}
                    >
                      查看更多...
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default ProjectContent;
