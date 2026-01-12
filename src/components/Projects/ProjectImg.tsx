import { Box } from "@mui/material";
import { motion } from "framer-motion";
import placeholderImg from "@assets/placeholder.png";

const ProjectImg = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
        perspective: "1000px",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={placeholderImg}
        alt="Project Image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
    </Box>
  );
};

export default ProjectImg;
