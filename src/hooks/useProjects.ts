import { useQuery } from "@tanstack/react-query";
import type { Project } from "@type/data";
import { getProjects } from "@services/projectsService";

export const useProjects = () => {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 1000 * 60 * 60,
  });
};
