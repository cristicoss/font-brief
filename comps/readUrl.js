export default function _readUrl() {
  const urlParams = new URLSearchParams(window.location.search);

  this._filterFonts(urlParams);
  this._updateFilters(urlParams);
}
