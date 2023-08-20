//to first load
let cslideIndex = 1;
cshowSlides(cslideIndex);

// arrows to change img
function cplusSlides(n) {
  cshowSlides((cslideIndex += n));
}

function cshowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides"); //get all slides to array slides[]
  if (n > slides.length) {
    cslideIndex = 1;
  }
  if (n < 1) {
    cslideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[cslideIndex - 1].style.display = "block";
}
