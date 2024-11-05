import { supabase } from "../apiFonts.js";

async function changePromoFonts(pos, name) {
  // Insert the name, foundry, and image URL into the Supabase table
  const { data: insertData, error: insertError } = await supabase
    .from(`promoted`)
    .update({
      Name: name,
    })
    .eq("pos", pos);

  if (insertError) {
    console.error("Error inserting data:", insertError);
  } else {
    console.log("Data inserted successfully:", insertData);
  }
}

export default changePromoFonts;
