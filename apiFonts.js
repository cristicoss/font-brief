// Immediately-invoked function expression to fetch data
const fetchedFonts = (async () => {
  try {
    const response = await fetch(
      "https://yununbjokononoevrwmu.supabase.co/rest/v1/fonts?select=*",
      {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bnVuYmpva29ub25vZXZyd211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0NDU3ODAsImV4cCI6MTk5OTAyMTc4MH0.FYWysDGuFY0-dehJD3aBYEbPLjWOcfzTC3yz0SrW-rE",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bnVuYmpva29ub25vZXZyd211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0NDU3ODAsImV4cCI6MTk5OTAyMTc4MH0.FYWysDGuFY0-dehJD3aBYEbPLjWOcfzTC3yz0SrW-rE",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch fonts:", error);
    return []; // Return an empty array or suitable default in case of failure
  }
})();

export default fetchedFonts;
