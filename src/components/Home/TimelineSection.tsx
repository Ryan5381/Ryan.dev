import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import type { Milestone } from "../../types/data";

const milestones: Milestone[] = [
  {
    year: "2015",
    month: "09",
    title: "大千醫院",
    role: "護理師",
    description: "培養臨床經驗，溝通與應變能力",
    points: ["臨床照護", "急診"],
  },
  {
    year: "2017",
    month: "09",
    title: "長安醫院",
    role: "護理師",
    description: "提供病房照護、術後監護及病歷記錄，協助臨床治療及檢查。",
    points: ["危機處理", "術後監護"],
  },
  {
    year: "2022",
    month: "03",
    title: "清泉醫院",
    role: "護理師",
    description:
      "負責病患日常照護、健康監測，提供專業護理服務，並協助病患家屬了解病情與照護。",
    points: ["溝通協調", "專業照護"],
  },
  {
    year: "2025",
    month: "05",
    title: "橙的電子",
    role: "前端工程師",
    description:
      "負責公司內部系統的前端開發工作，包含日常的維護與功能優化，確保系統在使用上的穩定性與流暢度，同時參與新項目的開發並進行相關技術實作。",
    points: ["React", "TypeScript", "UI/UX"],
  },
];

const TimelineSection = () => {
  return (
    <Box sx={{ py: 10, color: "#fff", background: "transparent" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: "#D4B483",
            mb: 12,
            textAlign: { xs: "center", md: "left" },
            fontWeight: 400,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          From Care to Code
        </Typography>

        <Box sx={{ position: "relative", pl: 4 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: 7,
              top: 0,
              bottom: 0,
              width: "2px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
          {milestones.map((item, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }} // 元件進入使用者的視窗範圍時，會啟動動畫
              viewport={{ once: true, amount: "all" }} // 控制動畫的觸發次數
              transition={{
                duration: 0.8,
                delay: 0.2, // 延遲 0.2 秒再動，增加節奏感
                ease: "easeOut",
              }}
              sx={{ mb: 6, position: "relative" }}
            >
              {/* Marker */}
              <Box
                sx={{
                  position: "absolute",
                  left: -29,
                  top: 8,
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#D4B483",
                  border: "4px solid rgba(255,255,255,0.1)",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#D4B483",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.year}.{item.month}
                </Typography>
                {/* Point Tags */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                  {item.points.map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        px: 1,
                        py: 0.2,
                        fontSize: "0.7rem",
                        borderRadius: "4px",
                        border: "1px solid rgba(212, 180, 131, 0.4)",
                        background: "rgba(212, 180, 131, 0.1)",
                        color: "#D4B483",
                        fontWeight: 500,
                      }}
                    >
                      {point}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" }, // 手機版垂直排列，電腦版並排
                  gap: { xs: 1, md: 5 },
                  alignItems: { xs: "flex-start", md: "center" },
                  p: 1,
                }}
              >
                {/* 公司、角色 */}
                <Box sx={{ minWidth: { md: "250px" } }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {item.title} | {item.role}
                  </Typography>
                </Box>

                {/* 職務描述 */}
                <Box
                  sx={{
                    pl: 2,
                    maxWidth: "700px",
                    borderLeft: "2px solid rgba(212, 180, 131, 0.3)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;
