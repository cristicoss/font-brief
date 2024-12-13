import _updateFilters from "./updateFilterBtns.js";
import _filterFonts from "./filterFonts.js";

export default function _readUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  _updateFilters(urlParams);
  if (urlParams.has("name")) return;
  _filterFonts(urlParams);
}
