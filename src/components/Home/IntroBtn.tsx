import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const IntroBtn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2.2, // 在標題完成後出現
        duration: 1,
        ease: "easeOut",
      }}
    >
      <Link to="/homepage">
        <Button
          variant="contained"
          sx={{
            color: "#67432e",
            textUnderlineOffset: "2px",
            textDecoration: "underline",
            backgroundColor: "#fff",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: "12px",
            // 組合陰影：原有的深陰影 + 右側偏移陰影
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.3), 5px 0 15px -3px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              textDecoration: "underline", // 確保 hover 時底線還在
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.4), 8px 0 20px -3px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          Into the Web
        </Button>
      </Link>
    </motion.div>
  );
};

export default IntroBtn;
