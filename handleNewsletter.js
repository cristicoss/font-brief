"use strict";

export default function _newsletter() {
  setTimeout(() => {
    document
      .querySelector(".newsletter_wrapper-fixed")
      .classList.remove("active");
  }, 60000);
}
