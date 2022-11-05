import Sortable from "sortablejs";
var sortable = document.querySelector(".sortable");

Sortable.create(sortable, {
  handle: ".sortable-title",
  animation: 300,
});
