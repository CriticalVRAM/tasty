//* Generates the images for the jQuery "slick" plugin. Initiates "slick".
let numberOfImages = 4;
let slick = document.querySelector(".main__slick");
for (let i = 0; i < numberOfImages; i++) {
  let slickImage = createImage(i);
  slick.appendChild(slickImage);
}
function createImage(i) {
  let slickImage = document.createElement("img");
  slickImage.setAttribute("src", `img/slick${i + 1}.jpg`);
  slickImage.classList.add("main__slick-img");
  return slickImage;
}
$(".main__slick").slick({
  arrows: false,
});
///////////////////////////////////////////////////////////////////////////////
//* jQuery Animations
$(document).ready(() => $("#hero-text").fadeIn());
