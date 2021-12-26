const openIcon = document.getElementById("open__icon");

function showHidde() {
   const textContainer = document.getElementById("text__container");
   textContainer.classList.toggle("toggle");
}

openIcon.addEventListener("click", showHidde);
