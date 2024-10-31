import { supabase } from "../apiFonts.js";

async function changeAnyText(table, column, content, currFontName) {
  // Insert the name, foundry, and image URL into the Supabase table
  const { data: insertData, error: insertError } = await supabase
    .from(`${table}`)
    .update({
      [column]: content,
    })
    .eq("Slug", currFontName);

  if (insertError) {
    console.error("Error inserting data:", insertError);
  } else {
    console.log("Data inserted successfully:", insertData);
  }
}

export default changeAnyText;
