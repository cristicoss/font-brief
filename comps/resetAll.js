import { store } from "../store.js";
import _readUrl from "./readUrl.js";

export default function _reset() {
  const url = new URL(window.location.href);
  const baseUrl = url.origin + url.pathname;

  window.history.pushState({}, "", baseUrl);
  _readUrl();
}
