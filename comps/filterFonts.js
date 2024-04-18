import { listTop } from "../globalVars.js";

export default function _filterFonts(urlParams) {
  let expr = urlParams.get("expr")
    ? urlParams.get("expr").match(/.{1,2}/g)
    : ["1a", "1i", "1o", "1m", "1j"];

  let elgnt = urlParams.get("elgnt")
    ? urlParams.get("elgnt").match(/.{1,2}/g)
    : ["2a", "2i", "2o", "2m", "2j"];

  let frndl = urlParams.get("frndl")
    ? urlParams.get("frndl").match(/.{1,2}/g)
    : ["3a", "3i", "3o", "3m", "3j"];

  let orgnc = urlParams.get("orgnc")
    ? urlParams.get("orgnc").match(/.{1,2}/g)
    : ["4a", "4i", "4o", "4m", "4j"];

  let prgrssv = urlParams.get("prgrssv")
    ? urlParams.get("prgrssv").match(/.{1,2}/g)
    : ["5a", "5i", "5o", "5m", "5j"];

  let drng = urlParams.get("drng")
    ? urlParams.get("drng").match(/.{1,2}/g)
    : ["6a", "6i", "6o", "6m", "6j"];

  let dscrt = urlParams.get("dscrt")
    ? urlParams.get("dscrt").match(/.{1,2}/g)
    : ["7a", "7i", "7o", "7m", "7j"];

  let wrm = urlParams.get("wrm")
    ? urlParams.get("wrm").match(/.{1,2}/g)
    : ["8a", "8i", "8o", "8m", "8j"];

  let sans = urlParams.get("sans");
  let wrkhrs = urlParams.get("wrkhrs");
  wrkhrs ? (wrkhrs = wrkhrs[0].toUpperCase() + wrkhrs.slice(1)) : "";
  let free = urlParams.get("free");

  let pag = urlParams.get("pag") ? +urlParams.get("pag") : 1;

  const filteredFonts = this.store.sortedFonts.filter(
    (font) =>
      elgnt.some((substring) => font.elegant.includes(substring)) &&
      expr.some((substring) => font.expressive.includes(substring)) &&
      frndl.some((substring) => font.friendly.includes(substring)) &&
      orgnc.some((substring) => font.organic.includes(substring)) &&
      prgrssv.some((substring) => font.progressive.includes(substring)) &&
      drng.some((substring) => font.daring.includes(substring)) &&
      dscrt.some((substring) => font.discreet.includes(substring)) &&
      wrm.some((substring) => font.warm.includes(substring)) &&
      (!sans || font.sans?.includes(sans)) &&
      (!wrkhrs || font.workhorse?.includes(wrkhrs)) &&
      (!free || font.free?.includes(free))
  );

  this.store.counter = filteredFonts.length;
  this._paginate(filteredFonts, pag);
  this._pagBtnHandler(filteredFonts, pag);

  if (urlParams.size > 0)
    listTop.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}

/*
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

  console.log(str);
  console.log(expr);

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

  // this.store.sortedFonts.forEach((font) => {
  //   console.log(font.expressive);
  // });
  const filteredFonts = this.store.sortedFonts.filter(
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
*/
