import { Box } from "@mui/material";
import Intro from "@components/Intro";
import IntroBtn from "@components/Home/IntroBtn";
import TitleSection from "@components/TitleSection";

const IntroPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8, // 增加間距讓畫面更有呼吸感
      }}
    >
      <Intro />
      <TitleSection />
      <IntroBtn />
    </Box>
  );
};

export default IntroPage;
