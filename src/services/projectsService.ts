import { supabase } from "@lib/supabase";
import type { Project } from "@type/data";

export async function getProjects(): Promise<Project[]> {
  console.log("fetching projects from supabase...");

  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error("supabase error fetching projects:", error);
    return [];
  }

  console.log("successfully fetched projects:", data);
  return (data || []) as Project[];
}
