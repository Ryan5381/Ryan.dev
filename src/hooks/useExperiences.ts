import { useQuery } from "@tanstack/react-query";
import type { Milestone } from "../types/data";
import { getExperiences } from "../services/experienceService";

// 獲取所有經歷數據
export const useExperiences = () => {
  return useQuery<Milestone[]>({
    queryKey: ["experiences"],
    queryFn: getExperiences,
    staleTime: 1000 * 60 * 60, // 一小時內不需要重新抓取
  });
};
