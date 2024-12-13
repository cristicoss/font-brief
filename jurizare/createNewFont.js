import { supabase } from "../apiFonts.js";

async function createFont(store, name) {
  if (name !== "") {
    console.log(name);

    //Verify if there is already a font with the same name
    const { data: existingRows, error: selectError } = await supabase
      .from("fonts")
      .select("*")
      .eq("Slug", name.toLowerCase());

    if (selectError) {
      document.querySelector(".add-font_input").placeholder =
        "Boss, fontul exista!";
      return;
    }

    // Insert the name, foundry, and image URL into the Supabase table
    if (existingRows.length === 0) {
      const { data: insertData2, error: insertError2 } = await supabase
        .from("fonts")
        .insert([
          {
            Slug: name.toLowerCase(),
            Name: name,
            font_name:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/Title.svg?t=2024-10-29T16%3A48%3A29.711Z",
            Pangram:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/Pangram.svg?t=2024-10-29T16%3A48%3A40.255Z",
            Paragraph:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/Paragraph.svg?t=2024-10-29T16%3A48%3A50.002Z",
            foundry: "Mystic Glyphs Collective",
            weights: "1 big ass weight",
            Description:
              "Currently manifesting its final form, this font awaits true details. An enigmatic placeholder, here to hint at elegance and style… or something like that.",
          },
        ]);

      if (insertError2) {
        console.error("Error inserting data:", insertError);
        return;
      }
    }

    //Verify if there is already a font with the same name
    const { data: existingRows2, error: selectError2 } = await supabase
      .from("fonts-details")
      .select("*")
      .eq("Slug", name.toLowerCase());

    if (selectError2) {
      document.querySelector(".add-font_input").placeholder =
        "Boss, fontul exista!";
      return;
    }

    // Insert the name, foundry, and image URL into the Supabase table
    if (existingRows2.length === 0) {
      const { data: insertData, error: insertError } = await supabase
        .from("fonts-details")
        .insert([
          {
            Slug: name.toLowerCase(),
            detail1:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/detail1.svg?t=2024-10-29T16%3A57%3A20.809Z",
            detail2:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/detail2.svg?t=2024-10-29T16%3A57%3A31.915Z",
            detail3:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/detail3.svg?t=2024-10-29T16%3A57%3A40.393Z",
            detail4:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/detail4.svg?t=2024-10-29T16%3A57%3A50.045Z",
            detail5:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/detail5.svg?t=2024-10-29T16%3A57%3A58.719Z",
            detail6:
              "https://yununbjokononoevrwmu.supabase.co/storage/v1/object/public/font-imgs/placeholders/detail6.svg?t=2024-10-29T16%3A58%3A07.282Z",
          },
        ]);

      if (insertError) {
        console.error("Error inserting data:", insertError);
        return;
      }
    }

    console.log("Data inserted successfully:");
    window.location.href = `https://fontbrief-v2.webflow.io/jurizare?name=${name}`;
  } else {
    document.querySelector(".add-font_input").placeholder =
      "Boss, ai uitat numele!";
  }
}

const removePlaceholderNewFont = function () {
  const promoFonts = document.querySelectorAll(".promo-font_wrapper");
  const promoFonts2 = document.querySelectorAll(".promo-font-2_wrapper");
  const placeHolder = document.querySelectorAll(".placeholder_container");

  placeHolder.forEach((el) => {
    el.classList.add("loaded");
  });

  const allPromoFonts = [...promoFonts, ...promoFonts2];
  allPromoFonts.forEach((el) => {
    el.classList.add("active");
  });
};

export { createFont, removePlaceholderNewFont };
