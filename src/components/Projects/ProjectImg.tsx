import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import placeholderImg from "@assets/placeholder.png";

interface ProjectImgProps {
  src?: string | null;
  alt?: string;
}

const ProjectImg = ({ src, alt = "Project Image" }: ProjectImgProps) => {
  const reducedMotion = useReducedMotion();
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={reducedMotion ? undefined : {
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "250px",
        aspectRatio: "16 / 10",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
        perspective: "1000px",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={src || placeholderImg}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={(event) => {
          const image = event.currentTarget;
          if (image.getAttribute("src") !== placeholderImg) {
            image.src = placeholderImg;
          }
        }}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
            "&:hover": {
            transform: "scale(1.1)",
            },
          },
        }}
      />
    </Box>
  );
};

export default ProjectImg;
