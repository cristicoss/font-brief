import { listTop } from "../globalVars.js";
// import { _paginate, _pagBtnHandler } from "./pagHandler.js";
import { store } from "../store.js";
import { _renderFonts } from "./handleFontList.js";

export default function _filterFonts(urlParams) {
  let expr = urlParams.get("expr") ? urlParams.get("expr").split("") : [1, 5];
  let elgnt = urlParams.get("elgnt")
    ? urlParams.get("elgnt").split("")
    : [1, 5];
  let frndl = urlParams.get("frndl")
    ? urlParams.get("frndl").split("")
    : [1, 5];
  let orgnc = urlParams.get("orgnc")
    ? urlParams.get("orgnc").split("")
    : [1, 5];
  let prgrssv = urlParams.get("prgrssv")
    ? urlParams.get("prgrssv").split("")
    : [1, 5];
  let drng = urlParams.get("drng") ? urlParams.get("drng").split("") : [1, 5];
  let dscrt = urlParams.get("dscrt")
    ? urlParams.get("dscrt").split("")
    : [1, 5];
  let wrm = urlParams.get("wrm") ? urlParams.get("wrm").split("") : [1, 5];

  let sans = urlParams.get("sans");
  let wrkhrs = urlParams.get("wrkhrs");
  wrkhrs ? (wrkhrs = wrkhrs[0].toUpperCase() + wrkhrs.slice(1)) : "";
  let free = urlParams.get("free");

  let search = urlParams.get("search")
    ? urlParams.get("search").toLowerCase()
    : "";

  let pag = urlParams.get("pag") ? +urlParams.get("pag") : 1;
  if (store.sortedFonts) console.log(store.sortedFonts[0], expr);
  if (!store.sortedFonts) console.log(store.sortedFonts[0], expr);
  const filteredFonts = store.sortedFonts.filter(
    (font) =>
      font.expr &&
      +font.expr[1] >= expr[0] &&
      +font.expr[0] <= expr[1] &&
      font.elgnt &&
      +font.elgnt[1] >= elgnt[0] &&
      +font.elgnt[0] <= elgnt[1] &&
      font.frndl &&
      +font.frndl[1] >= frndl[0] &&
      +font.frndl[0] <= frndl[1] &&
      font.orgnc &&
      +font.orgnc[1] >= orgnc[0] &&
      +font.orgnc[0] <= orgnc[1] &&
      font.prgrssv &&
      +font.prgrssv[1] >= prgrssv[0] &&
      +font.prgrssv[0] <= prgrssv[1] &&
      font.drng &&
      +font.drng[1] >= drng[0] &&
      +font.drng[0] <= drng[1] &&
      font.dscrt &&
      +font.dscrt[1] >= dscrt[0] &&
      +font.dscrt[0] <= dscrt[1] &&
      font.wrm &&
      +font.wrm[1] >= wrm[0] &&
      +font.wrm[0] <= wrm[1] &&
      (!sans || font.sans?.includes(sans)) &&
      (!wrkhrs || font.wrkhrs?.includes(wrkhrs)) &&
      (!free || font.free?.includes(free)) &&
      (font.Name.toLowerCase().includes(search) ||
        font.foundry?.toLowerCase().includes(search))
  );
  console.log(filteredFonts);

  store.counter = filteredFonts.length;
  _renderFonts(filteredFonts, 50);
  // _paginate(filteredFonts, pag);
  // _pagBtnHandler(filteredFonts, pag, store);

  // if (urlParams.size > 0)
  //   listTop.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
}
