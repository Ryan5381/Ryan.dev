import { supabase } from "../lib/supabase";
import type { Profile } from "../types/data";

export async function getProfile(): Promise<Profile[]> {
  console.log("fetching profiles from Supabase...");

  const { data, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.log("Supabase error fetching profile:", error);
    return [];
  }

  console.log("Successfully fetched profile:", data);
  return (data || []) as Profile[];
}
