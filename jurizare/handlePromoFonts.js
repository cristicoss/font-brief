import { supabase } from "../apiFonts.js";
import { store } from "../store.js";

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

const listenSupaPromoChanges = async function (field) {
  const handleChangePromo = (payload) => {
    console.log("Change received!", payload, field);
    store[field] = store.sortedFonts.find((font) =>
      font.Slug.includes(payload.new.Name)
    );
  };

  // Listen to inserts
  supabase
    .channel("promoted")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "promoted" },
      handleChangePromo
    )
    .on(
      "postgres_changes",
      { event: "DELETE", schema: "public", table: "promoted" },
      handleChangePromo
    )
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "promoted" },
      handleChangePromo
    )
    .subscribe();
};

const removePlaceholder = function () {
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

const searchPromoFonts = function (field, event) {
  console.log(store.promoFontList);
  const content = event.target.innerText.trim();
  store.promoFontListArray = store.allFonts
    .map((font) => font.Slug)
    .filter((font) => font.toLowerCase().includes(content.toLowerCase()));
};

const setPromoFont = function (fontName) {
  const popUp = document.querySelector(`.form-promo_container`);

  changePromoFonts(store.promoName, fontName);
  listenSupaPromoChanges(store.promoName);
  popUp.classList.add("hidden");
};

const _pausePromoSection = async function () {
  const observedSection = document.querySelector("#highlights");
  const promoRow = document.querySelectorAll(".promo-font_wrapper");
  const promoRow2 = document.querySelectorAll(".promo-font-2_wrapper");
  const sponsorRow = document.querySelectorAll(".sponsor-stripe_text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          promoRow.forEach((row) => {
            row.classList.remove("paused");
          });
          promoRow2.forEach((row) => {
            row.classList.remove("paused");
          });
          sponsorRow.forEach((row) => {
            row.classList.remove("paused");
          });
        } else {
          promoRow.forEach((row) => {
            row.classList.add("paused");
          });
          promoRow2.forEach((row) => {
            row.classList.add("paused");
          });
          sponsorRow.forEach((row) => {
            row.classList.add("paused");
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(observedSection);
};

export {
  changePromoFonts,
  removePlaceholder,
  searchPromoFonts,
  setPromoFont,
  listenSupaPromoChanges,
  _pausePromoSection,
};
