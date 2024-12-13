const { createClient } = window.supabase;

// Initialize Supabase client
const supabaseUrl = "https://yununbjokononoevrwmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bnVuYmpva29ub25vZXZyd211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0NDU3ODAsImV4cCI6MTk5OTAyMTc4MH0.FYWysDGuFY0-dehJD3aBYEbPLjWOcfzTC3yz0SrW-rE";
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchedFonts = (async () => {
  try {
    const { data, error } = await supabase.from("fonts").select("*");

    if (!data) {
      throw new Error(`HTTP error! Status: ${error.status}`);
    }

    return await data;
  } catch (error) {
    console.error("Failed to fetch fonts:", error);
    return []; // Return an empty array or suitable default in case of failure
  }
})();

const fetchedPromotedFonts = (async () => {
  try {
    const { data, error } = await supabase.from("promoted_fonts").select("*");

    if (!data) {
      throw new Error(`HTTP error! Status: ${error.status}`);
    }

    return await data;
  } catch (error) {
    console.error("Failed to fetch fonts:", error);
    return []; // Return an empty array or suitable default in case of failure
  }
})();

const fetchedHeaderImg = (async () => {
  try {
    const { data, error } = await supabase.from("promoted_fonts").select("*");

    if (!data) {
      throw new Error(`HTTP error! Status: ${error.status}`);
    }

    return await data;
  } catch (error) {
    console.error("Failed to fetch fonts:", error);
    return []; // Return an empty array or suitable default in case of failure
  }
})();

export { fetchedFonts, fetchedPromotedFonts, fetchedHeaderImg, supabase };
