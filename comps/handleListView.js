import { list, gridBtn, listBtn, columnsBtn } from "../globalVars.js";
// let store.itemClass = "list";

export function _handleListView(store) {
  const secondThis = this;

  const changeView = function () {
    secondThis._readUrl();
  };

  gridBtn.addEventListener("click", function () {
    gridBtn.classList.add("clicked");
    columnsBtn.classList.remove("clicked");
    listBtn.classList.remove("clicked");
    list.classList.remove("columns");
    list.classList.remove("list");
    list.classList.add("grid");
    changeView();
    store.itemFlex = "grid";
  });

  columnsBtn.addEventListener("click", function () {
    columnsBtn.classList.add("clicked");
    gridBtn.classList.remove("clicked");
    listBtn.classList.remove("clicked");
    list.classList.remove("grid");
    list.classList.add("columns");
    changeView();
    store.itemFlex = "columns";
  });

  listBtn.addEventListener("click", function () {
    listBtn.classList.add("clicked");
    gridBtn.classList.remove("clicked");
    columnsBtn.classList.remove("clicked");
    list.classList.remove("columns");
    list.classList.remove("grid");
    changeView();
    store.itemFlex = "list";
  });
}

// export { viewList };
