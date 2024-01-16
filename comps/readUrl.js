export default function _readUrl() {
  const selection = window.location.hash.slice(1);
  if (window.location.hash.slice(1) !== "") this._filterFonts(selection);
  else this._renderFonts(this.store.loadedFonts);
  this._updateFilters(selection.match(/.{1,2}/g));
}
