import { supabase } from "../lib/supabase";
import type { Milestone } from "../types/data";

// 取得所有experiences
export async function getExperiences(): Promise<Milestone[]> {
  console.log("Fetching experiences from Supabase...");
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("year", { ascending: true })
    .order("month", { ascending: true });

  if (error) {
    console.error("Supabase error fetching experiences:", error);
    return [];
  }

  console.log("Successfully fetched experiences:", data);
  return (data || []) as Milestone[];
}
