// Immediately-invoked function expression to fetch data

// import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";
console.log(window.supabase); // This should print the Supabase object to the console

// Or, for CDN (global `window.supabase`):
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

/*
const fetchedFont = (async () => {
  try {
    const { data, error } = await supabase
      .from("fonts")
      .select("*")
      .eq("Slug", lastSegment);

    if (error) throw error;

    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Failed to fetch font:", error);
    return null; // Return an empty array or suitable default in case of failure
  }
})();

const fetchedImgDetails = (async () => {
  try {
    const { data, error } = await supabase
      .from("fonts-details")
      .select("*")
      .eq("name", lastSegment);

    if (error) throw error;

    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Failed to fetch font:", error);
    return null; // Return an empty array or suitable default in case of failure
  }
})();
*/

// export default fetchedFonts;
export { fetchedFonts, fetchedPromotedFonts, fetchedHeaderImg, supabase };
