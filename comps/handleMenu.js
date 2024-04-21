import { burgerMenu, filtersContainer } from "../globalVars";

export function _handleMenu() {
  burgerMenu.addEventListener("click", function () {
    // burgerMenu.classList.toggle("clicked");
    filtersContainer.classList.toggle("active");
  });
}
