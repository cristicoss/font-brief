import { supabase } from "../apiFonts.js";

async function createFont(store, name) {
  if (name !== "") {
    console.log(name);

    // Insert the name, foundry, and image URL into the Supabase table
    const { data: insertData, error: insertError } = await supabase
      .from("fonts-details")
      .insert([{ name: name.toLowerCase() }]);

    if (insertError) {
      console.error("Error inserting data:", insertError);
      return;
    }

    console.log("Data inserted successfully:");
    window.location.href = `https://fontbrief-v2.webflow.io/jurizare?name=${name}`;
  } else {
    document.querySelector(".add-font_input").placeholder =
      "Boss, ai uitat numele!";
  }
}

export default createFont;
