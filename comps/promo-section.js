"use strict";

export default class Promo {
  constructor() {
    // this.store = store;
    this.handleIncrement();
    this.handleDecrement();
    // console.log(this.store.count);
  }

  handleIncrement(store) {
    if (store) store.count += 1;
    // console.log(store.count);
  }

  handleDecrement(store) {
    if (store) store.count -= 1;
    // console.log(this.store.count);
  }

  renderFonts(store) {
    store.fonts = fonts.slice(0, 5);
  }
}
