const button = document.getElementById("showMoreButton");
const realizacje = document.getElementById("realizacje");
const buttonText = document.getElementById("buttonText");
const buttonIcon = document.getElementById("buttonIcon");

let expanded = false;

button.addEventListener("click", function () {
  expanded = !expanded;
  if (expanded) {
    realizacje.classList.remove("h-[150vh]");
    realizacje.classList.add("h-auto");
    buttonText.textContent = "Zwiń";
    buttonIcon.style.transform = "rotate(180deg)";
  } else {
    realizacje.classList.add("h-[150vh]");
    realizacje.classList.remove("h-auto");
    buttonText.textContent = "Rozwiń";
    buttonIcon.style.transform = "rotate(0deg)";
  }
});
