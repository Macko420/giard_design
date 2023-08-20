document.addEventListener("DOMContentLoaded", function () {
  // wait for the DOM to be loaded
  var grid = document.querySelector(".gridclass"); // select the grid
  var masonry = new Masonry(grid, {
    itemSelector: ".grid-item", // select the items in the grid
    gutter: 40, // set the gutter to 10px
    fitWidth: true, // set the width of the container to fit the screen
  });
});
