export default function _reset() {
  const url = new URL(window.location.href);
  url.hash = "";
  history.pushState(null, null, url.toString().replace(/,/g, ""));
  // this._readUrl();
  this._readUrl();
  this.hashFragment = [];
}
