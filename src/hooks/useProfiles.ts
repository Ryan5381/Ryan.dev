import { useQuery } from "@tanstack/react-query";
import type { Profile } from "../types/data";
import { getProfile } from "../services/profileService";

export const useProfiles = () => {
  return useQuery<Profile[]>({
    queryKey: ["profiles"],
    queryFn: getProfile,
    staleTime: 1000 * 60 * 60,
  });
};
