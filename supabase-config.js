
/* TouristTechnical Supabase configuration.
   Never put an sb_secret_ key here. */

window.TOURISTTECHNICAL_SUPABASE_URL =
  "https://oghcvfqkfhdvnmzlvydt.supabase.co";

window.TOURISTTECHNICAL_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_rS0dOWiYK_j6jcS9vpNp0Q_A2I2VoYz";

if (
  window.supabase &&
  window.TOURISTTECHNICAL_SUPABASE_URL &&
  window.TOURISTTECHNICAL_SUPABASE_PUBLISHABLE_KEY &&
  !window.TOURISTTECHNICAL_SUPABASE_PUBLISHABLE_KEY.includes("PASTE_YOUR")
) {
  window.supabaseClient = window.supabase.createClient(
    window.TOURISTTECHNICAL_SUPABASE_URL,
    window.TOURISTTECHNICAL_SUPABASE_PUBLISHABLE_KEY
  );
} else {
  window.supabaseClient = null;
}

