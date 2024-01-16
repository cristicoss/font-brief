import { listTop } from "../globalVars.js";

export default function _filterFonts(str) {
  function getCombinations(regex) {
    return (str) => {
      const matches = str.match(regex) || [];
      return matches.map((match) => match[0] + match[1]).join("");
    };
  }

  ///// Get filters from url/////
  const expr =
    (getCombinations(/1[a-z]/g)(str)
      ? getCombinations(/1[a-z]/g)(str)
      : "1a1i1o1m1j"
    ).match(/.{1,2}/g) || [];

  const elgnt =
    (getCombinations(/2[a-z]/g)(str)
      ? getCombinations(/2[a-z]/g)(str)
      : "2a2i2o2m2j"
    ).match(/.{1,2}/g) || [];

  const frndl =
    (getCombinations(/3[a-z]/g)(str)
      ? getCombinations(/3[a-z]/g)(str)
      : "3a3i3o3m3j"
    ).match(/.{1,2}/g) || [];

  const orgnc =
    (getCombinations(/4[a-z]/g)(str)
      ? getCombinations(/4[a-z]/g)(str)
      : "4a4i4o4m4j"
    ).match(/.{1,2}/g) || [];

  const prgrssv =
    (getCombinations(/5[a-z]/g)(str)
      ? getCombinations(/5[a-z]/g)(str)
      : "5a5i5o5m5j"
    ).match(/.{1,2}/g) || [];

  const drng =
    (getCombinations(/6[a-z]/g)(str)
      ? getCombinations(/6[a-z]/g)(str)
      : "6a6i6o6m6j"
    ).match(/.{1,2}/g) || [];

  const dscrt =
    (getCombinations(/7[a-z]/g)(str)
      ? getCombinations(/7[a-z]/g)(str)
      : "7a7i7o7m7j"
    ).match(/.{1,2}/g) || [];

  const wrm =
    (getCombinations(/8[a-z]/g)(str)
      ? getCombinations(/8[a-z]/g)(str)
      : "8a8i8o8m8j"
    ).match(/.{1,2}/g) || [];

  // this.store.loadedFonts.forEach((font) => {
  //   console.log(font.expressive);
  // });
  const filteredFonts = this.store.loadedFonts.filter(
    (font) =>
      elgnt.some((substring) => font.elegant.includes(substring)) &&
      expr.some((substring) => font.expressive.includes(substring)) &&
      frndl.some((substring) => font.friendly.includes(substring)) &&
      orgnc.some((substring) => font.organic.includes(substring)) &&
      prgrssv.some((substring) => font.progressive.includes(substring)) &&
      drng.some((substring) => font.daring.includes(substring)) &&
      dscrt.some((substring) => font.discreet.includes(substring)) &&
      wrm.some((substring) => font.warm.includes(substring))
  );

  this._renderFonts(filteredFonts);
  this._paginate(filteredFonts);
  this._pagBtnHandler(filteredFonts);

  listTop.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
