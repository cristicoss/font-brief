import { supabase } from "./apiFonts.js";
const fetchAll = async function () {
  try {
    const [fonts, promotedFonts, headerImg] = await Promise.all([
      supabase.from("fonts").select("*"),
      supabase.from("promoted_fonts").select("*"),
      supabase
        .from("header-imgs")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(1),
    ]);

    if (!fonts.data || !promotedFonts.data || !headerImg.data) {
      throw new Error(`HTTP error! Status: ${error.status}`);
    }

    let promo1;
    let promo2;
    let new1;
    let new2;
    fonts.data.forEach((font) => {
      if (font.id === promotedFonts.data[0].id) {
        promo1 = font;
      }
      if (font.id === promotedFonts.data[1].id) {
        promo2 = font;
      }
      if (font.id === promotedFonts.data[2].id) {
        new1 = font;
      }
      if (font.id === promotedFonts.data[3].id) {
        new2 = font;
      }
    });

    const filteredFonts = fonts.data.filter(
      (font) => font.id !== promo1.id && font.id !== promo2.id
    );

    const sortedFonts = filteredFonts.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    const firstSixFonts = sortedFonts.slice(0, 4);
    firstSixFonts.forEach((font) => {
      font.new = true;
    });
    console.log(firstSixFonts);

    promo1.promoted = true;
    promo2.promoted = true;
    new1.new = true;
    new2.new = true;
    firstSixFonts.splice(2, 0, promo1, promo2);

    const restOfFonts = sortedFonts.slice(4);
    restOfFonts.sort(() => Math.random() - 0.5);

    const allFonts = firstSixFonts.concat(restOfFonts);

    return [allFonts, promo1, promo2, new1, new2, headerImg.data[0]];
  } catch (error) {
    console.error("Failed to fetch fonts:", error);
    return []; // Return an empty array or suitable default in case of failure
  }
};

export default fetchAll;
