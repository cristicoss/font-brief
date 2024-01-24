export default function _reset() {
  const url = new URL(window.location.href);
  const baseUrl = url.origin + url.pathname;

  window.history.pushState({}, "", baseUrl);
  this._readUrl();

  for (let i = 0; i <= 8; i++) {
    this.store.clicks[i] = 0;
  }
}
